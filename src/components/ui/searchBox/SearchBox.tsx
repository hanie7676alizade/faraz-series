import React, { useState, useEffect, useRef } from "react";
// import { debounce } from "lodash";
import style from "./searchBox.module.scss";
import { Icon, IconNameEnum } from "../icon";
import { Button, ButtonVariant } from "../button";
import { IconButton } from "../iconButton";

interface SearchBoxProps {
  onSearch: (searchedText?: string) => Promise<boolean>;
  searchedValue?: string;
}

export const SearchBox = ({ onSearch, searchedValue }: SearchBoxProps) => {
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

  useEffect(() => {
    searchedValue && handleInputChange(searchedValue);
  }, [searchedValue]);

  const getSearchHistory = () => {
    const searchHistory = localStorage.getItem("searchHistory");
    if (searchHistory) {
      const historyItems: string[] = JSON.parse(searchHistory);
      setSuggestions([...historyItems].slice(-5));
    }
  };
  const addToSearchHistory = async (text: string) => {
    let newSearchHistory: string[] = [];
    newSearchHistory = suggestions.filter((item) => item !== text);
    newSearchHistory = [...newSearchHistory, text].slice(-5);

    localStorage.setItem("searchHistory", JSON.stringify(newSearchHistory));
    setSuggestions(newSearchHistory);
  };

  const handleSuggestionClick = (item: string) => {
    handleInputChange(item);
    setIsFocused(false);
    handleSearch();
  };

  const handleFocus = (e: React.FocusEvent) => {
    if (e.target.nodeName === "BUTTON") return;
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
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
          // setButtonState("disable");
          // handleInputChange("");
          setButtonState(undefined);
        }
      }
    }
  };

  const handleInputChange = (value?: string) => {
    if (value !== undefined) {
      setButtonState(undefined);
      setInputValue(value);
    } else {
      setButtonState("disable");
    }
  };

  const handleClearFilter = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const result = await onSearch("");
    if (result) {
      handleInputChange("");
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
        {inputValue !== "" && (
          <div className={style["close__icon"]}>
            <IconButton
              iconName={IconNameEnum.CLOSE}
              color="stroke-slate-500"
              onClick={handleClearFilter}
            />
          </div>
        )}
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
