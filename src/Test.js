import React from 'react'
import {Hello, Hi} from './Hello'
import './test.css'

const Test = () => {
    
    return (
        <>
        <div className="contain">
            <p>This is a companent which contant external css</p>
        </div>
        <Hello/>
        <Hi/>
        </>
    )
}

export default Test
