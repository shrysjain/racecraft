"use client";

import { useEffect, useState } from "react";
import { RaceResult } from "../utils/types";

interface RaceTimelapseProps {
  results: RaceResult[];
}

export default function RaceTimelapse({ results }: RaceTimelapseProps) {
  const [positions, setPositions] = useState<number[]>(results.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map((pos, index) => pos + Math.random() * 10)
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {results.map((result, index) => (
        <div key={result.driverId} className="flex items-center space-x-4">
          <span className="w-16 text-right">{result.driverName}</span>
          <div
            className="h-4 bg-blue-500"
            style={{ width: `${positions[index]}px` }}
          ></div>
        </div>
      ))}
    </div>
  );
}
