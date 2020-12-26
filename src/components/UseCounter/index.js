
import React from 'react'
import { useCounter } from '../../hooks/useCounter'
export const UseCounter = () => {
    const { increment, decrement, reset, state } = useCounter(0);
    return (
        <>
            <h1>Counter with hook {state}</h1>
            <hr/>
            <button onClick={()=>increment()}>+1</button>
            <button onClick={()=>decrement()}>-1</button>
            <button onClick={()=>reset()}>reset</button>
        </>
    )
}
