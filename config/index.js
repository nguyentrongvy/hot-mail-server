exports.serverConfig = {
  port: process.env.PORT || 3000,
};

exports.getCORSOrigin = () => {
  const origins = process.env.ORIGINS || "*";
  return origins.split(",").map((o) => o.trim());
};

const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || "test";
// const mongoUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`

exports.mongoConfig = {
  connection: process.env.MONGO_CONNECTION || "mongodb://localhost:27017/test",
  // connection: `mongodb://${dbHost}:${dbPort}/${dbName}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

exports.redisConfig = {
  host: process.env.REDIS_HOST || 'redis://127.0.0.1:6379',
  // host: `redis://${process.REDIS_HOST}:${process.REDIS_PORT}`,
//   host: "redis://redis:6379",
};

exports.commonConfig = {
  env: process.env.NODE_ENV || "development",
  serviceName: process.env.SERVICE || "app",
};

exports.loggerConfig = {
  service: process.env.SERVICE || "app",
  streamType: process.env.STREAM_TYPE || "local",
  elasticHost: process.env.ELASTIC_HOST,
  elasticUser: process.env.ELASTIC_USER,
  elasticPass: process.env.ELASTIC_PASS,
  group: process.env.CW_GROUP,
  prefix: process.env.CW_PREFIX,
  interval: process.env.CW_INTERVAL || 1000,
  awsRegion: process.env.AWS_REGION,
  awsAccessKeyId: process.env.CW_AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.CW_AWS_SECRET_ACCESS_KEY,
  level: process.env.LOG_LEVEL || "info",
};

exports.tracingConfig = {
  sampleRate: parseFloat(process.env.TRACING_SAMPLE_RATE) || 0.1,
};
