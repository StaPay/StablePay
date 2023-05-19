"use client"
import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import { ChevronRightSquare, Coins, Home, LogIn, LucideLogIn, Milestone, PersonStanding, Store } from "lucide-react"
import { Button } from "../ui/button"



export default function NavBar() {
    return (
        <nav className="flex md:flex-row flex-col items-center md:justify-between gap-5 md:gap-0 py-6 px-10 sm:px-16 w-screen h-max bg-transparent rounded-3xl text-black z-50">
            <Link href="/"><h1 className="text-3xl font-black text-white">StablePay</h1></Link>
            <div className="flex items-center justify-between gap-10">
                <NavigationMenu>    
                    <NavigationMenuList className="bg-white p-5 rounded-lg">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <Milestone className="h-6 w-6" />
                                How it Works?
                                </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-xl hover:shadow-md hover:border-black hover:border"
                                                href="/landing/clients"
                                            >
                                                <PersonStanding className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    For your Clients
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Let your clients pay with their favorite coins.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-xl hover:shadow-md hover:border-black hover:border"
                                                href="/landing/business"
                                            >
                                                <Store className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Focus on Your Business
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Recieves payments in stablecoins and forget about volatility.
                                                </p>

                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <Coins className="h-6 w-6" />
                                Stables
                                </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="flex flex-col justify-start gap-3 p-6 md:w-[100px] lg:w-[200px]">
                                    <li className="bg-muted rounded-md p-4 hover:scale-105 text-sm font-medium">
                                        <p>USDT</p>
                                    </li>
                                    <li className="bg-muted rounded-md p-4 hover:scale-105 text-sm font-medium">
                                        <p>USDC</p>
                                    </li>
                                    <li className="bg-muted rounded-md p-4 hover:scale-105 text-sm font-medium">
                                        <p>DAI</p>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/FAQ" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    FAQ
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/FAQ" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    See an Example <ChevronRightSquare className="h-6 w-6" />
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

            </div>
            <div>
                <Button variant='outline' className="text-white">
                    <LucideLogIn className="w-6 h-6 mr-2" /> Sign In
                </Button>
            </div>
        </nav>
    )
}
