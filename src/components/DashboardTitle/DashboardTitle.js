import React, { useMemo} from "react";
import styles from "./DashboardTitle.module.scss";

export const DashboardTitle = (props) => {
    const title = useMemo(() => `My Dashboard - ${props.dateFilter.name}`, [props.dateFilter.name]);

    return (
        <div className={styles.DashboardTitle}>
            <h1>{title}</h1>
        </div>
    );
};
