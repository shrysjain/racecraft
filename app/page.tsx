"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getDriverStandings } from "@/utils/api";
import { driverStandingsState } from "@/utils/state";

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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">RaceCraft 🏎️</h1>
      <pre>{JSON.stringify(driverStandings, null, 2)}</pre>
    </div>
  );
};

export default Home;
