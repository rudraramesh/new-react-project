import React, { useState } from 'react'

const IncrementDecrement = () => {
    const [count, setCount] = useState(1)
    // [] -> array destructuring
    //  count -> variable name
    //  setCount -> a function which determine or change the value of count
    //  initial value of variable count is 1

    // const increase=()=>(
    //     setCount(count+1)
    // )

    return (
        <>
            <h2 className="text-center">{count}</h2>
            <center> <button className="btn btn-primary"
                onClick={() => setCount(count + 1)}
            >
                Increment Value
            </button>
                &nbsp; &nbsp;
                
                {count > 0 &&
                    <button className="btn btn-primary"
                        onClick={() => setCount(count - 1)}
                    >
                        Decrement Value
                    </button>
                }


            </center>
        </>
    )
}

export default IncrementDecrement
