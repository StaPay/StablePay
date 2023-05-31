import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import '../public/css/tailwind.css';
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from "../layout/mainLayout";
import Footer from "../components/Footer.jsx";
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
import {connectorsForWallets} from "@rainbow-me/rainbowkit"
import {walletConnectWallet, metaMaskWallet, coinbaseWallet, injectedWallet, rainbowWallet} from "@rainbow-me/rainbowkit/wallets"
import { useRouter } from "next/router";



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




function MyApp({ Component, pageProps }) {

	const router = useRouter();
	const account = useAccount({
		onConnect({ address, connector, isReconnected }) {
			// if (!isReconnected) router.reload();
			ifNewUser()
		},
		onDisconnect: () => {
			router.push("/")
			console.log('Disconnected')
		},
	});


	  

	const ifNewUser =()=> {
		if(1>0){
			router.push("/crea")
		}else{
			router.push("/dashboard")
		}
	}
	

	return (
		<ChakraProvider>
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
			<Footer></Footer>
		</WagmiConfig>
		</ChakraProvider>
	);
}

export default MyApp;
