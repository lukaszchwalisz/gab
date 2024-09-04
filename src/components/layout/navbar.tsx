import { ModeToggle } from "./modetoggle";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
export default function Navbar() {
    return (
       <div className="sticky top-0 z-10 h-max max-w-full flex  bg-orange-50 dark:bg-orange-600 dark:text-stone-50">
            <div className=" inline-flex items-center justify-start space-x-4 mx-auto p-2">
                
                <Avatar>
                <Link href="/">
                <AvatarImage src="/xlcx.webp" />
                </Link>
                </Avatar>


                <h2 className="font-mono font-bold text-lg items-center">Gabinet Łukasz Chwalisz</h2>
                
            </div>
            <div className="justify-end inline-flex items-center mx-auto"><ModeToggle/></div>
       </div>
    )

};