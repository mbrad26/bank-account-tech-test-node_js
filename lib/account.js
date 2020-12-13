class Account {
  constructor() {
  };

  deposit = amount => {
    this.transaction.addTransaction(amount);
  };
};

module.exports = Account;
