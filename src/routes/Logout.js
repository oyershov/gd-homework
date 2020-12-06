import React from "react";

import { LogoutForm, Page } from "../components";

import pageStyles from "../components/Page/Page.module.scss";
import { useAuth } from "../contexts/Auth";

function Logout() {
    const { logout } = useAuth();

    return (
        <Page className={pageStyles.Inverse} mainClassName={pageStyles.VerticalCenter}>
            <LogoutForm logout={logout} />
        </Page>
    );
}

export default Logout;
