import { ModeToggle } from "./modetoggle";
import Image from "next/image";

export default function Navbar() {
    return (
       <div className="sticky top-0 z-10 h-max max-w-full bg-orange-50 dark:bg-orange-600 dark:text-stone-50">
            <div className=" inline-flex items-center justify-start space-x-4 mx-auto p-2">
                
                <Image
                src="/dotlc.png"
                alt="My Logo"
                className="dark:invert"
                width={50}
                height={50}
                priority
                />
                <h2 className="font-mono font-bold text-lg items-center">Gabinet Łukasz Chwalisz</h2>
                <div className="justify-end"><ModeToggle/></div>
            </div>
       
       </div>
    )

};