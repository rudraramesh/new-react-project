import React from 'react'
import {Link} from 'react-router-dom'

const LinkPage = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Firstpage</Link></li>
                <li><Link to="/secondpage">Secondpage</Link></li>
                <li><Link to="/image">Nnewcomp</Link></li>
            </ul>
        </>
    )
}

export default LinkPage
