import { Laptop2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar(){
    return (
        <header className="shadow-sm">
            <nav className="max-w-5xl m-auto flex justify-between items-center py-5">
                 <Link href={'/'} className="flex items-center gap-1">
                      <Laptop2Icon size={30}/>
                      <span className="font-medium">Stooler Techs</span>
                 </Link>

                 <Button asChild>
                    <Link href={'/'} className="">Post Job</Link>
                 </Button>
            </nav>
        </header>
    )
}