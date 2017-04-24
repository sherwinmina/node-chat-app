const expect = require('expect');
const {isRealString} = require('./validation');

describe('isReal String', () => {
  it('should reject non-string values', () => {
    var res = isRealString(98);

    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('  ');
    expect(res).toBe(false);
  });

  it('sshould allow string with a non-space characters', () => {
    var res = isRealString(' Sherwin ');
    expect(res).toBe(true);
  });
})