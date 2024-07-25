import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import AnimatedButton from "components/cta/AnimatedButton";
// import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import Pricing from "components/pricing/ThreePlans.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import FAQ from "components/faqs/SingleCol.js";
// import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/MiniCenteredFooter.js";
import hateSpeech from "images/hate-speech.jpg";
import DesignIllustration from "images/main-growth.jpg";
import SakhiGIF from "images/sakhi.gif";

import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as CPUIcon } from "feather-icons/dist/icons/cpu.svg";

// import socialMediaNetworking from "images/social-media-networking.gif";
// import fakeNews from "images/fake-news.jpg";
// import dataVis from "images/data-vis.jpg";
// import socialMedia from "images/social media.jpg";
// import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/twitter.svg";
// import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/twitch.svg";
import news from "data/newsData";
import JoinUs from "components/features/TwoColWithTwoFeaturesAndButtonsAndModal.js";
// import JoinUs from "components/features/TwoColWithTwoFeaturesAndButtons.js";

import FastIconImage from "images/fast-icon.svg";
// import { toast } from "react-toastify";
import useGAPageView from "helpers/useGAPageView";
import TrustedBy from "components/misc/TrustedBy";
import NewsSection from "components/cards/TabTable.js";
import ResearchSection from "components/research/PopularAndRecentResearch.js";
import ArticleSection from "components/research/ThreeColSimpleArticle.js";
// import AnimatedButton from "components/cta/AnimatedButton";

// const section0Text =
// "Track online information diffusion in dynamic networks. Simulate counterfactual scenarios to study the impact of interventions. Generate actionable intelligence for decision-making.";

const section1Text =
  "Sakhi is a Whatsapp Chatbot, which will help people in Bangladesh to get their menstruation-related queries solved easily.";
// const section1Text =
//     "Sakhi is a Whatsapp Chatbot made in collaboration with Wateraid, which will help people in Bangladesh to get their menstruation-related queries solved easily.";

const section2Text =
  "Identify networks of accounts engaged in coordinated campaigns to promote harmful content on your platform. We provide quantitative evidence for sourcing and actioning on influential content that supercharges your existing platform safety mechanisms. \n Based on research published at premier venues in cybersecurity and machine learning and deployed for The Sunday Times to identify Russian - origin influence operations for millions of tweets.";

// const section2Text = "Audience analytics with AI";

const section3Text =
  "Discover where your online visitors are coming from and what they care about. Build a data-driven digital strategy for subscriber growth on your website. Track on-platform and off-platform metrics to understand visitor habits and preferences for yourself and your competitors. Join the likes of the Yale Daily News and the Vermont Digger to deploy our Google Analytics integration and start generating actionable audience reports for your team.";

// const section4Text = "Get better insights about your audience by tracking off-platform activity from Reddit, Twitter, and other social networks in real-time. Use our proprietary analytics toolkit to create custom queries and track the impact of your newsroom compared to others in the space.";

// const section5Text = "Track on-platform metrics to understand visitor habits and preferences on your website. Convert trends into actionable insights to drive online campaigns. Use our seamless integration into Google Analytics to generate actionable audience reports for your team.";

