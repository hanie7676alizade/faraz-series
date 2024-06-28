import { TextVariantEnum, Typography } from "../..";

interface Props {
  title: string;
  buttonElement?: React.ReactNode;
}
export const SectionTitle = ({ title, buttonElement }: Props) => {
  return (
    <div className="flex gap-4 items-center ">
      <div className="w-fit">
        <Typography text={title} variant={TextVariantEnum.TITLE_1} />
      </div>
      <hr className="flex-1" />
      {buttonElement}
    </div>
  );
};
