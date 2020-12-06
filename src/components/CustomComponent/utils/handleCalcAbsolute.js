export const handleCalcAbsolute = (data, type) => {
    const maxValue = data.reduce((acc, cur) => {
        const curData = cur.rawData();

        if (curData.length) {
            switch (type) {
                case 'max':
                    const maxValue = Math.max(...curData.map(Number));

                    if (maxValue > acc) {
                        acc = maxValue;
                    };
                    break;
                case 'min':
                    const minValue = Math.min(...curData.map(Number));

                    if (minValue && ((minValue && !acc) || (minValue < acc))) {
                        acc = minValue;
                    };
                    break;
                default :
                    return acc;
            }
        }

        return acc;
    }, 0);

    return maxValue;
}
