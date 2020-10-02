var request = require("supertest"),
  app = require("../app");

describe("index home page", function () {
  it("welcomes the user", function (done) {
    request(app)
      .get("/")
      .expect(200)
      .expect(/This is a home page/, done);
  });
});
