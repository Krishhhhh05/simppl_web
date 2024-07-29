import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import ProfileFourColGrid from "components/cards/ProfileFourColGrid.js";
import useGAPageView from "helpers/useGAPageView";
import TrustedBy from "components/misc/TrustedBy";

export default () => {
    useGAPageView();

    return (
        <AnimationRevealPage>
            <Header />

         <TrustedBy/>
            <Footer />
        </AnimationRevealPage>
    );
};
