const mul = (x, y) => x * y

test("mul fonction", () => {
    expect(mul(1, 2)).toBe(2)
    expect(mul(-12, 4)).toBe(-48)
})