import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { headerLinks } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMobile() {
    const pathName = usePathname();

    return (
        <section>
            <Sheet>
                <SheetTrigger asChild>
                    <GiHamburgerMenu size={20} className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="bg-[#191A19] border-none">
                    <div className="grid gap-4 py-4">
                        <ul className='flex items-start flex-col gap-2 font-general-sans-medium'>
                            {headerLinks.map((link, index) => {
                                const isActive = pathName === link.route;
                                return (
                                    <li
                                        key={index}
                                        className={`${isActive ? 'text-white' : 'text-[#ffffff50]'
                                            } flex-center p-medium-16 whitespace-nowrap font-bold`}
                                    >
                                        <Link href={link.route}>{link.label}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default NavbarMobile