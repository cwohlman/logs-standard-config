// For now be sure to manually check that the logs are outputing in a readable format.

Tinytest.add('Useful Logs - Collection - Log.trace', function (test) {
  var traceId = Random.id();
  Log.trace({traceId: traceId}, 'trace id');

  var traceRecord = Logs.collection.findOne({ traceId: traceId });
  test.equal(traceRecord && _.pick(traceRecord, 'msg', 'traceId'), { msg: 'trace id', traceId: traceId });
});

Tinytest.add('Useful Logs - Collection - Log.debug', function (test) {
  var traceId = Random.id();
  Log.debug({traceId: traceId}, 'trace id');

  var traceRecord = Logs.collection.findOne({ traceId: traceId });
  test.equal(traceRecord && _.pick(traceRecord, 'msg', 'traceId'), { msg: 'trace id', traceId: traceId });
});

Tinytest.add('Useful Logs - Collection - Log.info', function (test) {
  var traceId = Random.id();
  Log.info({traceId: traceId}, 'trace id');

  var traceRecord = Logs.collection.findOne({ traceId: traceId });
  test.equal(traceRecord && _.pick(traceRecord, 'msg', 'traceId'), { msg: 'trace id', traceId: traceId });
});

Tinytest.add('Useful Logs - Collection - Log.warn', function (test) {
  var traceId = Random.id();
  Log.warn({traceId: traceId}, 'trace id');

  var traceRecord = Logs.collection.findOne({ traceId: traceId });
  test.equal(traceRecord && _.pick(traceRecord, 'msg', 'traceId'), { msg: 'trace id', traceId: traceId });
});

Tinytest.add('Useful Logs - Collection - Log.error', function (test) {
  var traceId = Random.id();
  Log.error({traceId: traceId}, 'trace id');

  var traceRecord = Logs.collection.findOne({ traceId: traceId });
  test.equal(traceRecord && _.pick(traceRecord, 'msg', 'traceId'), { msg: 'trace id', traceId: traceId });
});

Tinytest.add('Useful Logs - Collection - Log.fatal', function (test) {
  var traceId = Random.id();
  Log.fatal({traceId: traceId}, 'trace id');

  var traceRecord = Logs.collection.findOne({ traceId: traceId });
  test.equal(traceRecord && _.pick(traceRecord, 'msg', 'traceId'), { msg: 'trace id', traceId: traceId });
});
