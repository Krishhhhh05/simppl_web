import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
    SectionHeading,
    Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import ReactModalAdapter from "helpers/ReactModalAdapter.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    props.textOnLeft
        ? tw`md:mr-12 lg:mr-16 md:order-first`
        : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-md mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
    ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
    svg {
        ${tw`w-5 h-5 text-primary-500`}
    }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(
    PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

// modal
const StyledModal = styled(ReactModalAdapter)`
    &.mainHeroModal__overlay {
        ${tw`fixed inset-0 z-50`}
    }
    &.mainHeroModal__content {
        ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
    }
    .content {
        ${tw`w-full lg:p-16`}
    }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

export default ({
    subheading = "Our Expertise",
    heading = (
        <>
            We have the most <span tw="text-primary-500">professional</span>{" "}
            marketing team.
        </>
    ),
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    primaryButtonText = "See Our Portfolio",
    primaryButtonUrl = "https://timerse.com",
    features = null,
    textOnLeft = true,
}) => {
    // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

    /*
     * Change the features variable as you like, add or delete objects
     * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
     */
    const defaultFeatures = [
        {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description:
                "We have the best professional marketing people across the globe just to work with you.",
        },
        {
            Icon: MoneyIcon,
            title: "Affordable",
            description:
                "We promise to offer you the best rate we can - at par with the industry standard.",
        },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => setModalIsOpen(!modalIsOpen);

    if (!features) features = defaultFeatures;

    return (
        <Container id="join-us">
            <TwoColumn>
                <ImageColumn>
                    <Image imageSrc={TeamIllustrationSrc} />
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Subheading>{subheading}</Subheading>
                        <Heading>{heading}</Heading>
                        <Description>{description}</Description>
                        <Features>
                            {features.map((feature, index) => (
                                <Feature key={index}>
                                    <FeatureIconContainer>
                                        {<feature.Icon />}
                                    </FeatureIconContainer>
                                    <FeatureText>
                                        <FeatureHeading>
                                            {feature.title}
                                        </FeatureHeading>
                                        <FeatureDescription>
                                            {feature.description}
                                        </FeatureDescription>
                                    </FeatureText>
                                </Feature>
                            ))}
                        </Features>
                        <PrimaryButton as="a" target="_blank" href="https://forms.gle/FZuFDmyd4XgX1RbQA"
                        // onClick={toggleModal}
                        >
                            {primaryButtonText}
                        </PrimaryButton>
                        <StyledModal
                            closeTimeoutMS={300}
                            className="mainHeroModal"
                            isOpen={modalIsOpen}
                            onRequestClose={toggleModal}
                            shouldCloseOnOverlayClick={true}
                        >
                            <CloseModalButton onClick={toggleModal}>
                                <CloseIcon tw="w-6 h-6" />
                            </CloseModalButton>
                        </StyledModal>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
