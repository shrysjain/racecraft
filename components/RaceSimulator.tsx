"use client";

import { useRecoilState } from "recoil";
import {
  selectedDriversState,
  selectedCircuitState,
  raceResultsState,
} from "../utils/state";
import { simulateRace } from "../utils/api";

export default function RaceSimulator() {
  const [selectedDrivers] = useRecoilState(selectedDriversState);
  const [selectedCircuit] = useRecoilState(selectedCircuitState);
  const [raceResults, setRaceResults] = useRecoilState(raceResultsState);

  const handleSimulateRace = async () => {
    if (selectedDrivers.length === 0 || selectedCircuit === null) {
      alert("Please select drivers and a circuit");
      return;
    }
    const results = await simulateRace(selectedDrivers, selectedCircuit);
    setRaceResults(results as any[]);
  };

  return (
    <div>
      <button
        onClick={handleSimulateRace}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Simulate Race
      </button>
    </div>
  );
}
