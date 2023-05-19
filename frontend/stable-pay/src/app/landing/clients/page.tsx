import { Button } from "@/src/components/ui/button"
import { Label } from "@/src/components/ui/label"
import { Switch } from "@/src/components/ui/switch"


const ClientLandPage = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10 w-screen px-5 lg:px-20 z-10">
            <h1 className="text-5xl font-bold text-white">Make easy for your clients to pay you</h1>
            <p className="text-2xl font-medium text-white text-center">StablePay allows your clients to pay you with their favorite stablecoins.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <Button className="bg-[#8C00FF] text-white hover:bg-[#7A00E5]">Get Started</Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 p-5">
                <h3 className="text-3xl font-bold text-white">Configure easy</h3>
                <div className="flex flex-col gap-5 justify-center items-start bg-white p-5 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode" className="text-black">Erc-20</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode" className="text-black">Polygon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode" className="text-black">TRC-20</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode" className="text-black">BSC</Label>
                    </div>
                </div>
             </div>   
        </section>
    )
}

export default ClientLandPage