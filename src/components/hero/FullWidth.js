import React from 'react';
import tw from 'twin.macro';
import Children from '../../../src/images/children.jpg';
import MonitoringImage from '../../../src/images/children.jpg';
import sakhi from '../../images/landing/sakhi.png';
import arbiter from '../../images/landing/arbiter.png';
import network from '../../images/landing/image.png';
const HeroContainer = tw.div`relative w-full h-96`;
const BackgroundImage = tw.img`object-cover w-full h-full`;
const Overlay = tw.div`absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50`;
const Heading = tw.h1`text-4xl font-bold md:text-6xl`;

const SectionContainer = tw.div`relative w-full bg-white py-12 px-4 md:px-8 flex flex-col lg:flex-row justify-between `;
const LeftColumn = tw.div`flex-1 flex flex-col justify-center items-center pr-8 text-center text-2xl`;
const RightColumn = tw.div`flex-1 flex flex-col justify-center`;
const TextHeading = tw.h2`text-4xl font-bold`;
const TextBody = tw.p`text-lg mt-4`;
const VisionButton = tw.button`mt-6  py-2 bg-blue-500 text-white font-semibold rounded`;

const SectionContainer2 = tw.div`flex flex-col lg:flex-row w-full bg-blue-800 py-12 px-4 md:px-8 items-center`;
const SectionContainer3 = tw.div`flex flex-col lg:flex-row w-full bg-yellow-900 py-12 px-4 md:px-8 items-center`;
const ImageContainer = tw.div`w-full lg:w-1/2 flex-shrink-0`;
const Image = tw.img`object-cover w-full h-full`;
const TextContainer = tw.div`w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center items-start text-white`;
const TextContainer2 = tw.div`w-full lg:w-1/2 lg:pr-8 flex flex-col justify-center items-start text-white`;
const TextHeading2 = tw.h2`text-3xl lg:text-4xl font-bold m-4`;
const TextBody2 = tw.p`text-lg m-4 `;
const LearnMoreButton = tw.button`m-4 px-4 py-2  bg-blue-300 text-white font-semibold rounded`;

function FullWidthImageWithText() {
  return (
    <>
      <HeroContainer>
        <BackgroundImage src={Children} alt="Background" />
        <Overlay>
          <Heading>Rebuild trust on the social internet.</Heading>
        </Overlay>
      </HeroContainer>
      <SectionContainer>
        <LeftColumn>
          <TextHeading>Empowering the global majority.</TextHeading>
        </LeftColumn>
        <RightColumn>
          <TextBody>
            We build responsible technologies to advance 'information integrity', ensuring
            accurate and reliable information is accessible to the global majority. We
            leverage generative artificial intelligence to automate the detection and
            analysis of misleading and hateful content and build conversational tools to
            provide insights to end users.
          </TextBody>
          <TextBody>
            We take our published research into practice by deploying it with partners
            across India, Mongolia, Bangladesh, Germany, the US, and the UK. Our work
            is generously funded by MIT, Mozilla, Google, AWS, the Wikimedia
            Foundation, the NYC Media Lab, the Goethe Institut, the Center for Tech and
            Society, and others.
          </TextBody>
          <VisionButton>Our Vision</VisionButton>
        </RightColumn>
      </SectionContainer>

      <SectionContainer2>
      <ImageContainer>
        <Image src={arbiter} alt="Monitoring and Measurement" />
      </ImageContainer>
      <TextContainer>
        <TextHeading2>Monitoring and Measurement </TextHeading2>
        <TextBody2>
        Monitor the quality of news dissemination across various domains and identify trends in the spread of potentially misleading or inaccurate information.  </TextBody2>
        <LearnMoreButton><a href="https://arbiter-frontend.vercel.app/dashboard">Learn More</a></LearnMoreButton>
      </TextContainer>
    </SectionContainer2>

    <SectionContainer2>
      
      <TextContainer>
        <TextHeading2>Network and Influence</TextHeading2>
        <TextBody2>
          We collect over half a billion posts to identify the spread of low-quality information, false and misleading content, and study the hate and harassment prevalent on multiple social platforms.
        </TextBody2>
        <LearnMoreButton><a href="https://arbiter-frontend.vercel.app/dashboard">Learn More</a></LearnMoreButton>
      </TextContainer>
      <ImageContainer>
        <Image src={network} alt="Monitoring and Measurement" />
      </ImageContainer>
    </SectionContainer2>

    <SectionContainer2>
      <ImageContainer>
        <Image src={sakhi} alt="Monitoring and Measurement" />
      </ImageContainer>
      <TextContainer>
        <TextHeading2>Sakhi</TextHeading2>
        <TextBody2>
        Sakhi, our multilingual AI chatbot, empowers over 44 million Bengalis through WhatsApp by providing verified menstrual hygiene information in Bangla. By addressing knowledge gaps and social stigma, we significantly enhance healthcare outcomes for women and girls. With strategic partnerships in Bangladesh and India, Sakhi extends its impact beyond menstrual health, tackling various public health and election integrity challenges.  </TextBody2>
        <LearnMoreButton>
            <a href="https://sakhi.simppl.org/">Learn More</a></LearnMoreButton>
      </TextContainer>
    </SectionContainer2>
    </>
  );
}

export default FullWidthImageWithText;
