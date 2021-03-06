const Transaction = require('./transaction');
const Printer = require('./printer');

class Account {
  constructor(transaction = Transaction, printer = new Printer) {
    this.transaction = transaction;
    this.printer = printer;
    this.balance = 0;
  };

  deposit = amount => {
    if(amount < 0) throw new Error('Please make sure the amount is a positive number!');

    this.#updateBalance(amount);
    this.transaction.addDepositTransaction(amount, this.balance);
  };

  withdraw = amount => {
    if(amount < 0) throw new Error('Please make sure the amount is a positive number!');
    if(this.balance < amount) throw new Error('Insufficient funds!');

    this.#updateBalance(-amount);
    this.transaction.addWithdrawTransaction(amount, this.balance);
  };

  statement = () => this.printer.printStatement(this.transaction.getTransactions);

  #updateBalance(amount) {
    this.balance += amount;
  }
};

module.exports = Account;
