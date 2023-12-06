import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function CompressorWindow({ compwindow, setCompwindow, setA, setB, A, B }) {
  const [tempA, setTempA] = useState(A);
  const [tempB, setTempB] = useState(B);

  const handleTempA = (e) => {
    setTempA(e.target.value);
  };
  const handleTempB = (e) => {
    setTempB(e.target.value);
  };

  const handleUpdate = () => {
    setA(tempA);
    setB(tempB);
    setCompwindow(!compwindow);
  };

  return (
    <div className="absolute self-center top-20">
      <div
        className=" bg-white flex justify-center items-center w-[750px] h-[250px] shadow-xl 
    z-50 self-center rounded-lg gap-20 mt-10 relative border-sky-100 border-2"
      >
        <div>
          A:{" "}
          <input
            type="number"
            value={tempA}
            onChange={handleTempA}
            className="text-red-800 ml-2 w-40 h-10 border-2 border-blue-800 text-center rounded-md shadow-md"
          />{" "}
          Nm3/h
        </div>
        <div className="  w-40 h-20 ml-10 items-center flex justify-center">
          B:{" "}
          <input
            type="number"
            value={tempB}
            onChange={handleTempB}
            className="text-red-800 ml-2 w-40 h-10 border-2 border-blue-800 text-center rounded-md shadow-md"
          />{" "}
          Nm3/h
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute top-4 right-4 cursor-pointer"
          size="2xl"
          onClick={() => {
            setCompwindow(!compwindow);
          }}
        />
        <button
          className="absolute bottom-4 cursor-pointer border-2 border-sky-800 p-2 
        rounded-md bg-green-800 text-white w-40 h-10 text-center hover:bg-green-700"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default CompressorWindow;
