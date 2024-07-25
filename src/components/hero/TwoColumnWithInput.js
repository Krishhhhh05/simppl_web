import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";

// import CustomersLogoStripImage from "../../images/customers-logo-strip.png";
//import vtdigger from "../../images/vtdigger-logo5.png";
// import supportedBy from "../../images/supportedBy3.jpg";
// import toi from "../../images/toi.png";
// import ippen from "../../images/ippen.jpg";
// import algovera from "../../images/algovera.png";
// import gcp from "../../images/googlecloud.png";
// import aws from "../../images/aws.png";
// import adl from "../../images/adl.png";
// import goethe from "../../images/goethe.png";

import socialMediaNetworking from "images/female-presenting-social-media-networking.mp4";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const subscriptionApiUrl = `https://simppl.pythonanywhere.com/user/subscribe/`;

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-12 md:py-4`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
    ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
    input {
        ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
    }
    button {
        ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
    }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
    ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

// const CustomersLogoStrip = styled.div`
//     ${tw`mt-6 flex flex-row items-center justify-center sm:justify-between flex-wrap`}
//     p {
//         ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
//     }
//     img {
//         ${tw`mt-1 h-16 lg:pr-16 xl:pr-32 opacity-75`}
//     }
// `;

export default ({ roundedHeaderButton }) => {
    const [subMsg, setSubMsg] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(undefined);
    // const emailRef = useRef();

    useEffect(() => emailjs.init("H4D1-e8X9KA9g5LZN"), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("clicked");
        // console.log(email);
        if (!validateEmail(email)) {
            setSubMsg({
                code: 1,
                msg: "Incorrect email provided for waitlist",
            });
            return;
        }

        const serviceId = "service_0itf6ve";
        const templateId = "template_svnhapu";
        // save the id to database by creating a post request to the backend api endpoint /subscribe using fetch and try catch as well as sending the email to the user using emailjs both in same try and catch

        // try {
        //     setLoading(true);
        //     await fetch(subscriptionApiUrl, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ email: email }),
        //     });
        //     // alert("email successfully sent check inbox");
        //     setSubMsg({ code: 0, msg: "Welcome To the NewsLetter !" });
        // }

        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                // name: nameRef.current.value,
                // email: emailRef.current.value,
                recipient: email,
                to_email: email,
            });
            // alert("email successfully sent check inbox");
            setSubMsg({ code: 0, msg: "Welcome To the NewsLetter !" });
        } catch (error) {
            setSubMsg({
                code: 1,
                msg: "Failed to subscribe. Try again later.",
            });
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (subMsg)
            toast(subMsg.msg, {
                type: subMsg.code === 1 ? "error" : "success",
            });
    }, [subMsg]);

    return (
        <>
            <Header roundedHeaderButton={roundedHeaderButton} />
            <Container>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>
                            Rebuild trust on the{" "}
                            <span tw="text-primary-500">Social internet.</span>
                        </Heading>
                        <Paragraph>
                            Deploy network intelligence to monitor the diffusion
                            of information online. Discover the actors,
                            algorithms, and campaigns driving online engagement
                            using our AI platform.
                        </Paragraph>
                        <Actions>
                            <input
                                type="text"
                                placeholder="Your E-mail Address"
                                id="wishlistEmail"
                                style={{
                                    borderColor: subMsg
                                        ? subMsg.code === 1
                                            ? "red"
                                            : "green"
                                        : "",
                                }}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <button onClick={handleSubmit}>Get Updates</button>
                            {/* <button
                                onClick={() => {
                                    const email =
                                        document.getElementById(
                                            "wishlistEmail"
                                        ).value;
                                    subscribeEmail(email, setSubMsg);
                                }}
                            >
                                Get Updates
                            </button> */}
                        </Actions>
                        {/* <CustomersLogoStrip sx={{ display: 'flex', align: 'center' }}>
              <p>Supported By</p>
              <img src={supportedBy} alt="Supported By" />
              <img src={toi} alt="Supported By" />
              <img src={ippen} alt="Supported By" />
              <img src={goethe} alt="Supported By" />
              <img src={gcp} height={150} alt="Supported By" />
              <img src={aws} className="h-20" alt="Supported By" />
              <img src={adl} alt="Supported By" />
            </CustomersLogoStrip> */}
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer>
                            <video
                                tw="min-w-0 w-full max-w-lg xl:max-w-xl"
                                autoPlay
                                loop
                                muted
                                alt="Design Illustration"
                            >
                                <source
                                    src={socialMediaNetworking}
                                    type="video/mp4"
                                />
                            </video>
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>
                <DecoratorBlob1 />
            </Container>
        </>
    );
};

/*********************Functions******************* */

async function subscribeEmail(subEmail, setSubMsg) {
    /*Sends the subscription email to backend */

    //Validating email
    if (!validateEmail(subEmail)) {
        setSubMsg({ code: 1, msg: "Incorrect email provided for waitlist" });
        return;
    }

    try {
        const resp = await fetch(subscriptionApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: subEmail }),
        });

        console.log(resp.status);
        if (resp.status !== 200)
            setSubMsg({
                code: 1,
                msg: "Failed to subscribe. Try again later.",
            });
        else setSubMsg({ code: 0, msg: "Welcome To The Waitlist !" });
    } catch (err) {
        console.log(err);
        setSubMsg({ code: 1, msg: "Failed to subscribe. Try again later." });
    }
}

function validateEmail(email) {
    /* Checks if the provided email format is correct */

    const emailRegex = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/; // Corrected regex for checking if the email is valid

    return email && email.length !== 0 && emailRegex.test(email);
}

