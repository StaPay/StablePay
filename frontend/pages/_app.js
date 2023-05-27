import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import '../public/css/tailwind.css';

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, useAccount, WagmiConfig } from "wagmi";
import {
	mainnet,
	sepolia,
	goerli,
	polygon,
	polygonMumbai,
	arbitrum,	
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";
import {connectorsForWallets} from "@rainbow-me/rainbowkit"
import {walletConnectWallet, metaMaskWallet, coinbaseWallet, injectedWallet, rainbowWallet} from "@rainbow-me/rainbowkit/wallets"

const api =process.env.ALCHEMY_API_KEY
const projectId =process.env.WALLETCONNECT_PROJECT_ID

const { chains, publicClient } = configureChains(
											[ mainnet, sepolia, goerli, polygon, polygonMumbai, arbitrum ],
											[alchemyProvider({ apiKey: api }), publicProvider()]
										);





const connectors = connectorsForWallets([
				{
					groupName: 'Recommended',
					wallets: [
						walletConnectWallet({ projectId, chains }), 
						metaMaskWallet({ projectId, chains }),
						injectedWallet({ chains }),
					],
				},
				{
					groupName: 'Others',
					wallets: [
						coinbaseWallet({ chains, appName: 'My RainbowKit App' }),
						rainbowWallet({ projectId, chains }),
					],
				},
])


const config = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
});

export { WagmiConfig, RainbowKitProvider };

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const account = useAccount({
		onConnect({ address, connector, isReconnected }) {
			if (!isReconnected) router.reload();
		},
	});
	return (
		<WagmiConfig config={config}>
			<RainbowKitProvider
				//modalSize="compact"
				//initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
				chains={chains}
			>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
