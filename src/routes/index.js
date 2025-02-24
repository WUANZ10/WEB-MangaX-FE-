import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Profile from "../pages/Profile/Profile";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
  {
    path:"/profile",
    page:Profile
  }
];
