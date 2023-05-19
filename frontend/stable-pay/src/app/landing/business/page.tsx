'use client'
import { Button } from "@/src/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"


const BusinessLandPage = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10 w-screen px-5 lg:px-20 z-10">
            <h1 className="text-5xl font-bold text-white">Focus on your business, not on volatility</h1>
            <p className="text-2xl font-medium text-white text-center">StablePay allows you to receive payments in stablecoins.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <Button className="bg-[#8C00FF] text-white hover:bg-[#7A00E5]">Get Started</Button>
                <Button className="bg-white text-black hover:bg-[#F2F2F2]">You are a developer?</Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 p-10 mt-20 w-1/2 h-max bg-white rounded-lg">
                <h3 className="text-xl font-bold text-black">We make it easy for you</h3>
                <Tabs defaultValue="account" className="w-[400px] text-center">
                    <TabsList>
                        <TabsTrigger value="account">Api Integration</TabsTrigger>
                        <TabsTrigger value="password">Link Integration</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="text-black">
                        <div className="flex flex-col gap-5 justify-center items-start">
                            <p className="text-sm font-medium text-black">You can integrate StablePay in your website or app using our API.</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="password" className="text-black">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default BusinessLandPage