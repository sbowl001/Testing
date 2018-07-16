const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
// beforeEach((() => {
//     arr = [ 1 , 2 ,3 ]
// }))
describe("Project two tests", () =>{ 
  it("gets the biggest variable", () => {
      const x = funcs.getBiggest(2, 1)
      const y = funcs.getBiggest(1, 2)
      expect(x).toBe(2);
      expect(y).toBe(2);
  })

  it('returns a greeting in the correct language', ()=> {
      const german = funcs.greeting('German');
      const spanish = funcs.greeting('Spanish');
      const english = funcs.greeting('Hey');
      expect(german).toBe('Guten Tag!');
      expect(spanish).toBe('Hola!');
      expect(english).toBe('Hello!');
  })


it('returns true if a number is 10 or 5', ()=> {
    const five = funcs.isTenOrFive(5)
    const ten = funcs.isTenOrFive(10)
    const other = funcs.isTenOrFive(3)
    expect(five).toBe(true)
    expect(ten).toBe(true)
    expect(other).toBe(false)
})
it('should show if a number is within a range less than 50 or greater than 20', () => {
    const less = funcs.isInRange(49)
    const greater = funcs.isInRange(21)
    const out = funcs.isInRange(19)
    expect(less).toBe(true)
    expect(greater).toBe(true)
    expect(out).toBe(false)
})

it('should check if a number is an integer', () => {
    const int = funcs.isInteger(2)
    const not = funcs.isInteger(2.2)
    expect(int).toBe(true)
    expect(not).toBe(false)
})

it('should return fizzbuzz if divisible by 3& 5, buzz if by 5, and fizz if by 3', ()=>{
    const both = funcs.fizzBuzz(15);
    const five = funcs.fizzBuzz(25);
    const three = funcs.fizzBuzz(6);
    const none = funcs.fizzBuzz(11);
    expect(both).toBe('fizzbuzz');
    expect(five).toBe('buzz');
    expect(three).toBe('fizz');
    expect(none).toBe(11);
})

it('should return true for a prime number', () => {
    const negative = funcs.isPrime(-1)
    const one = funcs.isPrime(1)
    const zero = funcs.isPrime(0)
    const even = funcs.isPrime(4)
    const prime = funcs.isPrime(11)
    expect(negative).toBe(false)
    expect(one).toBe(false)
    expect(zero).toBe(false)
    expect(even).toBe(false)
    expect(prime).toBe(true)
    
})

it('should return the first number in the array', () => {
    const arr= [1, 2 , 3]
    const first = funcs.returnFirst(arr)
    expect(first).toBe(1)
    expect(first).not.toBe(2)
    expect(first).not.toBe(3)
    // expect(funcs.returnFirst(first)).toBe(1)
})

it('should return the last item in the array', () => {
    const arr= [1, 2 , 3]
    const last= funcs.returnLast(arr)
    expect(last).toBe(3)
    expect(last).not.toBe(2)
    expect(last).not.toBe(1)
})

it('should get the array length', ()=> {
    const arr = [1, 2 , 3]
    const length = funcs.getArrayLength(arr)
    expect(length).toBe(3)
})

it('should increment each number in the array by one' , ()=> {
    const arr = [1, 2]
    const incr = funcs.incrementByOne(arr)
    expect(incr).toEqual([2, 3])

})

it('should add an item to the array', () => {
    const arr = [ 1, 2]
    const incr = funcs.addItemToArray( arr, 3) 
    expect(incr).toEqual([1, 2, 3])
})

it('should add an item to the front of an array', () => {
    const arr = [ 1, 2]
    const front = funcs.addItemToFront(arr, 4)
    expect(front).toEqual([4, 1, 2])

    // const front = funcs.addItemToFront(arr, 4)
    // const first = funcs.returnFirst(arr)
    // expect(first).toBe(4)
})

it("should form a sentence out of words in a string", ()=> {
    const string = funcs.wordsToSentence(['hello', 'hey', 'hallo'])
    expect(string).toEqual('hello hey hallo')
})

it('should check if an item is in an array', ()=> {
    const arr = [1 , 2 , 3]
    const contain = funcs.contains(arr, 3)
    const not = funcs.contains(arr, 4)
    expect(contain).toBe(true)  //tobeTruthy
    expect(not).toBe(false)     //tobeFalsy 
})

it('should add the numbers of an array', ()=> {
    const nums = [1 , 2 , 3]
    const sum = funcs.addNumbers(nums)
    expect(sum).toBe(6)
})
it('should return the average of numbers in an array', ()=> {
    const arr = [1 , 2 ,3]
    const avg = funcs.averageTestScore(arr)
    expect(avg).toBe(2)
})
it('should return the largest number in an array', ()=> {
    const arr = [1 , 2, 3]
    funcs.addItemToFront(arr, 4)
    const largest = funcs.largestNumber(arr)
    expect(largest).toBe(4)
    expect(largest).not.toBe(2)
})
});
/* 
 
  

 
const largestNumber = numbers => {
  let biggestInteger = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestInteger) {
      biggestInteger = numbers[i];
    }
  }
  return biggestInteger;
}; 
*/