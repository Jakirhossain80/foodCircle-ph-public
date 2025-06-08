import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";
import FoodDetails from "../pages/FoodDetails";
import UpdateFoodInfo from "../pages/UpdateFoodInfo";
import LearnMore from "../pages/LearnMore";


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
        path: "/availablefoods",
        Component: AvailableFoods,
      },        
      {
        path: "/addfood",
        element: <AddFood/>,
      },        
      {
        path: "/managemyfoods",
        element: <ManageMyFoods/>,
      },        
      {
        path: "/myfoodrequest",
        element: <MyFoodRequest/>,
      },        
      {
        path: "/food/:id",
        element: <FoodDetails/>,
      },        
      {
        path: "/updatefood/:id",
        element: <UpdateFoodInfo/>,
      },        
      {
        path: "/learnmore",
        element: <LearnMore/>,
      },        
      
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
  
]);
