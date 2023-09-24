import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../Layout/webLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <WebLayout></WebLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/donation',
          element:<Donation></Donation>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        }
      ]
    },
  ]);

  export default router