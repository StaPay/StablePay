import React, { useState } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter()


    const Links = [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "How it Works",
          to: "/howItWorks",
        },
        {
            name: "Roadmap",
            to: "/roadmap",
          },
      ];

    console.log("router.pathname ====> ", router.pathname);
    console.log("router.query ====> ", router.query);
    
  return (

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          
            <div className='flex w-full md:w-auto justify-between'>
                <a href="/" className="flex items-center">
                    <img src="https://media.discordapp.net/attachments/997271802420142110/1112061292488966154/Cevidevs_logo_letter_S_illustration_abstract_blue_transparent_b_91e8eff2-d84f-4fad-9b15-51ea007fafcf.png?width=404&height=604" className="h-8 mr-0.5" alt="Stapay Logo" />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text font-extrabold text-3xl self-center whitespace-nowrap ">tapay</span>
                </a>
                <button
                    data-collapse-toggle="navbar-cta"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-cta"
                    aria-expanded="false"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                <svg className="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
                </button>
            </div>


          <div className=" hidden  md:flex md:order-2 ">
            <ConnectButton></ConnectButton>
          </div>


          <div className=" md:hidden flex justify-end md:order- w-full ">
            <ConnectButton></ConnectButton>
          </div>


          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'} md:block`} id="navbar-cta">
            <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
                {Links.map(({name, to})=>(
                    <Link key={name} href={to} className={`block py-2 pl-3 pr-4 rounded md:p-0 ${router.pathname === to ? 'text-white bg-blue-700 md:text-blue-700 md:bg-transparent md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current="page">{name}</Link>
                )               
                )}
            </ul>
          </div>


        </div>
      </nav>

  )
}
