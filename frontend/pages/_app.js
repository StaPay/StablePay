import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import '../public/css/tailwind.css';
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from "../layout/mainLayout";
import Footer from "../components/Footer.jsx";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, useAccount, WagmiConfig } from "wagmi";
import {
	polygon,
	polygonMumbai,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {connectorsForWallets} from "@rainbow-me/rainbowkit"
import {walletConnectWallet, metaMaskWallet, coinbaseWallet, injectedWallet, rainbowWallet} from "@rainbow-me/rainbowkit/wallets"
import { useRouter } from "next/router";
import {dataContractFactory} from "../utils/dataContractFactory"
import { readContract } from '@wagmi/core'
import { ContractProvider } from "../context/ContractContext";
import { useToast } from "@chakra-ui/react";
import dotenv from "dotenv"
dotenv.config()


const api =process.env.ALCHEMY_API_KEY
const projectId =process.env.WALLETCONNECT_PROJECT_ID

const { chains, publicClient } = configureChains(
											[ polygonMumbai,polygon], //mainnet, sepolia, goerli, polygon,  arbitrum 
											[ publicProvider(),
											  alchemyProvider({ apiKey: 'rfeTzT_Jq66CUriNasdU3-ut-aKHdhKk' })
											]
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
	const toast = useToast();
	console.log("AAAAAAAAAAPPPPPPPPIIIIIIIIII===> ",api);
	const router = useRouter();
	const account = useAccount({
		onConnect({ address, connector, isReconnected }) {
			// if (!isReconnected) router.reload();
			ifNewUser(address)

	   
		},
		onDisconnect: () => {
			router.push("/")
			console.log('Disconnected')
		},
	});


	const ifNewUser =async(_address)=> {
		
		try {
			toast({
				title: "",
				description: `Espera unos segunodos xfavor`,
				status: "info",
				duration: 3000,
				isClosable: true,
			  });
			  
			const data = await readContract({
				address: dataContractFactory.addressContract.mumbai,
				abi: dataContractFactory.abi,
				functionName: "getContractsOfUsers",
				args: [_address]
			   })
			   console.log("data ==>",data);


			   if(data.length>0){
				   router.push("/dashboard")
				   console.log("data.length CERO==>",data.length);			
			   }else{
				   router.push("/crea")
				   console.log("data.length MAS ==>",data.length);
	   
			   }
		} catch (error) {
			toast({
				title: "Error",
				description: `hay un error de conexión :C \n ${error}`,
				status: "error",
				duration: 3000,
				isClosable: true,
			  });
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
				<ContractProvider>
					<MainLayout/>
					<Component {...pageProps} />
				</ContractProvider>
											
			</RainbowKitProvider>
			<Footer></Footer>
		</WagmiConfig>
		</ChakraProvider>
	);
}

export default MyApp;
