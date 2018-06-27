const helpers = require('./project-1');

// start testing!
const multiplyByTen = num => {
    return num * 10;
  };
it('should multiply a number by 10', () => {
    const fifty = multiplyByTen(5)
    expect(fifty).toBe(50)
});