import { createContext, useContext, useState } from "react";

const NavContext = createContext();
//------------------------------------------------------------------------------------------------------------------------------------------

export function NavProvider({ children }){

    const [visible, setVisible] = useState(true);
    const [narrow, setNarrow] = useState(false);

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