import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function InstructionsComponent() {
  const router = useRouter();

  return (

	<div>

		<div className="bg-white dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Recibe pagos en criptomonedas estables</h1>
					<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Desarrolla tu negocio, y olvidate de la volatilidad de las criptomonedas.</p>

          <ConnectButton label="Sing in" > </ConnectButton>


				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<img src="https://media.discordapp.net/attachments/997264415206412328/1112593102872522782/Cevidevs_mobile_blue_receiving_transfer_of_cryptocurrency_stabl_eed0a7bb-9900-4d5b-820a-35c3e90cfce3.png?width=604&height=604" alt="mockup"/>
				</div>                
			</div>
		</div>

    







	</div>
  );
}
