// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return Number(0.5);
    case "Energizer":
      return Number(1.5);
    case "Green Garden":
      return Number(1.5);
    case "Tropical Island":
      return Number(3);
    case "All or Nothing":
      return Number(5);
    default:
      return Number(2.5);
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let actualWedges = 0;
  let iteration = 0;
  while (actualWedges < wedgesNeeded) {
    if (limes.length == 0) {
      return 0;
    }
    if (limes[iteration] == "small") {
      actualWedges += 6;
      iteration++;
      if (iteration == limes.length) {
        break;
      }
    } else if (limes[iteration] == "medium") {
      actualWedges += 8;
      iteration++;
      if (iteration == limes.length) {
        break;
      }
    } else if (limes[iteration] == "large") {
      actualWedges += 10;
      iteration++;
      if (iteration == limes.length) {
        break;
      }
    }
  }
  return Number(iteration);
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
