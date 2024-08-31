"use client";

import { useRecoilValue, useRecoilState } from "recoil";
import TeamSelector from "../components/TeamSelector";
import DriverSelector from "../components/DriverSelector";
import CircuitSelector from "../components/CircuitSelector";
import RaceSimulator from "../components/RaceSimulator";
import RaceTimelapse from "../components/RaceTimelapse";
import Leaderboard from "../components/Leaderboard";
import { raceResultsState } from "../utils/state";

export default function Home() {
  const raceResults = useRecoilValue(raceResultsState);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">RaceCraft Simulation</h1>
      <TeamSelector />
      <DriverSelector />
      <CircuitSelector />
      <RaceSimulator />

      {raceResults && (
        <>
          <RaceTimelapse results={raceResults} />
          <Leaderboard results={raceResults} />
        </>
      )}
    </div>
  );
}
