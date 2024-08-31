import { atom } from "recoil";

export const driverStandingsState = atom({
  key: "driverStandingsState",
  default: null,
});

export const constructorStandingsState = atom({
  key: "constructorStandingsState",
  default: null,
});

export const circuitInfoState = atom({
  key: "circuitInfoState",
  default: null,
});

export const selectedTeamState = atom<number | null>({
  key: "selectedTeamState",
  default: null,
});

export const selectedDriversState = atom<number[]>({
  key: "selectedDriversState",
  default: [],
});

export const selectedCircuitState = atom<number | null>({
  key: "selectedCircuitState",
  default: null,
});

export const raceResultsState = atom<any[]>({
  key: "raceResultsState",
  default: [],
});
