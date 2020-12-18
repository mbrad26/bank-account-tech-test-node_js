const Transaction = require('../lib/transaction');

describe('Transaction', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1608204215428);
  });

  afterEach(() => {
    Transaction.transactions = [];
  });

  it('is defined', () => {
    expect(Transaction).toBeDefined();
  });

  describe('addDepositTransaction', () => {
    it('registers a deposit transaction', () => {
      const transaction = { date: Date.now(), credit: 50, debit: null, updatedBalance: 50 };

      expect(Transaction.transactions).toEqual([]);

      Transaction.addDepositTransaction(50, 50);

      expect(Transaction.getTransactions).toContainEqual(transaction);
    });
  });

  describe('addWithdrawTransaction', () => {
    it('registers a withdrawal transaction', () => {
      const transaction = { date: Date.now(), credit: null, debit: 20, updatedBalance: 30 };

      Transaction.addDepositTransaction(50, 50);
      Transaction.addWithdrawTransaction(20, 30);

      expect(Transaction.transactions.slice(-1)[0]).toEqual(transaction);
    });
  });
});
