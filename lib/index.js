"use strict";

const iterateObject = require("iterate-object")
    , isUndefined = require("is-undefined")
    , typpy = require("typpy")
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

    if (typeof flatten === 'string') {
        return flatten;
    }

    iterateObject(keys, key => {
        let subkeys = key.split(separator)
          , last = subkeys.pop()
            ; 
        iterateObject(subkeys, (subkey, index) => {
            let nextkey = subkeys[index + 1];
            nextkey = !nextkey ? last : nextkey
            const nextParent = isNaN(Number(nextkey)) ? {} : [];
            parentObj[subkey] = isUndefined(parentObj[subkey])
                            ? nextParent
                            : parentObj[subkey]
                            ;

            parentObj = parentObj[subkey];
        });

        parentObj[last] = flatten[key];
        parentObj = result;
    });

    return result;
};
