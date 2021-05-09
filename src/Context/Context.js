import React,{useContext, useState,useReducer} from 'react'

import AppContext from './AppContext'

const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value="ehsan">
{children}

        </AppContext.Provider>
    )
}

const useGlobalContext=()=>{
  return useContext(AppContext)
}
export {AppProvider,useGlobalContext} 
