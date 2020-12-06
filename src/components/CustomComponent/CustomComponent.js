import React from "react";
import { useExecution, useDataView } from "@gooddata/sdk-ui";
import { newRelativeDateFilter } from "@gooddata/sdk-model";
import compact from "lodash/compact";

import * as Ldm from "../../ldm/full";

export const CustomComponent = (props) => {
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

    const { result, error, status } = useDataView({ execution }, [execution?.fingerprint()]);
    const series = result?.data().series().toArray();
    const slices = result?.data().slices().toArray();

    window.console.log('series: ', series);
    window.console.log('slices: ', slices);

    return (
        <div style={{ display: "flex" }}>
            <select defaultValue="1">
                <option value="1">Maximum Revenue across different products</option>
                <option value="2">Minimum Revenue across different products</option>
                <option value="3">Quantiles</option>
            </select>
        </div>
    );
};
