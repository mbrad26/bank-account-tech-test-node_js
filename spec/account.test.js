const Account = require('../lib/account');
const Transaction = require('../lib/transaction');
const Printer = require('../lib/printer');

describe('Account', () => {
  let account;
  const error = 'Please make sure the amount is a positive number!';

  beforeEach(() => {
    account = new Account({ Transaction });
  });

  it('is defined', () => {
    expect(account).toBeDefined();
  });

  it('can make a deposit', () => {
    let spy = jest.spyOn(Transaction, 'addDepositTransaction');

    account.deposit(50);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(50);
  });

  it('can make a withdrawal', () => {
    let spy = jest.spyOn(Transaction, 'addWithdrawTransaction');

    account.withdraw(25);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(25);
  });

  it('prints a statement', () => {
    let spy = jest.spyOn(Printer, 'printStatement');

    account.statement();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('deposit', () => {
    it('raises an error if amount is < 0', () => {
      expect(() => account.deposit(-25)).toThrow(error);
    });
  });

  describe('withdraw', () => {
    it('raises an error if amount is < 0', () => {
      expect(() => account.withdraw(-25)).toThrow(error);
    });
  });
});
