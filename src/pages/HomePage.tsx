import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Pagination, SearchBox, SectionTitle, SerialCard } from "../components";
import { getSeriesPaginate, searchByText } from "../services/series";
import { useEffect, useState } from "react";
import { SerialType } from "../types/types";
import { useAlert } from "../hooks";
import { useLoading } from "../hooks/useLoading";

interface FavoriteItem {
  name: string;
  id: number;
}
const HomePage = () => {
  const [seriesList, setSeriesList] = useState<SerialType[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);
  console.log({ favoriteItems });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { openAlert } = useAlert();
  const { setLoading } = useLoading();

  useEffect(() => {
    const searchedText = searchParams.get("query");
    if (searchedText) {
      getSearchedList(searchedText);
    }
    getFavoriteItems();
  }, []);

  const getFavoriteItems = () => {
    const favorites = localStorage.getItem("favoriteItems");

    if (favorites) {
      const favoriteList: FavoriteItem[] = JSON.parse(favorites);
      setFavoriteItems([...favoriteList]);
    }
  };

  const addToFavoriteItems = (item: FavoriteItem) => {
    const newSearchHistory: FavoriteItem[] = [...favoriteItems, item];
    localStorage.setItem("favoriteItems", JSON.stringify(newSearchHistory));
    setFavoriteItems(newSearchHistory);
  };
  const removeFromFavoriteItems = (item: SerialType) => {
    const newSearchHistory: FavoriteItem[] = [...favoriteItems].filter(
      (_item) => item.id !== _item.id
    );
    localStorage.setItem("favoriteItems", JSON.stringify(newSearchHistory));
    setFavoriteItems(newSearchHistory);
  };
  const handleFavoriteChange = (beFavorite: boolean, item: SerialType) => {
    if (beFavorite) {
      addToFavoriteItems({ id: item.id, name: item.name });
    } else {
      removeFromFavoriteItems(item);
    }
  };

  const handleSearch = async (searchedText?: string) => {
    if (searchedText) {
      navigate({
        pathname: "/",
        search: `?${createSearchParams({ query: searchedText })}`,
      });
      getSearchedList(searchedText);
    }
    return true;
  };

  const getSearchedList = async (searchedText: string) => {
    const response = await searchByText(searchedText, openAlert, setLoading);
    console.log({ response });
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
    const itemIndex = favoriteItems.findIndex((item) => item.id === id);
    return itemIndex !== -1;
  };

  return (
    <>
      <div className="min-h-[800px] flex flex-col gap-9 p-7 items-center">
        <div className="max-w-[800px] w-full mx-auto">
          <SearchBox onSearch={handleSearch} />
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
            activePage={1}
            onChange={(value) => {
              getSerialList(value);
            }}
          />
        )}
      </div>
    </>
  );
};
export default HomePage;
