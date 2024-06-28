import { createContext, PropsWithChildren, useState, useContext } from "react";
import { IconSizeEnum, Spinner, SpinnerColorEnum } from "../components";

type LoadingContextType = {
  setLoading: (isLoading: boolean, isPageLoading?: boolean) => void;
  isLoading: boolean;
};
export const LoadingContext = createContext<LoadingContextType>({
  setLoading: () => null,
  isLoading: false,
});
export function LoadingProvider(props: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const handleLoading = (_isLoading: boolean, _isPageLoading?: boolean) => {
    setIsLoading(_isLoading);
    setPageLoading(!!_isPageLoading);
  };
  return (
    <LoadingContext.Provider value={{ setLoading: handleLoading, isLoading }}>
      {isLoading && pageLoading ? (
        <div className="mx-auto mt-40">
          <Spinner size={IconSizeEnum.LG} color={SpinnerColorEnum.DARK} />
        </div>
      ) : (
        props.children
      )}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  const { setLoading, isLoading } = useContext(LoadingContext);

  if (!LoadingContext) {
    throw new Error("Loading context is not provided");
  }
  return { setLoading, isLoading };
};
