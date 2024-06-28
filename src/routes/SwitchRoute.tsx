import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routeList from "./routeList";
import NotFoundPage from "../pages/NotFoundPage";

export const SwitchRoute = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routeList.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.subRoute.length > 0 &&
                route.subRoute.map((subRoute, subIndex) => (
                  <Route
                    key={subIndex}
                    path={subRoute.path}
                    element={subRoute.element}
                  />
                ))}
            </Route>
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
