import React from "react";
import Helmet from "react-helmet";
import cx from "classnames";
import { Footer, Header } from "../";

import styles from "./Page.module.scss";

const PageComponent = ({ children, className = null, mainClassName = null, title = "GoodData App" }) => {
    return (
        <div className={cx(styles.Page, className)}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header />
            <main className={cx(styles.Main, mainClassName, "s-page")}>{children}</main>
            <Footer />
        </div>
    );
};

export const Page = PageComponent;
