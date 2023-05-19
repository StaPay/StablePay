import NavBar from "@/src/components/landing/NavBar";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="absolute top-0 left-36 drop-shadow-[0_20px_50px_rgba(244,_0,_255,_0.7)] blur-xl w-96 h-96 rounded-full -z-20 bg-[#8C00FF] brightness-100"></div>
                <div className="absolute top-0 left-36 drop-shadow-[0_20px_50px_rgba(244,_0,_255,_0.7)] blur-xl w-96 h-96 rounded-full -z-20 bg-[#8C00FF] brightness-100"></div>
                <div className="absolute bottom-48 right-0 drop-shadow-[0_20px_50px_rgba(244,_0,_255,_0.7)] blur-3xl w-36 h-72 rounded-3xl -z-20 bg-[#8C00FF] brightness-100"></div>
                <main className="flex flex-col items-center justify-start gap-20 px-10 py-5 bg-[#101211] w-screen h-screen bg-opacity-60 backdrop-blur-3xl relative overflow-hidden">
                    {/* Circles */}
                    <div className="absolute top-3/4 md:top-1/2 md:left-36 left-5 w-16 h-16 blur-sm bg-cover rounded-full bg-[url(https://img.freepik.com/iconos-gratis/atar_318-627090.jpg)] animate-pulse"></div>
                    <div className="absolute top-1/3 right-36 w-16 h-16 blur-sm bg-cover rounded-full bg-[url(https://img.freepik.com/iconos-gratis/atar_318-627090.jpg)]"></div>
                    <NavBar />
                    {children}
                </main >
            </body>
        </html>
    )
}