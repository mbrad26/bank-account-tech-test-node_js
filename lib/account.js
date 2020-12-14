const Transaction = require('./transaction');
const Printer = require('./printer');

class Account {
  constructor(transaction = Transaction, printer = new Printer) {
    this.transaction = transaction;
    this.printer = printer;
  };

  deposit = amount => {
    if(amount < 0) throw new Error('Please make sure the amount is a positive number!');

    this.transaction.addDepositTransaction(amount);
  };

  withdraw = amount => {
    if(amount < 0) throw new Error('Please make sure the amount is a positive number!');

    this.transaction.addWithdrawTransaction(amount);
  };

  statement = () => this.printer.printStatement();
};

module.exports = Account;
