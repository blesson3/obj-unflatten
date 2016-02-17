"use strict";

const iterateObject = require("iterate-object")
    , isUndefined = require("is-undefined")
    ;

/**
 * unflattenObject
 * Convert flatten objects in nested ones.
 *
 * @name unflattenObject
 * @function
 * @param {Object} flatten The flatten object that should be converted.
 * @param {Object} separator The field separator (default: `"."`).
 * @return {Object} Unflatten object
 */
module.exports = function unflattenObject(flatten, separator) {
    let result = {}
      , parentObj = result
      , keys = Object.keys(flatten);
      ;

    separator = separator || ".";

    iterateObject(keys, key => {
        let subkeys = key.split(separator)
          , last = subkeys.pop()
          ;

        iterateObject(subkeys, subkey => {
            parentObj[subkey] = isUndefined(parentObj[subkey])
                              ? {}
                              : parentObj[subkey]
                              ;

            parentObj = parentObj[subkey];
        });

        parentObj[last] = flatten[key];
        parentObj = result;
    });

    return result;
};
