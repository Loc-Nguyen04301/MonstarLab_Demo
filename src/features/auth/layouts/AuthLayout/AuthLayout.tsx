import React from 'react'

interface AuthLayoutProps {
    children?: React.ReactElement
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>{children}</div>
    )
}

export default AuthLayout