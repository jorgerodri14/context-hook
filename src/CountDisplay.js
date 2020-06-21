import React from 'react'
import { useCountState, useCount } from './count-context';

export default function CountDisplay() {
    const { count:_count } = useCountState()
    const [{count}] = useCount()
    return <div>{count}</div>
}