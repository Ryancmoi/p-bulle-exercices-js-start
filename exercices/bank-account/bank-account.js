//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor(isOpen) {
    this.isOpen = false;
  }

  open() {
    BankAccount.isOpen = true;
  }

  close() {
    BankAccount.isOpen = false;
  }

  deposit(amount) {
    if (!BankAccount.isOpen) {
      throw Error("Le compte n'existe pas");
    } else {
      BankAccount.balance += amount;
    }
  }

  withdraw(amount) {
    if (!BankAccount.isOpen) {
      throw Error("Le compte n'existe pas");
    } else if (BankAccount.balance - amount < 0) {
      throw ValueError;
    } else {
      BankAccount.balance - amount;
    }
  }

  get balance() {
    return this.balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
