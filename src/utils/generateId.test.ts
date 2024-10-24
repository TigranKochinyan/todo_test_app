import { describe, expect, test } from "@jest/globals";
import { generateId } from "./generateId";

describe("function generateId tests", () => {
  test("test: contain special symbol", () => {
    expect(generateId()).toContain("_");
  });

  test("test: two ids should be not equal", () => {
    const id1 = generateId();
    const id2 = generateId();

    expect(id1).not.toEqual(id2);
  });

  test("test: two ids should be not equal 2", () => {
    const id1 = generateId();
    const id2 = generateId();

    expect(id1).not.toEqual(id2);
  });
});
