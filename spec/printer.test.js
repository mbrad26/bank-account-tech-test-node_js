const Printer = require('../lib/printer');
const Transaction = require('../lib/transaction');

describe('Printer', () => {

  beforeEach(() => {
    Date.now = jest.fn(() => 1608204215428);
  });

  it('is defined', () => {
    expect(Printer).toBeDefined();
  });

  describe('printStatement', () => {
    it('prints a statement', () => {
      const printer = new Printer();
      const transactions = [
       { date: Date.now(), credit: 50, debit: '', updatedBalance: 50 },
       { date: Date.now(), credit: '', debit: 20, updatedBalance: 30 },
      ];

      expect(printer.printStatement(transactions)).toEqual(
        'date || credit || debit || balance\n17/12/2020 || 50 ||  || 50\n17/12/2020 ||  || 20 || 30\n'
      );
    });
  });
});
