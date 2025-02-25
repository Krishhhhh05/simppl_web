import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
    SectionHeading,
    Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    props.textOnLeft
        ? tw`md:mr-12 lg:mr-16 md:order-first`
        : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Select = tw.select`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
// const Textarea = styled(Input).attrs({ as: "textarea" })`
//   ${tw`h-24`}
// `;
const Option = tw.option`text-sm font-medium text-secondary-100 bg-white border-none focus:outline-none cursor-pointer transition duration-300`;
const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
    subheading = "Good News!",
    heading = (
        <>
            Add New Achievement, <span tw="text-primary-500">Talk</span>
            <wbr /> or Project here.
        </>
    ),
    description = "",
    submitButtonText = "Add",
    formAction = "#",
    formMethod = "post",
    textOnLeft = true,
}) => {
    // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

    const [data, setData] = useState({
        title: "",
        type: "awards",
        year: "2023",
        slides: "",
        video: "",
        link: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        fetch("https://simppl-org-backend.onrender.com/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("News added successfully!");
            })
            .catch((err) => {
                console.log(err);
                alert("Error adding news!");
            });
    };
    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image imageSrc={EmailIllustrationSrc} />
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Heading>{heading}</Heading>
                        {description && (
                            <Description>{description}</Description>
                        )}
                        {/* <Form action={formAction} method={formMethod}> */}
                        <Form>
                            <Input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                placeholder="Title or Heading"
                            />
                            <Select
                                onChange={handleChange}
                                name="type"
                                placeholder="Achievement Type"
                            >
                                <Option value="awards">
                                    Awards, Grants, and Funding
                                </Option>
                                <Option value="projects">
                                    Pilot projects and Invited Demos of our
                                    products
                                </Option>
                                <Option value="talks">
                                    Academic and Industry Talks
                                </Option>
                            </Select>
                            <Input
                                contentEditable={true}
                                type="number"
                                min="2019"
                                max="2049"
                                step="1"
                                name="year"
                                placeholder="Year"
                                onChange={handleChange}
                            />
                            {/* url */}
                            <Input
                                type="url"
                                name="slides"
                                onChange={handleChange}
                                placeholder="Slide Deck URL (Optional)"
                            />
                            <Input
                                type="url"
                                name="video"
                                onChange={handleChange}
                                placeholder="YouTube or Zoom Recording URL (Optional)"
                            />
                            <Input
                                type="url"
                                name="link"
                                onChange={handleChange}
                                placeholder="Any External Link / URL (Optional)"
                            />
                            {/* <Textarea name="message" placeholder="Your Message Here" /> */}
                            {/* <SubmitButton type="submit" onClick={handleSubmit}>{submitButtonText}</SubmitButton> */}
                            <SubmitButton onClick={handleSubmit}>
                                {submitButtonText}
                            </SubmitButton>
                        </Form>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
