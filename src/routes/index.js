import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/LoginPage/Login";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Register from "../pages/RegisterPage/Register";
import Comic from "../pages/ComicPage/ComicPage";
import Read from "../pages/ReadPage/ReadPage";

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
    path: "/read",
    page: Read,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
