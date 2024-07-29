// import React from 'react'
// import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
// import { ReactComponent as CPUIcon } from "feather-icons/dist/icons/cpu.svg";
// // import { BriefcaseIcon } from 'feather-icons/dist/icons/briefcase.sv'; // Replace with actual icon imports
// // import { CPUIcon } from 'feather-icons/dist/icons/cpu.svg'; // Replace with actual icon imports
// import tw from "twin.macro";

// const Section = tw.section`py-20 lg:py-24 bg-white`;
// const Container = tw.div`max-w-6xl mx-auto px-4`;
// const Subheading = tw.h5`text-blue-600 font-semibold text-sm`;
// const Heading = tw.h2`text-4xl font-bold text-gray-900 mb-6`;
// const Description = tw.p`text-lg text-gray-700 mb-8`;
// const PrimaryButton = tw.a`inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300`;

// const Features = tw.div`flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 mb-12`;
// const Feature = tw.div`flex items-start`;
// const IconWrapper = tw.div`flex-shrink-0 w-12 h-12 text-blue-600`;
// const FeatureContent = tw.div`ml-4`;
// const FeatureTitle = tw.h4`text-lg font-semibold text-gray-900`;
// const FeatureDescription = tw.p`text-gray-700`;

// const TeamContainer = tw.div`flex flex-wrap justify-center`;
// const TeamMember = tw.div`w-1/3 md:w-1/4 lg:w-1/6 p-2`;
// const Avatar = tw.img`w-full rounded-full`;

// // Placeholder for team member avatars, replace with actual image sources
// const teamMembers = [
//   { src: '/path/to/avatar1.png', alt: 'Member 1' },
//   { src: '/path/to/avatar2.png', alt: 'Member 2' },
//   { src: '/path/to/avatar3.png', alt: 'Member 3' },
//   { src: '/path/to/avatar4.png', alt: 'Member 4' },
//   { src: '/path/to/avatar5.png', alt: 'Member 5' },
//   { src: '/path/to/avatar6.png', alt: 'Member 6' },
//   { src: '/path/to/avatar7.png', alt: 'Member 7' },
//   { src: '/path/to/avatar8.png', alt: 'Member 8' },
// ];
// const features=[
//     {
//       Icon: BriefcaseIcon,
//       title: "What we do",
//       description:
//         "We are always looking for part-time developers with experience in large-scale data analysis, web scraping and data mining, natural language processing, big data analytics, database management systems, and web and app development.",
//     },
//     {
//       Icon: CPUIcon,
//       title: "Our Tech Stack",
//       description: (
//         <>
//           Our tech stack includes React.js, Flask, DuckDB,
//           BigQuery, and Neo4J, and we use both Google
//           Cloud and AWS to deploy microservices and
//           products for end users like{" "}
//           <a
//             style={{
//               fontWeight: "600",
//               textDecoration: "underline",
//               cursor: "pointer",
//             }}
//             href="https://parrot.report"
//             target="_blank"
//           >
//             Parrot
//           </a>{" "}
//           and{" "}
//           <a
//             style={{
//               fontWeight: "600",
//               textDecoration: "underline",
//               cursor: "pointer",
//             }}
//             href="https://sakhi.simppl.org"
//             target="_blank"
//           >
//             Sakhi
//           </a>{" "}
//           .
//         </>
//       ),
//     },
//   ];
  
// const JoinUs = ({ id, subheading, heading, description, primaryButtonText, primaryButtonUrl, features, textOnLeft }) => (
//   <Section id={id}>
//     <Container>
//       <Subheading>{subheading}</Subheading>
//       <Heading>{heading}</Heading>
//       <Description>{description}</Description>
//       <PrimaryButton href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
//       {/* <Features>
//         {features.map((feature, index) => (
//           <Feature key={index}>
//             <IconWrapper>{React.createElement(feature.Icon)}</IconWrapper>
//             <FeatureContent>
//               <FeatureTitle>{feature.title}</FeatureTitle>
//               <FeatureDescription>{feature.description}</FeatureDescription>
//             </FeatureContent>
//           </Feature>
//         ))}
//       </Features> */}
//       <TeamContainer>
//         {teamMembers.map((member, index) => (
//           <TeamMember key={index}>
//             <Avatar src={member.src} alt={member.alt} />
//           </TeamMember>
//         ))}
//       </TeamContainer>
//     </Container>
//   </Section>
// );

// export default JoinUs;

import tw from "twin.macro";

import React from 'react'
import JoinUs from "components/features/TwoColWithTwoFeaturesAndButtonsAndModal.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as CPUIcon } from "feather-icons/dist/icons/cpu.svg";
// import Hero from "components/hero/TwoColumnWithInput.js";
import Header from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import ProfileFourColGrid from "components/cards/ProfileFourColGrid.js";
import useGAPageView from "helpers/useGAPageView";
import Footer from "components/footers/MiniCenteredFooter.js";
import TeamCardGrid from "components/cards/ProfileFellowshipsGrid.js";
const Subheading = tw.span`uppercase tracking-wider text-sm`;

const Join = () => {
  useGAPageView();

  return (
    <div>
      <AnimationRevealPage>
<Header/>

{/* <ProfileFourColGrid /> */}


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
      <TeamCardGrid subheading={<Subheading>Current Fellows</Subheading>} />

      <Footer />
      </AnimationRevealPage>
    </div>
  )
}

export default Join
