const Transaction = require('../lib/transaction');

describe('Transaction', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1608204215428);
  });

  it('is defined', () => {
    expect(Transaction).toBeDefined();
  });

  describe('addDepositTransaction', () => {
    it('registers a deposit transaction', () => {
      const transaction = { date: Date.now(), credit: 50, debit: null };

      expect(Transaction.transactions).toEqual([]);

      Transaction.addDepositTransaction(50);

      expect(Transaction.transactions).toContainEqual(transaction);
    });
  });

  describe('addWithdrawTransaction', () => {
    it('registers a withdrawal transaction', () => {
      const transaction = { date: Date.now(), credit: null, debit: 25 };

      Transaction.addWithdrawTransaction(25);

      expect(Transaction.transactions).toContainEqual(transaction);
    });
  });
});
