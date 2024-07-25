import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

// import styled from "styled-components";
import tw from "twin.macro";

// headers - footers - misc
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";

// static data
import { projects } from "data/projectData";
// import { productHomeProjects } from "data/projectData";

// components/features
import HeroProduct from "components/features/TwoColWithButton.js";
import Accomplishment from "components/features/TwoColWithButtonAndSlider.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Description = tw.span`inline-block mt-8`;

const imageCss = tw`rounded-4xl`;
const { heading, subheading, description, imageSrc, accomplishments } =
    projects["nyc-media-lab"];
// const { heading, subheading, description, description2, imageSrc, accomplishments } = projects['nyc-media-lab'];

export default ({}) => {
    return (
        <AnimationRevealPage>
            <Header />

            <HeroProduct
                subheading={<Subheading>{subheading}</Subheading>}
                heading={
                    <>
                        {heading[0]}
                        <wbr /> <HighlightedText>{heading[1]}</HighlightedText>
                    </>
                }
                description={
                    <Description>
                        {description}
                        <br />
                        <br />
                        {/* {description2} */}
                    </Description>
                }
                buttonRounded={false}
                textOnLeft={false}
                primaryButtonStatus={false}
                primaryButtonText="Latest Offers"
                imageSrc={imageSrc}
                imageCss={imageCss}
                imageDecoratorBlob={true}
                imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
            />

            {/* {accomplishments.map((accomplishment, index) => {
                return (
                    <Accomplishment
                        subheading={"Accomplishment"}
                        heading={(
                            <>
                                {accomplishment.heading[0]}
                                <span tw="text-primary-500">{" "}  {accomplishment.heading[1]}</span>
                            </>
                        )}
                        description={accomplishment.description}
                        primaryButtonText={accomplishment.button.text}
                        primaryButtonUrl={accomplishment.button.url}
                        buttonRounded={true}
                        textOnLeft={true}
                        slideInfo={
                            accomplishment.slideInfo
                        }
                    />
                )
            })} */}

            <Accomplishment
                subheading={"Accomplishment"}
                heading={
                    <>
                        {accomplishments[0].heading[0]}
                        <span tw="text-primary-500">
                            {" "}
                            {accomplishments[0].heading[1]}
                        </span>
                    </>
                }
                description={accomplishments[0].description}
                buttonType={accomplishments[0].button.type}
                primaryButtonText={accomplishments[0].button.text}
                primaryButtonUrl={accomplishments[0].button.url}
                buttonRounded={true}
                textOnLeft={true}
                slideInfo={accomplishments[0].slideInfo}
            />

            <Accomplishment
                subheading={"Accomplishment"}
                heading={
                    <>
                        {accomplishments[1].heading[0]}
                        <span tw="text-primary-500">
                            {" "}
                            {accomplishments[1].heading[1]}
                        </span>
                    </>
                }
                description={accomplishments[1].description}
                buttonType={accomplishments[1].button.type}
                primaryButtonText={accomplishments[1].button.text}
                primaryButtonUrl={accomplishments[1].button.url}
                buttonRounded={true}
                textOnLeft={false}
                slideInfo={accomplishments[1].slideInfo}
            />

            <Accomplishment
                subheading={"Accomplishment"}
                heading={
                    <>
                        {accomplishments[2].heading[0]}
                        <span tw="text-primary-500">
                            {" "}
                            {accomplishments[2].heading[1]}
                        </span>
                    </>
                }
                description={accomplishments[2].description}
                buttonType={accomplishments[2].button.type}
                primaryButtonText={accomplishments[2].button.text}
                primaryButtonUrl={accomplishments[2].button.url}
                buttonRounded={true}
                textOnLeft={true}
                slideInfo={accomplishments[2].slideInfo}
            />

            <Accomplishment
                subheading={"Accomplishment"}
                heading={
                    <>
                        {accomplishments[3].heading[0]}
                        <span tw="text-primary-500">
                            {" "}
                            {accomplishments[3].heading[1]}
                        </span>
                    </>
                }
                description={accomplishments[3].description}
                buttonType={accomplishments[3].button.type}
                primaryButtonText={accomplishments[3].button.text}
                primaryButtonUrl={accomplishments[3].button.url}
                buttonRounded={true}
                textOnLeft={false}
                slideInfo={accomplishments[3].slideInfo}
            />
            <Footer />
        </AnimationRevealPage>
    );
};
