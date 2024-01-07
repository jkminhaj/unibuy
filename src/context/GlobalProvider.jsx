import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
const GlobalProvider = ({children}) => {
    const [search , setSearch] =useState('');
    const test = 'hello world'
    // pass data in global context
    const data = {test
    ,search,setSearch}
    return (
        <GlobalContext.Provider value = {data}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;