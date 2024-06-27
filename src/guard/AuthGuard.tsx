import { AuthPathsEnum } from '@/features/auth/constants/auth.paths'
import { useAppSelector } from '@/redux-toolkit/hook'
import React from 'react'
import { Navigate } from 'react-router-dom'

interface AuthGuardProps {
    children?: React.ReactElement
}
const AuthGuard = ({ children }: AuthGuardProps) => {
    const { accessToken } = useAppSelector(state => state.auth)
    if (!accessToken) return <Navigate to={AuthPathsEnum.SIGN_IN} replace />

    return <>{children}</>
}

export default AuthGuard