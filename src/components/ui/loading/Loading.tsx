import { IconSizeEnum } from "../icon";
import { Spinner, SpinnerColorEnum } from "../spinner";

export const Loading = () => {
  return (
    <div className="mx-auto mt-40">
      <Spinner size={IconSizeEnum.LG} color={SpinnerColorEnum.DARK} />
    </div>
  );
};
