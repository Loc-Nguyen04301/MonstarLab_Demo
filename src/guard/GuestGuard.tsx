import { HomePathsEnum } from '@/features/home/constants/home.paths'
import { useAppSelector } from '@/redux-toolkit/hook'
import React from 'react'
import { Navigate } from 'react-router-dom'

interface GuestGuardProps {
    children?: React.ReactElement
}

const GuestGuard = ({ children }: GuestGuardProps) => {
    const { accessToken } = useAppSelector(state => state.auth)
    if (accessToken) return <Navigate to={HomePathsEnum.HOME} replace />

    return (
        <>{children}</>
    )
}

export default GuestGuard