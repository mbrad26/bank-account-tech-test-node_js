const Account = require('../lib/account');
const Transaction = require('../lib/transaction');

describe('Account', () => {
  let account;

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

  describe('deposit', () => {
    it('raises an error if amount is < 0', () => {
      const error = 'Please make sure the amount is a positive number!'

      expect(() => account.deposit(-25)).toThrow(error);
    });
  });
});
