import React, { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Private from "./Private";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"))
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"))
const Profile = lazy(() => import("../pages/ProfilePage/Profile"))
const Comic = lazy(() => import("../pages/ComicPage/ComicPage"))
const Read = lazy(() => import("../pages/ReadPage/ReadPage"))
const Favorites = lazy(() => import("../pages/FavoritesPage/FavoritePage"))
const EditPage = lazy(() => import("../pages/EditAlbum/EditAlbumPage"))

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [

      {
        index: true,
        element: <Navigate to='/home' replace />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'comic/:comicId',
        element: <Comic />
      },
      {
        path: 'read/:comicId/:chapter',
        element: <Read />
      },
      {
        path: 'edit/:comicId',
        element: <EditPage />
      },
      {
        path: 'edit/:comicId/:chapter',
        element: <Profile />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: '',
        element: <Private />,
        children: [
          {
            path: 'profile',
            element: <Profile />
          }
        ]
      }
      ,
      {
        path: '/404',
        element: <NotFound />
      },
      {
        path: '*',
        element: <Navigate to='/404' />
      }
    ]
  }
]);

export default Router;
