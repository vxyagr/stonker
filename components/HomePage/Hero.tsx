import type { FunctionComponent } from "react";
// Import components
import ButtonLaunchGradient from "../Buttons/LaunchGradient";
import PrivateSale from "./PrivateSale";
import { useEffect, useState } from "react";

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
    const [timenow, setTimenow] = useState("stonker_morning.jpg");
    const [appLoaded, setAppLoaded] = useState(false);
    function getTimeCategory() {
        const currentUTC = new Date().getUTCHours();

        if (currentUTC >= 7 && currentUTC < 11) {
            return "stonker_morning.jpg";
        } else if (currentUTC >= 11 && currentUTC < 17) {
            return "stonker_day.jpg";
        } else if (currentUTC >= 17 && currentUTC < 19) {
            return "stonker_evening.jpg";
        } else if ((currentUTC >= 19 && currentUTC <= 24) || currentUTC < 7) {
            return "stonker_night.jpg";
        }

        console.log("utc " + currentUTC);

        // Handle cases outside the specified ranges (optional)
        return 0; // Or any other value you prefer for cases outside the ranges
    }
    useEffect(() => {
        if (!appLoaded) {
            setTimenow(getTimeCategory().toString());

            //console.log("timne " + timenow);
            var currentUTC = new Date().getUTCHours();
            // console.log("curr " + currentUTC);
        } else {
            setAppLoaded(true);
        }
    }, [appLoaded]);
    return (
        <div className="relative h-full w-full justify-center overflow-hidden">
            <img src={timenow} className="w-full lg:hidden" />
            <img src="stonker_hero.jpg" className="absolute top-0 left-0 hidden w-full min-w-[1200px] md:hidden lg:flex" />
            <div className="relative z-20 m-auto flex hidden  max-w-screen-md flex-col items-center gap-8 px-4 py-32 text-center align-middle ">
                <div className="flex  items-center">
                    <h1 className="hero-text">
                        crypto mining with <span className="gradient move-gradient bg-[length:250%_250%] bg-clip-text text-transparent transition-none">green and renewable energy</span>
                    </h1>
                </div>
                <div className="mx-auto max-w-lg">
                    <h2 className="text-base leading-relaxed text-gray-light-10 dark:text-gray-dark-10">A simple way to invest on a green energy based blockchain infrastructure, managed by professionals with transparency and reliability.</h2>
                </div>
            </div>

            <PrivateSale />
        </div>
    );
};

export default Hero;
