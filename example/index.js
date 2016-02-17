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
