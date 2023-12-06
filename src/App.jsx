import { useState } from "react";
import "./App.css";
import Compressor from "./components/compressor";

function App() {
  const [instances, setInstances] = useState([1, 1, 1]);

  const handleInstance = () => {
    setInstances([...instances, 1]);
  };

  return (
    <div className="flex flex-col justify-between gap-y-1.5">
      <h1 className="text-4xl text-red-600">Compressor Component Simulation</h1>
      {instances.map(() => (
        <Compressor width="w-6" color="bg-red-500" key={Math.random() * 10} />
      ))}

      <button
        className="mt-40 p-4 bg-sky-600 rounded-lg 
      shadow-lg w-[200px] h-[50px] self-center"
        onClick={handleInstance}
      >
        {" "}
        Add Instance
      </button>
    </div>
  );
}

export default App;
