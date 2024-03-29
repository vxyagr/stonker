import type { FunctionComponent } from "react";

/**
 * HomePageMetaProps is a React Component properties that passed to React Component HomePageMeta
 */
type HomePageMetaProps = {};

/**
 * HomePageMeta is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */

const HomePageMeta: FunctionComponent<HomePageMetaProps> = ({}) => {
    return (
        <>
            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://stonker.club/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Stonker Trading Club" />
            <meta property="og:description" content="A simple way to invest on treasury management with NFT as ownership and tradeable token" />
            <meta property="og:image" content="https://stonker.club/stonker_hero.jpg" />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="stonker.club" />
            <meta property="twitter:url" content="https://twitter.com/stonkerclub" />
            <meta name="twitter:title" content="Stonker Trading Club" />
            <meta name="twitter:description" content="A simple way to invest on treasury management with NFT as ownership and tradeable token" />
            <meta name="twitter:image" content="https://stonker.club/stonker_hero.jpg" />
        </>
    );
};

export default HomePageMeta;
