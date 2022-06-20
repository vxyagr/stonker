import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import type { FunctionComponent } from "react";

const { chains, provider } = configureChains([chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum], [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]);
const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});
/**
 * ButtonConnectWalletMobileProps is a React Component properties that passed to React Component ButtonConnectWalletMobile
 */
type ButtonConnectWalletMobileProps = {};

/**
 * ButtonConnectWalletMobile is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const ButtonConnectWalletMobile: FunctionComponent<ButtonConnectWalletMobileProps> = ({}) => {
    // Read global states

    return (
        <>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    <ConnectButton />
                </RainbowKitProvider>
            </WagmiConfig>
            {
                //openMenu ? <BurgerMenu open={openMenu} /> : <></>
            }
        </>
    );
};

export default ButtonConnectWalletMobile;
