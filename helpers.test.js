const {
  findMean,
  findMedian,
  findMode,
} = require("./helpers");


describe("#findMedian", function () {
  it("finds the median of an even set", function () {
    expect(findMedian([1, 2, 3, 4])).toEqual("2.50");
  });
  it("finds the median of an odd set", function () {
    expect(findMedian([1, 2, 3])).toEqual("2.00");
  });
  it("finds the median of a set including negative numbers", function () {
    expect(findMedian([-1, -2, 3])).toEqual("-1.00");
  });
});


describe("#findMean", function () {
  it("finds the mean of an array of numbers", function () {
    expect(findMean([1, 2, 3, 4])).toEqual("2.50");
  });
  it("finds the mean of an array including negative numbers", function () {
    expect(findMean([-1, -2, 3, 4])).toEqual("1.00");
  });
});


describe("#findMode", function () {
  it("finds the mode where one number is most common", function () {
    expect(findMode([1, 1, 1, 2, 2, 3])).toEqual("1");
  });
  it("finds the smallest mode where more than one number is equally most common", function () {
    expect(findMode([1, 1, 2, 2, 3])).toEqual("1");
  });
});
