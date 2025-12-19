//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  isClosed;
  Balance;

  constructor() {
    this.Balance = 0;
    this.isClosed = true;
  }

  open() {
    if (!this.isClosed) {
      throw new ValueError();
    } else {
      this.isClosed = false;
      this.Balance = 0;
    }
  }

  close() {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      this.isClosed = true;
    }
  }

  deposit(amount) {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      if (amount < 0) {
        throw new ValueError();
      } else {
        this.Balance += amount;
      }
    }
  }

  withdraw(amount) {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      if (amount < 0 || this.balance < amount) {
        throw new ValueError();
      } else {
        this.Balance -= amount;
      }
    }
  }

  get balance() {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      return this.Balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
