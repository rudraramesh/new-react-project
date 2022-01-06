import React from 'react'
import axios from 'axios'

const Prop = (props) => {
    const {language,technology} =props
    return (
        <>
            <h2>it is a {language} class.it is used for {technology}</h2>
        </>
    )
}

export default Prop
