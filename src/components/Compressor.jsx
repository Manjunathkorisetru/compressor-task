import React, { useState } from "react";
import compressor from "../assets/compressor.svg";
import CompressorWindow from "./CompressorWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

function Compressor({ width, color }) {
  const [compwindow, setCompwindow] = useState(false);
  const [isToggled, setToggled] = useState(false);

  const [A, setA] = useState(500);
  const [B, setB] = useState(2000);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="flex flex-col relative gap-4 mt-28">
      <img
        src={compressor}
        alt="compressor"
        className={`
          ${width} mt-20 left-10 self-center cursor-pointer 
        ${isToggled ? color : `bg-slate-200`} rounded-lg shadow-lg
          `}
        onClick={() => {
          setCompwindow(!compwindow);
        }}
      />
      <FontAwesomeIcon
        icon={isToggled ? faToggleOn : faToggleOff}
        onClick={handleToggle}
        size="2xl"
        className="cursor-pointer"
      />

      <div className="flex justify-center gap-20">
        <div>
          A: <span className="text-red-800">{A} Nm3/h</span>{" "}
        </div>
        <div>
          B: <span className="text-red-800">{B} Nm3/h</span>
        </div>
      </div>
      {compwindow ? (
        <CompressorWindow
          compwindow={compwindow}
          setCompwindow={setCompwindow}
          setA={setA}
          setB={setB}
          A={A}
          B={B}
        />
      ) : null}
    </div>
  );
}

export default Compressor;
