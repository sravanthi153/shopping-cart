import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ProtectedRoutes, PublicRoutes } from "Routes/routes";

export default function Router() {
  const routes = [...PublicRoutes, ...ProtectedRoutes];
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.component} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
