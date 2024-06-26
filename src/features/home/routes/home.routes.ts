import React from "react";
import { RouteItemDef } from "../../../types/routes.type";
import { HomePathsEnum } from "../constants/home.paths";

const HomeScreen = React.lazy(() => import("../screen/HomeScreen/HomeScreen"))

export const HOME_SCREEN: RouteItemDef = {
    id: "PF_TP_010",
    path: HomePathsEnum.HOME,
    component: HomeScreen,
    pageTitle: "Dashboard Page",
};

export const HOME_ROUTES = [HOME_SCREEN]