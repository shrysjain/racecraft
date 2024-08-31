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
import { Driver, RaceResult } from "../utils/types";

export default function RaceSimulator() {
  const selectedDrivers = useRecoilValue(selectedDriversState);
  const selectedCircuit = useRecoilValue(selectedCircuitState);
  const [raceResults, setRaceResults] =
    useRecoilState<RaceResult[]>(raceResultsState);
  const [loading, setLoading] = useState(false);

  const handleSimulateRace = async () => {
    if (selectedDrivers.length === 0 || selectedCircuit === null) {
      alert("Please select drivers and a circuit");
      return;
    }

    try {
      setLoading(true);
      const results = await simulateRace(
        selectedDrivers.map((driver: Driver) => ({
          id: driver.id,
          name: driver.name,
          skillRating: driver.skillRating,
        })),
        selectedCircuit
      );
      console.log("Race Simulation Results:", results);
      setRaceResults(results as any[]);
    } catch (error) {
      console.error("Error simulating race:", error);
      alert("An error occurred while simulating the race.");
    } finally {
      setLoading(false);
    }
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
