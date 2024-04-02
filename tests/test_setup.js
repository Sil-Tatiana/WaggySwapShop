const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

before(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  process.env.MONGODB_URI = mongoUri; // Set MONGODB_URI environment variable
});

after(async () => {
  if (mongoServer) {
    await mongoServer.stop();
  }
});
