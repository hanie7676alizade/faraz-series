import { ReactNode, lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));

interface IRoute {
  path: string;
  element: ReactNode;
  subRoute: TRouteList;
}

type TRouteList = IRoute[];

const routeList: TRouteList = [
  {
    path: "/",
    element: <HomePage />,
    subRoute: [],
  },
];
export default routeList;
