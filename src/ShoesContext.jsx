import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { getShoes } from "./Service/shoes-service";
export let ShoesContext = React.createContext();

export default function ShoesProvider({ children }) {
  let [shoesInfo, setShoesInfo] = useState([]);
  useEffect(() => {
    getShoes().then((res) => setShoesInfo(res));
  }, []);
  return (
    <ShoesContext.Provider value={{ shoesInfo, setShoesInfo }}>
      {children}
    </ShoesContext.Provider>
  );
}
