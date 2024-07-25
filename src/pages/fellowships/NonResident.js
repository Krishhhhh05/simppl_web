import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
// import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButtonAndSupport.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileFellowshipsGrid.js";
import { IoServerOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

// import SupportIconImage from "images/support-icon.svg";
// import ShieldIconImage from "images/shield-icon.svg";
// import CustomerLoveIconImage from "images/simple-icon.svg";
import useGAPageView from "helpers/useGAPageView";
// import Timeline from "components/features/ThreeColTimeline.js";
import Timeline from "components/cards/ThreeColTimeline.js";
import Schedule from "components/tables/ScheduleTable";

import FAQs from "components/faqs/SingleCol.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
    useGAPageView();

    return (
        <AnimationRevealPage>
            <Header />

            <MainFeature1
                description={
                    <>
                        Non-Resident Fellows include undergraduate students from Mumbai-area educational institutions and other institutes pan-India. These Fellows will receive mentorship for pursuing research projects related to responsible computing. The project topics will be selected independently by the Fellows with guidance from SimPPL program staff and mentors.{" "}
                        <br></br> The structure of the fellowships for
                        Non-Resident Fellows will include in-person workshops
                        training them to pursue responsible computing research.
                        They will continue towards building remote
                        collaborations through group projects that include a
                        study of topics in responsible computing related to
                        online safety.
                    </>
                }
                subheading={<Subheading>Student Fellowship</Subheading>}
                heading="Responsible Computing Fellowship"
                buttonRounded={false}
                primaryButtonText=""
                imageSrc="/mockups/workshop-mock.png"
                primaryButtonStatus={false}
                primaryButtonUrl=""
                secondaryButtonUrl=""
                secondaryButtonStatus={false}
                secondaryButtonText=""
                sponsor={true}
            />

            {/* <Schedule
                heading="Schedule"
                subheading="Information Session"
                schedule={{
                    "Introduction to SimPPL": "10:00 - 10:15 am",
                    "Managing Industry with Research": "10:15 - 10:25 am",
                    "Analysis of YouTube Data": "10:25 - 10:35 am",
                    "Truth Social and Wikipedia Data Analysis":
                        "10:35 - 10:45 am",
                    "Decentralized Social Network Analysis - Bluesky":
                        "10:45 - 10:55 am",
                    "Short Break (5 mins)": "10:55 - 11:00 am",
                    "Program Management": "11:00 - 11:10 am",
                    "Using NLP pipelines for Social Good": "11:10 - 11:20 am",
                    "Sakhi: WhatsApp based ChatBot for Menstrual Health":
                        "11:20 - 11:30 am",
                    "Deutsche Welle": "11:30 - 11:40 am",
                    "Twitter Data Visualization for Co-ordinated Activity":
                        "11:40 - 11:50 am",
                }}
            /> */}
            <Timeline
                subheading="Details"
                heading="Timeline"
                description=""
                primaryButtonText="Apply Now"
                plans={[
                    {
                        name: "Information Session",
                        price: ["", ""],
                        oldPrice: "",
                        description:
                            "This is a open-for-all session that consists of an overview of our team and our research.",
                        features: [
                            "Session Day: 28 Nov 2023, 10AM IST",
                            "Held at: D.J. Sanghvi Engineering College, Mumbai",
                        ],
                        url: "mailto:simppl.collabs@gmail.com?subject=Information Session Recording Request",
                        buttonText: "Request Recording",
                    },
                    {
                        name: "Fellowship",
                        price: ["", ""],
                        oldPrice: "",
                        description:
                            "Filling this application form will give you a chance to attend our fellowship program starting in December.",
                        features: [
                            "Registration Start: 20 Nov, 2023",
                            // "Registration End: 29 Nov 2023",
                            "Result Anouncement: Rolling till 15 Feb, 2024",
                            // "Event Day: 03 Dec 2023, 10AM IST onwards",
                            // "Venue: D.J. Sanghvi Engineering College, Mumbai",
                        ],
                        url: "https://forms.gle/EGrvYdgPQd9cvyyR7",
                        featured: "",
                    },
                ]}
            />
            {/* <MainFeature1
                subheading={<Subheading>Our Vision</Subheading>}
                heading="We aim to disrupt the design space."
                buttonRounded={false}
                primaryButtonText="Contact Us"
                imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
                textOnLeft={false}
            /> */}
            <Features
                subheading={<Subheading>Benefits</Subheading>}
                heading="Why this Fellowship?"
                description=""
                cards={[
                    {
                        imageSrc: IoServerOutline,
                        title: (
                            <>
                                Work with Industry
                                <br /> Data
                            </>
                        ),
                        description:
                            "Get a chance to work with real data from companies to detect bad actor and bot activity.",
                    },
                    {
                        imageSrc: MdWorkspacePremium,
                        title: "Potential Research Opportunities",
                        description:
                            "Motivated candidates will be offered paid research opportunities at SimPPL.             ",
                    },
                    {
                        imageSrc: AiOutlineSafetyCertificate,
                        title: "Google Research Certificate",
                        description:
                            "All accepted participants will receive a Certificate from Google Research upon successfully completing the fellowship.",
                    },
                    {
                        imageSrc: GrUserExpert,
                        title: "Connect with Industry Experts",
                        description:
                            "Exclusive invited talks by experts in AI/ML, and online trust and safety including career-building sessions.",
                    },
                ]}
                linkText=""
            />
            <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
            <FAQs
                subheading="FAQS"
                heading="Do you have Questions?"
                // description="And we have got answers to all of them."
                faqs={[
                    {
                        // question: "Why are there 2 forms?",
                        question: "Where do I start?",
                        answer: "The recording for the Information Session held on the 28th of November 2023 in-person at D.J. Sanghvi Engineering College, Mumbai where we introduced you to our team, shared the work that current team members have been pursuing, and how you can be a part of it, can be requested via email. The Application form is for those intending to participate in our Fellowship program whose results will be rolling till 15th of January, 2024 after which the program will start. We will have limited capacity for both (especially for in-person applicants), so apply soon!",
                    },
                    {
                        question:
                            "Do I need to know different programming languages?",
                        answer: "Having some experience with programming languages would be helpful, but we encourage novice learners to apply as well! Our team is a healthy mix of both, people who knew programming coming in and others who picked things up quickly.",
                    },
                    {
                        question:
                            "Do I need research experience to be a part of this fellowship?",
                        answer: "No, in fact, 90% of our team came in with little to no research experience when we started SimPPL. You will end up working hard but we will ensure you have all the resources and mentorship you need to pursue impactful research projects. We encourage everyone regardless of their research background to apply and join!",
                    },
                    {
                        question: "What is the Fellowship duration?",
                        answer: "The fellowship program is expected to run between January 2024 and May 2024. In the initial period, we will provide you with hands-on workshops to support you in learning more about computing research, which will end by February 2024. Fellows will simultaneously be engaged in collaborative research teams that will continue until May 2024.",
                    },
                    {
                        question:
                            "Are there sessions I can attend if I am not accepted into the fellowship?",
                        answer: "Yes! Not being selected does not have any bearing on your potential-it is purely a logistical constraint. We are going to have several sessions which are going to be open for all to attend.",
                    },
                    {
                        question:
                            "Does my acceptance in the Fellowship guarantee a Research Internship at the SimPPL - a research collective to work on cutting-edge industry and research projects beyond the Fellowship?",
                        answer: "In theory, we would love to have every Fellow join SimPPL. But we will make this determination on a case-by-case basis depending on the Fellowship performance and the reviews from your team members and mentors. We may not be able to offer every Fellow the opportunity to continue at SimPPL..",
                    },
                    {
                        question: "Can I participate in the program remotely?",
                        answer: "Yes, there are opportunities for remote participants although we cannot guarantee every in-person event will be accessible in real-time or recorded. Our past programs have been entirely remote though, so we do have significant experience navigating this process before.",
                    },
                    {
                        question:
                            "I have other questions. Whom do I reach out to?",
                        answer: "Please drop us an email at simppl.collabs@gmail.com. Please note that we may be delayed due to a high volume of applicants so it's always better to apply and then get clarifications / ask us to update some response rather than wait for us to respond before submitting your application.",
                    },
                ]}
            />
            <Footer />
        </AnimationRevealPage>
    );
};
