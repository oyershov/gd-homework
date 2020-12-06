import { getFormattedCalculations } from "../";

describe("getFormattedCalculations helper", () => {
    it("should handle positive cases", () => {
        expect(getFormattedCalculations(1000000000000)).toBe('$1000000000000.00');
    });

    it("should handle negative cases", () => {
        expect(getFormattedCalculations('N/A')).toBe('N/A');
        expect(getFormattedCalculations(0)).toBe('N/A');
        expect(getFormattedCalculations()).toBe('N/A');
    });
});
