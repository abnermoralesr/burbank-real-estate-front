import {createBrowserRouter} from "react-router-dom";
import Client from "../layout/client/Client";
import Home from "../modules/home/home";
import List from "../modules/list/list";
import Single from "../modules/single/single";
import Profile from "../modules/profile/Profile";
import Login from "../modules/login/login";
import Register from "../modules/register/Register";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Client/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/propiedades",
          element: <List/>
        },
        {
          path: "/propiedad/:id",
          element: <Single/>
        },
        {
          path: "/perfil",
          element: <Profile/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/crear-usuario",
          element: <Register/>
        }
      ]
    },
]);

export default routes;