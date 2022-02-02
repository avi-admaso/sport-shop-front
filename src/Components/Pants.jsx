import React from "react";
import { useContext } from "react/cjs/react.development";
import { PantsContext } from "../PantsContext";
// import { GetPants } from "../Service/Pants-service";
export default function Pants() {
  let { pantsInfo, setPantsInfo } = useContext(PantsContext);
  return (
    <div>
      {pantsInfo.map((item) => {
        return <p>{item.clothesType}</p>;
      })}
    </div>
  );
}
