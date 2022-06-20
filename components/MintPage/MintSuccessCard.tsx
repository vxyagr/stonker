import Link from "next/link";
import type { FunctionComponent } from "react";
import { Sling as Hamburger } from "hamburger-react";

/**
 * ResourcesProps is a React Component properties that passed to React Component Resources
 */
type ResourcesProps = { species: number; amount: number; txHash: string; speciesName: string };

/**
 * Resources is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const MintSuccessCard: FunctionComponent<ResourcesProps> = (props) => {
    return (
        <div className="m-auto flex w-full flex-shrink-0 flex-col gap-y-2 sm:flex-row sm:gap-x-4">
            You have minted {props.amount} {props.speciesName} successfully!
            <br />
            You may check on it on Opensea
            <br />
            Transaction hash number :
        </div>
    );
};

export default MintSuccessCard;
