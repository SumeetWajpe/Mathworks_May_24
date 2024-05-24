describe("A suite is just a function", function () {
  // Arrange -> Act -> Assert
  let a;

  it("and so is a spec", function () {
    a = true;

    expect(a).toBe(true);
  });
});

function Add(x, y) {
  return x + y;
}
describe("Addition suite", () => {
  it("adds two numbers", () => {
    let result;
    result = Add(20, 30);
    expect(result).toBe(50);
  });
  it("append two strings", () => {
    let result;
    result = Add("Hello", " World");
    expect(result).toBe("Hello World");
  });
});
