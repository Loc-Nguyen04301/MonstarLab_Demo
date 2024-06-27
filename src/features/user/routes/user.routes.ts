import React from "react";
import { RouteItemDef } from "@/types/routes.type";
import { UserPathsEnum } from "../constants/user.paths";

const UserScreen = React.lazy(() => import("../screen/UserScreen/UserScreen"))
const MainLayout = React.lazy(() => import("@/layouts/MainLayout"))

export const USER_SCREEN: RouteItemDef = {
    id: "PF_TP_011",
    path: UserPathsEnum.USER,
    layout: MainLayout,
    component: UserScreen,
    pageTitle: "User Page",
};

export const USER_ROUTES = [USER_SCREEN]