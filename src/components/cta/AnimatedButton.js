import React from "react";
import tw from "twin.macro";
import { FaArrowCircleDown } from "react-icons/fa";
import styled from "styled-components";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";

const Heading = tw.h2`text-center text-lg font-semibold leading-8 text-gray-900`;
const AnimatedAnchor = tw.a`bg-primary-500 text-white py-2 px-4 rounded-full flex justify-center items-center space-x-2 gap-4 text-xl font-bold transition duration-300 animate-bounce w-40 h-12 mx-auto`;


export default ({ primaryLinkText = "Join Us", primaryLinkUrl = "#join-us" }) => {
    return (
        <Container>
            <ContentWithPaddingXl>
                <Heading>
                    <AnimatedAnchor
                        href={primaryLinkUrl}
                    >
                        {primaryLinkText}
                        <FaArrowCircleDown />
                    </AnimatedAnchor>
                </Heading>
            </ContentWithPaddingXl>
        </Container>
    );
};