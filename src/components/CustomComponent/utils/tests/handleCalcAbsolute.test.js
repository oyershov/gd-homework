import { handleCalcAbsolute } from "../";

describe("handleCalcAbsolute helper", () => {
    it("should return max value from one item", () => {
        const dataList = [
            {
                rawData: () => [1, 2, 3]
            }
        ];
        expect(handleCalcAbsolute(dataList, 'max')).toBe(3);
    });

    it("should return max value from multiple items", () => {
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
        expect(handleCalcAbsolute(dataList, 'max')).toBe(9);
    });

    it("should return zero on empty array", () => {
        expect(handleCalcAbsolute([], 'max')).toBe(0);
    });

    it("should return min value from one item", () => {
        const dataList = [
            {
                rawData: () => [1, 2, 3]
            }
        ];
        expect(handleCalcAbsolute(dataList, 'min')).toBe(1);
    });

    it("should return min value from multiple items", () => {
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
        expect(handleCalcAbsolute(dataList, 'min')).toBe(1);
    });

    it("should return zero on empty array", () => {
        expect(handleCalcAbsolute([], 'min')).toBe(0);
    });
});
