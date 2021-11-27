const Hello = artifacts.require("Hello");

contract("Hello", function (accounts) {
  it("should assert true", async function () {
    await Hello.deployed();
    return assert.isTrue(true);
  });

  describe("greet()", () => {
    it("should return 'Hello, World!'", async () => {
      const hello = await Hello.deployed();
      const result = await hello.greet();
      const expected = "Hello, World!"
      assert.equal(result, expected, "greeted with 'Hello World!'")
    })
  })

  describe("owner()", () => {
    it("should return the owner", async () => {
      const hello = await Hello.deployed();
      const result = await hello.owner();
      assert(result, "the current onwer")
    })

    it("should returns the owner address", async () => {
      const hello = await Hello.deployed();
      const result = await hello.owner();
      const expected = accounts[0]
      assert.equal(result, expected, "matches the current onwer")
    })
  })

  describe("setGreetie", () => {
    it("sets the greetie", async () => {
      const hello = await Hello.deployed();
      const expected = "Hello, Human!"
      const greetie = 'Human!'
      await hello.setGreetie(greetie);
      const result = await hello.greet();


      assert.equal(result, expected, "matches the current onwer")
    })
  })
});
