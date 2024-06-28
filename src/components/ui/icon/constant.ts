import { IconNameEnum } from "./enums";
import { HeartRounded } from "./iconList/heartRounded";
import { Loading } from "./iconList/loading";
import { Search } from "./iconList/search";
import { XClose } from "./iconList/xClose";

export const icons = {
  [IconNameEnum.SEARCH]: Search,
  [IconNameEnum.HEART_ROUNDED]: HeartRounded,
  [IconNameEnum.LOADING]: Loading,
  [IconNameEnum.CLOSE]: XClose,
};
