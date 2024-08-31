"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectedDriversState,
  selectedCircuitState,
  raceResultsState,
} from "../utils/state";
import { simulateRace } from "../utils/api";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function RaceSimulator() {
  const selectedDrivers = useRecoilValue(selectedDriversState);
  const selectedCircuit = useRecoilValue(selectedCircuitState);
  const [raceResults, setRaceResults] = useRecoilState(raceResultsState);
  const [loading, setLoading] = useState(false);

  const handleSimulateRace = async () => {
    if (selectedDrivers.length === 0 || selectedCircuit === null) {
      alert("Please select drivers and a circuit");
      return;
    }
    setLoading(true);
    const results = await simulateRace(selectedDrivers, selectedCircuit);
    setRaceResults(results as any[]);
    setLoading(false);
  };

  return (
    <div className="mb-6">
      <button
        onClick={handleSimulateRace}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Simulate Race
      </button>
      {loading && <LoadingSpinner />}
    </div>
  );
}
