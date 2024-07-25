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

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
    ${(props) =>
        css`
            background-image: url("${props.imageSrc}");
        `}
    ${tw`w-64 h-64 bg-contain bg-center rounded`}
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

export default ({
    heading = "Our Team",
    subheading = "  ",
    description = "",
    founder = [
        {
            imageSrc: "/team/Swapneel_Mehta.jpg",
            position: "",
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
    ],
    frontendCards = [
        {
            imageSrc: "/team/Aditya_Thaker.jpg",
            position: "",
            name: "Aditya Thaker",
            links: [
                {
                    url: "https://www.linkedin.com/in/aditya-thaker-680884192/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/ADIthaker",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Karishni_Mehta.jpg",
            position: "",
            name: "Karishni Mehta",
            links: [
                {
                    url: "https://www.linkedin.com/in/karishni-mehta-70b131193/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/karishni",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/AryanPathare.jpeg",
            position: "",
            name: "Aryan Pathare",
            links: [
                {
                    url: "https://www.linkedin.com/in/aryan-pathare-41962719b/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/AryanP281",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/akshath_mahajan.jpg",
            position: "",
            name: "Akshath Mahajan",
            links: [
                {
                    url: "https://www.linkedin.com/in/akshath-mahajan-713989192/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/Akshath-Mahajan",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/aditi_kamath.jpeg",
            position: "",
            name: "Aditi Kamath",
            links: [
                {
                    url: "https://www.linkedin.com/in/aditi-kamath/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/AditiKamath",
                    icon: GithubIcon,
                },
            ],
        },
    ],
    researchEngineers = [
        {
            imageSrc: "/team/Shwe_Han.jpg",
            position: "",
            name: "Shwe Han",
            links: [
                {
                    url: "https://www.linkedin.com/in/shwe-han",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/shwehan",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Jay_Gala.jpg",
            position: "",
            name: "Jay Gala",
            links: [
                {
                    url: "https://in.linkedin.com/in/jaygala24",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/jaygala24",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/Deep_Gandhi.jpeg",
            position: "",
            name: "Deep Gandhi",
            links: [
                {
                    url: "https://www.linkedin.com/in/deep1401/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/deep1401",
                    icon: GithubIcon,
                },
            ],
        },
        {
            imageSrc: "/team/dhara_mungra.jpg",
            position: "",
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
            imageSrc: "/team/RaghavJain.jpg",
            position: "",
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
            position: "",
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
            imageSrc: "/team/Mrinal_Jain.jpeg",
            position: "",
            name: "Mrinal Jain",
            links: [
                {
                    url: "https://www.linkedin.com/in/mrinal-jain/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/MrinalJain17",
                    icon: GithubIcon,
                },
            ],
        },

        {
            imageSrc: "/team/Devang_Shah.jpg",
            position: "Telegram",
            name: "Devang Shah",
            links: [
                {
                    url: "https://www.linkedin.com/in/devang-shah-63a29b210/",
                    icon: LinkedinIcon,
                },
                {
                    url: "https://github.com/Devang-Shah-49",
                    icon: GithubIcon,
                },
            ],
        },

        {
            imageSrc: "/team/Gautam_Malpani.jpg",
            position: "Truth Social",
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
            imageSrc: "/team/Mokshit_Surana.jpg",
            position: "YouTube",
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
            imageSrc: "/team/Archit_Rathod.jpg",
            position: "YouTube",
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
            imageSrc: "/team/Gargi_Sathe.jpg",
            position: "YouTube",
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
            imageSrc: "/team/Nahush_Patil.jpg",
            position: "Whatsapp",
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
            position: "Whatsapp",
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
    ],
}) => {
    return (
        <Container>
            <ContentWithPaddingXl>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    {heading && <Heading>Founder</Heading>}
                    {description && <Description>{description}</Description>}
                </HeadingContainer>
                <Cards>
                    {founder.map((card, index) => (
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
            <ContentWithPaddingXl>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    {heading && <Heading>Research Engineers</Heading>}
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
            <ContentWithPaddingXl>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    {heading && <Heading>Software Engineers</Heading>}
                    {description && <Description>{description}</Description>}
                </HeadingContainer>
                <Cards>
                    {frontendCards.map((card, index) => (
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
        </Container>
    );
};
