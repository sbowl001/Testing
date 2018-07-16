const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});


// const keys = (obj) => {
//   return Object.keys(obj);
// };

// const values = (obj) => {
//   return Object.keys(obj).map((key) => {
//     return obj[key];
//   });
// };

// const mapObject = (obj, cb) => {
//   Object.keys(obj).forEach((key) => (obj[key] = cb(obj[key])));
//   return obj;
// };

// const pairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);

// const invert = (obj) => {
//   Object.keys(obj).forEach((key) => {
//     const newKey = obj[key];
//     obj[newKey] = key;
//     delete obj[key];
//   });
//   return obj;
// };

// const defaults = (obj, defaultProps) => {
//   Object.keys(defaultProps).forEach((key) => {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) return;
//     obj[key] = defaultProps[key];
//   });
//   return obj;
// };