"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedDriversState } from "../utils/state";
import { fetchDrivers } from "../utils/api";
import LoadingSpinner from "./LoadingSpinner";

export default function DriverSelector() {
  const [drivers, setDrivers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDrivers, setSelectedDrivers] =
    useRecoilState(selectedDriversState);

  useEffect(() => {
    const loadDrivers = async () => {
      const data = await fetchDrivers();
      setDrivers(data as any[]);
      setLoading(false);
    };
    loadDrivers();
  }, []);

  if (loading) return <LoadingSpinner />;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    const driver = drivers.find((driver) => driver.id === value);
    if (driver && !selectedDrivers.includes(driver)) {
      setSelectedDrivers((prev) => [...prev, driver]);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Select Drivers</h2>
      <select
        onChange={handleChange}
        className="p-2 border rounded w-full bg-white"
      >
        <option value="" disabled>
          Select a driver
        </option>
        {drivers.map((driver) => (
          <option key={driver.id} value={driver.id}>
            {driver.name}
          </option>
        ))}
      </select>
    </div>
  );
}
