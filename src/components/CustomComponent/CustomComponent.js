import React, { useState } from "react";
import Select from "react-select";
import { useExecution, useDataView } from "@gooddata/sdk-ui";
import { newRelativeDateFilter } from "@gooddata/sdk-model";
import compact from "lodash/compact";
import styles from "./CustomComponent.module.scss";
import {
    getFormattedCalculations,
    handleCalcAbsolute,
    handleCalcQuantiles,
} from './utils';

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
        label: 'Quantiles (Median)',
        value: 3,
    }
];

export const EMPTY_DATA_VALUE = 'N/A';

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

    const series = result?.data().series().toArray();
    const slices = result?.data().slices().toArray();

    let calculationsResult = EMPTY_DATA_VALUE;  

    if (series && slices) {    
        switch (selectorValue.value) {
            case 1:
                calculationsResult = handleCalcAbsolute(series, 'max');
                break;
            case 2:
                calculationsResult = handleCalcAbsolute(series, 'min');
                break;
            default:
                calculationsResult = handleCalcQuantiles(series);
                break;
        }
    }

    const onChange = (value) => {
        setSelectorValue(value);
    }

    const formattedCalculationsResult = getFormattedCalculations(calculationsResult);

    return (
        <div className={styles.CustomComponent}>
            <div className={styles.CalculationResult}>
                <span>{formattedCalculationsResult}</span>
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
