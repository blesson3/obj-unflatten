
# obj-unflatten [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/obj-unflatten.svg)](https://www.npmjs.com/package/obj-unflatten) [![Downloads](https://img.shields.io/npm/dt/obj-unflatten.svg)](https://www.npmjs.com/package/obj-unflatten) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Convert flatten objects in nested ones.

## :cloud: Installation

```sh
$ npm i --save obj-unflatten
```


## :clipboard: Example



```js
const unflatten = require("obj-unflatten");

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
```

## :memo: Documentation


### `unflattenObject(flatten, separator)`
Convert flatten objects in nested ones.

#### Params
- **Object** `flatten`: The flatten object that should be converted.
- **Object** `separator`: The field separator (default: `"."`).

#### Return
- **Object** Unflatten object



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :sparkles: Related

 - [`obj-flatten`](https://github.com/IonicaBizau/obj-flatten) – Convert nested objects in flatten ones.



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
