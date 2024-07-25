import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {
    Container,
    // ContentWithPadding2Xl,
    ContentWithPaddingXl,
    ContentWithPaddingLg,
} from "components/misc/Layouts.js";
import {
    SectionHeading2,
    Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const HeadingContainer = tw.div`my-2 mt-4`;
const Heading = tw(SectionHeading2)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-5xl lg:max-w-screen-xl mx-auto`;
const Card = tw.div`mt-6 w-1/2 xs:w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 flex flex-col items-center last:mb-5`;
// const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-4xl md:max-w-5xl lg:max-w-[80rem] mx-auto`;
// const Card = tw.div`mt-5 w-1/2 xs:w-1/3 sm:w-1/4 md:w-1/5 lg:w-[14.2857143%] flex flex-col items-center
const CardImage = styled.div`
    ${(props) =>
        css`
            background-image: url("${props.imageSrc}");
        `}
    ${tw`md:w-24 md:h-24 h-24 w-24  bg-cover bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center text-center mt-5`}
  .position {
    ${tw`uppercase font-semibold tracking-widest text-[10px] text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-sm md:text-lg font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
    ${tw`mt-2 flex`}
    .link {
        ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
        .icon {
            ${tw`fill-current w-6 h-6`}
        }
    }
`;

export default ({

    // main team
    heading = "Our Team",
    subheading = "",
    description = "",
    team = teamData,
    // arbiter team
    headingArbiter = "Arbiter Team",
    teamArbiter = arbiterTeamData,
    subheadingArbiter = "",
    descriptionArbiter = "",
    // alumni
    headingAlumni = "Alumni",
    teamAlumni = alumniData,
    subheadingAlumni = "",
    descriptionAlumni = "",
}) => {
    return (
        <Container>
            <>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    {heading && <Heading>{heading}</Heading>}
                    {description && <Description>{description}</Description>}
                </HeadingContainer>
                <Cards>
                    {team.map((member, index) => {
                        return (
                            <ProfileCard
                                key={index}
                                name={member.name}
                                position={member.position}
                                imageSrc={member.imageSrc}
                                linkedIn={member.links[0].url}
                                github={member.links[1].url}
                            />
                        );
                    })}
                </Cards>
            </>
            {/* <>
                <HeadingContainer>
                    {subheadingArbiter && <Subheading>{subheadingArbiter}</Subheading>}
                    {headingArbiter && <Heading>{headingArbiter}</Heading>}
                    {descriptionArbiter && <Description>{descriptionArbiter}</Description>}
                </HeadingContainer>
                <Cards>
                    {teamArbiter.map((member, index) => {
                        return (
                            <ProfileCard
                                key={index}
                                name={member.name}
                                position={member.position}
                                imageSrc={member.imageSrc}
                                linkedIn={member.links[0].url}
                                github={member.links[1].url}
                            />
                        );
                    })}
                </Cards>
            </> */}
            <>
                <HeadingContainer>
                    {subheadingAlumni && <Subheading>{subheadingAlumni}</Subheading>}
                    {headingAlumni && <Heading>{headingAlumni}</Heading>}
                    {descriptionAlumni && <Description>{descriptionAlumni}</Description>}
                </HeadingContainer>
                <Cards>
                    {teamAlumni.map((member, index) => {
                        return (
                            <ProfileCard
                                key={index}
                                name={member.name}
                                position={member.position}
                                imageSrc={member.imageSrc}
                                linkedIn={member.links[0].url}
                                github={member.links[1].url}
                            />
                        );
                    })}
                </Cards>
            </>
        </Container>
    );
};

const ProfileCard = ({ name, position, imageSrc, linkedIn, github }) => {
    return (
        <Card>
            <CardImage imageSrc={imageSrc} />
            <CardContent>
                <span className="position">{position}</span>
                <span className="name">{name}</span>
                <CardLinks>
                    {linkedIn && (
                        <a className="link" href={linkedIn}>
                            <LinkedinIcon className="icon" />
                        </a>
                    )}
                    {github && (
                        <a className="link" href={github}>
                            <GithubIcon className="icon" />
                        </a>
                    )}
                </CardLinks>
            </CardContent>
        </Card>
    );
};

const teamData = [
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
        imageSrc: "/team/Neel_Nagrath.jpeg",
        position: "Global Medical Advisor",
        name: "Neel Nagrath",
        links: [
            {
                url: "https://www.linkedin.com/in/dr-neel-krishanvir-nagrath-735a081b7",
                icon: LinkedinIcon,
            },
            {
                url: "",
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
        imageSrc: "/team/Jay_Gala.jpg",
        position: "Research Engineer",
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
        imageSrc: "/team/Mrinal_Jain.jpeg",
        position: "Research Engineer",
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
        imageSrc: "/team/Harshit_Mehta.jpg",
        position: "Program Manager",
        name: "Harshit Mehta",
        links: [
            {
                url: "https://www.linkedin.com/in/harshit-mehta1/",
                icon: LinkedinIcon,
            },
            {
                url: "",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/Caitlyn_Vergara.jpg",
        position: "Policy Manager",
        name: "Caitlyn Vergara",
        links: [
            {
                url: "https://www.linkedin.com/in/caitlyn-vergara/",
                icon: LinkedinIcon,
            },
            {
                url: "",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/Lynnette_Ng.jpg",
        position: "Research Mentor",
        name: "Lynnette Ng",
        links: [
            {
                url: "https://www.linkedin.com/in/lynnette-ng/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/quarbby",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/Sapana_Chaudhary.jpg",
        position: "Research Mentor",
        name: "Sapana Chaudhary",
        links: [
            {
                url: "https://www.linkedin.com/in/sapana-chaudhary",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/SapanaChaudhary",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/Ananya_Malik.jpeg",
        position: "Research Mentor",
        name: "Ananya Malik",
        links: [
            {
                url: "https://www.linkedin.com/in/ananyamalik/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/ananyamalik",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/Krisha_Mehta.png",
        position: "Research Mentor",
        name: "Krisha Mehta",
        links: [
            {
                url: "https://www.linkedin.com/in/krishamehta",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/krisha-mehta",
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
        imageSrc: "/team/Gargi_Sathe.jpg",
        position: "Team Youtube",
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
        imageSrc: "/team/Mrunmayi_Parker.jpg",
        position: "Team WhatsApp",
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
    {
        imageSrc: "/team/Nahush_Patil.jpg",
        position: "Team WhatsApp",
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
        imageSrc: "/team/Pratyay_Banerjee.png",
        position: "Research Engineer",
        name: "Pratyay Banerjee",
        links: [
            {
                url: "https://www.linkedin.com/in/neilblaze",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/Neilblaze",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/Devang_Shah.jpg",
        position: "Team Telegram",
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
    // {
    //     imageSrc: "/team/Nayan_Chandwani.jpg",
    //     position: "Research Engineer",
    //     name: "Nayan Chandwani",
    //     links: [
    //         {
    //             url: "https://www.linkedin.com/in/nayanchandwani",
    //             icon: LinkedinIcon,
    //         },
    //         {
    //             url: "https://github.com/koladweep",
    //             icon: GithubIcon,
    //         },
    //     ],
    // },
    {
        imageSrc: "/team/Veer_Pariawala.png",
        position: "Research Engineer",
        name: "Veer Pariawala",
        links: [
            {
                url: "https://www.linkedin.com/in/veer-pariawala-0281b4229/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/VP45",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/Hriday_Ranka.jpg",
        position: "Research Engineer",
        name: "Hriday Ranka",
        links: [
            {
                url: "https://www.linkedin.com/in/hriday-ranka-9b4b34279/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/FruitPnchSamuraiG",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/Prasad_Ranjane.jpg",
        position: "Research Engineer",
        name: "Prasad Ranjane",
        links: [
            {
                url: "https://www.linkedin.com/in/prasad-ranjane-899401220/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/prasaddd77",
                icon: GithubIcon,
            },
        ],
    },
    // {
    //     imageSrc: "/team/Saket_Sultania.png",
    //     position: "Research Engineer",
    //     name: "Prasad Ranjane",
    //     links: [
    //         {
    //             url: "https://www.linkedin.com/in/saket-sultania/",
    //             icon: LinkedinIcon,
    //         },
    //         {
    //             url: "https://github.com/SAKET03",
    //             icon: GithubIcon,
    //         },
    //     ],
    // },
    {
        imageSrc: "/team/Raza_Syed.jpg",
        position: "Research Engineer",
        name: "Mohammed Raza Syed",
        links: [
            {
                url: "https://www.linkedin.com/in/mohd-raza-syed/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/mohd-raza",
                icon: GithubIcon,
            },
        ],
    },
];

const arbiterTeamData = [
    {
        imageSrc: "/team/arbiter/Kunal_Chandwani.jpg",
        position: "Cloud Engineer",
        name: "Kunal Chandwani",
        links: [
            {
                url: "",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/blackchapel",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Rosita_Dmello.jpg",
        position: "Cloud Engineer",
        name: "Rosita D'mello",
        links: [
            {
                url: "https://www.linkedin.com/in/rosita-dmello/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/rosita-dmello",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Vidhita_Pai.jpg",
        position: "Cloud Engineer",
        name: "Vidhita Pai",
        links: [
            {
                url: "www.linkedin.com/in/vidhitapai",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/vidhitapai",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Mihir_Shinde.jpg",
        position: "Frontend Engineer",
        name: "Mihir Shinde",
        links: [
            {
                url: "",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/MihirShinde-29",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/Bhumika_Mange.jpeg",
        position: "Frontend Engineer",
        name: "Bhumika Mange",
        links: [
            {
                url: "",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/bhumika-1-3",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Aasmi_Thadhani.jpg",
        position: "Frontend Engineer",
        name: "Aasmi Thadhani",
        links: [
            {
                url: "https://www.linkedin.com/in/aasmi-thadhani/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/aasmithadhani",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Aman_Nambisan.jpg",
        position: "Frontend Engineer",
        name: "Aman Nambisan",
        links: [
            {
                url: "https://www.linkedin.com/in/amannambisan/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/my-neme-eh-jeff",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Shubham_Mehta.jpg",
        position: "Frontend Engineer",
        name: "Shubham Mehta",
        links: [
            {
                url: "",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/shubhammehta39",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Jenil_Savla.jpg",
        position: "DuckDB Engineer",
        name: "Jenil Savla",
        links: [
            {
                url: "https://www.linkedin.com/in/jenil-m-savla/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/Jenil-Savla",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Vismay_Vora.jpg",
        position: "DuckDB Engineer",
        name: "Vismay Vora",
        links: [
            {
                url: "https://www.linkedin.com/in/vismay-vora-61a75a130/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/VismayVora",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Anish_Kulkarni.jpg",
        position: "DuckDB Engineer",
        name: "Anish Kulkarni",
        links: [
            {
                url: "https://www.linkedin.com/in/kulkarni-anish/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/kulkarni-anish",
                icon: GithubIcon,
            },
        ],
    },
    {
        imageSrc: "/team/arbiter/Niket_Shah.jpg",
        position: "DuckDB Engineer",
        name: "Niket Shah",
        links: [
            {
                url: "https://www.linkedin.com/in/niket-shah-a64672232/",
                icon: LinkedinIcon,
            },
            {
                url: "https://github.com/Niket-Shah28",
                icon: GithubIcon,
            },
        ],
    },
];

const alumniData = [
    {
        imageSrc: "/team/Shwe_Han.jpg",
        position: "Alumni",
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
        imageSrc: "/team/Deep_Gandhi.jpeg",
        position: "Alumni",
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
        imageSrc: "/team/Aditya_Thaker.jpg",
        position: "Alumni",
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
        position: "Alumni",
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
        position: "Alumni",
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
        position: "Alumni",
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
        position: "Alumni",
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
];