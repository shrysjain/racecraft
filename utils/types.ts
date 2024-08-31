export interface Driver {
  id: string;
  name: string;
  skillRating: number;
}

export interface Circuit {
  id: string;
  name: string;
  length: number; // km
  laps: number;
}

export type RaceResult = {
  driverId: number;
  driverName: string;
  position: number;
  points: number;
};
