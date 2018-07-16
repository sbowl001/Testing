const objectFunctions = require('./objects');


beforeEach(()=>{
  obj = { a: 1, b: 2}
});

describe('objects', () => {
  it('should be return keys', () => {
    const keys = objectFunctions.keys(obj)
    expect(keys).toEqual(['a', 'b'])
 
  });
  it('should return values', ()=> {
    const values = objectFunctions.values(obj)
    expect(values).toEqual([1, 2])
  });

  it('should return an object with mapped values', ()=> {
    const cb = (item) => {
      return item + 1;
    }
    const mapped = objectFunctions.mapObject(obj, cb);
    expect(mapped).toEqual({ a: 2, b: 3})
  })
  it('should return an array with key value pairs', () => {
    const arr = [['a', 1], ['b', 2]];
    const pairs = objectFunctions.pairs(obj);
    expect(pairs).toEqual(arr); 
  })
  it('should return an object with key/values inverted', () => {
    const newObj = { 1: 'a', 2: 'b'}
    const swapped = objectFunctions.invert(obj)
    expect(swapped).toEqual(newObj);
  })
  it('should return an obj with default props added', ()=> {
    const defaults = {
      name: 'He',
      a: 2
    }
    objectFunctions.defaults(obj, defaults)
    expect(obj.name).toBe('He');
    expect(obj.a).toBe(1);
    expect(obj.a).not.toBe(2);
  })

});


 

// const defaults = (obj, defaultProps) => {
//   Object.keys(defaultProps).forEach((key) => {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) return;
//     obj[key] = defaultProps[key];
//   });
//   return obj;
// };