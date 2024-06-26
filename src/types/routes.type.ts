import { FC, ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";

export type RouteItemDef = {
    /**
     * Unique id for the path
     * The id should be the same for paths that are showing the same component
     */
    id: string
    /**
     * The URL path for when
     * the component should be rendered
     */
    path: string;
    /**
     * Screen (or component) to show
     * when navigating to the menu item
     */
    component: ComponentType<RouteComponentProps>;
    /** Layout used for this route */
    layout?: FC;
    /** Determine authenticated route */
    isPrivateRoute?: boolean;
    /**
   * Determine authentication route.
   * Ex: Login, Register, Forgot password...
   * This route can not be access after logging in
   */
    isAuthRoute?: boolean;
    /** Navigation title of menu item for navbar or sidebar */
    navigationTitle?: string;
    /** Page title of the screen to be shown on the header */
    pageTitle?: string;
    /** Sub menu items (max level 1) */
    subMenuItems?: RouteItemDef[];
}

export type RouterLocation = {
    hash?: string;
    key?: string;
    pathname: string;
    search: string;
};