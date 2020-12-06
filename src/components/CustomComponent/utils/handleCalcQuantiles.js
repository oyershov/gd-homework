export const handleCalcQuantiles = (data) => {
    if (!data) {
        return 0;
    }

    const dataList = data.reduce((acc, cur) => {
        const curData = cur.rawData();

        if (curData.length) {
            acc = acc.concat([...curData.map(Number)]);
        }

        return acc;
    }, []);

    const filteredList = dataList.length ? dataList.filter(value => value > 0) : []; 
    
    if (!filteredList.length) {
        return 0;
    }

    const sortedList = filteredList.slice().sort((a, b) => a - b);
    const middleElement = Math.floor(sortedList.length / 2);

    if (sortedList.length % 2 === 0) {
        return (sortedList[middleElement - 1] + sortedList[middleElement]) / 2;
    }

    return sortedList[middleElement];
}
