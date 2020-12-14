const Transaction = require('./transaction');

class Account {
  constructor({ Transaction }) {
    this.transaction = Transaction;
  };

  deposit = amount => {
    if(amount < 0) throw new Error('Please make sure the amount is a positive number!');

    this.transaction.addDepositTransaction(amount);
  };

  withdraw = amount => {
    if(amount < 0) throw new Error('Please make sure the amount is a positive number!');

    this.transaction.addWithdrawTransaction(amount);
  };
};

module.exports = Account;
