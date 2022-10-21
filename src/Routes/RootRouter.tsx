import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "./PublicRoutes";

const GuestRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route: IRouter) => (
        <Route path={route?.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

function RootRouter() {
  return (
    <BrowserRouter>
      <GuestRoutes />
    </BrowserRouter>
  );
}

export default RootRouter;
