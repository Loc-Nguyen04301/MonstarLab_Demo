import React from 'react'

interface MainLayoutProps {
    children?: React.ReactElement
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default MainLayout