// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let sameCard = 0;
  stack.forEach((onecard) => {
    if (onecard == card) {
      sameCard++;
    }
  });
  return Number(sameCard);
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let oddCards = 0;
  let evenCards = 0;
  for (let cards of stack) {
    if (cards % 2 == 0) {
      evenCards++;
    } else {
      oddCards++;
    }
  }
  if (type) {
    return Number(evenCards);
  } else {
    return Number(oddCards);
  }
}
