import React, { useCallback, useState } from "react"
import styles from "./Home.module.scss";

import {
    Chart,
    CustomComponent,
    FilterBar,
    Page,
} from "../components";

const Home = () => {
    const [state, setState] = useState({
        dateFilter: undefined,
    });

    const handleApplyDateFilter = useCallback((dateFilter) => {
        setState({ dateFilter: dateFilter });
    }, []);

    return (
        <Page className={styles.Home}>
            <div className={styles.HomeRow}>
                <FilterBar applyDateFilter={handleApplyDateFilter}/>
            </div>
            <div className={styles.HomeRow}>
                <div className={styles.HomeRowElement}>
                    <Chart dateFilter={state.dateFilter} />
                </div>
                <div className={styles.HomeRowElement}>
                    <CustomComponent />
                </div>
            </div>
        </Page>
    );
};

export default Home;
