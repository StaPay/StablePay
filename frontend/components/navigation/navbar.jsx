import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import styles2 from "../../styles/InstructionsComponent.module.css"
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className="flex items-start ">
				<img className={styles.alchemy_logo} src="https://media.discordapp.net/attachments/997271802420142110/1112061292488966154/Cevidevs_logo_letter_S_illustration_abstract_blue_transparent_b_91e8eff2-d84f-4fad-9b15-51ea007fafcf.png?width=604&height=604"></img>
			<div className={`${styles2.header_container} `}>
				<h1>
					<span className="font-extrabold">tapay</span>
         		</h1>
				
				</div>
			</div>
			<ConnectButton className="self-start" ></ConnectButton>
		</nav>
	);
}
