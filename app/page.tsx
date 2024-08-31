"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getDriverStandings } from "@/utils/api";
import { driverStandingsState } from "@/utils/state";
import TeamSelector from "../components/TeamSelector";
import DriverSelector from "../components/DriverSelector";
import CircuitSelector from "../components/CircuitSelector";
import RaceSimulator from "../components/RaceSimulator";
import RaceTimelapse from "../components/RaceTimelapse";
import Leaderboard from "../components/Leaderboard";

const Home = () => {
  const [driverStandings, setDriverStandings] =
    useRecoilState(driverStandingsState);

  useEffect(() => {
    const fetchDriverStandings = async () => {
      const data = await getDriverStandings("2024");
      setDriverStandings(data);
    };

    fetchDriverStandings();
  }, [setDriverStandings]);

  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">RaceCraft 🏎️</h1>
        <TeamSelector />
        <DriverSelector />
        <CircuitSelector />
        <RaceSimulator />
        <RaceTimelapse />
        <Leaderboard />
        <pre>{JSON.stringify(driverStandings, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Home;
