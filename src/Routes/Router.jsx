import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: ()=>fetch('/news.json')


            }
        ]
    }
])

export default router
