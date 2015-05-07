var input = [ 'foo', 'bar', 'baz'];
var orderedOutput = []; // or is it?

for (var i = 0; i < input.length; i++) {
  // 'i' right here has the value you expect,
  // counting from 0 to 2. Same with the line
  // below where we get the thing from the input
  // array.
  doAsyncThing(input[i], function (err, results) {
    orderedOutput[i] = results; // 'i' here is 3.
    // why 3? because this is the future.
    // we are referencing the outside i which at
    // this point has gone through the
    // entire array, failed the check
    // to make sure it is shorter than
    // 'input.length' and is sitting there unused.

    console.log(orderedOutput);

    // Each time this function is called i will
    // always be 3, so ordered output will look
    // something like: "[ , , , 'We got: foo' ]"
    // each time it gets logged, with the message
    // changing each time.
  })
}
function doAsyncThing (thing, callback) {
  // wait up to a second.
  setTimeout(function () {
    callback(null, 'We got: ' + thing)
  }, 1000 * Math.random());
}