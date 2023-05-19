"use client"
import MainFeatures from "../components/landing/MainFeatures";
import NavBar from "../components/landing/NavBar";
import { Button } from "../components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { Input } from "../components/ui/input";
import React from "react";




export default function Home() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(46), 5500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className="absolute top-0 left-36 drop-shadow-[0_20px_50px_rgba(244,_0,_255,_0.7)] blur-xl w-96 h-96 rounded-full -z-20 bg-[#8C00FF] brightness-100"></div>
      <div className="absolute top-0 left-36 drop-shadow-[0_20px_50px_rgba(244,_0,_255,_0.7)] blur-xl w-96 h-96 rounded-full -z-20 bg-[#8C00FF] brightness-100"></div>
      <div className="absolute bottom-48 right-0 drop-shadow-[0_20px_50px_rgba(244,_0,_255,_0.7)] blur-3xl w-36 h-72 rounded-3xl -z-20 bg-[#8C00FF] brightness-100"></div>
      <main className="flex flex-col items-center justify-start gap-20 px-10 py-5 bg-[#101211] w-screen h-screen bg-opacity-60 backdrop-blur-3xl relative overflow-hidden">
        {/* Circles */}
        <div className="absolute top-3/4 md:top-1/2 md:left-36 left-5 w-16 h-16 blur-sm bg-cover rounded-full bg-[url(https://img.freepik.com/iconos-gratis/atar_318-627090.jpg)] animate-pulse"></div>
        <div className="absolute top-1/3 right-36 w-16 h-16 blur-sm bg-cover rounded-full bg-[url(https://img.freepik.com/iconos-gratis/atar_318-627090.jpg)]"></div>
        <NavBar />
        <section className="flex flex-col items-center justify-center gap-10 w-screen px-5 lg:px-20 z-10">
          <h1 className="md:text-8xl text-5xl font-bold tracking-wide	 text-white">Easy Payments in Crypto</h1>
          <h2 className="lg:text-5xl text-2xl font-semibold text-white/90 underline decoration-wavy hover:text-6xl">Transparent</h2>
          <h1 className="lg:text-8xl text-5xl font-bold tracking-wide	 text-white animate-text-focus-in">To Stables</h1>
          <div className="flex items-center justify-center gap-10">
            <div className="flex w-full max-w-sm items-center space-x-2 py-20 px-5">
              <Input className="w-96 " type="email" placeholder="Name of your Business" />
              <Button variant='default' size='lg' className="bg-white text-black hover:text-black hover:bg-[#8C00FF]" type="submit">Start</Button>
            </div>
          </div>
        </section>
      </main >
      <MainFeatures />
      {/* FAQ */}
      <main className="flex flex-col items-center justify-start gap-20 px-10 py-20 bg-[#101211] w-screen h-screen bg-opacity-60 backdrop-blur-3xl relative overflow-hidden">
        <section className="flex flex-col items-center justify-center gap-10 w-screen px-5 lg:px-20 z-10 text-center">
          <h1 className="text-3xl font-bold tracking-wide	 text-white">FAQ</h1>
          <Collapsible>
            <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
            <CollapsibleContent>
              Yes. Free to use for personal and commercial projects. No attribution
              required.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
            <CollapsibleContent>
              Yes. Free to use for personal and commercial projects. No attribution
              required.
            </CollapsibleContent>
          </Collapsible>
        </section>
      </main >
    </>
  )
}


