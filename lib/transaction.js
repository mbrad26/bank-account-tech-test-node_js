class Transaction {
  static transactions = [];

  constructor(credit, debit, updatedBalance) {
    this.date = Date.now();
    this.credit = credit;
    this.debit = debit;
    this.updatedBalance = updatedBalance;
  };

  static addDepositTransaction(amount, updatedBalance) {
    const transaction = new this(amount, null, updatedBalance);

    this.transactions.push(transaction);
  };

  static addWithdrawTransaction(amount, updatedBalance) {
    const transaction = new Transaction(null, amount, updatedBalance);

    this.transactions.push(transaction);
  };

  static get getTransactions() {
    return this.transactions;
  }
};

module.exports = Transaction;
