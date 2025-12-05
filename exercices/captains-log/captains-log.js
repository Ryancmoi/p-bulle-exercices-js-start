// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return "NCC-" + (Math.trunc(Math.random() * 9000) + 1000);
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.trunc(Math.random() * (42000.0 - 41000.0)) + 41000.0;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let classes = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  let randomIndex = Math.trunc(Math.random() * 10);
  return String(classes[randomIndex]);
}
