class Transaction {
  static transactions = [];

  constructor(credit, debit) {
    this.date = Date.now();
    this.credit = credit;
    this.debit = debit;
  }

  static addDepositTransaction(amount) {
    const transaction = new this(amount, null);

    this.transactions.push(transaction);
  };

  static addWithdrawTransaction() {

  };
};

module.exports = Transaction;
