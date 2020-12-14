const Transaction = require('./transaction');

class Account {
  constructor({ Transaction }) {
    this.transaction = Transaction;
  };

  deposit = amount => {
    this.transaction.addDepositTransaction(amount);
  };

  withdraw = amount => {
    this.transaction.addWithdrawTransaction(amount);
  }
};

module.exports = Account;