// const section6Text = "Work with us to address the prevalence of online misinformation supporting cutting-edge research by our team in collaboration with leading research groups at Oxford University and New York University. Drop your email in the box above if you’d like to join!";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  // const HighlightedText = tw.span`text-primary-500`;

  const [data, setData] = useState(null);

  useGAPageView();

  const featureCards = [
    {
      imageSrc: FastIconImage,
      title: "AI",
      description:
        "Cutting-edge probabilistic AI to predict user behavior and drive campaigns.",
    },
    {
      imageSrc: FastIconImage,
      title: "Realtime",
      description:
        "Monitor user activity on our real-time dashboards for active decision-making.",
    },
    {
      imageSrc: FastIconImage,
      title: "Insights",
      description:
        "Translate data into insights using our specialized analytics toolkit.",
    },
    {
      imageSrc: FastIconImage,
      title: "Streaming Data",
      description:
        "Track user behavior using custom data streams for your organisation.",
    },
    {
      imageSrc: FastIconImage,
      title: "Customizable",
      description:
        "Seamlessly plug in Google Analytics to generate on-platform insights.",
    },
    {
      imageSrc: FastIconImage,
      title: "Transparent",
      description:
        "We actively present our work at top AI and cybersecurity conferences.",
    },
  ];

  useEffect(() => {
    fetch("https://simppl-org-backend.onrender.com/news-yearwise")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />

      <AnimatedButton />

      <TrustedBy />

      {/* Features Section */}

      {/* <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            Audience Analytics with <HighlightedText>AI.</HighlightedText>
          </>
        }
        //description={section2Text}
        cards={featureCards}
      /> */}

      {/* SECTION 1 */}
      <MainFeature
        subheading={<Subheading>For Local Population</Subheading>}
        imageSrc={SakhiGIF}
        //imageBorder={true}
        imageDecoratorBlob={true}
        heading={
          <>
            Improving Digital Literacy{" "}
            <span tw="text-primary-500">Using Chatbots.</span>
          </>
        }
        description={section1Text}
        primaryButtonUrl="https://sakhi.simppl.org/"
        textOnLeft={false}
      />

      <MainFeature
        subheading={<Subheading>For Cyber Defense</Subheading>}
        imageSrc={hateSpeech}
        //imageBorder={true}
        imageDecoratorBlob={true}
        heading={
          <>
            Monitor Risks from{" "}
            <span tw="text-primary-500">Coordinated Networks.</span>
          </>
        }
        description={section2Text}
        primaryButtonUrl="/product/arbiter-report"
        textOnLeft={true}
      />

      <ResearchSection />
      <ArticleSection />

      {/* SECTION 2 */}
      {/* <MainFeature
        subheading={<Subheading>For Cyber Defense</Subheading>}
        imageSrc={fakeNews}
        //imageBorder={true}
        imageDecoratorBlob={true}
        heading={(
          <>
            Fight Misinformation and Disinformation<span tw="text-primary-500"> Online.</span>
          </>
        )}
        description={section6Text}
      /> */}

      {/* SECTION 3 */}
      {/* <MainFeature
                subheading={<Subheading>For Digital Publishers</Subheading>}
                imageSrc={DesignIllustration}
                //imageBorder={true}
                imageDecoratorBlob={true}
                heading={
                    <>
                        Grow your Audience across{" "}
                        <span tw="text-primary-500"> the Social Web.</span>
                    </>
                }
                description={section3Text}
                primaryButtonUrl="/product/audience-analytics"
                textOnLeft={false}
            /> */}

      {data && <NewsSection heading="Impact we create!" tabs={data} />}
      {!data && <NewsSection heading="Impact we create!" tabs={news} />}

      <JoinUs
        id="#join-us"
        subheading="Get Involved"
        heading={
          <>
            We Are Seeking <span tw="text-primary-500">Tech</span>{" "}
            Enthusiasts!
          </>
        }
        description="We are a volunteer-run organization working with student contributors on a part-time basis. If you are interested in working with us, drop us an email with your resume, motivation, and links to your work and we'll get back to you!"
        primaryButtonText="Join Us!"
        primaryButtonUrl="mailto:simppl.collabs@gmail.com"
        features={[
          {
            Icon: BriefcaseIcon,
            title: "What we do",
            description:
              "We are always looking for part-time developers with experience in large-scale data analysis, web scraping and data mining, natural language processing, big data analytics, database management systems, and web and app development.",
          },
          {
            Icon: CPUIcon,
            title: "Our Tech Stack",
            description: (
              <>
                Our tech stack includes React.js, Flask, DuckDB,
                BigQuery, and Neo4J, and we use both Google
                Cloud and AWS to deploy microservices and
                products for end users like{" "}
                <a
                  style={{
                    fontWeight: "600",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  href="https://parrot.report"
                  target="_blank"
                >
                  Parrot
                </a>{" "}
                and{" "}
                <a
                  style={{
                    fontWeight: "600",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  href="https://sakhi.simppl.org"
                  target="_blank"
                >
                  Sakhi
                </a>{" "}
                .
              </>
            ),
          },
        ]}
        textOnLeft={true}
      />

      {/* <MainFeature
        subheading={<Subheading>For Digital Publishers</Subheading>}
        imageSrc={dataVis}
        //imageBorder={true}
        imageDecoratorBlob={true}
        heading={(
          <>
            Generate Insights from <span tw="text-primary-500">Site Visitor Activity.</span>
          </>
        )}
        description={section3Text}
      /> */}

      {/* SECTION 0 */}
      {/*<FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />*/}

      {/* SECTION 5 */}
      {/* <MainFeature
        subheading={<Subheading> For Digital Publishers</Subheading>}
        heading={
          <>
            Real-time Analytics from <HighlightedText>Social Media.</HighlightedText>
          </>
        }
        imageSrc={socialMedia}
        description={section4Text}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Reddit",
            description: " We track audiences that interact with content on Reddit to help you bring in future subscribers to your website.",
            iconContainerCss: tw`bg-orange-500 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Twitter",
            description: "We provide a comprehensive picture of Twitter audiences to ensure your campaigns cater to the audience segments you want to grow.",
            iconContainerCss: tw`bg-blue-500 text-red-800`
          }
        ]}
      /> */}

      {/* <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
          }
        ]}
      />
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Are all the templates easily customizable ?",
            answer:
              "Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "How long do you usually support an standalone template for ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "What kind of payment methods do you accept ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Is there a subscribption service to get the latest templates ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Are the templates compatible with the React ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Do you really support Internet Explorer 11 ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        ]}
      /> */}
      {/* <GetStarted/> */}
      <Footer />
    </AnimationRevealPage>
  );
};
