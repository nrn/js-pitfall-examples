var input = [ 'foo', 'bar', 'baz'];
var orderedOutput = []; // or is it?
input.forEach(function (thing, i) {
  doAsyncThing(thing, function (err, results) {
    orderedOutput[i] = results;
    // 'i' here is the i that corresponds
    // to the correct item.
    console.log(orderedOutput);
  })
})
function doAsyncThing (thing, callback) {
  // wait up to a second.
  setTimeout(function () {
    callback(null, 'We got: ' + thing)
  }, 1000 * Math.random());
}