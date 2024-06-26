import React from 'react'

interface DefaultLayoutProps {
    children?: React.ReactElement
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div>
            <div>{children}</div>
        </div>
    )
}

export default DefaultLayout