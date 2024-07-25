import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
// import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import useGAPageView from "helpers/useGAPageView";
// import SimpleContactUs from "components/forms/SimpleContactUs";
// import SimpleSubscribeNewsletter from "components/forms/SimpleSubscribeNewsletter";
// import TwoColContactUsWithIllustration from "components/forms/TwoColContactUsWithIllustration";
import TwoColNewNewsWithIllustrationFullForm from "components/forms/TwoColNewNewsWithIllustrationFullForm";

// const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
    useGAPageView();

    return (
        <AnimationRevealPage>
            <Header />
            {/* <SimpleContactUs /> */}
            {/* <SimpleSubscribeNewsletter /> */}
            {/* <TwoColContactUsWithIllustration />/ */}
            <TwoColNewNewsWithIllustrationFullForm />
            <Footer />
        </AnimationRevealPage>
    );
};
