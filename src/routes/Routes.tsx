import { FC, memo, Suspense } from "react"
import { Route, useLocation, useRoutes } from "react-router-dom";
import Loader from "@/components/Loader/Loader";
import MainLayout from "@/layouts/MainLayout";
import HomeScreen from "@/features/home/screen/HomeScreen/HomeScreen";
import UserScreen from "@/features/user/screen/UserScreen/UserScreen";
import { HomePathsEnum } from "@/features/home/constants/home.paths";
import { UserPathsEnum } from "@/features/user/constants/user.paths";
import AuthLayout from "@/features/auth/layouts/AuthLayout/AuthLayout";
import SignInScreen from "@/features/auth/screens/SignInScreen/SignInScreen";
import { AuthPathsEnum } from "@/features/auth/constants/auth.paths";
import AuthGuard from "@/guard/AuthGuard";
import GuestGuard from "@/guard/GuestGuard";

const Routes: React.FC = () => {

    const routes = useRoutes([
        {
            path: HomePathsEnum.HOME,
            element:
                <AuthGuard>
                    <MainLayout>
                        <HomeScreen />
                    </MainLayout>
                </AuthGuard>
        },
        {
            path: UserPathsEnum.USER,
            element:
                <AuthGuard>
                    <MainLayout>
                        <UserScreen />
                    </MainLayout>
                </AuthGuard >
        },
        {
            path: AuthPathsEnum.SIGN_IN,
            element:
                <GuestGuard>
                    <AuthLayout>
                        <SignInScreen />
                    </AuthLayout>
                </GuestGuard>
        }
    ])
    return (
        <Suspense fallback={<Loader isFullScreen />}>
            {routes}
        </Suspense>
    )
};

export default memo(Routes);
