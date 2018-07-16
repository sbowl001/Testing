const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
beforeEach(() => {
  arr = [ 1 ,2 ,3 ,4 ]
});
describe('Arrays', () => {
  describe('each', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    });
    it('should call a callback for each item', ()=> {
      const newArr = [];
      const cb = jest.fn((item) => {
        newArr.push(item)
      })
      arrayFunctions.each(arr, cb)
      expect(newArr).toEqual(arr)
      expect(cb.mock.calls.length).toBe(4)
    })  
    //Don't get solution here. CB explanation? 
  });

  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('should return a new array with mapped items', ()=> {
      const cb  = (item) => {
        return item + 1;
      }
      const newArr = arrayFunctions.map(arr, cb)
      expect(newArr).not.toBe(arr)
      expect(newArr).toEqual([2, 3 , 4 , 5])
    })
  });
  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });
    it('should reduce an array', ()=> { 
      const cb = jest.fn((a , b) => {
        return a + b
      })
      const sum = arrayFunctions.reduce(arr, cb);
      expect(sum).toBe(10)
  
    });
  });

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });
    it('should return an item that has be called', ()=> {
      const cb = (item ) => { 
        if (item > 3) {
          return true;
        }
        return false;
      }
      const find = arrayFunctions.find(arr, cb);
      expect(find).toBe(4); 
    })
  });
  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });
    it('should return the results of a filter cb', () => {
      const cb = (item) => {
        return item % 2 === 0
      }
      const filter = arrayFunctions.filter(arr, cb);
      expect(filter).toEqual([2, 4]);
    });
  });
  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    });
    it('should flatten an array', () => {
      const newArr = [1, [2 , [3 , [4]]]]
      const flatten = arrayFunctions.flatten(newArr);
      expect(flatten).toEqual(arr);
    })
   
  });
});

 

// const flatten = elements => {
//   const flattenedArr = reduce(
//     elements,
//     (memo, item) => {
//       if (Array.isArray(item)) return memo.concat(flatten(item));
//       return memo.concat(item);
//     },
//     []
//   );
//   return flattenedArr;
// };