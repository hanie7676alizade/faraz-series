import { useEffect, useRef, useState } from "react";

import { PaginationItem } from "./PaginationItem";
import { Button, ButtonAppearance, ButtonSize, ButtonVariant } from "../button";
import style from "./pagination.module.scss";

export interface PaginationProps {
  id?: string;
  itemCount: number; // total items
  itemPerPage: number;
  activePage?: number;
  onChange?: (page: number) => void;
}

export function Pagination({
  activePage = 1,
  itemCount,
  itemPerPage,
  ...props
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(activePage ?? 1);
  // for rendering pages with dots
  const [firstPageList, setFirstPageList] = useState<number[]>([]);
  const [lastPageList, setLastPageList] = useState<number[]>([]);
  const [middlePageList, setMiddlePageList] = useState<number[]>([]);
  //Refs
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pagesNumber = Math.ceil(itemCount / itemPerPage);
  const firstRun = useRef(true);

  useEffect(() => {
    getPaginationLists();
  }, [itemCount, itemPerPage]);

  useEffect(() => {
    getPaginationLists();
    if (currentPage && inputRef.current)
      inputRef.current.value = currentPage.toString();
    if (firstRun.current) {
      firstRun.current = false;

      return;
    }
    props.onChange?.(currentPage);
  }, [currentPage]);

  useEffect(() => {
    activePage && setCurrentPage(activePage);
  }, [activePage]);

  const getPaginationLists = () => {
    setMiddlePageList([]);

    if (pagesNumber <= 5) {
      displayAllPages();
    } else {
      if (currentPage < 5) {
        setFirstPageList([1, 2, 3, 4, 5]);
        setLastPageList([pagesNumber]);
      } else if (currentPage > pagesNumber - 4) {
        setFirstPageList([1]);
        setLastPageList([
          pagesNumber - 4,
          pagesNumber - 3,
          pagesNumber - 2,
          pagesNumber - 1,
          pagesNumber,
        ]);
      } else {
        const middleList = [currentPage - 1, currentPage, currentPage + 1];
        if (middleList[0] === 2) setFirstPageList([1, ...middleList]);
        else if (middleList[2] === pagesNumber - 1)
          setLastPageList([...middleList, pagesNumber]);
        else {
          setFirstPageList([1]);
          setLastPageList([pagesNumber]);
          setMiddlePageList(middleList);
        }
      }
    }
  };

  const displayAllPages = () => {
    fillFirstPageList(pagesNumber);
    setMiddlePageList([]);
    setLastPageList([]);
  };
  const fillFirstPageList = (pageCount: number) => {
    setFirstPageList([...Array(pageCount).keys()].map((i: number) => i + 1));
  };

  const renderPageList = (list: number[], hasDots = false) => {
    if (list.length > 0) {
      return (
        <>
          {list.map((page) => (
            <PaginationItem
              key={page}
              id={props.id}
              pageItem={page}
              isActivePage={page === currentPage}
              onClick={onPageItemClick}
            />
          ))}
          {hasDots && (
            <div
              id={props.id ? `pagination-dots-${props.id}` : undefined}
              className={[style["pagination__item"], style["dot-item"]].join(
                " "
              )}
            >
              ...
            </div>
          )}
        </>
      );
    }
  };
  const decreaseIndex = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const increaseIndex = () => {
    if (currentPage < pagesNumber) {
      setCurrentPage(currentPage + 1);
    }
  };
  const onPageItemClick = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div
      id={props.id ? `pagination-wrapper-${props.id}` : undefined}
      className={style["pagination__wrapper"]}
      ref={wrapperRef}
    >
      <div className={style["pagination__nav"]}>
        <Button
          label={"قبلی"}
          size={ButtonSize.SM}
          onClick={currentPage !== 1 ? decreaseIndex : undefined}
          variant={ButtonVariant.TRANSPARENT}
          appearance={ButtonAppearance.DEFAULT}
          disabled={currentPage === 1}
        />

        <div className={style["pagination__nav__list"]}>
          {renderPageList(
            firstPageList,
            middlePageList.length > 0 || lastPageList.length > 0
          )}
          {renderPageList(middlePageList, lastPageList.length > 0)}
          {renderPageList(lastPageList)}
        </div>

        <Button
          size={ButtonSize.SM}
          label={"بعدی"}
          onClick={currentPage !== pagesNumber ? increaseIndex : undefined}
          variant={ButtonVariant.TRANSPARENT}
          appearance={ButtonAppearance.DEFAULT}
          disabled={currentPage === pagesNumber}
        />
      </div>
    </div>
  );
}
