const {multiplyByTen, subtractFive, areSameLength, areEqual,
     lessThanNinety, greaterThanFifty, add, subtract, divide, multiply,
    getRemainder} = require('./project-1');

// start testing!
 
it('should multiply a number by 10', () => {
    const fifty = multiplyByTen(5)
    expect(fifty).toBe(50)
});

 it('should subtract a number by 5 ', () => {
     const five = subtractFive(10)
     expect(five).toBe(5)
 });


it('should equate the length of two strings', ()=> {
    const sameLength = areSameLength( 1, 1)
    expect(sameLength).toBe(true)
});


it('should equate the values of two variables', ()=> {
    const sameValue = areEqual(1, 1)
    expect(sameValue).toBe(true)
});


it("should return a number less than 90", ()=> {
    const eighty = lessThanNinety(80)
    expect(eighty).toBe(true)
});

it('should return a number greater than 50 ', () => {
    const sixty = greaterThanFifty(60)
    expect(sixty).toBe(true)
}); 

it('should add two numbers together', () => {
    const eleven = add(5, 6)
    expect(eleven).toEqual(11)
});

it('should subtract a number from another', () =>{
    const one = subtract(9, 8)
    expect(one).toEqual(1)
}); 


it('should divide two numbers', ()=> {
    const five = divide(25, 5)
    expect(five).toEqual(5)
});

it('should multiply two numbers', ()=> {
    const twenty = multiply(4, 5)
    expect(twenty).toEqual(20)
}); 

it('should give the remainder of a number', ()=> {
    const four = getRemainder(24, 5)
    expect(four).toEqual(4)
});


/*


 

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  return num * num;
};

const cube = num => {
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  return num ** exponent;
};

const roundNumber = num => {
  return Math.round(num);
};

const roundUp = num => {
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  return (str += '!');
};

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