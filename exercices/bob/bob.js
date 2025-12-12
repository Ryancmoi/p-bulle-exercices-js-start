//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (message.trim().endsWith("?")) {
    if (/[A-Z]/.test(message) && !/[a-z]/.test(message)) {
      return "Calm down, I know what I'm doing!";
    }
    return "Sure.";
  } else if (message.match(/^[A-Z]+$/)) {
    return "Whoa, chill out!";
  }
  if (/[a-zA-Z\d]/.test(message)) {
    if (!/[a-z]/.test(message) && /[A-Z]/.test(message)) {
      return "Whoa, chill out!";
    } else {
      return "Whatever.";
    }
  } else {
    return "Fine. Be that way!";
  }
};
