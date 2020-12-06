import React, { useState } from "react";
import { DateFilter, DateFilterHelpers } from "@gooddata/sdk-ui-filters";
import * as Ldm from "../../ldm/full";
import styles from "./FilterBar.module.scss";

const availableGranularities = ["GDC.time.year"];

const defaultDateFilterOptions = {
    allTime: {
        localIdentifier: "ALL_TIME",
        type: "allTime",
        name: "All time",
        visible: true,
    },

    relativePreset: {
        "GDC.time.year": [
            {
                from: 0,
                to: 0,
                granularity: "GDC.time.year",
                localIdentifier: "THIS_YEAR",
                type: "relativePreset",
                visible: true,
                name: "This year",
            },
            {
                from: -1,
                to: -1,
                granularity: "GDC.time.year",
                localIdentifier: "LAST_YEAR",
                type: "relativePreset",
                visible: true,
                name: "Last year",
            },
            {
                from: -2,
                to: -2,
                granularity: "GDC.time.year",
                localIdentifier: "twoYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "2 years ago",
            },

            {
                from: -3,
                to: -3,
                granularity: "GDC.time.year",
                localIdentifier: "threeYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "3 years ago",
            },

            {
                from: -4,
                to: -4,
                granularity: "GDC.time.year",
                localIdentifier: "fourYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "4 years ago",
            },
        ],
    },
};

export const FilterBarComponent = (props) => {
    const [state, setState] = useState({
        selectedFilterOption: defaultDateFilterOptions.allTime,
        excludeCurrentPeriod: false,
    });

    const onApply = (selectedFilterOption, excludeCurrentPeriod) => {
        setState({
            selectedFilterOption,
            excludeCurrentPeriod,
        });

        const dateFilter = DateFilterHelpers.mapOptionToAfm(
            selectedFilterOption,
            Ldm.DateDatasets.Date.ref,
            excludeCurrentPeriod,
        );

        props.applyDateFilter(dateFilter, selectedFilterOption.name);
    };

    return (
        <div className={styles.FilterBar}>
            <DateFilter
                excludeCurrentPeriod={state.excludeCurrentPeriod}
                selectedFilterOption={state.selectedFilterOption}
                filterOptions={defaultDateFilterOptions}
                availableGranularities={availableGranularities}
                customFilterName="Selected date"
                dateFilterMode="active"
                dateFormat="MM/dd/yyyy"
                onApply={onApply}
            />
        </div>
    );
}

export const FilterBar = FilterBarComponent;