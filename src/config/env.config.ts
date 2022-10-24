export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  dbUrl: process.env.DB_URL,
  dbName: process.env.DB_NAME,
  port: +process.env.PORT,
});
