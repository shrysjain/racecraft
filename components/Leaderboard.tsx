"use client";

import { useRecoilValue } from "recoil";
import { raceResultsState } from "../utils/state";

export default function Leaderboard() {
  const raceResults = useRecoilValue(raceResultsState);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
      <ul>
        {raceResults.map((result) => (
          <li key={result.driverId} className="mb-2">
            {result.position}. {result.driverName} - {result.points} points
          </li>
        ))}
      </ul>
    </div>
  );
}
