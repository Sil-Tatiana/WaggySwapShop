import { expect } from "chai";
import mongoose from "mongoose";
import supertest from "supertest";
import app from "../backend/app.mjs";


describe("App", () => {
  let server;

  before(async () => {
    // Start the server before running tests
    server = app.listen(0); // Use port 0 to let the OS choose an available port
    console.log(await mongoose.connect(process.env.MONGODB_URI));
  });

  after(async () => {
    // Close the server and disconnect from the database after running tests
    await mongoose.connection.close();
    await server.close();
  });

  it("should establish a connection to the MongoDB database", () => {
    // Check if the MongoDB connection is established
    expect(mongoose.connection.readyState).to.equal(1); // 1 means connected
  });

  it("should start the server and listen on the specified port", async () => {
    // Use supertest to send a GET request to the server and verify the response
    const response = await supertest(server).get("/");
    expect(response.status).to.equal(200);
    expect(response.text).to.equal("Hello, World!");
  });
});
