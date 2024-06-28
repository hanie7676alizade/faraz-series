import { ReactNode, lazy } from "react";
import { Layout } from "../components/layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const SerialPage = lazy(() => import("../pages/SerialPage"));
const SeasonPage = lazy(() => import("../pages/SeasonPage"));

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
      {
        path: "/serial/:serial_id/season/:season_number",
        element: <SeasonPage />,
        subRoute: [],
      },
    ],
  },
];
export default routeList;
