import React from 'react'
import state from "./State";
import "../App.css";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";

function Picker() {
  
  const snap = useSnapshot(state);
  
  return (
    <div className="picker"  >
      <HexColorPicker 
        className="hex"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current]=color)}
      />
      <h1>{snap.current}</h1>
    </div>
  )
}

export default Picker
