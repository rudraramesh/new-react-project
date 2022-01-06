import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const ComC = () => {
    const js=useContext(GlobalContext)
    return (
        <>
            <h3>The Javascript library we are learning is {js}</h3>
        </>
    )
}

export default ComC
