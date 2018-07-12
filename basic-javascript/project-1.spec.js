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
  const sixteen = helpers.square(4)
  expect(sixteen).toBe(16)
})

it('should give the cube of a number', ()=> {
  const twentyseven = helpers.cube(3)
  expect(twentyseven).toBe(27)
})

it('should raise the power of a number', ()=> {
  const sixteen = helpers.raiseToPower(4, 2)
  expect(sixteen).toBe(16)
})

it('should round a number ', ()=> {
  const up = helpers.roundNumber(8.5)
  const down = helpers.roundNumber(8.4)
  expect(up).toBe(9);
  expect(down).toBe(8);
})

it('should round up a number', () => {
  const nine = helpers.roundUp(8.5)
  const ten = helpers.roundUp(10.2)

  expect(nine).toBe(9)
  expect(ten).toBe(11)
})

it('should add an exclamation point', () => {
  //  expect.stringMatching("!")
  const hi = helpers.addExclamationPoint('Hi');
  expect(hi).toBe('Hi!')
})

it('should combine a first and last name', ()=> {
   const expected = helpers.combineNames('Stephanie', 'B' );
   expect(expected).toBe("Stephanie B")

})

it('get a Greeting', ()=> {
  const expected = helpers.getGreeting('Stephanie');
  expect(expected).toBe('Hello Stephanie!')
  
})
it('should get the area of a rectangle', ()=> {
  const area = helpers.getRectangleArea(5 ,5 )
  expect(area).toBe(25)
})

it('should get the area of a triangle', ()=> {
  const area = helpers.getTriangleArea(4, 5)
  expect(area).toBe(10)
})

it('should get the area of a circle', ()=>{
  const area = helpers.getCircleArea(2)
  expect(area).toBe(12.566370614359172)
})

it('should get the volume of a rectangular prism', ()=> {
  const volume = helpers.getRectangularPrismVolume( 3, 3 ,3 ) 
  expect(volume).toBe(27)
})
});

 