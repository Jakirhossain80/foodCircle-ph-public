import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registration from "../pages/Registration";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },

      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Registration,
      },        
      
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
  
]);
