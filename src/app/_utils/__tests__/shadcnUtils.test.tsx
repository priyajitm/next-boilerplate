import "@testing-library/jest-dom";
import { cn } from "../shadcnUtils";

describe("cn utility", () => {
  it("should merge class names correctly", () => {
    expect(cn("base-class", "additional-class")).toBe(
      "base-class additional-class"
    );
  });

  it("should handle conditional classes", () => {
    const isActive = true;
    expect(cn("base", isActive && "active")).toBe("base active");
  });

  it("should handle falsy values", () => {
    expect(cn("base", false && "hidden", null, undefined)).toBe("base");
  });

  it("should handle tailwind conflicts correctly", () => {
    expect(cn("px-4 py-2", "px-6")).toBe("py-2 px-6");
  });
});
