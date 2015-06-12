// broken
(function () {
  "use strict";
    (function () {
      setTimeout(" var win = this; win.foo = 'bar'; console.log(exports.foo) ; console.log(global.foo)", 10)
    })()
})()
