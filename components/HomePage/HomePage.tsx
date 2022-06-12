import Head from "next/head";
import type { FunctionComponent } from "react";
import Favicon from "../Favicon";
import Footer from "../Footer";
import Hero from "./Hero";
import PrivateSale from "./PrivateSale";
import Navigation from "../Navigation";
import HomePageMeta from "./HomePageMeta";
import Axios from "axios";

/**
 * HomePageProps is a React Component properties that passed to React Component HomePage
 */
type HomePageProps = {};

/**
 * HomePage is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const HomePage: FunctionComponent<HomePageProps> = ({}) => {
    // By default use dark theme
    const bgCol = { background: "black)" };
    return (
        <div className={`${bgCol} h-screen w-full overflow-clip  font-inter`} style={{ background: "black" }}>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>Stonker Trading Club</title>
                <meta name="description" content="Finance as a service with a touch of art" />
                <HomePageMeta />
            </Head>
            <Favicon />
            <Navigation />
            <Hero />
        </div>
    );
};

export default HomePage;
