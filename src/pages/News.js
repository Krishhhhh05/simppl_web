
      import React from "react";
      import AnimationRevealPage from "helpers/AnimationRevealPage.js";
      import tw from "twin.macro";
      import { css } from "styled-components/macro"; //eslint-disable-line
      import Header from "components/headers/light.js";
      import Footer from "components/footers/MiniCenteredFooter.js";
      
import { useState, useEffect } from "react";
      import NewsSection from "components/cards/TabTable.js";
      import ResearchSection from "components/research/PopularAndRecentResearch.js";
      import ArticleSection from "components/research/ThreeColSimpleArticle.js";
      import useGAPageView from "helpers/useGAPageView";
      import news from "data/newsData";

      export default () => {
          useGAPageView();
          const [data, setData] = useState(null);

          useEffect(() => {
            fetch("https://simppl-org-backend.onrender.com/news-yearwise")
              .then((res) => res.json())
              .then((data) => setData(data))
              .catch((err) => console.log(err));
          }, []);
          return (
              <AnimationRevealPage>
                  <Header />
      
                  <ResearchSection />
                  <ArticleSection />
                  {data && <NewsSection heading="Impact we create!" tabs={data} />}
      {!data && <NewsSection heading="Impact we create!" tabs={news} />}

                  <Footer />
              </AnimationRevealPage>
          );
      };
      