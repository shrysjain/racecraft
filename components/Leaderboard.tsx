"use client";

import { RaceResult } from "../utils/types";

interface LeaderboardProps {
  results: RaceResult[];
}

export default function Leaderboard({ results }: LeaderboardProps) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Final Leaderboard</h2>
      <ol className="list-decimal pl-6">
        {results.map((result) => (
          <li key={result.driver.id} className="mb-2">
            {result.driver.name} - Position {result.position}
          </li>
        ))}
      </ol>
    </div>
  );
}
