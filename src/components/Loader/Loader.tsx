import React, { memo } from 'react'
import { Spin } from 'antd'

interface LoaderProps {
    isFullScreen?: boolean;

}
const Loader = ({ isFullScreen = false }: LoaderProps) => {
    return (
        <>
            <Spin fullscreen={isFullScreen} />
        </>
    )
}

export default memo(Loader)