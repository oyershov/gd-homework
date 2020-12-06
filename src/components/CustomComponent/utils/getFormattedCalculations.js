import { EMPTY_DATA_VALUE } from '../CustomComponent';

export const getFormattedCalculations = (value) => {
    if (value !== EMPTY_DATA_VALUE) {
        return `$${value.toFixed(2)}`;
    }

    return value;
}
