import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Information from "../Pages/Information/Information";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/details/:id',
                element: <Information />,
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            },



        ]
    }
])
export default router;