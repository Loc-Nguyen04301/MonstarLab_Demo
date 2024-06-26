import React from "react";
import { RouteItemDef } from "../../../types/routes.type";
import { AuthPathsEnum } from "../constants/auth.paths";

const AuthLayout = React.lazy(() => import("../layouts/AuthLayout/AuthLayout"))

const SIGN_IN_SCREEN: RouteItemDef = {
    id: "auth",
    path: AuthPathsEnum.SIGN_IN,
    layout: AuthLayout,
    component: React.lazy(() => import("../screens/SignInScreen/SignInScreen")),
    isAuthRoute: true,
};

const AUTH_ROUTES = [SIGN_IN_SCREEN];

export default AUTH_ROUTES