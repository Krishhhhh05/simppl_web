import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import ReactModalAdapter from "helpers/ReactModalAdapter.js";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;

// define the post as a motion.a if the type is working else as a normal a tag
const Research = tw(
    motion.div
)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Post = tw(
    motion.a
)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`h-64 bg-cover bg-center bg-no-repeat rounded`,
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm mb-8`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
    ${tw`mt-24 lg:mt-0 lg:w-1/3`}
    ${PostsContainer} {
        ${tw`flex flex-wrap lg:flex-col`}
    }
    ${Post} {
        ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
    }
    ${Research} {
        ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
    }
    ${Title} {
        ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
    }
    ${AuthorName} {
        ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
    }
    ${Image} {
        ${tw`h-20 w-20 flex-shrink-0`}
    }
`;
const PostTextContainer = tw.div``;

const StyledModal = styled(ReactModalAdapter)`
    &.mainHeroModal__overlay {
        ${tw`fixed inset-0 z-50 overflow-y-auto`}
    }
    &.mainHeroModal__content {
        ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-lg flex justify-center items-center rounded-lg bg-gray-200 outline-none h-auto  p-4`}
    }
    .content {
        ${tw`w-full lg:p-16 overflow-y-auto`}
    }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export default () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedResearch, setSelectedResearch] = useState(null);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const openModal = (research) => {
        setSelectedResearch(research);
        toggleModal();
    };

    // This setting is for animating the post background image on hover
    const postBackgroundSizeAnimation = {
        rest: {
            backgroundSize: "100%",
        },
        hover: {
            backgroundSize: "110%",
        },
    };

    //Recommended: Only 2 Items
    const popularResearch = [
        {
            researchImageSrc: "/research/sakhi-paper.png",
            title: "Deploying Large Language Model-based Chatbots for Indic Languages in Low-Resource Regions",
            description:
                "A working paper on the functioning of our WhatsApp based multilingual chatbot 'Sakhi'. This paper describes the methodologies used to create and deploy the chatbot in Bangladesh..",
            authors: [],
            url: "/research/papers/Deploying_Large_Language_Model-based_Chatbots_for_Indic_Languages_in_Low-Resource_Regions.pdf",
            conference: "AAAI 2024 (Working Paper)",
            workshop: "Submitted at 2nd Workshop on Deployable AI",
            status: "working",
            abstract:
                "There are many public health challenges in the so-called global south that are tackled through literacy-focused interventions by nonprofits and public health agencies. However, it is extremely challenging to scale such interventions to large populations in countries that speak multiple languages, and have complex sociocultural norms. We leverage large language models (LLMs) to demonstrate a scaling of successful literacy interventions to improve menstrual health and hygiene among adolescent females in Bangladesh. Our system is deployed as a WhatsApp chatbot that generates responses grounded in accurate, verified knowledge from international health agencies and domain-specific knowledge from local health organizations. We discuss the considerations for the development and deployment of consumer-facing LLM chatbots to be accessible in low-resource communities without a large English-speaking population.",
        },
        {
            researchImageSrc: "/research/deepfake.png",
            title: "Examining the Implications of Deepfakes for Election Integrity",
            description:
                "A working paper on how deepfakes affect elections and a review of existing deepfake tools and policies.",
            authors: [],
            url: "/research/papers/Examining_the_Implications_of_Deepfakes_for_Election_Integrity.pdf",
            conference: "AAAI 2024 (Working Paper)",
            workshop: "Submitted at 3rd Workshop on AI for Credible Elections",
            status: "working",
            abstract:
                "It is becoming cheaper to launch disinformation operations at scale using AI-generated content, in particular 'deepfake' technology. We have observed instances of deepfakes in political campaigns, where generated content is employed to both bolster the credibility of certain narratives (reinforcing outcomes) and manipulate public perception to the detriment of targeted candidates or causes (adversarial outcomes). We discuss the threats from deepfakes in politics, highlight model specifications underlying different types of deepfake generation methods, and contribute an accessible evaluation of the efficacy of existing detection methods. We provide this as a summary for lawmakers and civil society actors to understand how the technology may be applied in light of existing policies regulating its use. We highlight the limitations of existing detection mechanisms and discuss the areas where policies and regulations are required to address the challenges of deepfakes.",
        },
    ];

    const recentResearch = [
        {
            researchImageSrc: "/research/content_moderation.jpg",
            title: "AI's Playdate with Youth Platforms",
            description:
                "A review of AI-driven content moderation techniques informed by expert interviews from professionals at leading platforms.",
            authors: [],
            url: "",
            conference: "Working Paper",
            status: "working",
            abstract:
                "The exponential rise of user-generated content across digital platforms has rendered manual content moderation inadequate, making AI integral to this process. Through natural language processing and computer vision technologies, AI can rapidly scan massive volumes of data to flag policy violations with unparalleled speed and scale. In practice AI-based approaches are imperfect, suffer from biases, and cannot be end-to-end automated due to the high cost of false positives. In light of the challenges facing content moderation, this literature review examines the role of AI techniques for content moderation across three key areas with a high volume of younger users - social media, dating apps, and gig economy platforms. Publicly available materials provide insights into the moderation approaches adopted by leading youth-centric social platforms like Snapchat, Tinder, TikTok, and Twitch. This review discusses the use of AI-based techniques for hate speech detection, age verification, misinformation identification, and others. We focus on identifying the common problems prevalent across individual platforms belonging to each industry, in an effort to provide a common ground for the discussion of shared solutions in these spaces. We find that while AI enables more nuanced and comprehensive moderation across the industries, there are limitations with respect to contextual understanding, bias, and adversarial generation of synthetic content. Continuous improvements to training data diversity, model transparency, and human oversight remain vital to advancement. By harnessing AI as a scalable first line of defense, platforms can uphold standards of safety, authenticity and dignity for their users. On the other hand, sole reliance on algorithmic systems is unwise given their known and unknown limitations. Blending automated flagging with human content reviewers appears the most prudent moderation strategy but generative AI technologies are likely to exacerbate the challenges of content moderation.",
        },
        {
            researchImageSrc: "/research/identifying_coordinated_networks.jpg",
            title: "Identifying Coordinated Networks Promoting Misleading Narratives Online",
            description:
                "Presenting a scalable method to identify networks of accounts engaged in information operations on social media.",
            authors: [],
            url: "/research/papers/Identifying_Coordinated_Networks_Promoting_Misleading_Narratives_Online.pdf",
            conference: "Working Paper",
            status: "working",
            abstract:
                "There has been a growing occurrence of false and misleading information including low-quality news on events of civic volatility like elections, public health crises, and wars. The spread of such unreliable content is often achieved by employing groups of accounts that promote news narratives through coordinated campaigns. We present a content-agnostic method to analyze the influence of Wikipedia's perennial sources. This method relies on publicly available engagement and network data and is capable of identifying previously unknown accounts that are part of coordinated networks promoting potentially unreliable narratives. We track articles between 2020 and 2022 published by two Russian media outlets, Russia Today and Sputnik News, and investigate the networks of accounts involved in amplifying their content to a wider audience on the popular microblogging website, Twitter. In view of the need for open-source intelligence systems to track the external impact of news providers in order to quantify the harms from Wikipedia's unreliable sources, we present a platform containing the results of our analysis, where external actors including the public can access the detailed analysis of content-sharing networks that we develop without reliance on the substantive nature of the content.",
        },
        {
            researchImageSrc: "/research/multiagent.png",
            title: "Multi-agent Simulators for Social Networks",
            description:
                "Introducing the notion of simulation intelligence to model online information networks.",
            authors: [],
            url: "/research/papers/Multiagent_Simulators_for_Social_Networks.pdf",
            conference: "Workshop on Multi-agent Security - NeurIPS 2023",
            status: "under review",
            abstract:
                "Multiagent social network simulations are an avenue that can bridge the communication gap between the public and private platforms in order to develop solutions to a complex array of issues relating to online safety. While there are significant challenges relating to the scale of multiagent simulations, efficient learning from observational and interventional data to accurately model micro and macro-level emergent effects, there are equally promising opportunities not least with the advent of large language models that provide an expressive approximation of user behavior. In this position paper, we review prior art relating to social network simulation, highlighting challenges and opportunities for future work exploring multiagent security using agent-based models of social networks.",
        },
        {
            researchImageSrc: "/research/whitepaper.jpg",
            title: "Whitepaper: Personalizing Audience Analytics using Social Intelligence",
            description:
                "Creating a system to combine multi-platform audience insights to inform digital strategy.",
            authors: [],
            url: "/research/papers/Improving_personalization_through_the_resolution_of_on-Site_visitors.pdf",
            conference: "Technical Whitepaper",
            status: "published",
            abstract:
                "We are interested in modeling user preferences to aid in personalization through an understanding of their activities and interactions outside of the news website, on social network platforms. We seek to combine on-site and off-site signals aiming to expand the team's understanding of user archetypes with the context of their off-site content preferences. We are supported by the One Fact Foundation, a 501(c)(3) nonprofit and would be excited to work with the media organization on the proposed area of personalization. This document lays out some of the details of the project that we would like to collaborate on.",
        },
        {
            researchImageSrc: "/research/expanding_ml.png",
            title: "Expanding Access to ML Research through Student-led Collaboratives",
            description:
                "Learnings from creating a student research collective pursuing collaborative projects.",
            authors: [],
            url: "/research/papers/Expanding_Access_to_ML_Research_through_Student-led_Collaboratives.pdf",
            conference:
                "Workshop on Broadening Research Collaborations - NeurIPS 2022",
            status: "published",
            abstract:
                "We present a model of a student-led community of researchers to highlight the impact of pursuing collaborative machine learning research on the group's members individually as well as towards achieving shared goals. We provide concrete examples of the guiding principles that led to the evolution of the collaborative from a reading group into a research group and eventually launching a non-profit software product to help non-technical stakeholders leverage artificial intelligence (AI), improving access to advanced technologies, and promoting open science. Our goal is to lay out a template to launch similar small-scale collaborative organisations at different institutes around the world.",
        },
    ];

    return (
        <Container>
            <ContentWithPaddingXl>
                <Row>
                    <PopularPostsContainer>
                        <Heading>Recent Research</Heading>
                        <PostsContainer>
                            {popularResearch.map((research, index) =>
                                research.status === "working" ? (
                                    <Research
                                        key={index}
                                        className="group"
                                        onClick={() => openModal(research)}
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                    >
                                        <Image
                                            transition={{ duration: 0.3 }}
                                            variants={
                                                postBackgroundSizeAnimation
                                            }
                                            imageSrc={research.researchImageSrc}
                                        />
                                        <Title>{research.title}</Title>
                                        <Description>
                                            {research.description}
                                        </Description>
                                        <AuthorInfo>
                                            <AuthorNameAndProfession>
                                                <AuthorName>
                                                    {research.workshop}
                                                </AuthorName>
                                                <AuthorProfile>
                                                    {research.conference}
                                                </AuthorProfile>
                                            </AuthorNameAndProfession>
                                        </AuthorInfo>
                                    </Research>
                                ) : (
                                    <Post
                                        key={index}
                                        href={research.url}
                                        className="group"
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                    >
                                        <Image
                                            transition={{ duration: 0.3 }}
                                            variants={
                                                postBackgroundSizeAnimation
                                            }
                                            imageSrc={research.researchImageSrc}
                                        />
                                        <Title>{research.title}</Title>
                                        <Description>
                                            {research.description}
                                        </Description>
                                        <AuthorInfo>
                                            <AuthorNameAndProfession>
                                                <AuthorName>
                                                    {research.workshop}
                                                </AuthorName>
                                                <AuthorProfile>
                                                    {research.conference}
                                                </AuthorProfile>
                                            </AuthorNameAndProfession>
                                        </AuthorInfo>
                                    </Post>
                                )
                            )}
                        </PostsContainer>
                    </PopularPostsContainer>
                    <RecentPostsContainer>
                        <Heading>Past Research</Heading>
                        {/* <PostsContainer>
                            {recentResearch.map((research, index) =>
                                research.status === "working" ? (
                                    <Research
                                        key={index}
                                        className="group"
                                        onClick={toggleModal}
                                    >
                                        <PostTextContainer>
                                            <Title>{research.title}</Title>
                                            <AuthorName>
                                                {research.conference}
                                            </AuthorName>
                                        </PostTextContainer>
                                        <Image
                                            imageSrc={research.researchImageSrc}
                                        />

                                        <StyledModal
                                            closeTimeoutMS={300}
                                            className="mainHeroModal"
                                            isOpen={modalIsOpen}
                                            onRequestClose={toggleModal}
                                            shouldCloseOnOverlayClick={true}
                                        >
                                            <CloseModalButton
                                                onClick={toggleModal}
                                            >
                                                <CloseIcon tw="w-6 h-6" />
                                            </CloseModalButton>
                                            <div className="content">
                                                <Title>{research.title}</Title>
                                                <AuthorName>
                                                    {research.conference}
                                                </AuthorName>
                                                <AuthorProfile>
                                                    {research.workshop}
                                                </AuthorProfile>
                                                Abstract:
                                                <Description>
                                                    {research.abstract}
                                                </Description>
                                            </div>
                                        </StyledModal>
                                    </Research>
                                ) : (
                                    <Post
                                        key={index}
                                        href={research.url}
                                        className="group"
                                    >
                                        <PostTextContainer>
                                            <Title>{research.title}</Title>
                                            <AuthorName>
                                                {research.conference}
                                            </AuthorName>
                                        </PostTextContainer>
                                        <Image
                                            imageSrc={research.researchImageSrc}
                                        />
                                    </Post>
                                )
                            )}
                        </PostsContainer> */}
                        <PostsContainer>
                            {recentResearch.map((research, index) =>
                                research.status === "working" ? (
                                    <Research
                                        key={index}
                                        className="group"
                                        onClick={() => openModal(research)}
                                    >
                                        <PostTextContainer>
                                            <Title>{research.title}</Title>
                                            <AuthorName>
                                                {research.conference}
                                            </AuthorName>
                                        </PostTextContainer>
                                        <Image
                                            imageSrc={research.researchImageSrc}
                                        />
                                    </Research>
                                ) : (
                                    <Post
                                        key={index}
                                        href={research.url}
                                        className="group"
                                    >
                                        <PostTextContainer>
                                            <Title>{research.title}</Title>
                                            <AuthorName>
                                                {research.conference}
                                            </AuthorName>
                                        </PostTextContainer>
                                        <Image
                                            imageSrc={research.researchImageSrc}
                                        />
                                    </Post>
                                )
                            )}
                        </PostsContainer>
                        <StyledModal
                            closeTimeoutMS={300}
                            className="mainHeroModal"
                            isOpen={modalIsOpen}
                            onRequestClose={toggleModal}
                            shouldCloseOnOverlayClick={true}
                        >
                            <CloseModalButton
                                onClick={() => {
                                    toggleModal();
                                    setSelectedResearch(null);
                                }}
                            >
                                <CloseIcon tw="w-6 h-6" />
                            </CloseModalButton>
                            {selectedResearch && (
                                <div className="content">
                                    <Title>{selectedResearch.title}</Title>
                                    <AuthorName>
                                        {selectedResearch.conference}
                                    </AuthorName>
                                    <AuthorProfile>
                                        {selectedResearch.workshop}
                                    </AuthorProfile>
                                    Abstract:
                                    <Description>
                                        {selectedResearch.abstract}
                                    </Description>
                                    <PrimaryLink
                                        css={tw`rounded-full`}
                                        href={`mailto:simppl.collabs@gmail.com?subject=Requesting access to the research paper - ${selectedResearch.title}`}
                                    >
                                        Request Access
                                    </PrimaryLink>
                                </div>
                            )}
                        </StyledModal>
                    </RecentPostsContainer>
                </Row>
            </ContentWithPaddingXl>
        </Container>
    );
};
