import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
    SectionHeading,
    Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { SecondaryButton as SecondaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import googleresearch from "../../images/googleresearch2.png";
import mozilla from "../../images/mozilla.jpg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-2 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
    tw`md:w-6/12 mt-2 md:mt-0`,
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

const CustomersLogoStrip = styled.div`
    ${tw`mt-6 flex flex-col items-start gap-2 justify-start sm:justify-start flex-wrap`}
    p {
        ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
    }
    img {
        ${tw`mt-1 h-8`}
    }
`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
    tw`mt-8 md:mt-8 text-sm `,
    props.buttonRounded && tw`rounded-full`,
]);

const SecondaryButton = styled(SecondaryButtonBase)((props) => [
    tw`mt-8 md:mt-8 text-sm `,
    props.buttonRounded && tw`rounded-full`,
]);

const ButtonContainer = tw.div`flex justify-center gap-2`;

export default ({
    subheading = "Our Expertise",
    heading = (
        <>
            Designed & Developed by{" "}
            <span tw="text-primary-500">Professionals.</span>
        </>
    ),
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    primaryButtonStatus = true,
    primaryButtonText = "Learn More",
    primaryButtonUrl = "/products",
    secondaryButtonStatus = false,
    secondaryButtonText = "Contact Us",
    secondaryButtonUrl = "/contact-us",
    imageSrc = TeamIllustrationSrc,
    buttonRounded = true,
    imageRounded = true,
    imageBorder = false,
    imageShadow = false,
    imageCss = null,
    imageDecoratorBlob = false,
    imageDecoratorBlobCss = null,
    textOnLeft = true,
    sponsor = false,
}) => {
    // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image
                        css={imageCss}
                        src={imageSrc}
                        imageBorder={imageBorder}
                        imageShadow={imageShadow}
                        imageRounded={imageRounded}
                    />
                    {imageDecoratorBlob && (
                        <DecoratorBlob css={imageDecoratorBlobCss} />
                    )}
                    {/* <ButtonContainer>
              {primaryButtonStatus && (
                <PrimaryButton
                  buttonRounded={buttonRounded}
                  as="a"
                  target="_blank"
                  href={primaryButtonUrl}
                >
                  {primaryButtonText}
                </PrimaryButton>
              )}
              {secondaryButtonStatus && (
                <SecondaryButton
                  buttonRounded={buttonRounded}
                  as="a"
                  target="_blank"
                  href={secondaryButtonUrl}
                >
                  {secondaryButtonText}
                </SecondaryButton>
              )}
            </ButtonContainer>
            <CustomersLogoStrip sx={{ display: "flex", align: "center" }}>
              <p>Sponsored By</p>
              <img src={googleresearch} alt="Sponsored By" />
            </CustomersLogoStrip> */}
                </ImageColumn>

                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Subheading>{subheading}</Subheading>
                        <Heading>{heading}</Heading>
                        <Description>{description}</Description>
                        <ButtonContainer>
                            {primaryButtonStatus && (
                                <PrimaryButton
                                    buttonRounded={buttonRounded}
                                    as="a"
                                    target="_blank"
                                    href={primaryButtonUrl}
                                >
                                    {primaryButtonText}
                                </PrimaryButton>
                            )}
                            {secondaryButtonStatus && (
                                <SecondaryButton
                                    buttonRounded={buttonRounded}
                                    as="a"
                                    target="_blank"
                                    href={secondaryButtonUrl}
                                >
                                    {secondaryButtonText}
                                </SecondaryButton>
                            )}
                        </ButtonContainer>
                        {sponsor && (
                            <CustomersLogoStrip
                                sx={{ display: "flex", align: "center" }}
                            >
                                <p>Sponsored By</p>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "start",
                                        gap: "20px",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src={googleresearch}
                                        alt="Sponsored By"
                                    />
                                    {/* <img src={mozilla} alt="Sponsored By" /> */}
                                </div>
                            </CustomersLogoStrip>
                        )}
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
