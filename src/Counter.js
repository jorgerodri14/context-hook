import React from 'react'
import { useCountDispatch, useCount } from './count-context.js';

function Counter() {
    const _dispatch = useCountDispatch()
    const [,dispatch] = useCount()

    return <>
        <button onClick={()=>dispatch({type: 'increment'})}>Incrementar contador</button>
        <button onClick={()=>dispatch({type: 'decrement'})}>Decrementar contador</button>
    </>
}

export default Counter