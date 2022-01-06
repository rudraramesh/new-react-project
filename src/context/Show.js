import React from 'react'
import ComA from './ComA'
import GlobalContextProvider from './GlobalContext'

const Show = () => {
    return (
        <>
            <GlobalContextProvider>
                <ComA />
            </GlobalContextProvider>
        </>
    )
}

export default Show
