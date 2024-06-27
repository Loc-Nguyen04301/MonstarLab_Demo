import { FC, memo, Suspense } from "react"
import { Redirect, Route, Switch } from "react-router-dom";
import { AUTH_ROUTE, ROOT_ROUTE, ROUTE_LIST } from "./routes.config";
import { RouteItemDef } from "@/types/routes.type";
import { useAppSelector } from "@/redux-toolkit/hook";
import Loader from "@/components/Loader/Loader";
import MainLayout from "@/layouts/MainLayout";

const RouteWrapper: FC<RouteItemDef> = ({
    component: Component,
    layout,
    path,
    isAuthRoute,
    ...prop
}) => {
    console.log({ path, prop })
    const RouteLayout = layout || MainLayout
    const { accessToken } = useAppSelector((state) => state.auth)
    if (!accessToken && !isAuthRoute) {
        return <Redirect to={AUTH_ROUTE} />;
    }

    if (accessToken && isAuthRoute) {
        return <Redirect to={ROOT_ROUTE} />;
    }

    return (
        <Route
            exact={true}
            path={path}
            render={(props): React.ReactElement => {
                return (
                    <RouteLayout>
                        <Component {...props} />
                    </RouteLayout>
                )
            }}
        />
    )
}

const Routes: React.FC = () => {
    return (
        <Suspense fallback={<Loader isFullScreen />}>
            <Switch>
                {ROUTE_LIST.map((route, id, arr) => {
                    console.log(route.path, arr)
                    return (
                        <RouteWrapper key={route.id} {...route} />
                    )
                })}
            </Switch>
        </Suspense>
    )
};

export default memo(Routes);
