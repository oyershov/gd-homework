import React from "react";

import { LoginForm, Page } from "../components";
import { useAuth } from "../contexts/Auth";

import styles from "../components/Page/Page.module.scss";

function Login() {
    const { login, authError } = useAuth();

    return (
        <Page className={styles.Inverse} mainClassName={styles.VerticalCenter}>
            <LoginForm login={login} loginError={authError} />
        </Page>
    );
}

export default Login;
