import React,{createContext} from "react"


export const GlobalContext= createContext()

const GlobalContextProvider=(props)=>{
    return(
        <GlobalContext.Provider value={'React js'}>

            {props.children}

        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider