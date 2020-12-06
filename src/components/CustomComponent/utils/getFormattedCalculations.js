import { EMPTY_DATA_VALUE } from '../CustomComponent';

export const getFormattedCalculations = (value) => {
    if (value && value !== EMPTY_DATA_VALUE) {
        return `$${value.toFixed(2)}`;
    }

    return EMPTY_DATA_VALUE;
}
