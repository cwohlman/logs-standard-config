Logs = {};
LogsConfig = function (bunyan) {
  return {
    streams: [{
      stream: {
        write: function (rec) {
          PrintLog(rec);
        }
      }
      , type: 'raw'
    }, {
      stream: {
        write: function (rec) {
          if (!Logs.collection && Package.mongo)
            Logs.collection = new Package.mongo.Mongo.Collection('useful:logs/logs');
          if (Logs.collection)
            Logs.collection.insert(rec);
        }
      }
      , type: 'raw'
      , level: 'trace'
    }]
    , serializers: bunyan && bunyan.stdSerializers
  };
};