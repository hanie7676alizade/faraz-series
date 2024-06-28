import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { LoadingProvider } from "../../hooks/useLoading";

export const Layout = () => {
  return (
    <>
      <Header />
      <LoadingProvider>
        <main className="mx-5">
          <Outlet />
        </main>
      </LoadingProvider>
    </>
  );
};
