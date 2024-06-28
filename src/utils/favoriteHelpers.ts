import { SnackbarType } from "../components";
import { OpenAlertFunction } from "../services/util";
import { FavoriteItem, SerialType } from "../types/types";

const addToFavoriteItems = (
  favoriteItems: FavoriteItem[],
  item: FavoriteItem
) => {
  const favorites: FavoriteItem[] = [...favoriteItems, item];
  localStorage.setItem("favoriteItems", JSON.stringify(favorites));
  return favorites;
};

const removeFromFavoriteItems = (
  favoriteItems: FavoriteItem[],
  item: SerialType
) => {
  const favorites: FavoriteItem[] = [...favoriteItems].filter(
    (_item) => item.id !== _item.id
  );
  localStorage.setItem("favoriteItems", JSON.stringify(favorites));
  return favorites;
};

export const getNewFavoriteList = (
  beFavorite: boolean,
  favoriteItems: FavoriteItem[],
  item: SerialType,
  openAlert: OpenAlertFunction
) => {
  openAlert(
    beFavorite
      ? `سریال ${item.name} به لیست علاقمندی های شما اضافه شد`
      : `سریال ${item.name} از لیست علاقمندی های شما حذف شد`,
    SnackbarType.DEFAULT
  );
  if (beFavorite)
    return addToFavoriteItems(favoriteItems, { id: item.id, name: item.name });
  return removeFromFavoriteItems(favoriteItems, item);
};
