// (function() {
//     const lib = {
//         SumCoords: function(a) {
//             return a.x + a.y
//         }
//     }
//     window.aaa = lib;
//     return lib;
// })();

// https://riptutorial.com/javascript/example/16339/universal-module-definition--umd-

// (function (root, factory) {
//     if (typeof define === 'function' && define.amd) {
//         // AMD. Register as an anonymous module.
//         console.log(`aaa: AMD`);
//         define(['exports'], factory);
//     } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
//         // CommonJS
//         console.log(`aaa: CommonJS`);
//         factory(exports);
//     } else {
//         // Browser globals
//         console.log(`aaa: Browser`);
//         factory((root.commonJsStrict = {}));
//     }
// }(this, function (exports) {

//     // attach properties to the exports object to define
//     // the exported module properties.

//     exports.SumCoords = function(a) {
//         return a.x + a.y
//     }
// }));


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        console.log(`aaa: AMD`);
        define(['b'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        console.log(`aaa: Node`);
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        console.log(`aaa: Browser`);
        root.returnExports = factory(root.b);
    }
  }(this, function () {
  
    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {
        SumCoords: function(a) {
            return a.x + a.y
        }
    }
  }));