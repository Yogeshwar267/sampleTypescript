import { Route, Routes } from "react-router-dom";

const RenderRoutes = ({
  routes = [
    {
      path: "/",
      component: () => <></>,
      exact: false,
    },
  ],
}) => (
  <Routes>
    {routes.map((route, routeIdx) => (
      <Route path={route?.path} key={routeIdx} element={<route.component />} />
    ))}
  </Routes>
);
export default RenderRoutes;
