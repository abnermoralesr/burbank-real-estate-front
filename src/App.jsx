import {RouterProvider} from "react-router-dom";
import routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (<RouterProvider router={routes} />)
}

export default App