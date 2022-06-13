import Head from "next/head";
import type { FunctionComponent } from "react";
import React, { useState } from "react";
import Favicon from "../Favicon";
import Footer from "../Footer";
import Hero from "./Mint";
import PrivateSale from "./PrivateSale";
import Navigation from "../AppNavigation";
import HomePageMeta from "./HomePageMeta";
import { useMarkets } from "../../utils/snapshot";
import ButtonConnectWalletMobile from "../Buttons/ConnectWalletMobile";
import { DEFAULT_CHAIN, RinkebyProvider, useWalletContext } from "../Wallet";
import { ethers, providers } from "ethers";

import ButtonConnectWalletDesktop from "../Buttons/ConnectWalletDesktop";
import Axios from "axios";

/**
 * HomePageProps is a React Component properties that passed to React Component HomePage
 */
type HomePageProps = {};
type MarketsPageProps = {};
var spply = 0;
var first = true;
var check = false;
/**
 * HomePage is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const HomePage: FunctionComponent<HomePageProps> = ({}) => {
    // By default use dark theme
    // Read global states
    const { chain, account, connectWallet, disconnectWallet, switchNetwork } = useWalletContext();
    var accountConnected = account ? false : true;
    accountConnected = false;
    const [walletConnected, setWalletConnected] = useState(accountConnected);
    const bgCol = { background: "radial-gradient(100.64% 150.78% at 50% -7.3%, #28556C 0%, rgba(10, 47, 12, 0.95) 41.22%, #0A2F0C 63.49%)" };
    return (
        <div className={`${bgCol} h-full w-full font-inter  lg:h-full`} style={{ background: "#000000" }}>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>Stonker Trading Club </title>
                <meta name="description" content="Trading and Treasury Farming as a service" />
                <HomePageMeta />
            </Head>
            <Favicon />
            <Navigation />
            <Hero accountConnected={!(account ? false : true)} />
        </div>
    );
};

export default HomePage;
