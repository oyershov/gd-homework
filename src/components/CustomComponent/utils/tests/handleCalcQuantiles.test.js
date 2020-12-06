import { handleCalcQuantiles } from "../";

describe("handleCalcAbsolute helper", () => {
    it("should return median value from list (odd)", () => {
        const dataList = [
            {
                rawData: () => [1, 2, 3]
            }
        ];
        expect(handleCalcQuantiles(dataList)).toBe(2);
    });

    it("should return median value from list (even)", () => {
        const dataList = [
            {
                rawData: () => [1, 2, 3, 4]
            }
        ];
        expect(handleCalcQuantiles(dataList)).toBe(2.5);
    });

    it("should return median from multiple lists", () => {
        const dataList = [
            {
                rawData: () => [1, 2, 3]
            },
            {
                rawData: () => [7, 8, 9]
            },
            {
                rawData: () => [4, 5, 6]
            }
        ];
        expect(handleCalcQuantiles(dataList)).toBe(5);
    });

    it("should return zero on empty array", () => {
        expect(handleCalcQuantiles([])).toBe(0);
    });
});
