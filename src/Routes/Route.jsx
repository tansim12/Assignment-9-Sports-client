import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Contact from "../Components/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServiceSingleDetailsCard from "../Components/Services/ServiceSingleDetailsCard";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/slider.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
        loader: async () => {
          const res = await fetch("/blog.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceSingleDetailsCard></ServiceSingleDetailsCard>
          </PrivateRoute>
        ),
        loader: async () => {
          const res = await fetch("/service.json");
          const date = await res.json();
          return date;
        },
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export { router };
