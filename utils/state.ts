import { atom } from "recoil";
import { Circuit, Driver } from "./types";

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

export const selectedDriversState = atom<Driver[]>({
  key: "selectedDriversState",
  default: [],
});

export const selectedCircuitState = atom<Circuit | null>({
  key: "selectedCircuitState",
  default: null,
});

export const raceResultsState = atom<any[]>({
  key: "raceResultsState",
  default: [],
});
