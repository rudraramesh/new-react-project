import React from 'react'

const Item = (props) => {
    const item =props.data
    return (
        <>
            <div className="col-md-3 ">
                <h1>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        </>
    )
}

export default Item
