import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Receipt } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function MainFeatures() {
    return <main className="flex flex-col items-center justify-center gap-20 px-10 py-5 bg-[#101211] w-screen h-screen bg-opacity-60 backdrop-blur-3xl relative overflow-hidden">
        {/* Circles */}
        <div className="absolute top-1/4 md:top-1/3 md:left-96 left-5 w-16 h-16 blur-sm bg-cover rounded-full bg-[url(https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png)]"></div>
        <div className="absolute top-2/3 right-72 w-16 h-16 blur-sm bg-cover rounded-full bg-[url(https://img.freepik.com/iconos-gratis/atar_318-627090.jpg)]"></div>
        <div className="absolute bottom-48 left-0 drop-shadow-[0_20px_50px_rgba(244,_0,_255,_0.7)] blur-3xl w-36 h-72 rounded-3xl -z-20 bg-[#8C00FF] brightness-100"></div>
        <div className="flex gap-10">
            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-3xl font-bold tracking-wide	 text-white">1. Create Contracts</h1>
                <p className="text-white">Create contract in a easy way, and run it in seconds.</p>
                <p className="text-white underline">All hosted in the blockchain on your wallet</p>
            </div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create contracts</CardTitle>
                    <CardDescription>Deploy your Contract in one-click</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Name of your contract" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">StableCoin</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="USDT" />
                                        <SelectContent position="popper">
                                            <SelectItem value="next">DAI</SelectItem>
                                            <SelectItem value="sveltekit">USDT</SelectItem>
                                            <SelectItem value="astro">USDC</SelectItem>
                                        </SelectContent>
                                    </SelectTrigger>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="ghost">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
        <div className="flex flex-row-reverse gap-10">
            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-3xl font-bold tracking-wide	 text-white">2. Client Pays easy</h1>
                <p className="text-white w-72">Your client can pay with any crypto accepted and in a simple and personalized way.</p>
                <p className="text-white underline">So Simple, that dosent look like a crypto payment.</p>
            </div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Payment</CardTitle>
                    <CardDescription>Pay with your favorite crypto</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Amount</Label>
                                <p className="text-black text-opacity-50">3.277 ETH</p>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Chain</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="TRC20" />
                                            <SelectContent position="popper">
                                                <SelectItem value="erc-20">ERC-20</SelectItem>
                                                <SelectItem value="trc-20">TRC-20</SelectItem>
                                                <SelectItem value="polygon">POLYGON</SelectItem>
                                                <SelectItem value="bsc">BSC</SelectItem>
                                            </SelectContent>
                                        </SelectTrigger>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="ghost">Cancel</Button>
                    <Button>Pay</Button>
                </CardFooter>
            </Card>
        </div>
        <div className="flex gap-10">
            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-3xl font-bold tracking-wide	 text-white">3. Receive in Stables</h1>
                <p className="text-white">Forget about volatility, we take care of that.</p>
                <p className="text-white underline">You own the keys, you own the money.</p>
            </div>
            <div className="flex flex-col gap-2">
                <Alert>
                    <Receipt className="w-4 h-4 text-white" />
                    <AlertTitle>New Deposit of 70 Matic</AlertTitle>
                    <AlertDescription>
                        Converted automaticlly to <span className="font-bold text-yellow-500">56.3 DAI</span>
                    </AlertDescription>
                </Alert>
                <Alert>
                    <Receipt className="w-4 h-4 text-white" />
                    <AlertTitle>New Deposit of 0.3ETH</AlertTitle>
                    <AlertDescription>
                        Converted automaticlly to <span className="font-bold text-green-400">553 USDT</span>
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    </main>;
}