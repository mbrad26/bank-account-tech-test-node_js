const Account = require('../lib/account');

describe('Account', () => {
  it('is defined', () => {
    const account = new Account();
    expect(account).toBeDefined();
  });
});
