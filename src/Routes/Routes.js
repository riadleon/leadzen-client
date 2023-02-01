import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../Pages/HomePage/HomePage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <HomePage />,
            },



        ]
    }
])
export default router;