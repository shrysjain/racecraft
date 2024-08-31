"use client";

import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { raceResultsState } from "../utils/state";

export default function RaceTimelapse() {
  const raceResults = useRecoilValue(raceResultsState);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % raceResults.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [raceResults.length]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Race Timelapse</h2>
      <div>
        <pre>{JSON.stringify(raceResults[currentFrame], null, 2)}</pre>
      </div>
    </div>
  );
}
