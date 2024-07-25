import React from "react";
import { useParams } from "react-router-dom";
// import AnimationRevealPage from "helpers/AnimationRevealPage.js"
// import SlideViewerCarousel from "components/slides/SlideViewerCarousel";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";
// import { SectionHeading as HeadingTitle } from "components/misc/Headings.js"
// import Header from "components/headers/light.js";
// import Footer from "components/footers/MiniCenteredFooter.js";
// import Hero from "components/hero/TwoColumnWithVideo.js";

// import { projects } from "data/projectData"

import ReactModalAdapter from "helpers/ReactModalAdapter.js";
// import ResponsiveVideoEmbed from "helpers/ResponsiveVideoEmbed.js";

// import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
// import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/dot-pattern.svg";
// import { ReactComponent as SlidesIcon } from "images/file-text.svg";
// import DesignIllustration from "images/design-illustration.svg";

import DeutscheWelle from "pages/products/DeutscheWelle";
import NYCMediaLab from "pages/products/NYCMediaLab";
import ArbiterReport from "pages/products/ArbiterReport";
import AudienceAnalytics from "pages/products/AudienceAnalytics";
import useGAPageView from "helpers/useGAPageView";

// const Container = tw.div`relative`;
// const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
// const HeadingInfoContainer = tw.div`flex flex-col items-center`;
// const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-md`;
// const Content = tw.div`mt-16`;

// const SvgDotPattern1 = tw(
//   SvgDotPatternIcon
// )`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
// const SvgDotPattern2 = tw(
//   SvgDotPatternIcon
// )`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
// const SvgDotPattern3 = tw(
//   SvgDotPatternIcon
// )`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
// const SvgDotPattern4 = tw(
//   SvgDotPatternIcon
// )`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

// const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
// const LeftColumn = tw.div`relative lg:w-5/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
// const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

// const Heading = tw.h1`font-black text-3xl md:text-4xl leading-snug max-w-3xl`;
// const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

// const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
// const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

// const WatchVideoButton = styled.button`
//   ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
//   .playIcon {
//     ${tw`stroke-1 w-12 h-12`}
//   }
//   .playText {
//     ${tw`ml-2 font-medium`}
//   }
// `;

// const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
// const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
//   ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
// `;
// const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
//   ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
// `;

// const StyledModal = styled(ReactModalAdapter)`
//   &.mainHeroModal__overlay {
//     ${tw`fixed inset-0 z-50`}
//   }
//   &.mainHeroModal__content {
//     ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
//   }
//   .content {
//     ${tw`w-full lg:p-16`}
//   }
// `;
// const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

export const products = {
    "deutsche-welle": {
        component: <DeutscheWelle />,
        url: "/product/deutsche-walle",
    },
    "nyc-media-lab": {
        component: <NYCMediaLab />,
        url: "/product/nyc-media-lab",
    },
    "arbiter-report": {
        component: <ArbiterReport />,
        url: "/product/arbiter-report",
    },
    "audience-analytics": {
        component: <AudienceAnalytics />,
        url: "/product/audience-analytics",
    },
};

export default () => {
    const { name } = useParams();

    useGAPageView();

    try {
        let Component = products[name].component;

        if (Component) return Component;

        throw new Error("Component Not Found");
    } catch (e) {
        console.log(e);
        return <div>Error: Component Not Found</div>;
    }
};
