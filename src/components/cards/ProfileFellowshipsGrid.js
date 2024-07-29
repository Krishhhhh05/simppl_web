import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
    SectionHeading,
    Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-8.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-6.svg";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center text-center`;
const CardImage = styled.div`
    ${(props) =>
        css`
            background-image: url("${props.imageSrc}");
        `}
    ${tw`w-48 h-48 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
    ${tw`mt-6 flex`}
    .link {
        ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
        .icon {
            ${tw`fill-current w-6 h-6`}
        }
    }
`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
    ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
    ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
    heading = "Our Team",
    subheading = "",
    description = "",
    researchEngineers = [
        {
            imageSrc: "/team/Swapneel_Mehta.jpg",
            position: "Founder",
            name: "Swapneel Mehta",
            links: [
                {
                    url: "https://linkedin.com/in/swapneelm",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/swapneelm",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/RaghavJain.jpg",
            position: "Research Engineer",
            name: "Raghav Jain",
            links: [
                {
                    url: "https://www.linkedin.com/in/raghav-jain-3a8076214/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/Raghav10j",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Jhagrut_Lalwani.jpeg",
            position: "Research Engineer",
            name: "Jhagrut Lalwani",
            links: [
                {
                    url: "https://www.linkedin.com/in/jhagrut-lalwani/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/Jhagrut",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/dhara_mungra.jpg",
            position: "Research Engineer",
            name: "Dhara Mungra",
            links: [
                {
                    url: "https://www.linkedin.com/in/dhara-mungra-0aa599126/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/DharaAMungra",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Archit_Rathod.jpg",
            position: "Team YouTube",
            name: "Archit Rathod",
            links: [
                {
                    url: "https://www.linkedin.com/in/archit-rathod/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/Archit1706",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Mokshit_Surana.jpg",
            position: "Team YouTube",
            name: "Mokshit Surana",
            links: [
                {
                    url: "https://www.linkedin.com/in/mokshitsurana/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/MokshitSurana",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Gargi_Sathe.jpg",
            position: "Team YouTube + Program Manager",
            name: "Gargi Sathe",
            links: [
                {
                    url: "https://www.linkedin.com/in/gargi-sathe-491a7a220",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/gargisathe",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Gautam_Malpani.jpg",
            position: "Team Truth Social",
            name: "Gautam Malpani",
            links: [
                {
                    url: "https://in.linkedin.com/in/gautam-malpani-42a76721a",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/psychocoder03",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Chaitya_Shah.jpg",
            position: "Research Engineer",
            name: "Chaitya Shah",
            links: [
                {
                    url: "https://www.linkedin.com/in/chaitya-shah-381b5421b/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/Chaitya0623",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Neel_Kothari.jpeg",
            position: "Research Engineer",
            name: "Neel Kothari",
            links: [
                {
                    url: "https://www.linkedin.com/in/neel-kothari-601312221/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/neelkothari6191",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Aneesh_Shamraj.png",
            position: "Team Bluesky",
            name: "Aneesh Shamraj",
            links: [
                {
                    url: "https://www.linkedin.com/in/aneeshshamraj/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/AneeshShamraj",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Aditya_Surve.png",
            position: "Team Bluesky",
            name: "Aditya Surve",
            links: [
                {
                    url: "https://www.linkedin.com/in/surveaditya/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/SurveAditya",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Nahush_Patil.jpg",
            position: "Team Whatsapp",
            name: "Nahush Patil",
            links: [
                {
                    url: "https://www.linkedin.com/in/nahush-patil-29a495221/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/nahushhh",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Mrunmayi_Parker.jpg",
            position: "Team Whatsapp + Program Manager",
            name: "Mrunmayi Parker",
            links: [
                {
                    url: "https://www.linkedin.com/in/mrunmayi-parker-388294233/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/MrunmayiParker",
                    icon: GithubIcon,
                },
            ],
        },
        // {
        //     imageSrc: "/team/Pratyay_Banerjee.png",
        //     position: "Research Engineer",
        //     name: "Pratyay Banerjee",
        //     links: [
        //         {
        //             url: "https://www.linkedin.com/in/neilblaze",
        //             icon: LinkedinIcon,
        //         },
        //         {
        //             url: "https://github.com/Neilblaze",
        //             icon: GithubIcon,
        //         },
        //     ],
        // },
    ],
}) => {
    return (
        <Container>
            <ContentWithPaddingXl>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    {heading && <Heading>Meet these fine folks.</Heading>}
                    {description && <Description>{description}</Description>}
                </HeadingContainer>
                <Cards>
                    {researchEngineers.map((card, index) => (
                        <Card key={index}>
                            <CardImage
                                imageSrc={card.imageSrc}
                                style={{
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            />
                            <CardContent>
                                <span className="position">
                                    {card.position}
                                </span>
                                <span className="name">{card.name}</span>
                                <CardLinks>
                                    {card.links.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            className="link"
                                            href={link.url}
                                        >
                                            <link.icon className="icon" />
                                        </a>
                                    ))}
                                </CardLinks>
                            </CardContent>
                        </Card>
                    ))}
                </Cards>
            </ContentWithPaddingXl>
            <DecoratorBlob1 />
            <DecoratorBlob2 />
        </Container>
    );
};
