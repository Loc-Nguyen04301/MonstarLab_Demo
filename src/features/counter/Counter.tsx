import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { decrement, increment } from '../../redux/counterSlice'
import { Button } from 'antd'

export function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <Button onClick={() => { dispatch(increment()) }}>Increment</Button>
            <Button onClick={() => { dispatch(decrement()) }}>Decrement</Button>
            <div>Count: {count}</div>
        </div>
    )

}