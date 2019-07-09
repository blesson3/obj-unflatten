const unflatten = require("../lib");

console.log(unflatten({
    "name.first": "Johnny"
  , "name.last": "B."
  , age: 20
}));
// { name: { first: 'Johnny', last: 'B.' }, age: 20 }

// Custom separator
console.log(unflatten({
    "name-first": "Johnny"
  , "name-last": "B."
  , age: 20
}, "-"));
// { name: { first: 'Johnny', last: 'B.' }, age: 20 }

// Unflatten arrays
console.log(unflatten({
  'name.first': 'Johnny',
  'name.last': 'B.',
  age: 20,
  'phones.0.number': '6639283',
  'phones.1.number': '7766839405'
}, "."));
// { name: { first: 'Johnny', last: 'B.' },
//   age: 20,
//   phones: [ { number: '6639283' }, { number: '7766839405' } ] }
