import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import TokensBalancePanel from "../components/tokensBalanceDisplay.jsx"



export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
        {/* <TokensBalancePanel  walletAddress={"0xshah.eth"} chain={"ETH_MAINNET"} /> */}
        
      </main>

    </div>
  );
}
