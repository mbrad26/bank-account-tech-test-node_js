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
    let spy = jest.spyOn(Transaction, 'addTransaction');

    account.deposit(50);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(50);
  });
});
