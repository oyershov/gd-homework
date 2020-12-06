import React, { useState } from "react";
import Select from "react-select";
import { useExecution, useDataView } from "@gooddata/sdk-ui";
import { newRelativeDateFilter } from "@gooddata/sdk-model";
import compact from "lodash/compact";
import styles from "./CustomComponent.module.scss";

import * as Ldm from "../../ldm/full";

const CALCULATION_OPTIONS = [
    {
        label: 'Maximum Revenue across different products',
        value: 1,
    },
    {
        label: 'Minimum Revenue across different products',
        value: 2,
    },
    {
        label: 'Quantiles',
        value: 3,
    }
];

const EMPTY_DATA_VALUE = 'N/A';

const selectorStyles = {
    control: styles => ({ ...styles, height: '40px', width: '100%' }),
};

export const CustomComponent = (props) => {
    const [selectorValue, setSelectorValue] = useState(CALCULATION_OPTIONS[0]);

    const filters = props.dateFilter ? [
        newRelativeDateFilter(
            Ldm.DateDatasets.Date,
            props.dateFilter.relativeDateFilter.granularity,
            props.dateFilter.relativeDateFilter.from,
            props.dateFilter.relativeDateFilter.to
        )
    ] : []
    const execution = useExecution({
        seriesBy: compact([Ldm.Revenue, Ldm.Product.Default]),
        slicesBy: [Ldm.DateMonth.Short],
        filters,
    });
    
    const { result } = useDataView({ execution }, [execution?.fingerprint()]);

    const handleCalcValue = (data, type) => {
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

        return `$${maxValue}`;
    }

    const series = result?.data().series().toArray();
    const slices = result?.data().slices().toArray();

    let calculationsResult = EMPTY_DATA_VALUE;  

    if (series && slices) {    
        switch (selectorValue.value) {
            case 1:
                calculationsResult = handleCalcValue(series, 'max');
                break;
            case 2:
                calculationsResult = handleCalcValue(series, 'min');
                break;
            default:
                break;
        }
    }

    const onChange = (value) => {
        setSelectorValue(value);
    }

    return (
        <div className={styles.CustomComponent}>
            <div className={styles.CalculationResult}>
                <span>{calculationsResult}</span>
            </div>
            <Select
                className={styles.Select}
                onChange={onChange}
                options={CALCULATION_OPTIONS}
                value={selectorValue}
                styles={selectorStyles}
            />
        </div>
    );
};
