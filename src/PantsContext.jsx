import React, { useEffect, useState } from "react";
import { GetPants } from "./Service/Pants-service";
export let PantsContext = React.createContext();
export default function PantsProvider({children}){
    let [pantsInfo,setPantsInfo] = useState([]);
    useEffect(()=>{
        GetPants().then(res => setPantsInfo(res))
    },[])
    return(
        <PantsContext.Provider value ={{pantsInfo,setPantsInfo}}>
            {children}
        </PantsContext.Provider> 
    )
}