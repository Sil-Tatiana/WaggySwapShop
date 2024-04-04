import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer;

before(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  console.log(mongoUri);
  process.env.MONGODB_URI = mongoUri; // Set MONGODB_URI environment variable
});

console.log(process.env.MONGODB_URI);

after(async () => {
  if (mongoServer) {
    await mongoServer.stop();
  }
});
