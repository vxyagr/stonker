import Link from "next/link";
import type { FunctionComponent } from "react";
import { Sling as Hamburger } from "hamburger-react";

/**
 * ResourcesProps is a React Component properties that passed to React Component Resources
 */
type ResourcesProps = { message: string; error: boolean; onClick: Function };

/**
 * Resources is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const MintErrorCard: FunctionComponent<ResourcesProps> = (props) => {
    return (
        <div className="absolute z-50 m-0 flex h-screen w-full flex-shrink-0 flex-col gap-y-2 py-1 backdrop-blur sm:flex-row sm:gap-x-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="h-[300px] w-[200px] bg-white">
                <a onChange={props.onClick()} href="">
                    Oops! {props.message}
                </a>
            </div>
        </div>
    );
};

export default MintErrorCard;
