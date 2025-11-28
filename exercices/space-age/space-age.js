//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSeconds) => {
  if (planet === "earth") {
    return Number((ageInSeconds / 31557600).toFixed(2));
  } else if (planet === "mercury") {
    return Number(
      (ageInSeconds / (365.25 * 0.2408467 * 60 * 60 * 24)).toFixed(2)
    );
  } else if (planet === "venus") {
    return Number(
      (ageInSeconds / (365.25 * 0.61519726 * 60 * 60 * 24)).toFixed(2)
    );
  } else if (planet === "mars") {
    return Number(
      (ageInSeconds / (365.25 * 1.8808158 * 60 * 60 * 24)).toFixed(2)
    );
  } else if (planet === "jupiter") {
    return Number(
      (ageInSeconds / (365.25 * 11.862615 * 60 * 60 * 24)).toFixed(2)
    );
  } else if (planet === "saturn") {
    return Number(
      (ageInSeconds / (365.25 * 29.447498 * 60 * 60 * 24)).toFixed(2)
    );
  } else if (planet === "uranus") {
    return Number(
      (ageInSeconds / (365.25 * 84.016846 * 60 * 60 * 24)).toFixed(2)
    );
  } else if (planet === "neptune") {
    return Number(
      (ageInSeconds / (365.25 * 164.79132 * 60 * 60 * 24)).toFixed(2)
    );
  } else {
    throw new Error("not a planet");
  }
};
