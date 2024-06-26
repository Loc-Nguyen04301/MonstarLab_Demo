import React from 'react'
import { Outlet } from 'react-router-dom'

interface DefaultLayoutProps {
    children?: React.ReactElement
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div>
            DefaultLayout
            <div>{children ?? <Outlet />}</div>
        </div>
    )
}

export default DefaultLayout