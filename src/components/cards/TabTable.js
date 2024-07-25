import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

import { LiaAwardSolid } from "react-icons/lia"; // awards - grants - funding
import { RiKakaoTalkLine } from "react-icons/ri"; // talks
import { TbBulb } from "react-icons/tb"; // projects - produts - demos

import { RiSlideshowLine } from "react-icons/ri"; // slides
import { FaVideo } from "react-icons/fa6"; // video
import { FaLink } from "react-icons/fa6"; // link

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap`;
const TableContainer = tw.div`mt-10 w-full`;
const Card = tw(
    motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
    ${(props) =>
        css`
            background-image: url("${props.imageSrc}");
        `}
    ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
    ${tw`mr-1 text-sm font-bold flex items-end`}
    svg {
        ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
    }
`;

const CardHoverOverlay = styled(motion.div)`
    background-color: rgba(255, 255, 255, 0.5);
    ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
    ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
    ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const Table = tw.table`min-w-full divide-y divide-gray-300`;
// const TableHead = tw.thead`bg-gray-100`;
const TableBody = tw.tbody`bg-white divide-y divide-gray-300`;
// const TableRow = tw.tr``;
const TableRow = styled.tr`
    ${(props) =>
        css`
            border: ${props.type === "awards"
                ? "#78e08f"
                : props.type === "talks"
                ? "#ff7979"
                : "#f6e58d"};
        `}
    ${tw`border border-solid border-gray-300`}
`;
// const TableHeadCell = tw.th`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`;
// const TableDataCell = tw.td`px-6 py-4 whitespace-nowrap`;
const IconDataCell = styled.td`
    ${(props) =>
        css`
            color: ${props.type === "awards"
                ? "#78e08f"
                : props.type === "talks"
                ? "#ff7979"
                : "#f6e58d"};
        `};
    ${tw`text-center text-3xl font-extrabold h-12 w-12 px-2 py-4 whitespace-nowrap`}
`;
const TitleDataCell = styled.td`text-justify text-xl px-6 py-4 whitespace-nowrap`;
// chips of different color based on type
// const TypeDataCell = styled.td`
//   ${(props) =>
//     css`
//       background-color: ${props.type === "awards"
//         ? "#78e08f"
//         : props.type === "talks"
//         ? "#ff7979"
//         : "#f6e58d"};
//     `}
//   ${tw`text-left text-base whitespace-nowrap rounded-full text-black p-0 h-4 font-semibold`}
// `;
const LinkDataCell = styled.td`
    ${tw`flex flex-row justify-center items-center text-2xl py-4 gap-4`};
    span {
        ${tw`self-start hover:text-gray-700 cursor-pointer px-1`}
    }
`;

