import { ReactNode, lazy } from "react";
import { Layout } from "../components/layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const SerialPage = lazy(() => import("../pages/SerialPage"));

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
      {
        path: "/serial/:id",
        element: <SerialPage />,
        subRoute: [],
      },
    ],
  },
];
export default routeList;
