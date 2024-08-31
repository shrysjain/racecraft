import axios from "axios";
import { Driver, Circuit, RaceResult } from "@/utils/types";

const BASE_URL = "https://ergast.com/api/f1";

const driversData = [
  { id: 1, name: "Pierre Gasly" },
  { id: 2, name: "Esteban Ocon" },
  { id: 3, name: "Fernando Alonso" },
  { id: 4, name: "Lance Stroll" },
  { id: 5, name: "Charles Leclerc" },
  { id: 6, name: "Carlos Sainz" },
  { id: 7, name: "Nico Hulkenberg" },
  { id: 8, name: "Kevin Magnussen" },
  { id: 9, name: "Lando Norris" },
  { id: 10, name: "Oscar Piastri" },
  { id: 11, name: "Lewis Hamilton" },
  { id: 12, name: "George Russell" },
  { id: 13, name: "Sergio Perez" },
  { id: 14, name: "Max Verstappen" },
  { id: 15, name: "Valtteri Bottas" },
  { id: 16, name: "Zhou Guanyu" },
  { id: 17, name: "Daniel Ricciardo" },
  { id: 18, name: "Yuki Tsunoda" },
  { id: 19, name: "Alex Albon" },
  { id: 20, name: "Logan Sargeant" },
  { id: 21, name: "Franco Colapinto" },
];

const circuitsData = [
  { id: 1, name: "Bahrain International Circuit" },
  { id: 2, name: "Jeddah Corniche Circuit" },
  { id: 3, name: "Melbourne GP Circuit" },
  { id: 4, name: "Suzuka Circuit" },
  { id: 5, name: "Shanghai International Circuit" },
  { id: 6, name: "Miami International Autodrome" },
  { id: 7, name: "Autodromo Enzo e Dino Ferrari" },
  { id: 8, name: "Circuit de Monaco" },
  { id: 9, name: "Circuit Gilles Villeneuve" },
  { id: 10, name: "Circuit de Barcelona-Catalunya" },
  { id: 11, name: "Red Bull Ring" },
  { id: 12, name: "Silverstone Circuit" },
  { id: 13, name: "Hungaroring" },
  { id: 14, name: "Spa-Francorchamps" },
  { id: 15, name: "Circuit Zandvoort" },
  { id: 16, name: "Autodromo Nazionale Monza" },
  { id: 17, name: "Baku City Circuit" },
  { id: 18, name: "Marina Bay Street Circuit" },
  { id: 19, name: "Circuit of the Americas" },
  { id: 20, name: "Autódromo Hermanos Rodríguez" },
  { id: 21, name: "Autódromo José Carlos Pace" },
  { id: 22, name: "Las Vegas Street Circuit" },
  { id: 23, name: "Losail Circuit" },
  { id: 24, name: "Yas Marina Circuit" },
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

export async function simulateRace(
  selectedDrivers: Driver[],
  selectedCircuit: Circuit
): Promise<RaceResult[]> {
  const results = selectedDrivers.map((driver, index) => ({
    driverId: Number(driver.id),
    driverName: driver.name,
    position: index + 1,
    points: Math.floor(Math.random() * 50) + 1,
  }));

  return results;
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
