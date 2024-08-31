"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedDriversState } from "../utils/state";
import { fetchDrivers } from "../utils/api";

export default function DriverSelector() {
  const [drivers, setDrivers] = useState<any[]>([]);
  const [selectedDrivers, setSelectedDrivers] =
    useRecoilState(selectedDriversState);

  useEffect(() => {
    const loadDrivers = async () => {
      const data = await fetchDrivers();
      setDrivers(data as any[]);
    };
    loadDrivers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setSelectedDrivers((prev) => [...prev, value]);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Select Drivers</h2>
      <select onChange={handleChange} className="p-2 border rounded">
        <option value="">Select a driver</option>
        {drivers.map((driver) => (
          <option key={driver.id} value={driver.id}>
            {driver.name}
          </option>
        ))}
      </select>
    </div>
  );
}
