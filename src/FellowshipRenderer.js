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

import ResidentFellowship from "pages/fellowships/Resident";
import NonResidentFellowship from "pages/fellowships/NonResident";
import useGAPageView from "helpers/useGAPageView";

export const fellowships = {
    resident: {
        component: <ResidentFellowship />,
        url: "/fellowship/resident",
    },
    "non-resident": {
        component: <NonResidentFellowship />,
        url: "/fellowship/non-resident",
    },
};

export default () => {
    const { name } = useParams();

    useGAPageView();

    try {
        let Component = fellowships[name].component;

        if (Component) return Component;

        throw new Error("Component Not Found");
    } catch (e) {
        console.log(e);
        return <div>Error: Component Not Found</div>;
    }
};
