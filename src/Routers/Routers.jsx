import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../Layout/webLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationConfirm from "../Pages/Home/DonationConfirm";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <WebLayout></WebLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          loader:()=> fetch('/donation-data.json'),
          element:<Home></Home>
        },
        {
          path:'/donation',
          loader:()=> fetch('/donation-data.json'),
          element:<Donation></Donation>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/dc/:cardId',
          loader:()=> fetch('/donation-data.json'),
          element:<DonationConfirm></DonationConfirm>
        }
      ]
    },
  ]);

  export default router