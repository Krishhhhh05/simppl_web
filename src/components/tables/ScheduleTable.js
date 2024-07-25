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

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;
const TableContainer = tw.div`flex flex-col items-center justify-center w-full`;
const Table = tw.table`w-full md:w-1/3 divide-y divide-gray-300 border-2 border-solid border-gray-300`;
const TableHead = tw.thead`bg-gray-200`;
const TableBody = tw.tbody`bg-white divide-y divide-gray-300`;
// const TableRow = tw.tr``;
const TableRow = styled.tr`
    ${(props) =>
        css`
            background-color: ${props.type === "break"
                ? "#f6e58d"
                : // ? "#f6e58d"
                props.type === "head"
                ? "#b2bec3"
                : "#ffffff"};
        `}
    ${tw`border border-solid border-gray-300`}
`;
const TableHeadCell = tw.th`px-6 py-4 text-left text-xl font-bold text-black tracking-wider`;
const TableDataCell = tw.td`px-6 py-4 whitespace-nowrap`;
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

export default ({
    heading = "Our Team",
    subheading = "  ",
    description = "",
    schedule = {
        "Introduction to SimPPL": "10:00 - 10:15 am",
        "Managing Industry with Research": "10:15 - 10:25 am",
        "Analysis of YouTube Data": "10:25 - 10:35 am",
        "Truth Social and Wikipedia Data Analysis": "10:35 - 10:45 am",
        "Decentralized Social Network Analysis - Bluesky": "10:45 - 10:55 am",
        "Short Break (5 mins)": "10:55 - 11:00 am",
        "Program Management": "11:00 - 11:10 am",
        "Using NLP pipelines for Social Good": "11:10 - 11:20 am",
        "Sakhi: WhatsApp based ChatBot for Menstrual Health":
            "11:20 - 11:30 am",
        "Deutsche Welle": "11:30 - 11:40 am",
        "Twitter Data Visualization for Co-ordinated Activity":
            "11:40 - 11:50 am",
    },
}) => {
    return (
        <Container>
            <ContentWithPaddingXl>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    {heading && <Heading>{heading}</Heading>}
                    {description && <Description>{description}</Description>}
                </HeadingContainer>

                <TableContainer>
                    <Table>
                        <TableHead>
                            {/* {Object.keys(schedule).map((head, index) => {
                                return (
                                    <TableRow type={entry} key={index}>
                                        <TitleDataCell>{head}</TitleDataCell>
                                    </TableRow>
                                );
                            })} */}
                            <TableRow type="head">
                                <TableHeadCell>Set</TableHeadCell>
                                <TableHeadCell>Time (IST)</TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(schedule).map((set, index) => {
                                return (
                                    <TableRow
                                        type={
                                            set === "Short Break (5 mins)"
                                                ? "break"
                                                : "normal"
                                        }
                                        key={index}
                                    >
                                        <TableDataCell>{set}</TableDataCell>
                                        <TableDataCell>
                                            {schedule[set]}
                                        </TableDataCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ContentWithPaddingXl>
        </Container>
    );
};
