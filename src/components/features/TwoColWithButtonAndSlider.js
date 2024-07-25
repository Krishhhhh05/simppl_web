import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
    SectionHeading,
    Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import Slider from "components/slides/SlideViewerComponent";

import ReactModalAdapter from "helpers/ReactModalAdapter.js";
import ResponsiveVideoEmbed from "helpers/ResponsiveVideoEmbed.js";

import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-7/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
    tw`md:w-5/12 mt-16 md:mt-0`,
    props.textOnLeft
        ? tw`md:mr-12 lg:mr-16 md:order-first`
        : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
    props.imageRounded && tw`rounded`,
    props.imageBorder && tw`border`,
    props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
    tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
    tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
    props.buttonRounded && tw`rounded-full`,
]);

const WatchVideoButton = styled.button`
    ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
    .playIcon {
        ${tw`stroke-1 w-12 h-12`}
    }
    .playText {
        ${tw`ml-2 font-medium`}
    }
`;

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
            Designed & Developed by{" "}
            <span tw="text-primary-500">Professionals.</span>
        </>
    ),
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    primaryButtonText = "Learn More",
    primaryButtonUrl = "https://timerse.com",
    imageSrc = TeamIllustrationSrc,
    buttonType = "slides",
    buttonRounded = true,
    imageRounded = true,
    imageBorder = false,
    imageShadow = false,
    imageCss = null,
    imageDecoratorBlob = false,
    imageDecoratorBlobCss = null,
    textOnLeft = true,
    slideInfo = {
        slideHeading: "",
        slideSubheading: "",
        slideDescription: "",
        slides: [],
    },
}) => {
    // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
    // { console.log(slideInfo) }
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => setModalIsOpen(!modalIsOpen);
    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    {slideInfo.slides.length > 0 && (
                        <Slider
                            heading={slideInfo.slideHeading}
                            subheading={slideInfo.slideSubheading}
                            description={slideInfo.slideDescription}
                            slides={slideInfo.slides}
                        />
                    )}
                    {slideInfo.slides.length === 0 && (
                        <Image
                            css={imageCss}
                            src={slideInfo.imageSrc}
                            imageBorder={imageBorder}
                            imageShadow={imageShadow}
                            imageRounded={imageRounded}
                        />
                    )}

                    {imageDecoratorBlob && (
                        <DecoratorBlob css={imageDecoratorBlobCss} />
                    )}
                </ImageColumn>

                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Subheading>{subheading}</Subheading>
                        <Heading>{heading}</Heading>
                        <Description>{description}</Description>
                        {buttonType === "slides" && (
                            <PrimaryButton
                                buttonRounded={buttonRounded}
                                as="a"
                                href={primaryButtonUrl}
                            >
                                {primaryButtonText}
                            </PrimaryButton>
                        )}
                        {buttonType === "video" && (
                            <WatchVideoButton onClick={toggleModal}>
                                <span className="playIconContainer">
                                    <PlayIcon className="playIcon" />
                                </span>
                                <span className="playText">
                                    {primaryButtonText}
                                </span>
                            </WatchVideoButton>
                        )}
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
                            <div className="content">
                                <ResponsiveVideoEmbed
                                    url={primaryButtonUrl}
                                    tw="w-full"
                                />
                            </div>
                        </StyledModal>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
