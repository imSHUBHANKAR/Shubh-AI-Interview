/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://shubhankar-DB_owner:8pn9JrVsltSg@ep-wispy-snowflake-a59uug04.us-east-2.aws.neon.tech/ai-interwiew-mocker?sslmode=require',
  }
};