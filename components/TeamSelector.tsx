"use client";

import { useRecoilState } from "recoil";
import { selectedTeamState } from "../utils/state";

const teams = [
  { id: 1, name: "Red Bull" },
  { id: 2, name: "McLaren" },
  { id: 3, name: "Ferrari" },
  { id: 4, name: "Mercedes" },
  { id: 5, name: "Aston Martin" },
  { id: 6, name: "Visa CashApp RB" },
  { id: 7, name: "Haas" },
  { id: 8, name: "Alpine" },
  { id: 9, name: "Williams" },
  { id: 10, name: "Stake Kick Sauber" },
];

export default function TeamSelector() {
  const [selectedTeam, setSelectedTeam] = useRecoilState(selectedTeamState);

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Select Team</h2>
      <select
        value={selectedTeam ?? ""}
        onChange={(e) => setSelectedTeam(Number(e.target.value))}
        className="p-2 border rounded w-full bg-white"
      >
        <option value="" disabled>
          Select a team
        </option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
    </div>
  );
}
