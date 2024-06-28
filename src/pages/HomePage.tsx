import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  Button,
  Pagination,
  SearchBox,
  SectionTitle,
  SerialCard,
} from "../components";
import { getSeriesPaginate, searchByText } from "../services/series";
import { FavoriteItem, SerialType } from "../types/types";
import { useAlert } from "../hooks";
import { useLoading } from "../hooks/useLoading";
import { setFavoriteSerialList } from "../redux/serial/slice";
import { useAppDispatch, useAppSelector } from "../redux/redux-hook";
import { getNewFavoriteList } from "../utils/favoriteHelpers";

const HomePage = () => {
  const [seriesList, setSeriesList] = useState<SerialType[]>([]);
  // const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { openAlert } = useAlert();
  const { setLoading } = useLoading();

  const dispatch = useAppDispatch();
  const favoriteSerialList = useAppSelector(
    (state) => state.Serial.favoriteSerialList
  );

  useEffect(() => {
    const searchedText = searchParams.get("query");
    if (searchedText) {
      getSearchedList(searchedText);
    }
    !favoriteSerialList && getFavoriteItems();
  }, []);

  const getFavoriteItems = () => {
    const favorites = localStorage.getItem("favoriteItems");

    if (favorites) {
      const favoriteList: FavoriteItem[] = JSON.parse(favorites);
      dispatch(setFavoriteSerialList(favoriteList));
    }
  };

  const handleFavoriteChange = (beFavorite: boolean, item: SerialType) => {
    const favoriteList = getNewFavoriteList(
      beFavorite,
      favoriteSerialList ?? [],
      item,
      openAlert
    );

    // setFavoriteItems([...favoriteList]);
    dispatch(setFavoriteSerialList(favoriteList));
  };

  const handleSearch = async (searchedText?: string) => {
    if (searchedText) {
      setSearchParams({ query: searchedText });

      getSearchedList(searchedText);
    } else {
      searchParams.delete("query");
      setSearchParams(searchParams);

      getSerialList(1);
    }
    return true;
  };

  const getSearchedList = async (searchedText: string) => {
    const response = await searchByText(searchedText, openAlert, setLoading);
    setSeriesList(response ?? []);
  };

  const getSerialList = async (currentPage: number) => {
    const response = await getSeriesPaginate(
      currentPage,
      openAlert,
      setLoading
    );
    setSeriesList(response ?? []);
  };

  const checkIsFavorite = (id: number) => {
    const itemIndex = (favoriteSerialList ?? []).findIndex(
      (item) => item.id === id
    );
    return itemIndex !== -1;
  };

  const redirectToSerial = (id: number) => {
    navigate(`serial/${id}`);
  };
  const handlePaginationChange = (currentPage: number) => {
    currentPage > 1 && setSearchParams({ page: String(currentPage) });

    getSerialList(currentPage);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-7 p-16 items-center">
      <div className="max-w-[800px] w-full mx-auto">
        <SearchBox
          onSearch={handleSearch}
          searchedValue={searchParams.get("query") ?? undefined}
        />
      </div>

      <SectionTitle title={"لیست علاقه مندی ها"} />
      <div className="w-full px-6 flex flex-wrap gap-3 justify-start">
        {(favoriteSerialList ?? []).map((favItem) => (
          <Button
            key={favItem.id}
            label={favItem.name}
            onClick={() => redirectToSerial(favItem.id)}
          />
        ))}
      </div>

      <SectionTitle
        title={searchParams.get("query") ? "نتایج جستوجو" : "سریال ها"}
      />
      <div className="max-w-[1195px] mx-auto flex flex-wrap gap-3">
        {seriesList.map((item) => (
          <SerialCard
            key={item.id}
            serial={item}
            isFavorite={checkIsFavorite(item.id)}
            handleFavorite={(beFavorite: boolean) =>
              handleFavoriteChange(beFavorite, item)
            }
          />
        ))}
      </div>
      {searchParams.get("query") ? null : (
        <Pagination
          itemCount={1800}
          itemPerPage={250}
          activePage={
            searchParams.get("page") ? Number(searchParams.get("page")) : 1
          }
          onChange={handlePaginationChange}
        />
      )}
    </div>
  );
};
export default HomePage;
