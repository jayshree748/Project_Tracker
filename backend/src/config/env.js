const dotenv = require("dotenv");

dotenv.config();

const env = {
  PORT: process.env.PORT || 8000,
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d"
};

// Optional safety check
if (!env.MONGO_URL || !env.JWT_SECRET) {
  throw new Error("Missing required environment variables");
}

module.exports = env;
