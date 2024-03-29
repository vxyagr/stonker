import type { FunctionComponent } from "react";
// Import components
import ButtonLaunchGradient from "../Buttons/LaunchGradient";
import PrivateSale from "./PrivateSale";
// @ts-ignore
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../../public/dragonkin_final.jpg";
import { useMarkets } from "../../utils/snapshot";
import ButtonConnectWalletMobile from "../Buttons/ConnectWalletMobile";
import ButtonConnectWalletDesktop from "../Buttons/ConnectWalletDesktop";
import { DEFAULT_CHAIN, RinkebyProvider, useWalletContext } from "../Wallet";
import { ethers, providers } from "ethers";
import React, { useState, useEffect } from "react";
import NFTCard from "./NFTCard";
import Link from "next/link";
/**
 * HeroProps is a React Component properties that passed to React Component Hero
 */
type HeroProps = { accountConnected: boolean };

/**
 * Hero is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 *
 */

interface ICard {
    yield: number;
    tokenId: number;
}
const Hero: FunctionComponent<HeroProps> = (props) => {
    const handleClick = () => {
        console.log("Click happened");
    };
    const { chain } = useWalletContext();
    const { account } = useWalletContext();
    const { signer } = useWalletContext();
    const showConnectWallet = account ? false : true;
    const showSwitchToDefaultNetwork = !showConnectWallet && chain.unsupported ? true : false;
    const availableSpecies = [0, 0, 0, 0];

    //setIsConnected(props.accountConnected);

    // Read data from Snapshot API
    //const marketsResponse = useMarkets(chain.unsupported ? DEFAULT_CHAIN.id : chain.chain.id);
    const items: ICard[] = [];
    const [allCards, setAllCards] = useState();
    // UI states

    const Web3 = require("web3");
    //if (window.web3) {

    var contractAbi = require("../../abis/StonkerNFTABI.json");
    var dividendContractAbi = require("../../abis/stonkerDividendABI.json");
    //const contractAddres = "0x21Bf9D1BBc6FA5C39378fe3091B05EF51d24BcFF"; //rinkeby

    const contractAddres = "0x6BdD2353D12a78FEa7487829adaB30bf391ae336"; //mainnet
    const dividendContractAddres = "0x882249918044aF91FDCA1B7DE0FFbde637E5F546"; //mainnet
    // console.log(accountsList[0])

    // const provider = new providers.JsonRpcBatchProvider("https://rinkeby.infura.io/v3/8051d992532d4f65b1cea01cb751d577");

    const contract = new ethers.Contract(contractAddres, contractAbi, signer);
    const dividendContract = new ethers.Contract(dividendContractAddres, dividendContractAbi, signer);
    const [lokaCards, setLokaCards] = useState([]);
    const prices = [10, 120, 10, 10];
    const [dataFetched, setDataFethced] = useState(false);
    const [cardLoaded, setCardLoaded] = useState(false);
    prices[1] = 225;

    const axios = require("axios");
    // const request = require("request");
    const [human, setHuman] = useState(0);
    const [elf, setElf] = useState(0);
    const [vampire, setVampire] = useState(0);
    const [android, setAndroid] = useState(0);
    const [ownerPercent, setOwnerPercent] = useState(0);
    const [claimable, setClaimable] = useState(0);
    const [totalClaimed, setTotalClaimed] = useState(0);
    const [zeroStonker, setZeroStonker] = useState(true);
    const [totalStonkerYield, setTotalStonkerYield] = useState(0);

    const [cardData, setCardData] = useState([]);

    const getTotalYield = async () => {
        if (account) {
            var totalYield = await dividendContract.getPopulationYield();
            setTotalStonkerYield(totalYield);
        }
    };

    const getClaimableDividend = async () => {
        if (account) {
            var claimable = await dividendContract.getClaimableDividend(account);
            setClaimable((claimable * 0.7) / 1000000);
        }
    };

    const claim = async () => {
        if (account) {
            var claimable = await dividendContract.claim();
            //setClaimable((claimable * 0.7) / 1000000);
        }
    };

    const getTotalClaimed = async () => {
        if (account) {
            var totalClaim = await dividendContract.getTotalClaimedDividends(account);
            setTotalClaimed(totalClaim);
        }
    };

    const getOwned = async () => {
        if (account) {
            var owned = await contract.stonkersOfOwner(account);
            getTotalYield();
            //console.log(owned);
            for (const [index, value] of owned.entries()) {
                var card_: ICard = { tokenId: 0, yield: 0 };
                card_.tokenId = value[0];
                var yieldEffectivity = value[1].toString();
                card_.yield = value[1];
                items.push(card_);
                switch (yieldEffectivity) {
                    case "20":
                        availableSpecies[0]++;
                        break;
                    case "16":
                        availableSpecies[1]++;
                        break;
                    case "13":
                        availableSpecies[2]++;
                        break;
                    case "10":
                        availableSpecies[3]++;
                        break;
                }
            }
            setHuman(availableSpecies[3]);
            setElf(availableSpecies[2]);
            setVampire(availableSpecies[1]);
            setAndroid(availableSpecies[0]);
            var ownedPercent = ((1 * human + 1.3 * elf + 1.6 * vampire + 2 * android) / totalStonkerYield) * 100;
            setOwnerPercent(ownedPercent);
            if (ownedPercent > 0) setZeroStonker(false);
        }
    };

    getOwned();
    getClaimableDividend();

    useEffect(() => {
        //getLokas();
        //console.log("getting lokas use effect " + items.length);
    }, [items.length]); // <-- empty dependency array
    if (!showConnectWallet && !showSwitchToDefaultNetwork) {
        //if (true) {
        return (
            <div className="relative h-full w-full justify-center overflow-hidden lg:h-full">
                <div className="relative z-10 m-auto flex w-screen flex-col items-center gap-8 py-[20px] px-4 text-center align-middle lg:py-10">
                    <h2 className="med-hero-text">
                        Stonker <span className="gradient move-gradient bg-[length:250%_250%] bg-clip-text text-transparent transition-none sm:py-20">Dashboard</span>
                    </h2>
                    <div>
                        <div className="px-4 py-6 text-center sm:basis-1/4 sm:pl-8">
                            <p className="mb-6 text-sm leading-6 text-gray-light-10 dark:text-gray-dark-10">
                                <div>You have</div> <span className="items-center justify-center text-4xl text-gray-light-12 dark:text-gray-dark-12">{claimable.toFixed(2).toString()} USDC</span> <div>of dividend</div>
                                <Link href="#">
                                    <a
                                        onClick={() => {
                                            claim();
                                        }}
                                        className="button gradient inline-block rounded-full bg-[length:300%_300%] bg-center py-3 px-8 font-inter text-sm font-bold leading-none tracking-tight text-gray-50 hover:bg-left  hover:shadow-xl hover:shadow-blue-400/20 active:scale-95 dark:text-gray-900 sm:text-base md:text-base"
                                    >
                                        Claim
                                    </a>
                                </Link>
                            </p>
                            <p className="text-sm font-bold leading-6 text-gray-light-12 dark:text-gray-dark-12"></p>
                        </div>
                        <div className="mt-6 h-full grid-cols-2 gap-x-4 gap-y-1 px-4 text-center sm:basis-2/4 sm:pl-8 md:flex lg:flex" style={{ justifyContent: "center", alignItems: "center" }}>
                            <div className="relative z-10 my-2  h-[160px] w-[350px] overflow-hidden rounded-2xl px-20 ">
                                <div className="relative aspect-square w-full " style={{ justifyContent: "center", alignItems: "center" }}>
                                    <div className="h-[60px] p-2 text-sm text-gray-light-12 dark:text-gray-dark-12">Total Claimed</div>
                                    <div className="flex items-center justify-center text-3xl text-slate-50">
                                        <span className="items-center justify-center text-gray-light-12 dark:text-gray-dark-12">USDC {totalClaimed.toFixed(2).toString()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 my-2  h-[160px] w-[350px] overflow-hidden rounded-2xl px-20  ">
                                <div className="relative aspect-square w-full " style={{ justifyContent: "center", alignItems: "center" }}>
                                    <div className="h-[60px] p-2 text-sm text-gray-light-12 dark:text-gray-dark-12">Your Farming Profit Ownership</div>
                                    <div className="flex items-center justify-center text-3xl text-slate-50">
                                        <span className="items-center justify-center text-gray-light-12 dark:text-gray-dark-12">{ownerPercent.toFixed(2).toString()} %</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 my-2 h-[160px] w-[350px] overflow-hidden rounded-2xl px-20  ">
                                <div className="relative aspect-square w-full " style={{ justifyContent: "center", alignItems: "center" }}>
                                    <div className=" p-2 text-sm text-gray-light-12 dark:text-gray-dark-12">Your Stonker NFT Species</div>
                                    <div className="flex items-center justify-center text-2xl text-slate-50">
                                        <span className="items-center justify-center text-gray-light-12 dark:text-gray-dark-12">
                                            {human > 0 ? (
                                                <div>
                                                    <span>Human x {human.toString()}</span>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                            {elf > 0 ? (
                                                <div>
                                                    <span>Elf x {elf.toString()}</span>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                            {vampire > 0 ? (
                                                <div>
                                                    <span>Vampire x {vampire.toString()}</span>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                            {android > 0 ? (
                                                <div>
                                                    <span>Android x {android.toString()}</span>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                            {zeroStonker ? <div>0 NFTs</div> : <></>}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-10">
                        {" "}
                        <hr />
                    </div>
                    {/* <h2 className="med-hero-text">
                        Stonker <span className="gradient move-gradient bg-[length:250%_250%] bg-clip-text text-transparent transition-none sm:py-20">Treasury Farming</span>
                    </h2>
                    <h2 className="small-hero-text">(coming soon)</h2>*/}
                    <div className="md:flex lg:flex ">
                        {/*<NFTCard tokenId={0} yield={20} />
                        <NFTCard tokenId={0} yield={20} />
                        <NFTCard tokenId={0} yield={20} />
                        <NFTCard tokenId={0} yield={20} />
                        <NFTCard tokenId={0} yield={20} />
                        {renderCards()} */}
                    </div>
                </div>
            </div>
        );
    } else if (showSwitchToDefaultNetwork) {
        return (
            <div className="lg:py-30 relative z-10 m-auto flex max-w-screen-md flex-col items-center gap-8 py-[60px] px-4 text-center align-middle">
                <h2 className="med-hero-text">
                    Please Switch Network to <span className="gradient move-gradient bg-[length:250%_250%] bg-clip-text text-transparent transition-none sm:py-20">{DEFAULT_CHAIN.name}</span>
                </h2>
            </div>
        );
    } else {
        return (
            <div className="lg:py-30 relative z-10 m-auto flex max-w-screen-md flex-col items-center gap-8 py-[60px] px-4 text-center align-middle">
                <h2 className="med-hero-text">Please Connect Your Wallet</h2>
            </div>
        );
    }
};

export default Hero;
