import tw from "twin.macro";
import React from "react";

// const Main = tw.div`bg-white py-12`;
// const Container = tw.div`mx-auto max-w-[7xl] px-6 lg:px-8 bg-white py-12`;
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
const Heading = tw.h2`text-center text-lg font-semibold leading-8 text-gray-900`;
const SubContainer = tw.div`mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5`;
const Image = tw.img`col-span-2 max-h-[54px] w-full object-contain lg:col-span-1`;

export default ({
    heading = "Trusted and Supported by the world's most innovative teams",
    companies = [
        {
            name: "AI4ALL",
            logoSrc: "/trustedby/ai4bm.png",
            logoAlt: "AI4ALL Logo",
        },
        {
            name: "AI-Local News",
            logoSrc: "/trustedby/ai-local.png",
            logoAlt: "AI-Local News Logo",
        },
        {
            name: "AI Govera",
            logoSrc: "/trustedby/aigovera.png",
            logoAlt: "AI Govera Logo",
        },
        {
            name: "Ippen Digital",
            logoSrc: "/trustedby/ippen.png",
            logoAlt: "Ippen Digital Logo",
        },
        {
            name: "GCP",
            logoSrc: "/trustedby/googlecloud.png",
            logoAlt: "GCP Logo",
        },
        // {
        //     name: "ADL",
        //     logoSrc: "/trustedby/adl.png",
        //     logoAlt: "Anti-Defamation League Logo",
        // },
        {
            name: "AWS",
            logoSrc: "/trustedby/aws.png",
            logoAlt: "AWS Logo",
        },
        {
            name: "TOI",
            logoSrc: "/trustedby/toi.png",
            logoAlt: "TOI Logo",
        },
        {
            name: "Goethe",
            logoSrc: "/trustedby/goethe.png",
            logoAlt: "Goethe Logo",
        },
        {
            name: "Mozilla",
            logoSrc: "/trustedby/mozilla.jpg",
            logoAlt: "Mozilla Logo",
        },
    ],
}) => {
    return (
        // <Main>
        <Container>
            <ContentWithPaddingXl>
                <Heading>{heading}</Heading>
                <SubContainer>
                    {companies.map((company, index) => {
                        return (
                            <Image
                                key={index}
                                src={company.logoSrc}
                                alt={company.logoAlt}
                                // width={158}
                                // height={48}
                            />
                        );
                    })}
                </SubContainer>
            </ContentWithPaddingXl>
        </Container>

        // </Main>
    );
};
