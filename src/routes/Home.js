import React from "react"
import styles from "./Home.module.scss";

import {
    Chart,
    CustomComponent,
    FilterBar,
    Page,
} from "../components";

const Home = () => {
    return (
        <Page className={styles.Home}>
            <div className={styles.HomeRow}>
                <FilterBar />
            </div>
            <div className={styles.HomeRow}>
                <div className={styles.HomeRowElement}>
                    <Chart />
                </div>
                <div className={styles.HomeRowElement}>
                    <CustomComponent />
                </div>
            </div>
        </Page>
    );
};

export default Home;
