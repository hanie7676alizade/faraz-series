import { ReactNode, lazy } from "react";
import { Layout } from "../components/layout/Layout";

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
    element: <Layout />,
    subRoute: [
      {
        path: "/",
        element: <HomePage />,
        subRoute: [],
      },
    ],
  },
];
export default routeList;
