"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedCircuitState } from "../utils/state";
import { fetchCircuits } from "../utils/api";

export default function CircuitSelector() {
  const [circuits, setCircuits] = useState<any[]>([]);
  const [selectedCircuit, setSelectedCircuit] =
    useRecoilState(selectedCircuitState);

  useEffect(() => {
    const loadCircuits = async () => {
      const data = await fetchCircuits();
      setCircuits(data as any[]);
    };
    loadCircuits();
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Select Circuit</h2>
      <select
        value={selectedCircuit ?? ""}
        onChange={(e) => setSelectedCircuit(Number(e.target.value))}
        className="p-2 border rounded w-full bg-white"
      >
        <option value="" disabled>
          Select a circuit
        </option>
        {circuits.map((circuit) => (
          <option key={circuit.id} value={circuit.id}>
            {circuit.name}
          </option>
        ))}
      </select>
    </div>
  );
}
