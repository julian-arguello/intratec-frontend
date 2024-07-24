import { createContext, useContext, useState } from "react";

const NavContext = createContext();
//------------------------------------------------------------------------------------------------------------------------------------------

export function NavProvider({ children }){

    const [visible, setVisible] = useState(true);
    const [narrow, setNarrow] = useState(true);

    //return
    return(
        <NavContext.Provider value={{ visible, setVisible, narrow, setNarrow}}>
            {children}
        </NavContext.Provider>
    );
}
export function useNav(){
    return useContext(NavContext);
}