import { Driver, Circuit, RaceResult } from "./types";

function calculateDriverPerformance(skillRating: number) {
  const randomFactor = Math.random() * 10;
  return skillRating + randomFactor;
}

export function simulateRace(
  drivers: Driver[],
  circuit: Circuit
): RaceResult[] {
  const driverPerformances = drivers.map((driver) => {
    const performance = calculateDriverPerformance(driver.skillRating);
    return {
      driver,
      performance,
    };
  });

  driverPerformances.sort((a, b) => b.performance - a.performance);

  return driverPerformances.map((entry, index) => ({
    driver: entry.driver,
    position: index + 1,
  }));
}
