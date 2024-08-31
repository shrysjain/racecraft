"use client";

import { useRecoilValue } from "recoil";
import { raceResultsState } from "../utils/state";

export default function Leaderboard() {
  const raceResults = useRecoilValue(raceResultsState);

  if (!raceResults || raceResults.length === 0) {
    return <div>No race results available for the leaderboard.</div>;
  }

  // Check and log the race results
  console.log("Race Results for Leaderboard:", raceResults);

  // Sort results by position (ascending)
  const sortedResults = [...raceResults].sort(
    (a, b) => a.position - b.position
  );

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {sortedResults.map((result) => (
          <li key={result.driverId}>
            {result.driverName} - Position: {result.position}, Points:{" "}
            {result.points}
          </li>
        ))}
      </ul>
    </div>
  );
}
