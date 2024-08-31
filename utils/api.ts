import axios from "axios";

const BASE_URL = "https://ergast.com/api/f1";

const driversData = [
  { id: 1, name: "Driver A" },
  { id: 2, name: "Driver B" },
];

const circuitsData = [
  { id: 1, name: "Circuit A" },
  { id: 2, name: "Circuit B" },
];

export async function fetchDrivers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(driversData), 500);
  });
}

export async function fetchCircuits() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(circuitsData), 500);
  });
}

export async function simulateRace(drivers: number[], circuit: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = drivers.map((driverId, index) => ({
        driverId,
        driverName: `Driver ${String.fromCharCode(65 + index)}`,
        position: index + 1,
        points: Math.floor(Math.random() * 100),
      }));
      resolve(results);
    }, 1000);
  });
}

export const getDriverStandings = async (season: string) => {
  const response = await axios.get(
    `${BASE_URL}/${season}/driverStandings.json`
  );
  return response.data;
};

export const getConstructorStandings = async (season: string) => {
  const response = await axios.get(
    `${BASE_URL}/${season}/constructorStandings.json`
  );
  return response.data;
};

export const getCircuitInfo = async (season: string) => {
  const response = await axios.get(`${BASE_URL}/${season}/circuits.json`);
  return response.data;
};

export const getRaceResults = async (season: string, round: string) => {
  const response = await axios.get(
    `${BASE_URL}/${season}/${round}/results.json`
  );
  return response.data;
};
