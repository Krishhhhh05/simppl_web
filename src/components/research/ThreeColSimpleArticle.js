import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col justify-center items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/4 md:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center h-80 lg:h-64 rounded`,
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const Description = tw.div`mt-4 text-secondary-300 font-bold text-sm`;

const DecoratorBlob1 = tw(
    SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
    SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({ heading = "Our Articles", description = null }) => {
    const blogPosts = [
        {
            imageSrc: "/articles/transparency-report.png",
            category: "Tech + Policy Article",
            title: "A History of Transparency Reports to Shape Platform Innovations.",
            url: "mailto:simppl.collabs@gmail.com?subject=Requesting Access to 'A History of Transparency Reports to Shape Platform Innovations.'",
            description:
                "Reviewing how transparency legislation has historically precipitated change to inform current calls for social media transparency.",
            button: "Request Draft",
        },
        {
            imageSrc: "/articles/tgi-report-1.jpg",
            category: "Reports",
            title: "How Facebook Has Become A Political Battleground In Bangladesh.",
            url: "https://infolab.techglobalinstitute.com/how-facebook-has-become-a-political-battleground-in-bangladesh/",
            description:
                "Launched a collaboration led by the Tech Global Institute, working with policy professionals and trust and safety leaders formerly at Meta, to write a report into the last decade of political messaging on Facebook in Bangladesh. The two-part report analyzes the nature of dissemination of political speech on Meta's Public Groups and Pages, and focuses on gendered attacks on political personalities in the country.",
            button: "Read Part 1",
        },
        {
            imageSrc: "/articles/policy-intervention2.jpg",
            category: "Tech + Policy Article",
            title: "Towards a Principled Framework for Platform Interventions",
            url: "mailto:simppl.collabs@gmail.com?subject=Requesting Access to 'Towards a Principled Framework for Platform Interventions'",
            description:
                "Developing an intuitive framework to improve decision-making around platform policy interventions.",
            button: "Request Draft",
        },
        {
            imageSrc: "/articles/network-analysis.jpeg",
            category: "Tech Article",
            title: "Analyzing Article Sharing by User Groups and Individuals",
            url: "https://jhagrutlalwani.vercel.app/blog/network_analysis_simppl",
            description:
                "Analysis of coordinated social media activity, identifying influencers and anomalous engagement patterns.",
            button: "Read More",
        },
    ];
    return (
        <Container>
            <Content>
                <HeadingInfoContainer>
                    <HeadingTitle>{heading}</HeadingTitle>
                    <HeadingDescription>{description}</HeadingDescription>
                </HeadingInfoContainer>
                <ThreeColumn>
                    {blogPosts.map((post, index) => (
                        <Column key={index}>
                            <Card>
                                <Image imageSrc={post.imageSrc} />
                                <Category>{post.category}</Category>
                                <Title>{post.title}</Title>
                                <Description>{post.description}</Description>
                                <Link href={post.url}>{post.button}</Link>
                            </Card>
                        </Column>
                    ))}
                </ThreeColumn>
            </Content>
            <DecoratorBlob1 />
            <DecoratorBlob2 />
        </Container>
    );
};
