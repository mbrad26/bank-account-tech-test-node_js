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
      const transaction = new Transaction(50, null);

      expect(Transaction.transactions).toEqual([]);

      Transaction.addDepositTransaction(50);

      expect(Transaction.transactions).toContainEqual(transaction);
    });
  });
});
