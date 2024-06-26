import React from 'react'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
    children?: React.ReactElement
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div>
            Main Layout
            <div>{children ?? <Outlet />}</div>
        </div>
    )
}

export default MainLayout