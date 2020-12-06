import React, { useCallback, useState } from "react"
import styles from "./Home.module.scss";

import {
    Chart,
    CustomComponent,
    DashboardTitle,
    FilterBar,
    Page,
} from "../components";

const Home = () => {
    const [state, setState] = useState({
        dateFilter: {
            value: undefined,
            name: 'All time',
        },
    });

    const handleApplyDateFilter = useCallback((dateFilter, dateFilterName) => {
        setState({
            dateFilter: {
                value: dateFilter,
                name: dateFilterName
            }
        });
    }, []);


    return (
        <Page className={styles.Home}>
            <div className={styles.HomeRow}>
                <DashboardTitle dateFilter={state.dateFilter} />
            </div>
            <div className={styles.HomeRow}>
                <FilterBar applyDateFilter={handleApplyDateFilter}/>
            </div>
            <div className={styles.HomeRow}>
                <div className={styles.HomeRowElement}>
                    <Chart dateFilter={state.dateFilter.value} />
                </div>
                <div className={styles.HomeRowElement}>
                    <CustomComponent />
                </div>
            </div>
        </Page>
    );
};

export default Home;
