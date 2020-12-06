// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";

import { Headline } from "@gooddata/sdk-ui-charts";
import * as Ldm from "../ldm/full";

export class HeadlineExample extends Component {
    onLoadingChanged = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("ColumnChartExample onLoadingChanged", ...params);
    };

    onError = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("ColumnChartExample onError", ...params);
    };

    render() {
        const primaryMeasure = Ldm.PercentRevenue;

        return (
            <div className="s-headline" style={{ display: "flex" }}>
                <div className="column">
                    <Headline
                        primaryMeasure={primaryMeasure}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
            </div>
        );
    }
}

export default HeadlineExample;