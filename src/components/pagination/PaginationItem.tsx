import style from "./pagination.module.scss";

export interface PaginationItemProps {
  id?: string;
  pageItem: number;
  isActivePage: boolean;
  onClick: (page: number) => void;
}

export function PaginationItem(props: PaginationItemProps) {
  return (
    <button
      type="button"
      id={props.id ? `pagination-item-${props.id}` : undefined}
      className={[
        style["pagination__item"],
        props.isActivePage ? style["pagination__item--active"] : null,
      ].join(" ")}
      onClick={() => {
        props.onClick(props.pageItem);
      }}
    >
      <p>{props.pageItem}</p>
    </button>
  );
}
