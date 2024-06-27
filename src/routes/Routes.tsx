import { FC, memo, Suspense } from "react"
import { Redirect, Route, Switch } from "react-router-dom";
import { AUTH_ROUTE, ROOT_ROUTE, ROUTE_LIST } from "./routes.config";
import { RouteItemDef } from "@/types/routes.type";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useAppSelector } from "@/redux-toolkit/hook";

const RouteWrapper: FC<RouteItemDef> = ({
    component: Component,
    layout,
    path,
    isAuthRoute,
    ...prop
}) => {
    console.log({ path, prop })
    const RouteLayout = layout || DefaultLayout
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
        <Suspense fallback>
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
