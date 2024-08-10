import {createBrowserRouter} from "react-router-dom";
import { Client, RequireAuth } from "../layout/client/Client";
import Home from "../modules/home/home";
import List from "../modules/list/list";
import Single from "../modules/single/single";
import Profile from "../modules/profile/Profile";
import Login from "../modules/login/login";
import Register from "../modules/register/Register";
import ProfileUpdate from "../modules/profileUpdate/ProfileUpdate";
import NewProperty from "#modules/newProperty/NewProperty";
import PropertyService from "#services/api/PropertyService";
import DataTableProperty from "#modules/dataTableProperty/dataTableProperty";
import DataTableUser from "#modules/dataTableUser/dataTableUser";
import UserService from "#services/api/UserService";
import DataTableBranch from "#modules/dataTableBranch/dataTableBranch";
import BranchService from "#services/api/BranchService";
import DataTableLandlord from "#modules/dataTableLandlord/dataTableLandlord";
import LandlordService from "#services/api/LandlordService";

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
          element: <List />,
          loader: PropertyService.listPageLoader
        },
        {
          path: "/propiedad/:id",
          element: <Single />,
          loader: PropertyService.singlePageLoader
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
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "/perfil",
        element: <Profile />
      },
      {
        path: "/perfil/actualizar",
        element: <ProfileUpdate />
      },
      {
        path: "/crear-propiedad",
        element: <NewProperty />
      },
      {
        path: "/editar-propiedad/:id",
        element: <NewProperty />,
        loader: PropertyService.singlePageLoader
      },
      {
        path: "/catalogo-propiedades",
        element: <DataTableProperty />,
        loader: PropertyService.listPageLoader
      },
      {
        path: "/catalogo-usuarios",
        element: <DataTableUser />,
        loader: UserService.listPageLoader
      },
      {
        path: "/catalogo-sucursales",
        element: <DataTableBranch />,
        loader: BranchService.listPageLoader
      },
      {
        path: "/catalogo-propietarios",
        element: <DataTableLandlord />,
        loader: LandlordService.listPageLoader
      },
    ]
  },
]);

export default routes;