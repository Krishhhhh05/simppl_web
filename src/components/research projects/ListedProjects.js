import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Modal from "react-modal";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import Youtubeimage from "../../images/projects/youtube.jpeg"
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const FourColumn = tw.div`flex flex-col justify-center items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/4 md:w-1/3 h-96`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = styled.div`
  ${tw`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs p-2 shadow-lg rounded-lg h-96 flex flex-col cursor-pointer`}
`;
const Image = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center h-40 lg:h-32 rounded`,
]);
const Category = tw.div`inline-block px-4 py-1 text-sm font-bold text-green-800 bg-green-200 rounded-full m-1`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-sm`;
const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const Help = tw.p`mt-2 text-sm text-secondary-300 font-bold text-center`;
const CardFooter = tw.div`mt-4 flex justify-end`;

const Description = styled.div`
  ${tw`mt-4 text-secondary-300 font-bold text-sm`}
`;

const DecoratorBlob1 = tw(
    SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
    SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;


// import tw from "twin.macro";

const ModalOverlay = tw.div`fixed inset-0  bg-opacity-50 flex justify-center items-center z-50`;
const ModalContent = tw.div`bg-white rounded-lg shadow-lg overflow-auto p-8`;
const ModalHeader = tw.div`mb-4 flex justify-between items-center`;
const ModalTitle = tw.h2`text-2xl font-bold text-gray-800 text-center`;
const CloseButton = tw.button`text-gray-500 hover:text-gray-700 transition duration-300`;

const ModalBody = tw.div`text-gray-700 flex flex-wrap overflow-auto md:flex-row`;
const ModalSection = tw.div`mt-4 p-4 rounded-lg w-full `;
const ModalSectionTitle = tw.div`font-bold mt-1 text-gray-900 `;
const ModalSectionList = tw.div`flex flex-wrap space-x-2`;

const ModalFooter = tw.div`mt-8 flex justify-end`;
const Complete = tw.div`inline-block px-4 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full m-1`;
const Incomplete = tw.div`inline-block px-4 py-1 text-xs font-semibold text-red-800 bg-red-200 rounded-full m-1`;
const PillButton = tw.div`inline-block px-4 py-2 text-xs font-semibold text-gray-800 bg-gray-200 rounded-full `;
const PillsContainer = tw.div`flex justify-center flex-wrap mt-4 space-x-2`;
const ImageContainer = tw.div`w-full md:w-1/2 p-4 h-24 object-cover`;
const TextContainer = tw.div`w-full md:w-1/2 p-4`;
const LinkContainer = tw.div`mt-4 flex justify-center w-full`;
const LinkButton = tw.a`inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700`;



const ProjectModal = ({ isOpen, onRequestClose, project }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
            <ModalHeader>
                <ModalTitle>{project.title}</ModalTitle>
                <CloseButton onClick={onRequestClose}>X</CloseButton>
            </ModalHeader>
            <ModalBody>
                <ImageContainer>
                    {/* <img src={project.coverImage} alt="Project Cover" /> */}

                    <img src={Youtubeimage} alt="Project Cover" />

                </ImageContainer>

                <TextContainer>
                    <p>{project.description100}</p>
                    <ModalSection>
                        <ModalSectionTitle>Team:</ModalSectionTitle>
                        <ModalBody>
                            <div tw="flex flex-wrap overflow-auto">
                                {Object.entries(project.team).map((name, index) => (
                                    <span key={index} tw="text-gray-700 m-2">{name[0]}, </span>

                                ))}
                            </div>
                        </ModalBody>
                    </ModalSection>
                    <PillsContainer>
                        {project.startDate && <PillButton>Start Date: {project.startDate}</PillButton>}
                        {project.endDate && <PillButton>End Date: {project.endDate}</PillButton>}
                        {project.endDate ? <Complete>Completed</Complete> : <Incomplete>Incomplete</Incomplete>}
                    </PillsContainer>
                    <ModalSection>
                        <ModalSectionTitle>Links:</ModalSectionTitle>
                        <LinkContainer>
                            {project.projectLinks.demo1 && (
                                <PillButton><a href={project.projectLinks.demo1} tw="inline-block px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                                    Demonstration 1
                                </a>
                                </PillButton>
                            )}
                            {project.projectLinks.demo2 && (
                                <PillButton> <a href={project.projectLinks.demo2} tw="inline-block px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                                    Demonstration 2
                                </a>
                                </PillButton>
                            )}
                            {project.projectLinks.presentation && (
                                <PillButton> <a href={project.projectLinks.presentation} tw="inline-block px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                                    Presentation
                                </a>
                                </PillButton>
                            )}
                            {project.projectLinks.researchPaper && (
                                <PillButton>
                                    <a href={project.projectLinks.researchPaper} tw="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                                        Research Paper
                                    </a>
                                </PillButton>
                            )}
                        </LinkContainer>
                    </ModalSection>
                    <ModalSection>
                        {project.researchGoals && (
                            <ModalBody>
                                <ModalSectionTitle>Research Goals:</ModalSectionTitle>
                                <ModalSectionList><ul>
                                    {project.researchGoals.map((goal, index) => (
                                        <li> <span key={index} tw="text-gray-700 m-2">{goal}</span></li>
                                    ))}</ul></ModalSectionList>
                            </ModalBody>
                        )}

                    </ModalSection>
                </TextContainer>
            </ModalBody>
        </Modal>
    );
};




