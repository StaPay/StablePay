import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img className={styles.alchemy_logo} src="https://media.discordapp.net/attachments/997271802420142110/1112061283169214566/Cevidevs_logo_letter_S_illustration_abstract_blue_transparent_b_d295a609-4b95-4b00-8ef5-25202d40d737.png?width=604&height=604"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
