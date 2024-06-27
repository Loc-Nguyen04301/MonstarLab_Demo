import { HOME_ROUTES } from "@/features/home/home";
import { AUTH_ROUTES } from "@/features/auth/auth"

export const ROOT_ROUTE = "/";
export const AUTH_ROUTE = "/sign-in";

export const ROUTE_LIST = [...AUTH_ROUTES, ...HOME_ROUTES];
