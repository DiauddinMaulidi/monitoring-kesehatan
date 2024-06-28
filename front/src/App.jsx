import { useEffect, useState, useRef } from "react";
// import "./App.css";
import Thermometer from "./components/Thermometer";
import { HeartBeat } from "./components/Heartbeat";
import Gauge from "./components/Gauge";
import Gauge2 from "./components/Gauge2";
import Liquid from "./components/Liquid";

function App() {
  const [data, setData] = useState({
    suhu: 0,
  });
  const intervalId = useRef(null);

  const getData = () => {
    fetch("http://localhost:8000/suhu")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      getData();
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      <nav className="text-center mb-5">
        <h1 className="font-bold text-3xl pt-5 text-teal-700">MONITORING KESEHATAN</h1>
      </nav>
      <div className="flex flex-wrap justify-center lg:gap-5 gap-3 lg:mt-24">
        <div className="shadow-xl border-2 w-60 p-5 bg-gradient-to-br from-indigo-400 from-20% to-pink-300 rounded-lg">
          <div className="text-center font-bold text-white">
            <p>Suhu Ruangan</p>
          </div>
          <div className="flex justify-center mt-8">
            <Gauge value={data.temperature} />
          </div>
        </div>
        <div className="shadow-xl border-2 w-60 p-5 bg-gradient-to-br from-indigo-400 from-20% to-pink-300 rounded-lg">
          <div className="text-center font-bold text-white">
            <p>Kelembapan Ruangan</p>
          </div>
          <div className="flex justify-center mt-8">
            <Gauge2 value={data.humidity} />
          </div>
        </div>
        <div className="shadow-xl border-2 w-60 p-5 bg-gradient-to-br from-indigo-400 from-20% to-pink-300 rounded-lg">
          <div className="text-center font-bold text-white">
            <p>Suhu Tubuh</p>
          </div>
          <div className="flex justify-center mt-8">
            <Thermometer value={data.bodyTemperature} />
          </div>
        </div>
        <div className="shadow-xl border-2 w-60 p-5 bg-gradient-to-br from-indigo-400 from-20% to-pink-300 rounded-lg">
          <div className="text-center font-bold text-white">
            <p>Detak Jantung</p>
          </div>
          <div className="mt-10 font-bold text-center">
            <HeartBeat />
            <h2 className="text-white text-xl">80 bpm</h2>
          </div>
        </div>
        <div className="shadow-xl border-2 w-60 p-5 bg-gradient-to-br from-indigo-400 from-20% to-pink-300 rounded-lg">
          <div className="text-center font-bold text-white">
            <p>Kadar Oksigen</p>
          </div>
          <div className="mt-10 font-bold text-center">
            <Liquid value={data.bodyTemperature} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
