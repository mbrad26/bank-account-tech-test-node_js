const Account = require('../lib/account');
const Transaction = require('../lib/transaction');

jest.mock('../lib/transaction');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  it('is defined', () => {
    expect(account).toBeDefined();
  });

  it('can make a deposit', () => {
    const addTransaction = jest.fn();
    account.deposit(50);

    expect(addTransaction).toHaveBeenCalledTimes(1);
    expect(addTransaction).toHaveBeenCalledWith(50);
  });
});
