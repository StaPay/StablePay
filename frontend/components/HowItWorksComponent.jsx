import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function HowItWorksComponent() {
  const router = useRouter();

  return (

	<div>

		<div className="bg-white dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Paso 1: Crea tu contrato para tu negocio</h1>
					<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Llena el formulario con tus datos.</p>

				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<img src="https://drive.google.com/uc?export=download&id=1hWT3WkMRnyUMxZAenVAvMGJLF1eIEX0p" alt="mockup"/>
				</div>                
			</div>
		</div>

        <div className="bg-white dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Paso 2: Crea ordenes de pago</h1>
					<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Especifica el monto que deseas cobrar y el Token a recibir.</p>

				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<img src="https://drive.google.com/uc?export=download&id=1WMgXLWQB56dhSocp64-QyQx8kTdSjV4Z" alt="mockup"/>
				</div>                
			</div>
		</div>

        <div className="bg-white dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Paso 3: Recibe pagos</h1>
					<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Comparte el codigo QR o integra nuestra API en tu ecommerce</p>
				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<img src="https://drive.google.com/uc?export=download&id=16Vxa2baEURI_kf49ydHOYwouvj39sUai" alt="mockup"/>
				</div>                
			</div>
		</div>
	</div>
  );
}