import React from "react"
import { LineChart } from "@gooddata/sdk-ui-charts";
import Page from "../components/Page";

import * as Ldm from "../ldm/full";

const measures = [Ldm.PercentRevenue];

const lineChartContainerStyle = { height: 300 };

const Home = () => {
    return (
        <Page>
            <div style={lineChartContainerStyle}>
                <LineChart
                    measures={measures}
                    trendBy={Ldm.DateMonth.Short}
                />
            </div>
        </Page>
    );
};

export default Home;
