import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
// import styled from "styled-components"; //eslint-disable-line
import useGAPageView from "helpers/useGAPageView";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import Blog1 from "components/blogs/ThreeColSimpleWithImage.js";
import Blog2 from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog3 from "components/blogs/PopularAndRecentBlogPosts.js";
import Blog4 from "components/blogs/GridWithFeaturedPost.js";
import ModalTry from "components/features/TwoColWithButtonAndSlider.js";

import Blog3 from "components/research/PopularAndRecentResearch.js";

// const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
    useGAPageView();

    return (
        <AnimationRevealPage>
            <Header />
            <Blog1 />
            <Blog2 />
            <Blog3 />
            <Blog4 />
            <ModalTry />
            <Footer />
        </AnimationRevealPage>
    );
};
