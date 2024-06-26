import { Suspense } from "react"
import { Route, useRoutes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
import { Counter } from '../feature/counter/Counter';
import DefaultLayout from "../layouts/DefaultLayout";
import NotFoundLayout from "../layouts/NotFoundLayout";

export enum RoutePath {
    Home = "/",
    LoginPage = "login",
    RegisterPage = "register",

    Counter = "/counter"
}

const Router: React.FC = () => {
    const routes = useRoutes([
        {
            path: RoutePath.Home,
            element: <MainLayout />,
            children: [
                {
                    path: RoutePath.Counter,
                    element: <Counter />
                }
            ]
        },
        {
            path: '*',
            element: <NotFoundLayout />
        }
    ])

    return <Suspense fallback>{routes}</Suspense>
};

export default Router;
