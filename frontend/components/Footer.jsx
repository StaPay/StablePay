import React from 'react'
import styles from "../styles/InstructionsComponent.module.css";

export default function Footer() {
  return (
    
    <footer className=" m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between h-2 mt-32">

        <a href="/" className="flex items-center">
                    <img src="https://media.discordapp.net/attachments/997271802420142110/1112061292488966154/Cevidevs_logo_letter_S_illustration_abstract_blue_transparent_b_91e8eff2-d84f-4fad-9b15-51ea007fafcf.png?width=404&height=604" className="h-8 mr-0.5" alt="Stapay Logo" />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text font-extrabold text-3xl self-center whitespace-nowrap ">tapay</span>
                </a>   
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Stapay   ™. All Rights Reserved.</span>
    </div>
    </footer>



  )
}
