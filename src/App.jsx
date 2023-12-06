import "./App.css";
import Compressor from "./components/compressor";

function App() {
  return (
    <div className="flex flex-col justify-between gap-y-1.5">
      <h1 className="text-4xl text-red-600">Compressor Component Simulation</h1>
      <Compressor width="w-6" color="bg-red-500" />
      <Compressor width="w-10" color="bg-cyan-500" />
      <Compressor width="w-20" color="bg-sky-500" />
    </div>
  );
}

export default App;
