import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function useGAPageView() {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname,
            title: document.title,
        });
    }, []);
}
