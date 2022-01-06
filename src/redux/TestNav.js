import React from 'react'
import { useSelector } from 'react-redux'

const TestNav = () => {
    const data=useSelector(state=>state)
    return (
        <>
            <h2>The total number of item in cart is {data.cartcount}</h2>
        </>
    )
}

export default TestNav
