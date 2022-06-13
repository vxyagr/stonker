import type { FunctionComponent } from "react";
// Import components
import ButtonLaunchGradient from "../Buttons/LaunchGradient";
import PrivateSale from "./PrivateSale";
// @ts-ignore
import ReactRoundedImage from "react-rounded-image";
/**
 * HeroProps is a React Component properties that passed to React Component Hero
 */
type HeroProps = {};

/**
 * Hero is just yet another react component
 * <!-- <img src="dragonkin_final.jfif" className="absolute top-0 left-0 hidden w-full lg:flex" /> -->
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const Hero: FunctionComponent<HeroProps> = ({}) => {
    return (
        <div className="relative h-full w-full justify-center overflow-hidden px-4">
            <div className="relative z-20 m-auto flex  flex-col items-center gap-8 px-0 py-12 text-center align-middle lg:px-4 ">
                <div className="flex items-center lg:px-20">
                    <div className="w-full text-left">
                        <h1 className="sub-hero-text w-full p-0 py-4">
                            About <span className="gradient move-gradient w-full  bg-clip-text text-transparent transition-none">Stonker </span>
                            <hr />
                        </h1>
                        <div className="lg:flex">
                            <div className="lg:hidden" style={{ justifyContent: "center", alignItems: "center" }}>
                                <div className="flex" style={{ justifyContent: "center", alignItems: "center" }}>
                                    <div className="p-2">
                                        <ReactRoundedImage image={"stonkusu.jpg"} roundedColor="#FFFFFF" imageWidth="160" imageHeight="160" roundedSize="5" borderRadius="20" />
                                    </div>
                                    <div className="p-2">
                                        <ReactRoundedImage image={"android_stonk.jfif"} roundedColor="#FFFFFF" imageWidth="160" imageHeight="160" roundedSize="5" borderRadius="20" />
                                    </div>
                                </div>
                            </div>
                            <div className="pr-10 pt-5 text-left text-base leading-relaxed text-white">
                                <h2 className="p-0 text-left text-base leading-relaxed text-white lg:pr-8 lg:pl-10">
                                    <p>Aiming for 3-10% monthly profit by our team of experienced treasury farmers, Stonker is a yield farming NFT community project, limited only 8787 tokens</p>
                                    <p>"Stonker" name came from "Stonks" meme representing mixed feeling of optimism on the market</p>
                                    <br />
                                    <p>
                                        {" "}
                                        The Treasury farming begins by using our own Infinium algorithmic trading robot and system. <br />
                                        Infinium public performance can be seen here :
                                        <span className="gradient move-gradient bold w-full  bg-clip-text text-transparent transition-none">
                                            {" "}
                                            <a href="http://fxblue.com/users/infinium" target="blank_">
                                                http://fxblue.com/users/infinium{" "}
                                            </a>{" "}
                                        </span>
                                        <br />
                                    </p>
                                    <br />
                                    As a brick and mortar business, our short term target is to return the holder's minting cost within 10-24 months, organically from treasury farming profit.
                                    <br />
                                    Followed after by collaboration with DeFis, onchain web3 businesses, and eventually building StonkTank-DAO to invest on both onchain and offchain businesses
                                </h2>
                            </div>
                            <div className="hidden lg:block" style={{ justifyContent: "center", alignItems: "center" }}>
                                <div className="lg:flex " style={{ justifyContent: "center", alignItems: "center" }}>
                                    <div className="p-2">
                                        <ReactRoundedImage image={"stonkusu.jpg"} roundedColor="#FFFFFF" imageWidth="350" imageHeight="350" roundedSize="5" borderRadius="20" />
                                    </div>
                                    <div className="p-2">
                                        <ReactRoundedImage image={"android_stonk.jfif"} roundedColor="#FFFFFF" imageWidth="350" imageHeight="350" roundedSize="5" borderRadius="20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-5 text-right lg:px-20">
                    <h1 className="sub-hero-text w-full p-0">
                        The <span className="gradient move-gradient w-full  bg-clip-text text-transparent transition-none">Passing Light </span>:<br /> <span className="small-hero-text"> 4 Artworks with a twist in each NFT</span>
                    </h1>
                    <hr />
                    <div className="pt-10 lg:flex">
                        <div className="hidden lg:block" style={{ justifyContent: "center", alignItems: "center" }}>
                            <div className="lg:flex " style={{ justifyContent: "center", alignItems: "center" }}>
                                <div className="p-2">
                                    <ReactRoundedImage image={"sunrise.jpg"} roundedColor="#FFFFFF" imageWidth="350" imageHeight="350" roundedSize="5" borderRadius="20" />
                                </div>
                                <div className="p-2">
                                    <ReactRoundedImage image={"daylight.jpg"} roundedColor="#FFFFFF" imageWidth="350" imageHeight="350" roundedSize="5" borderRadius="20" />
                                </div>
                            </div>
                            <div className="lg:flex" style={{ justifyContent: "center", alignItems: "center" }}>
                                <div className="p-2">
                                    <ReactRoundedImage image={"sunset.jpg"} roundedColor="#FFFFFF" imageWidth="350" imageHeight="350" roundedSize="5" borderRadius="20" />
                                </div>
                                <div className="p-2">
                                    <ReactRoundedImage image={"night.jpg"} roundedColor="#FFFFFF" imageWidth="350" imageHeight="350" roundedSize="5" borderRadius="20" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:hidden" style={{ justifyContent: "center", alignItems: "center" }}>
                            <div className="flex" style={{ justifyContent: "center", alignItems: "center" }}>
                                <div className="p-2">
                                    <ReactRoundedImage image={"sunrise.jpg"} roundedColor="#FFFFFF" imageWidth="160" imageHeight="160" roundedSize="5" borderRadius="20" />
                                </div>
                                <div className="p-2">
                                    <ReactRoundedImage image={"daylight.jpg"} roundedColor="#FFFFFF" imageWidth="160" imageHeight="160" roundedSize="5" borderRadius="20" />
                                </div>
                            </div>
                            <div className="flex" style={{ justifyContent: "center", alignItems: "center" }}>
                                <div className="p-2">
                                    <ReactRoundedImage image={"sunset.jpg"} roundedColor="#FFFFFF" imageWidth="160" imageHeight="160" roundedSize="5" borderRadius="20" />
                                </div>
                                <div className="p-2">
                                    <ReactRoundedImage image={"night.jpg"} roundedColor="#FFFFFF" imageWidth="160" imageHeight="160" roundedSize="5" borderRadius="20" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-5 text-left text-base leading-relaxed text-white lg:pr-10 lg:pl-10 lg:text-left">
                            The market never stops, it goes on an on as the heartbeat of civilization. <br />
                            There is always morning, somewhere in the planet, as there is always night in the different side. <br />
                            Everyone, either in the morning, daylight, twilight, and even at night, are anticipating the golden moment and chances offered by the market to win a better life. <br />
                            So many stories happened the market, about winning, losing, hope, dream, the past, the future, and so much more.
                            <br />
                            Stonker NFT represent this continuous cycle with a mechanism called "The Passing Light", by changing the lighting based on the market hour
                            <br />
                            <br />
                            <ul>
                                <li>Morning lighting for US market open</li>
                                <li>Daylight lighting for Australian market open</li>
                                <li>Twilight / Sunset lighting for Asian market open</li>
                                <li>Night lighting for European market open</li>
                            </ul>
                            <br />
                            <br />
                            The NFT is bound to 4 types of art, each representing Morning, Daylight, Twilight, and Night, combined with Smart Contract mechanism, the PFP will change depends on what time it is being accessed / looked at.
                        </div>
                    </div>
                </div>
                <div className="flex items-center lg:px-20">
                    <div className="w-full text-left">
                        <h1 className="sub-hero-text w-full p-0 py-4">
                            Farming Strategy and <span className="gradient move-gradient w-full  bg-clip-text text-transparent transition-none">Infinium </span>
                            <hr />
                        </h1>
                        <div className="lg:flex">
                            <div className="lg:hidden" style={{ justifyContent: "center", alignItems: "center" }}>
                                <div className="flex" style={{ justifyContent: "center", alignItems: "center" }}>
                                    <div className="p-2">
                                        <ReactRoundedImage image={"stonkusu.jpg"} roundedColor="#FFFFFF" imageWidth="160" imageHeight="160" roundedSize="5" borderRadius="20" />
                                    </div>
                                    <div className="p-2">
                                        <ReactRoundedImage image={"android_stonk.jfif"} roundedColor="#FFFFFF" imageWidth="160" imageHeight="160" roundedSize="5" borderRadius="20" />
                                    </div>
                                </div>
                            </div>
                            <div className="pr-10 pt-5 text-left text-base leading-relaxed text-white">
                                <h2 className="p-0 text-left text-base leading-relaxed text-white lg:pr-8 lg:pl-10">
                                    <p>Infinium, the system and algorithmic trading robot, has been developed and used since 2011.</p>
                                    <br />
                                    Back then, it was mainly used to trade on forex market, and eventually cryptocurrency.
                                    <br />
                                    It becomes the first strategy for Stonker to farm the treasury, targeting <span className="gradient move-gradient bold w-full  bg-clip-text text-transparent transition-none">3-10% profit per month</span>.
                                    <br />
                                    How infinium works can be checked
                                    <span className="gradient move-gradient bold w-full  bg-clip-text text-transparent transition-none">
                                        {" "}
                                        <a href="https://vxyagr.gitbook.io/stonker/about/infinium" target="_blank">
                                            here (click)
                                        </a>
                                    </span>
                                </h2>
                            </div>
                            <div className="hidden lg:block" style={{ justifyContent: "center", alignItems: "center" }}>
                                <div className="lg:flex " style={{ justifyContent: "center", alignItems: "center" }}>
                                    <div className="p-2">
                                        <ReactRoundedImage image={"stonkusu.jpg"} roundedColor="#FFFFFF" imageWidth="350" imageHeight="350" roundedSize="5" borderRadius="20" />
                                    </div>
                                    <div className="p-2">
                                        <ReactRoundedImage image={"android_stonk.jfif"} roundedColor="#FFFFFF" imageWidth="350" imageHeight="350" roundedSize="5" borderRadius="20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