export default ({ heading = "Checkout the Menu", tabs = null }) => {
    const tabsKeys = Object.keys(tabs).sort().reverse();
    const [activeTab, setActiveTab] = useState(tabsKeys[0]);

    return (
        <Container>
            <ContentWithPaddingXl>
                <HeaderRow>
                    <Header>{heading}</Header>
                    <TabsControl>
                        {Object.keys(tabs).map((tabName, index) => (
                            <TabControl
                                key={index}
                                active={activeTab === tabName}
                                onClick={() => setActiveTab(tabName)}
                            >
                                {tabName}
                            </TabControl>
                        ))}
                    </TabsControl>
                </HeaderRow>

                {tabsKeys.map((tabKey, index) => (
                    <TabContent
                        key={index}
                        variants={{
                            current: {
                                opacity: 1,
                                scale: 1,
                                display: "flex",
                            },
                            hidden: {
                                opacity: 0,
                                scale: 0.8,
                                display: "none",
                            },
                        }}
                        transition={{ duration: 0.4 }}
                        initial={activeTab === tabKey ? "current" : "hidden"}
                        animate={activeTab === tabKey ? "current" : "hidden"}
                    >
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    {tabs[tabKey].map((card, index) => (
                                        <TableRow type={card.type} key={index}>
                                            <IconDataCell type={card.type}>
                                                {card.type == "awards" ? (
                                                    <LiaAwardSolid />
                                                ) : card.type === "talks" ? (
                                                    <RiKakaoTalkLine />
                                                ) : (
                                                    <TbBulb />
                                                )}
                                            </IconDataCell>
                                            <TitleDataCell>
                                                {card.title}
                                            </TitleDataCell>
                                            {/* <TypeDataCell type={card.type}>
                        {card.type === "awards"
                          ? "Awards, Grants, and Funding"
                          : card.type === "talks"
                          ? "Academic and Industry Talks"
                          : "Pilot projects and Invited Demos of our products"}
                      </TypeDataCell> */}
                                            <LinkDataCell>
                                                {card.link && (
                                                    <span>
                                                        {card.link && (
                                                            <a
                                                                title="Link"
                                                                href={card.link}
                                                                target="_blank"
                                                            >
                                                                <FaLink />
                                                            </a>
                                                        )}
                                                    </span>
                                                )}
                                                {card.slides && (
                                                    <span>
                                                        {card.slides && (
                                                            <a
                                                                title="Slide Deck"
                                                                href={
                                                                    card.slides
                                                                }
                                                                target="_blank"
                                                            >
                                                                <RiSlideshowLine />
                                                            </a>
                                                        )}
                                                    </span>
                                                )}
                                                {card.video && (
                                                    <span>
                                                        {card.video && (
                                                            <a
                                                                title="Recording"
                                                                href={
                                                                    card.video
                                                                }
                                                                target="_blank"
                                                            >
                                                                <FaVideo />
                                                            </a>
                                                        )}
                                                    </span>
                                                )}
                                            </LinkDataCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabContent>
                ))}
            </ContentWithPaddingXl>
            <DecoratorBlob1 />
            <DecoratorBlob2 />
        </Container>
    );
};

/* This function is only there for demo purposes. It populates placeholder cards */
// const getRandomCards = () => {
//     const cards = [
//         {
//             imageSrc:
//                 "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             title: "Chicken Chilled",
//             content: "Chicken Main Course",
//             price: "$5.99",
//             rating: "5.0",
//             reviews: "87",
//             url: "#"
//         },
//         {
//             imageSrc:
//                 "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             title: "Samsa Beef",
//             content: "Fried Mexican Beef",
//             price: "$3.99",
//             rating: "4.5",
//             reviews: "34",
//             url: "#"
//         },
//         {
//             imageSrc:
//                 "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             title: "Carnet Nachos",
//             content: "Chilli Crispy Nachos",
//             price: "$3.99",
//             rating: "3.9",
//             reviews: "26",
//             url: "#"
//         },
//         {
//             imageSrc:
//                 "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             title: "Guacamole Mex",
//             content: "Mexican Chilli",
//             price: "$3.99",
//             rating: "4.2",
//             reviews: "95",
//             url: "#"
//         },
//         {
//             imageSrc:
//                 "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             title: "Chillie Cake",
//             content: "Deepfried Chicken",
//             price: "$2.99",
//             rating: "5.0",
//             reviews: "61",
//             url: "#"
//         },
//         {
//             imageSrc:
//                 "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             title: "Nelli",
//             content: "Hamburger & Fries",
//             price: "$7.99",
//             rating: "4.9",
//             reviews: "89",
//             url: "#"
//         },
//         {
//             imageSrc:
//                 "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             title: "Jalapeno Poppers",
//             content: "Crispy Soyabeans",
//             price: "$8.99",
//             rating: "4.6",
//             reviews: "12",
//             url: "#"
//         },
//         {
//             imageSrc:
//                 "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             title: "Cajun Chicken",
//             content: "Roasted Chicken & Egg",
//             price: "$7.99",
//             rating: "4.2",
//             reviews: "19",
//             url: "#"
//         }
//     ];

//     // Shuffle array
//     return cards.sort(() => Math.random() - 0.5);
// };

const newData = {
    2021: [
        {
            _id: "654798109f19195e5d6a0d2a",
            title: "Sample News222222",
            type: "awards",
            date: "2023-11-05T13:26:37.678Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
        },
        {
            _id: "654798459f19195e5d6a0d2b",
            title: "Sample News",
            type: "awards",
            date: "2023-11-05T13:27:33.521Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
        },
        {
            _id: "654798479f19195e5d6a0d2c",
            title: "Sample News",
            type: "awards",
            date: "2023-11-05T13:27:35.237Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
        },
        {
            _id: "654798499f19195e5d6a0d2d",
            title: "Sample News",
            type: "awards",
            date: "2023-11-05T13:27:37.078Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
        },
        {
            _id: "6547ae618f6034eb98fee1bb",
            title: "Sample News",
            type: "awards",
            date: "2023-11-05T15:01:53.724Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
            created_at: "2023-11-05T15:01:53.724Z",
            updated_at: "2023-11-05T15:01:53.724Z",
        },
        {
            _id: "6547aed08f6034eb98fee1bc",
            title: "Sample News222",
            type: "awards",
            date: "2023-11-05T15:03:44.134Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
            created_at: "2023-11-05T15:03:44.134Z",
            updated_at: "2023-11-05T15:03:44.134Z",
        },
        {
            _id: "6547d4eb0c79a7ce76ba4e13",
            title: "Sample News",
            type: "awards",
            date: "2023-11-05T17:46:16.467Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
            created_at: "2023-11-05T17:46:16.467Z",
            updated_at: "2023-11-05T17:46:16.467Z",
        },
        {
            _id: "6548756916dc0e86e84cd880",
            title: "Sample News222",
            type: "awards",
            date: "2023-11-06T05:11:05.291Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
            created_at: "2023-11-06T05:11:05.291Z",
            updated_at: "2023-11-06T05:11:05.291Z",
        },
        {
            _id: "6555eef3ad39dfb7f8862c08",
            title: "Sample News222222",
            type: "awards",
            date: "2023-11-16T10:29:04.485Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
        },
        {
            _id: "6555ef23ad39dfb7f8862c09",
            title: "Sample News222222",
            type: "awards",
            date: "2023-11-16T10:29:55.592Z",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
        },
        {
            _id: "655736bd510bae7b9d658b52",
            title: "Sample News222222",
            type: "awards",
            year: 2021,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
            __v: 0,
        },
    ],
    2022: [
        {
            _id: "655738623e15861dd2ba0d68",
            title: "Sample News22",
            type: "talks",
            year: 2022,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "https://www.google.com",
            __v: 0,
        },
        {
            _id: "655738703e15861dd2ba0d6a",
            title: "Sample News22",
            type: "talks",
            year: 2022,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "",
            __v: 0,
        },
    ],
    2023: [
        {
            _id: "6557387e3e15861dd2ba0d6c",
            title: "Sample sNews2",
            type: "talks",
            year: 2023,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "",
            __v: 0,
        },
        {
            _id: "655738803e15861dd2ba0d6e",
            title: "Sample sNews2",
            type: "talks",
            year: 2023,
            link: "https://www.google.com",
            slides: "https://www.google.com",
            video: "",
            __v: 0,
        },
    ],
};
