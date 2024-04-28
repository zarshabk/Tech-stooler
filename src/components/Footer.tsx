import { Globe2Icon, Laptop2Icon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shadow-sm">
      <div className="max-w-5xl m-auto py-5 flex items-center gap-5">
        <Link href={"/"} className="flex items-center gap-1">
          <Laptop2Icon size={30} />
          <span className="font-medium">Stooler Techs</span>
        </Link>
        <div className="flex gap-1 ">
          <Globe2Icon size={20} />
          <p className="text-center text-sm">
            {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
