import Navbar from "../components/navigation/navbar";
import NavbarAccount from "../components/navigation/navbarAccount";
import NavbarMain from "../components/navigation/navbarMain";
import { useAccount } from "wagmi";



export default function MainLayout({ children }) {

	const { isConnected } = useAccount()


	return (
		<div>
			{isConnected==true?<NavbarAccount/> : <NavbarMain/> }           
            {children}
		</div>
	);
}
