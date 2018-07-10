const 
  
 /* multiplyByTen, subtractFive, areSameLength, areEqual,
     lessThanNinety, greaterThanFifty, add, subtract, divide, multiply,
    getRemainder, isEven, isOdd, square, cube, raiseToPower, roundNumber, roundUp,
addExclamationPoint, combineNames*/
helpers = require('./project-1');

// start testing!
describe('Project 1 tests', () => { 
it('should multiply a number by 10', () => {
    const fifty = helpers.multiplyByTen(5)
    expect(fifty).toBe(50)
})


 it('should subtract a number by 5 ', () => {
     const five = helpers.subtractFive(10)
     expect(five).toBe(5)
 })


it('should equate the length of two strings', ()=> {
    const sameLength = helpers.areSameLength( "yes", "nop");
    const notSame = helpers.areSameLength("yess", "no");
    expect(sameLength).toBe(true);
    expect(notSame).toBe(false);
})


it('should tell if two values are equal', ()=> {
    const sameValue = helpers.areEqual(1, 1);
    const notSame = helpers.areEqual(false, true);
    expect(sameValue).toBe(true);
    expect(notSame).toBe(false);
})


it("should determine if a number is less than 90", ()=> {
    const yes = helpers.lessThanNinety(80)
    const no = helpers.lessThanNinety(90)
    expect(yes).toBe(true)
    expect(no).toBe(false)
})

it('should determine if a number is greater than 50 ', () => {
    const yes = helpers.greaterThanFifty(60)
    const no = helpers.greaterThanFifty(40)
    expect(yes).toBe(true)
    expect(no).toBe(false)
}) 

it('should add two numbers together', () => {
    const eleven = helpers.add(5, 6)
    expect(eleven).toBe(11);
})

it('should subtract a number from another', () =>{
    const one = helpers.subtract(9, 8)
    expect(one).toBe(1);
})


it('should divide two numbers', ()=> {
    const five = helpers.divide(25, 5)
    expect(five).toBe(5);
})

it('should multiply two numbers', ()=> {
    const twenty = helpers.multiply(4, 5)
    expect(twenty).toBe(20);
})

it('should give the remainder of a number', ()=> {
    const four = helpers.getRemainder(24, 5)
    expect(four).toEqual(4)
})

it('should check if a number is even', () =>{
  const yes = helpers.isEven(10)
  const no = helpers.isEven(11)
  expect(yes).toBe(true);
  expect(no).toBe(false);
})

it('should check if a number is odd', () => {
  const yes = helpers.isOdd(13)
  const no = helpers.isOdd(12)
  expect(yes).toBe(true);
  expect(no).toBe(false);
})

it('should check the square of a number', ()=> {
  const sixteen = square(4)
  expect(sixteen).toBe(16)
})

it('should give the cube of a number', ()=> {
  const twentyseven = cube(3)
  expect(twentyseven).toBe(27)
})

it('should raise the power of a number', ()=> {
  const sixteen = raiseToPower(4, 2)
  expect(sixteen).toBe(16)
})

it('should round a number ', ()=> {
  const rounded = roundNumber(8.3)
  expect(rounded).toBe(8)
})

it('should round up a number', () => {
  const ceiling = roundUp(8.5)
  expect(ceiling).toBe(9)
})

it('should add an exclamation point', () => {
   expect.stringMatching("!")
})

it('should combine a first and last name', ()=> {
  const expected = combineNames(x, y);
  expect.stringMatching(`${expected}`)

})

it('get a Greeting', ()=> {
  
})
});
/*

const combineNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  return length * width;
};

const getTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  return width * height * length;
};

 */ 