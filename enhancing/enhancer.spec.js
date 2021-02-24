const enhancer = require("./enhancer.js");

const thunderfury = {
  name: "Thunderfury",
  enhancement: 14,
  durability: 90,
};

describe("Enhancer Exists", () => {
  it("sanity", () => {
    expect(1).toBe(1);
  });
});

describe("Repair Items", () => {
  it("Restore item durability", () => {
    enhancer.repair(thunderfury);
    expect(thunderfury.durability).toBe(100);
  });

  describe("Successfuly Enhanced Items", () => {
    it("");
  });
});
