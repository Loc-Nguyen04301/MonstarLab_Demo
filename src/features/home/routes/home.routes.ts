import React from "react";
import { RouteItemDef } from "@/types/routes.type";
import { HomePathsEnum } from "../constants/home.paths";

const HomeScreen = React.lazy(() => import("../screen/HomeScreen/HomeScreen"))
const MainLayout = React.lazy(() => import("@/layouts/MainLayout"))

export const HOME_SCREEN: RouteItemDef = {
    id: "PF_TP_010",
    path: HomePathsEnum.HOME,
    layout: MainLayout,
    component: HomeScreen,
    pageTitle: "Home Page",
};

export const HOME_ROUTES = [HOME_SCREEN]