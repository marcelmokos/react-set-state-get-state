describe("division", () => {
  const division = (dividend: number, divisor: number) => {
    return dividend / divisor;
  }

  it("correct", () => {
    expect(division(4, 2)).toBe(2)
  });
});