export default ({ heading = "Our Articles", description = null }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <Container>
            <Content>
                <HeadingInfoContainer>
                    <HeadingTitle>Our Research Projects</HeadingTitle>
                    <HeadingDescription>{description}</HeadingDescription>
                </HeadingInfoContainer>
                <FourColumn>
                    {projectData.map((project, index) => (
                        <Column key={index}>
                            <Card onClick={() => openModal(project)}>
                                {/* <Image imageSrc={project.coverImage} /> */}
                                <Title>{project.title}</Title>
                                <Description>{project.description30}</Description>
                                <CardFooter>
                                    <LinkContainer>
                                        <Complete>{project.status}</Complete>
                                        <Incomplete>Help needed</Incomplete>
                                        <span><GithubIcon /></span>
                                    </LinkContainer>
                                </CardFooter>
                            </Card>
                        </Column>
                    ))}
                </FourColumn>
            </Content>
            <DecoratorBlob1 />
            <DecoratorBlob2 />
            {selectedProject && (
                <ProjectModal
                    isOpen={!!selectedProject}
                    onRequestClose={closeModal}
                    project={selectedProject}
                />
            )}
        </Container>
    );
};


const projectData = [
    {
        "title": "YouTube Data Analysis",
        "description100": "Our project delves into YouTube data to detect and understand coordinated inauthentic behavior, focusing on cross-platform link-sharing dynamics. By identifying networks that rapidly share links from unreliable sources, we examine their impact on video engagement and community influence. Through mixed methods research, we reveal the reach of these networks beyond their platform of origin, shedding light on the complexities of online information warfare. Our findings underscore the need for comprehensive strategies to address manipulation and misinformation across social platforms, providing insights crucial for enhancing digital security and combating online threats effectively.",
        "description30": "We analyze YouTube data to uncover coordinated inauthentic behavior, measuring cross-platform link-sharing's influence. Our research highlights gaps in combating online information warfare across social platforms.",
        "coverImage": "../../images/projects/youtube.jpeg",
        "team": {
            "Archit Rathod": [
                "Team Leader",
                "Contributor"
            ],
            "Gargi Sathe": [
                "Distinguished Contributor"
            ],
            "Mokshit Surana": [
                "Distinguished Contributor"
            ],
            "Vedant Pradhan": [
                "Contributor"
            ],
            "Raghav Jain": [
                "Co-Mentor"
            ],
            "Swapneel Mehta": [
                "Co-Mentor"
            ],
            "Lynnette Ng": [
                "Research Mentor"
            ]
        },
        "startDate": "03/01/2023",
        "status": "In Progress",
        "endDate": "",
        "projectLinks": {
            "demo1": "https://youtube-at-simppl.onrender.com",
            "demo2": "",
            "presentation": "https://docs.google.com/presentation/d/1sQeCFgMoZvSGaB0GiOd1-pv7IXAa9wgkAZ1O9MZdqpQ/edit?usp=sharing",
            "researchPaper": ""
        },
        "researchGoals": [
            "Identify and expose coordinated inauthentic behavior in YouTube communities.",
            "Analyze the impact of cross-platform link-sharing on video engagement.",
            "Uncover networks promoting unreliable content across social platforms.",
            "Enhance understanding of online information warfare for effective countermeasures."
        ],
        "mediaMentions": ""
    },
    {
        "title": "Aadhar Sanstha",
        "description100": "Aadhar Bahuddeshiya Sanstha is an NGO working on border tribal villages of Maharashtra and Madhya Pradesh. They work with pregnant women in tribal villages to find out their health risks and help them and make this process easier for them by keeping a regular check on them throughout their 9 months of pregnancy and also keeping in touch with them after their child has been born. The project involves creating an app for their team to make their data entry process simpler.",
        "description30": "Aadhar Bahuddeshiya Sanstha, an NGO, aids pregnant women in Maharashtra and Madhya Pradesh's border tribal villages, monitoring their health risks throughout pregnancy and postpartum via a simplified data entry app.",
        "coverImage": "../../images/projects/aadhar-sanstha.jpeg",
        "team": {
            "Swapneel Mehta": [
                "Research Mentor"
            ],
            "Prasad Ranjane": [
                "Team Leader"
            ],
            "Neel Nagrath": [
                "Industry Mentor"
            ],
            "Rishika Sharma": [
                "Contributor"
            ],
            "Vivek Dubey": [
                "Contributor"
            ]
        },
        "startDate": "15/02/2024",
        "status": "In Progress",
        "endDate": "10/06/2024",
        "researchGoals": [
            "Creation of a mobile app that has all the forms they're filling manually as of now.",
            "The forms should be in both Marathi and English for it to be easier for the workers to understand.",
            "All the forms in the app should have the option of storing the submitted data offline and send the data to their excel sheet as soon as the user arrives in an area with network coverage as there is no network connection at all in the villages where these workers will fill the data.",
            "Every registered pregnant women should have a profile on the app in order to make tracking the pregnancies easier."
        ],
        "projectLinks": {
            "demo1": "",
            "demo2": "",
            "presentation": "",
            "researchPaper": ""
        },
        "mediaMentions": ""
    },
    {
        "title": "Wikipedia Pageview Data Analysis",
        "description100": "It is important to recognize the value of studying platforms associated with a particular political leaning. Here, we examine the dissemination of neutral Wikipedia links on alt-right platform Truth Social. By scrutinizing the posts, identifying toxicity trends & recognizing coordinated networks, we unveil the intricacies of the type and engagement of content with Wikipedia links (Wiki Truths) is shared on Truth Social. Given the significantly different engagement and toxicity levels of Wiki Truths against Non-Wiki Truths, we emphasize that we should not generalize the techno-political affiliation of a social media platform, but rather investigate into the content closely.",
        "description30": "This project aims to uncover the nuances of content dissemination on Truth Social, highlighting the importance of understanding and the impact of neutral information within politically leaning online communities.",
        "coverImage": "../../images/projects/wikipedia-pageview.jpeg",
        "team": {
            "Chaitya Shah": [
                "Team Leader",
                "Contributor"
            ],
            "Gautam Malpani": [
                "Contributor"
            ],
            "Swapneel Mehta": [
                "Research Mentor"
            ],
            "Lynnette Ng": [
                "Research Mentor"
            ],
            "Ritesh Konka": [
                "Contributor"
            ],
            "Pankti Sheta": [
                "Observer"
            ],
            "Pranali Kurani": [
                "Observer"
            ]
        },
        "startDate": "21/12/2023",
        "status": "In Progress",
        "endDate": "31/03/2024",
        "projectLinks": {
            "demo1": "",
            "demo2": "",
            "presentation": "",
            "researchPaper": ""
        },
        "researchGoals": [
            "Importance of studying Neutral Links on Alt-Right Platforms"
        ],
        "mediaMentions": ""
    },
    {
        "title": "LLM Harms",
        "description100": "Our research delves into the potential dangers posed by large language models (LLMs) in propagating extremism on social media platforms. By examining responses generated by LLMs to content threads on Truth Social, an alt-right platform, we aim to understand their contribution to harmful content dissemination. We'll assess both open-source and proprietary models to gauge their impact on promoting extremist narratives. This investigation is crucial as it sheds light on the role of advanced AI in fostering radicalization within online communities, highlighting the need for vigilant monitoring and ethical considerations in the deployment of such technologies",
        "description30": "Exploring the role of large language models (LLMs) in extremism propagation, we analyze responses on Truth Social to understand AI's impact on harmful content dissemination and radicalization online.",
        "coverImage": "../../images/projects/llm-harms.jpeg",
        "team": {
            "Archit Rathod": [
                "Distinguished Contributor"
            ],
            "Caitlyn Vergara": [
                "Observer"
            ],
            "Gautam Malpani": [
                "Contributor"
            ],
            "Mokshit Surana": [
                "Team Leader"
            ],
            "Swapneel Mehta": [
                "Co-Mentor"
            ],
            "Sahil Shenoy": [
                "Observer"
            ],
            "Varun Nair": [
                "Contributor"
            ],
            "Deb Donig": [
                "Industry Mentor"
            ]
        },
        "startDate": "15/12/2023",
        "status": "In Progress",
        "endDate": "30/04/2024",
        "researchGoals": [
            "To understand how LLMs respond to toxic, hate, and extremist thread of messages."
        ],
        "projectLinks": {
            "demo1": "",
            "demo2": "",
            "presentation": "",
            "researchPaper": ""
        },
        "mediaMentions": ""
    },
    {
        "title": "Bluesky Social Analysis",
        "description100": "The primary goal of the Bluesky Analysis project is to detect, analyze, and combat the spread of misinformation and disinformation on Bluesky Social. The project focuses on newer platforms like Bluesky Social, which utilize decentralized architectures. Unlike traditional social media platforms that rely on centralized servers and moderation, decentralized platforms operate using different technologies. Bluesky works on the AT Protocol which is a new architecture built for decentralized social networks. The project has amassed a significant amount of data, with over 174 million data points collected thus far.",
        "description30": "Bluesky Analysis project was started to detect and analyze the spread of misinformation and disinformation on the Bluesky Social platform which uses a decentralized architecture instead of a centralized one.",
        "coverImage": "../../images/projects/bluesky.jpeg",
        "team": {
            "Aditya Surve": [
                "Distinguished Contributor"
            ],
            "Aneesh Shamraj": [
                "Team Leader"
            ],
            "Swapneel Mehta": [
                "Research Mentor"
            ],
            "Lynnette Ng": [
                "Observer"
            ],
            "Ananya Malik": [
                "Co-Mentor"
            ],
            "Akanksha Bhimte": [
                "Contributor"
            ],
            "Dhvani Shah": [
                "Contributor"
            ],
            "Shristi Shetty": [
                "Contributor"
            ]
        },
        "startDate": "12/06/2023",
        "status": "In Progress",
        "endDate": "",
        "projectLinks": {
            "demo1": "",
            "demo2": "",
            "presentation": "https://docs.google.com/presentation/d/11ZV8KPq1jDAdpZydNzi_emg-bQm67S7LEOuqXG6QD_g/edit?usp=sharing",
            "researchPaper": ""
        },
        "researchGoals": [
            "Complete research paper",
            "Add additional functionalities to the product made by arbiter in the Bluesky part"
        ],
        "mediaMentions": ""
    },
    {
        "title": "Ecosystem Simulator",
        "description100": "We are building an ecosystem simulator for social media platforms (SMP) combining users, behaviors, networks, content, and algorithms. In this ecosystem, we unify prior simulation frameworks and present a cohesive picture of social media simulation. We propose a simplified simulation framework and demonstrate how we can model online harms to inform the public and policymakers of the risks from malicious actors.",
        "description30": "We build a social network simulator calibrated using millions of Reddit posts, and use it for measuring the robustness of content distribution algorithms. Our work informs platform design using safer AI algorithms for ranking.",
        "coverImage": "../../images/projects/ecosystem-simulator.jpeg",
        "team": {
            "Swapneel Mehta": [
                "Team Leader"
            ],
            "Saket Sultania": [
                "Contributor"
            ],
            "Akanksha Bhimte": [
                "Observer"
            ]
        },
        "startDate": "24/03/2024",
        "status": "In Progress",
        "endDate": "31/05/2024",
        "projectLinks": {
            "demo1": "https://icml.cc/virtual/2022/workshop/13470",
            "demo2": "",
            "researchPaper": "https://openreview.net/forum?id=wMxp5eVhMVe",
            "presentation": "https://mehtaver.se/assets/pdf/slides/swapneel_icml_ai4abm_slides.pdf"
        },
        "researchGoals": [
            "Develop theoretical model unifying existing approaches to simulation",
            "Contribute a practical simulator for social media interactions",
            "Demonstrate through experiments how the simulator can help identify risks from malicious actors online"
        ],
        "mediaMentions": "Paper published at ICML 2022"
    },
    {
        "title": "Gothamist Newsroom Analytics",
        "description100": "The project collaboration with WNYC (https://www.wnyc.org/), a well-known public radio station, focuses on using Google Analytics data to gain important insights into the audience dynamics of their newsroom. By studying this data, the team aims to obtain a comprehensive understanding of how their audience interacts with their content, detecting patterns, preferences, and areas of interest. This insight could be used to guide strategic decisions, content production, and audience outreach initiatives, resulting in a better overall user experience and a stronger connection with their audience. ",
        "description30": "The project seeks to explore innovative data visualization and interpretation methods to identify unique trends and opportunities from WNYC's data, ultimately providing data-driven insights to their newsroom to better serve their audience.",
        "coverImage": "../../images/projects/newsroom-analytics.jpeg",
        "team": {
            "Deepkumar Patel": [
                "Contributor"
            ],
            "Dhara Mungra": [
                "Co-Mentor"
            ],
            "Swapneel Mehta": [
                "Co-Mentor"
            ],
            "Veer Pariawala": [
                "Contributor"
            ],
            "Mohammed RazaSyed]": [
                "Team Leader",
                "Contributor"
            ],
            "Aaron Hill": [
                "Industry Mentor"
            ],
            "Nidhi Kadam": [
                "Contributor"
            ],
            "Heli Naik": [
                "Contributor"
            ]
        },
        "startDate": "19/12/2023",
        "status": "In Progress",
        "endDate": "",
        "projectLinks": {
            "demo1": "",
            "demo2": "",
            "presentation": "https://docs.google.com/presentation/d/1MWf_ph7shA8a4YUNvXvH_QC2u4Wh0vVNh2lbIZcPUxQ/edit#slide=id.p",
            "researchPaper": ""
        },
        "researchGoals": [
            "Identify patterns, preferences, and demographics to inform content strategy.",
            "Understand loyal audience perspective.",
            "Reach larger and younger audience segments.",
            "Uncover insights to refine content targeting."
        ],
        "mediaMentions": ""
    },
    {
        "title": "Dissemination on Telegram amidst Russian Invasion of Ukraine ",
        "description100": "The project aims to identify coordinated activity promoting disinformation, hate and extremist content related to the Russian invasion of Ukraine on Telegram channels. The approach involves collecting data from fact-checking sources, identifying frequent misinformation-sharing news outlets, searching for their instances on Telegram over-time, and scraping relevant suspicious channels. Quantitative analysis (statistics, network graphs) and qualitative analysis (bridging/aggregating channels, information cascades) is being performed to understand the dissemination patterns, key influencers, frequency and coordination in posting behavior across the network.",
        "description30": "Analyzing coordinated networks of authority-identified misinformation on Telegram related to Russian-Ukraine war through data collection, bridging channel analysis and temporal network analysis identifying diffusion patterns over-time across influential channels.",
        "coverImage": "../../images/projects/telegram.jpeg",
        "team": {
            "Swapneel Mehta": [
                "Research Mentor"
            ],
            "Hriday Ranka": [
                "Contributor"
            ],
            "Lynnette Ng": [
                "Research Mentor"
            ],
            "Devang Shah": [
                "Team Leader",
                "Contributor"
            ]
        },
        "startDate": "20/01/2024",
        "status": "In Progress",
        "endDate": "",
        "researchGoals": [
            "Establish metrics to distinguish between bridging and aggregating channels.",
            "Identify Information Cascades or perform temporal network analysis of authority-identified misinformation.",
            "Quantify prevalence of authority-identified (EUvsDisinfo) misinformation on Telegram.",
            "Explore top news outlets or sources, which are heavily cited in the misinformative channels."
        ],
        "projectLinks": {
            "demo1": "",
            "demo2": "",
            "presentation": "",
            "researchPaper": ""
        },
        "mediaMentions": ""
    },
    {
        "title": "WhatsApp Chatbot - Sakhi",
        "description100": "Sakhi is our WhatsApp chatbot to talk to users about menstrual health and hygiene in Bangla, English, and Beng-lish. Sakhi works right on their WhatsApp chats, with no installation and sign-up required! Our solution reduces the cost of interventions to pennies on the dollar. We leverage large language models (LLMs) rounded in verified, accurate, and modified to local conditions to scale literacy interventions. Alongside a local partner, we propose a WhatsApp chatbot that generates responses grounded in accurate, verified knowledge from international health agencies.",
        "description30": "Sakhi is our WhatsApp chatbot to talk to users about menstrual health and hygiene in Bangla, English, and Beng-lish. Our solution reduces the cost of interventions to pennies on the dollar. We utilize tailored Large Language Models to expand literacy interventions efficiently.",
        "coverImage": "../../images/projects/sakhi-chatbot.jpg",
        "team": {
            "Meet Mehta": [
                "Contributor"
            ],
            "Mrunmayi Parker": [
                "Team Leader"
            ],
            "Nahush Patil": [
                "Distinguished Contributor"
            ],
            "Pratyay Banerjee": [
                "Observer"
            ],
            "Raghav Jain": [
                "Research Mentor"
            ],
            "Khushi Jobanputra": [
                "Contributor"
            ],
            "Gauri Bhosle": [
                "Contributor"
            ],
            "Prashant Kumar": [
                "Industry Mentor"
            ],
            "Utkarsh Verma": [
                "Contributor"
            ]
        },
        "startDate": "01/08/2023",
        "status": "In Progress",
        "endDate": "",
        "researchGoals": [
            "Support all Indic languages.",
            "Support multimodal inputs.",
            "Create a cost-effective solution for interventions."
        ],
        "projectLinks": {
            "demo1": "https://drive.google.com/file/d/1IaNYZAhywmLfiDK9uGHgvacuKYKsUImI/view?usp=drivesdk",
            "demo2": "",
            "presentation": "https://docs.google.com/presentation/d/1phSAuh8b9hf25__7XEpS4uX_d-r03sfx/edit?usp=sharing&ouid=110721084249968539697&rtpof=true&sd=true",
            "researchPaper": ""
        },
        "mediaMentions": ""
    },
    {
        "title": "TGI Report 1",
        "description100": "This project focused on monitoring, investigating, and reporting the use of social media platforms for the spread of disinformation in Bangladesh as the country prepares for its upcoming election in January 2024. The main goal of this project is to monitor the activities of Facebook groups/pages with affiliations to any of the 2 major political parties the Awami League (AL) and the Bangladesh Nationalist Party (BNP), analyze their behavior, identity networks of groups spreading gendered disinformation and see if it is coordinated.  We published a report with this findings in partnership with a global nonprofit Tech Global Institute led by ex-Meta leads in South Asia.",
        "description30": "Investigate the use of Facebook for by political parties in Bangladesh and analyze their behavior on social media platforms ahead of general elections in country",
        "coverImage": "../../images/projects/tgi-report-1.jpeg",
        "team": {
            "Aditya Surve": [
                "Contributor"
            ],
            "Dhara Mungra": [
                "Team Leader"
            ],
            "Raghav Jain": [
                "Research Mentor"
            ],
            "Swapneel Mehta": [
                "Co-Mentor"
            ],
            "Veer Pariawala": [
                "Distinguished Contributor"
            ]
        },
        "startDate": "01/10/2023",
        "status": "Completed",
        "endDate": "12/12/2023",
        "projectLinks": {
            "demo1": "https://techglobalinstitute.com/research/facebook-political-battleground-bangladesh/",
            "demo2": "",
            "presentation": "",
            "researchPaper": ""
        },
        "researchGoals": [
            "Collect public pages and groups data with Awami League (AL) and the Bangladesh Nationalist Party (BNP) party names.",
            "Analyze posting activites by these pages/groups and engagement across these pages/groups.",
            "Identify coordinated post creation by these pages/groups"
        ],
        "mediaMentions": "Report was published in collaboration with Tech Global Institute and was featured in the largest daily newpaper in Bangladesh."
    },
    {
        "title": "TGI Report 2",
        "description100": "With the growing popularity of social media platforms, it is widely used by political parties to win over voters. This project focuses on monitoring, investigating, and reporting the use of Facebook for the spread of gendered disinformation in Bangladesh as the country prepares for its upcoming election in January 2024. We are partnering with a global nonprofit Tech Global Institute led by ex-Meta leads in South Asia to publish a technical report into gendered and political disinformation networks in Bangladesh. These findings in turn will be communicated to teams at Meta who have granted us access to their datasets to advance our research.",
        "description30": "Study the nature and spread of gendered based attacks on political figures, journalists and activists on Facebook ahead of general elections in Bangladesh",
        "coverImage": "../../images/projects/tgi-report-2.jpeg",
        "team": {
            "Aditya Surve": [
                "Contributor"
            ],
            "Dhara Mungra": [
                "Team Leader"
            ],
            "Veer Pariawala": [
                "Contributor"
            ]
        },
        "startDate": "12/01/2024",
        "status": "Completed",
        "endDate": "29/03/2024",
        "projectLinks": {
            "demo1": "",
            "demo2": "",
            "presentation": "",
            "researchPaper": ""
        },
        "researchGoals": [
            "Collect data with targets(public figures) and keywords (derogatory terms used to target public figures).",
            "Analyze the male and female targets with highest gendered attacks and keywords used to target them.",
            "Analyze the coordinated post creation for gendered attacks"
        ],
        "mediaMentions": "This report will be published in partnership with Tech Global Institute"
    },
    {
        "title": "Networks responsible for Coordinated spread of information on Facebook in Mangolia ",
        "description100": "With the growing popularity of social media platforms, it is widely exploited by malicious actors to disseminate dis/misinformation and reinforce a narrative thus engendering distrust, and subverting democracy in times of civic volatility in the democratic nations. In this project we aim identify the Mangolian facebook pages and groups that are used as channel by Chinese and Russian media to disseminate information in coordinated manner and change or drive a particular narrative in Mongolia.  This findings will then be communicated to Meta to aid them in their effort to identify networks responsible for coodinated spread of information.",
        "description30": "Identify the network of Mangolian pages and groups engaging in coordinated spread of information coming from Chinese and Russian media on Facebook ",
        "coverImage": "../../images/projects/nest-mongolia.jpeg",
        "team": {
            "Dhara Mungra": "Team Leader",
            "Prasad Ranjane": "Contributor",
            "Aradhya Sakalley": "Contributor",
            "Siddh Shah": "Contributor"
        },
        "startDate": "02/02/2024",
        "status": "In Progress",
        "endDate": "30/07/2024",
        "researchGoals": [
            "Collect data for Chinese and Russian official state and media pages and Mongolian facebook pages/groups sharing information from these sources.",
            "Analyze posting and engagement behaviour of these pages.",
            "Analyze and identify coordinate spread of information."
        ],
        "projectLinks": {
            "demo1": "",
            "demo2": "",
            "presentation": "",
            "researchPaper": ""
        },
        "mediaMentions": "This project is in partnership with Nest fact-checking group based out of Mongolia."
    },
    {
        "title": "Study network coordination via neo4j",
        "description100": "This project aims to develop framework that can used to study networks from social media interactions and visualize them. To begin with we aim to have easy to use notebook to standardize the process such that anyone with data in the format specified can run the script/notebook from the common workbench and visualize the results. Our aim is to integrate network creation in Arbiter with search capabilities such that user can visualize the network of spread of information on any platform for any channel/video/account.",
        "description30": "This project aims to develop framework that can used to study networks from social media interactions and visualize them.",
        "coverImage": "../../images/projects/network-coordination.jpeg",
        "team": {
            "Archit Rathod": [
                "Contributor"
            ],
            "Dhara Mungra": [
                "Team Leader"
            ],
            "Gautam Malpani": [
                "Contributor"
            ]
        },
        "startDate": "26/01/2024",
        "status": "In Progress",
        "endDate": "30/06/2024",
        "researchGoals": [
            "Understand and implement integration of PySpark with Neo4j.",
            "Easy to use notebooks for internal stakeholders.",
            "Network graph creation on arbiter with search capabilities for users."
        ],
        "projectLinks": {
            "demo1": "",
            "demo2": "",
            "presentation": "",
            "researchPaper": ""
        },
        "mediaMentions": ""
    }
]