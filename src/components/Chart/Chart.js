import React from "react"
import { LineChart } from "@gooddata/sdk-ui-charts";

import * as Ldm from "../../ldm/full";

const measures = [Ldm.Revenue];

const lineChartContainerStyle = { height: 300, width: '100%' };

const ChartComponent = (props) => {
    return (
        <div style={lineChartContainerStyle}>
            <LineChart
                measures={measures}
                trendBy={Ldm.DateMonth.Short}
                segmentBy={Ldm.Product.Default}
                filters={props.dateFilter ? [props.dateFilter] : []}
            />
        </div>
    );
};

export const Chart = ChartComponent;
