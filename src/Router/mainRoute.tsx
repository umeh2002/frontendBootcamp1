import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import Dictionary from "../Pages/DictionaryPages/Dictionary";
import Home from "../Pages/HomePages/Home";
import Register from "../Auth/Register";
import Signin from "../Auth/Signin";
import TeacherAuth from "../Auth/TeacherAuth";
// import PrivateRouter from "./PrivateRouter";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dictionary",
        element: <Dictionary />,
      },
      {
        path: "/",
        element: 
          // <PrivateRouter>
            <Home />
          // </PrivateRouter>
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
  {
    path:"/teacher-auth" ,
    element:<TeacherAuth/>
  }
]);
