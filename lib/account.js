const Transaction = require('./transaction');

class Account {
  constructor({ Transaction }) {
    this.transaction = Transaction;
  };

  deposit = amount => {
    this.transaction.addTransaction(amount);
  };
};

module.exports = Account;
