"use client";

import { useRecoilState } from "recoil";
import { selectedTeamState } from "../utils/state";

const teams = [
  { id: 1, name: "Team A" },
  { id: 2, name: "Team B" },
];

export default function TeamSelector() {
  const [selectedTeam, setSelectedTeam] = useRecoilState(selectedTeamState);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Select Team</h2>
      <select
        value={selectedTeam ?? ""}
        onChange={(e) => setSelectedTeam(Number(e.target.value))}
        className="p-2 border rounded"
      >
        <option value="">Select a team</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
    </div>
  );
}
