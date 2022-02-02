// import { useState } from "react";
import { useContext } from "react/cjs/react.development";
// import { getShoes } from "../Service/shoes-service";
import { ShoesContext } from "../ShoesContext";
export default function Shoes() {
  let { shoesInfo, setShoesInfo } = useContext(ShoesContext);
  return (
    <div>
      {shoesInfo.map((item) => {
        return <p>{item.shoeType}</p>;
      })}
    </div>
  );
}
