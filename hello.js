var tbb = require('tree-builder-builder');
var types = tbb.types;
var phase = tbb.phase;

module.exports.hello = phase({
  arity: '0:1',
  input: types.unit,
  output: types.string,
}, function() {
  return 'hello world';
});
