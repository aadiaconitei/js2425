//This is test
describe("helloWorld", () => {
  it("returns Hello World", () => {
    var actual = helloWorld();
    expect(actual).toBe("Hello World");
  });
  it("returns Hello ", () => {
    var actual = helloWorld();
    expect(actual).toContain("Hello");
  });
});

describe("math sum", function () {
  //Spec for sum operation
  it("suma dintre 3 si 5", function () {
    //expect(sum(3,5)).toEqual(8);
    expect(sum(3, 5)).toBe(8);
  });
});
describe("math sum2", function () {
  //Spec for sum operation
  it("suma dintre 1.4 si 1.3", function () {
    expect(sum(0.1, 0.7)).toEqual(0.8);
  });
});

describe("factorial", function () {
  //Spec for factorial operation for negative number
  it(" throw error in factorial ", function () {
    expect(function () {
      factorial(-7);
    }).toThrowError(Error);
  });
});
//Spec for factorial operation for positive number
describe("fibonacci2", function () {
  it(" factorial of 4", function () {
    expect(factorial(4)).toBe(24);
  });
});
describe("fibonacci", function () {
  //Spec for sum operation
  it("primele numere din sir", function () {
    expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    //   daca nu conteaza ordinea
    //   expect(fibonacci(6)).toEqual(jasmine.arrayWithExactContents([0, 1, 2, 1, 3, 5, 8]));
  });
});
