import Home from '../Views/Home/index';
import Login from "../Views/Login";
import Signup from "../Views/Signup";

export const PUBLIC_ROUTES = [
  {
    path: "/" ,
    component: Home,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/login" as const,
    component: Login,
    title: "login",
    exact: true,
  },
  {
    path: "/signup" as const,
    component: Signup,
    title: "Signup",
  },
];
