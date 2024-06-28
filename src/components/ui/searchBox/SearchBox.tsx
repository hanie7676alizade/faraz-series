import React, { useState, useEffect, useRef } from "react";
// import { debounce } from "lodash";
import style from "./searchBox.module.scss";
import { Icon, IconNameEnum } from "../icon";
import { Button, ButtonVariant } from "../button";

interface SearchBoxProps {
  onSearch: (searchedText?: string) => Promise<boolean>;
}

export const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [buttonState, setButtonState] = useState<
    "loading" | "disable" | undefined
  >("disable");

  const searchBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getSearchHistory();
  }, []);

  const getSearchHistory = () => {
    const searchHistory = localStorage.getItem("searchHistory");
    if (searchHistory) {
      const historyItems: string[] = JSON.parse(searchHistory);
      setSuggestions([...historyItems].slice(-5));
    }
  };
  const addToSearchHistory = async (text: string) => {
    let newSearchHistory: string[] = [];
    console.log({ newSearchHistory, suggestions }, "SSSSS");
    newSearchHistory = suggestions.filter((item) => item !== text);
    newSearchHistory = [...newSearchHistory, text].slice(-5);
    console.log(suggestions, newSearchHistory, "SSSSS TT");

    localStorage.setItem("searchHistory", JSON.stringify(newSearchHistory));
    setSuggestions(newSearchHistory);
  };

  const handleSuggestionClick = (item: string) => {
    handleInputChange(item);
    setIsFocused(false);
    handleSearch();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const { target, currentTarget, relatedTarget } = event;
    console.log({ target, currentTarget, relatedTarget });

    if (
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.relatedTarget as Node)
    ) {
      setIsFocused(false);
    }
  };

  const handleSearch = async () => {
    if (inputRef.current) {
      if (inputValue !== "") {
        addToSearchHistory(inputValue);
        inputRef.current?.blur();
        setButtonState("loading");
        const result = await onSearch(inputValue);
        if (result) {
          setButtonState("disable");
          // inputRef.current.value = "";
          handleInputChange("");
        }
      }
    }
  };

  const handleInputChange = (value?: string) => {
    if (value !== undefined) {
      setButtonState(undefined);
      setInputValue(value);
    }
  };
  const renderHistoryMenu = () => {
    const inputText = inputRef.current?.value ?? "";
    const menuItems = [...suggestions].filter((item) => item !== inputText);
    if (isFocused && menuItems.length > 0) {
      return (
        <ul className={style["search__item__wrapper"]}>
          {suggestions
            .filter((item) => item !== inputText)
            .map((item, index) => (
              <li
                key={index}
                className={style["search__item"]}
                onClick={() => handleSuggestionClick(item)}
              >
                {item}
              </li>
            ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="w-full flex gap-4">
      <div
        ref={searchBoxRef}
        onFocus={buttonState !== "loading" ? handleFocus : undefined}
        onBlur={handleBlur}
        tabIndex={-1}
        className={style["search__wrapper"]}
      >
        <Icon
          name={IconNameEnum.SEARCH}
          color="stroke-slate-500"
          className={style["search__icon"]}
        />
        <input
          ref={inputRef}
          value={inputValue}
          type="text"
          dir="rtl"
          placeholder="جستجو..."
          className={style["input"]}
          onChange={(e) => handleInputChange(e.target.value)}
          disabled={buttonState === "loading"}
        />
        {renderHistoryMenu()}
      </div>
      <Button
        label={"submit"}
        onClick={handleSearch}
        disabled={buttonState === "disable"}
        loading={buttonState === "loading"}
        variant={ButtonVariant.OUTLINED}
      />
    </div>
  );
};
