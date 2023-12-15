import Image from 'next/image';

import NavbarButton from "@/components/NavbarButton";

import LblcsLogo from '@/public/lblcs_logo.svg'

export default function Navbar() {
    return (
        <div className="flex border-b-2 border-black flex-wrap justify-between bg-white w-full">
            <div className={"flex self-start gap-2 p-2"}>
                <NavbarButton href={"/"}>
                    <Image
                        src={LblcsLogo}
                        width={80}
                        height={80}
                        alt={"LBLCS Logo"}
                    />
                </NavbarButton>
            </div>

            <div className={"flex self-center gap-5 p-2"}>
                <NavbarButton href={"/about"}>
                    About
                </NavbarButton>
                <NavbarButton href={"/standings"}>
                    Standings
                </NavbarButton>
                <NavbarButton href={"/stats"}>
                    Stats
                </NavbarButton>
                <NavbarButton href={"/contact"}>
                    Contact
                </NavbarButton>
            </div>
        </div>
    );
}