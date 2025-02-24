import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/LoginPage/Login";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Register from "../pages/RegisterPage/Register";
import Comic from "../pages/ComicPage/ComicPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/login",
    page: Login,
    isShowHeader: true,
  },
  {
    path: "/register",
    page: Register,
    isShowHeader: true,
  },
  {
    path: "/comic",
    page: Comic,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
