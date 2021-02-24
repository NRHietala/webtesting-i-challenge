const enhancer = require("./enhancer.js");

let thunderfury = {};

beforeEach(() => {
  (thunderfury.name = "Thunderfury, Blessed Blade of the Windseeker"),
    (thunderfury.durability = 90),
    (thunderfury.enhancement = 14);
});
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
    it("Item enhancement level increases", () => {
      expect(thunderfury.enhancement).toBe(14);
      enhancer.success(thunderfury);
      expect(thunderfury.enhancement).toBe(15);
      expect(thunderfury.durability).toBe(90);
    });
  });

  describe("Failed Enhanced Items", () => {
    it("Item enhancement below 15, lose 5 durability", () => {
      expect(thunderfury.enhancement).toBe(14);
      expect(thunderfury.durability).toBe(90);
      enhancer.fail(thunderfury);
      expect(thunderfury.enhancement).toBe(14);
      expect(thunderfury.durability).toBe(85);
    });
    it("Item enhancement 15+, lost 10 durability", () => {
      thunderfury.enhancement = 15;
      expect(thunderfury.enhancement).toBe(15);
      expect(thunderfury.durability).toBe(90);
      enhancer.fail(thunderfury);
      expect(thunderfury.enhancement).toBe(15);
      expect(thunderfury.durability).toBe(80);
    });
    it("Item enhancement 16+, lost 10 durability, lose 1 enhancement", () => {
      thunderfury.enhancement = 17;
      expect(thunderfury.enhancement).toBe(17);
      expect(thunderfury.durability).toBe(90);
      enhancer.fail(thunderfury);
      expect(thunderfury.enhancement).toBe(16);
      expect(thunderfury.durability).toBe(80);
    });
  });
  describe("Get enhanced item name", () => {
    it("get enhanced name", () => {
      expect(thunderfury.name).toBe(
        "Thunderfury, Blessed Blade of the Windseeker"
      );
      enhancer.get(thunderfury);
      expect(thunderfury.name).toBe(
        "[+14]Thunderfury, Blessed Blade of the Windseeker"
      );
    });
    it("no enhanced name with 0", () => {
      thunderfury.enhancement = 0;
      expect(thunderfury.name).toBe(
        "Thunderfury, Blessed Blade of the Windseeker"
      );
      enhancer.get(thunderfury);
      expect(thunderfury.name).toBe(
        "Thunderfury, Blessed Blade of the Windseeker"
      );
    });
  });
});
