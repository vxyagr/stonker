import Link from "next/link";
import type { FunctionComponent } from "react";
import RisedleLinks from "../../utils/links";

/**
 * ResourcesProps is a React Component properties that passed to React Component Resources
 */
type ResourcesProps = {};

/**
 * Resources is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const Resources: FunctionComponent<ResourcesProps> = ({}) => {
    return (
        <div className="fixed bottom-14 h-16 w-full px-4 lg:bottom-14 lg:right-8 lg:w-full lg:max-w-2xl lg:px-0">
            <div className="flex flex-row items-center rounded-lg p-1 sm:basis-2/3"></div>

            <div className="flex flex-row items-center rounded-lg bg-violet-light-3 p-4 hover:bg-violet-light-4 dark:bg-violet-dark-2 hover:dark:bg-violet-dark-3 sm:basis-1/3" style={{ backgroundImage: "url('private_sale_image.jpg')", background: "linear-gradient(265.43deg, #F7F8FA -6.9%, #73ADB8 66.53%)", border: "5px solid white", borderRadius: "5px!important" }}>
                <img src="sample.jfif" width={60} height={60} />
                <Link href="/mint">
                    <a className="">
                        <span className="leading-0 h-14 pl-8 align-middle text-base font-semibold  leading-none text-gray-light-12 dark:text-gray-dark-12">PRIVATE SALE IS LIVE </span>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Resources;
