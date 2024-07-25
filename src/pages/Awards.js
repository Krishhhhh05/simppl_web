import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
// import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import useGAPageView from "helpers/useGAPageView";
// import AwardsTable from "components/tables/AwardsTable";
import NewsSection from "components/cards/TabTable.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://simppl-org-backend.onrender.com/news-yearwise")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, []);

    useGAPageView();

    return (
        <AnimationRevealPage>
            <Header />
            {data && <NewsSection heading="Impact we create!" tabs={data} />}
            {/* <AwardsTable /> */}
            <Footer />
        </AnimationRevealPage>
    );
};
