import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
// import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
// import Hero from "components/hero/TwoColumnWithVideo.js";
// import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

// import SupportIconImage from "images/support-icon.svg";
// import ShieldIconImage from "images/shield-icon.svg";
// import CustomerLoveIconImage from "images/simple-icon.svg";
// import ThreeColSlider from "components/cards/ThreeColSlider";
// import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid.js";
import PortfolioTwoCardsWithImage from "components/cards/PortfolioTwoCardsWithImage";
import { productHomeProjects } from "data/projectData";
import useGAPageView from "helpers/useGAPageView";

export default () => {
    const Subheading = tw.span`uppercase tracking-wider text-sm`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const Description = tw.span`inline-block mt-8`;
    const imageCss = tw`rounded-4xl`;

    useGAPageView();

    return (
        <AnimationRevealPage>
            <Header />
            <MainFeature1
                subheading={<Subheading>Project</Subheading>}
                heading={
                    <>
                        <HighlightedText>Arbiter</HighlightedText> Promoting
                        Trust on the Social Internet
                    </>
                }
                buttonRounded={false}
                imageCss={imageCss}
                primaryButtonText="Know More"
                imageSrc="/products/arbiter-report.jpg"
                primaryButtonUrl="/product/arbiter-report"
                description="Arbiter Report mines information sharing networks across platforms, collects interaction data and applies graph algorithms and machine learning to study networks of bad actors from millions of accounts across multilingual contexts. It utilizes content-based and content-agnostic algorithms, graph based estimators, and multimodal data analysis to uncover networks of accounts engaging in cross-platform information warfare."
                // imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
            />
            <MainFeature1
                subheading={<Subheading>White Paper</Subheading>}
                heading={
                    <>
                        <HighlightedText>Audience Analytics</HighlightedText>{" "}
                        Monitor Information-sharing in the Online Information
                        Ecosystem
                    </>
                }
                buttonRounded={false}
                imageCss={imageCss}
                primaryButtonText="Know More"
                // imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                imageSrc="/products/audience-analytics.jpeg"
                textOnLeft={false}
                primaryButtonUrl="/product/audience-analytics"
                description="We help newsrooms successfully understand new audiences and support subscriber conversion through on-site optimization and personalization of content. We provide detailed insights into the underserved interests of your audiences from deep cross-platform analysis of social channels and the propagation of news online."
            />

            {/* <ThreeColSlider /> */}

            {/* <Hero
                heading={<><HighlightedText>Arbiter</HighlightedText> Promoting Trust on the Social Internet</>}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                // imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                imageSrc="arbiter-report.jpg"
                imageCss={imageCss}
                imageDecoratorBlob={true}
                primaryButtonText="Order Now"
            // watchVideoButtonText="Meet The Chefs"
            /> */}

            {/* <MainFeature
                subheading={<Subheading>Established Since 2014</Subheading>}
                heading={
                    <>
                        We've been serving for
                        <wbr /> <HighlightedText>over 5 years.</HighlightedText>
                    </>
                }
                description={
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                        <br />
                        <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Description>
                }
                buttonRounded={false}
                textOnLeft={false}
                primaryButtonText="Latest Offers"
                imageSrc={
                    "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                }
                imageCss={imageCss}
                imageDecoratorBlob={true}
                imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
            /> */}

            <PortfolioTwoCardsWithImage
                subheading="Other Projects"
                headingHtmlComponent={
                    <>
                        Explore our{" "}
                        <span tw="text-primary-500">
                            partnerships and projects.
                        </span>
                    </>
                }
                description="Our projects are focused on developing audience analytics and civic integrity tools for media organizations, enabling them to understand their audience better and combat misinformation, fostering transparency and civic engagement."
                linkText="View all Projects"
                cardLinkText="Read More"
                textOnLeft={false}
                cards={productHomeProjects}
                linkStatus={false}
            />

            <Footer />
        </AnimationRevealPage>
    );
};
