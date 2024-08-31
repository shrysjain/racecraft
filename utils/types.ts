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

export interface RaceResult {
  driver: Driver;
  position: number;
}
