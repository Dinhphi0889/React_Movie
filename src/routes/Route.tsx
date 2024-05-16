import Home from "../pages/HomeTemplate/HomePage/Home";
import DetailMovie from "../pages/HomeTemplate/DetailMoviePage/DetailMovie";
import SeatPage from "../pages/HomeTemplate/SeatPage/SeatPage";
import AddFilmPage from "../pages/AdminTemplate/AddFilmPage/AddFilmPage";
import ListsFilmPage from "../pages/AdminTemplate/ListsFilmPage/ListsFilmPage";
import LoginPage from "../pages/AuthenPage/LoginPage";
import RegisterPage from "../pages/AuthenPage/RegisterPage";
import { Route } from "react-router-dom";
import HomeTemplate from "../pages/HomeTemplate/HomeTemplate";
import AdminTemplate from "../pages/AdminTemplate/AdminTemplate";

type TypeRoutes = {
  path: string;
  element: any;
  nested?: TypeRoutes[];
};

const routes: TypeRoutes[] = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      { path: "", element: Home },
      { path: "detail-movie/:id", element: DetailMovie },
      { path: "ticket-movie", element: SeatPage },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    nested: [
      { path: "add-film", element: AddFilmPage },
      { path: "lists-film", element: ListsFilmPage },
    ],
  },

  {
    path: "login",
    element: LoginPage,
  },
  {
    path: "register",
    element: RegisterPage,
  },
];

const renderRoutes = () => {
  return routes.map((route, index) => {
    if (route.nested) {
      return (
        <Route key={index} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
export default renderRoutes;
