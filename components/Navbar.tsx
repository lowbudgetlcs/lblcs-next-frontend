import Image from 'next/image';
import { AiFillInfoCircle } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { GiPodium } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

import NavbarButton from "@/components/NavbarButton";

import LblcsLogo from '@/public/lblcs_logo.svg'

export default function Navbar() {
    return (
        <nav className="fixed w-20 bg-[--bg-secondary] border-r-2 border-[--bg-primary] group transition-all duration-200 ease-out hover:w-64" aria-label={"navbar-container"}>
            <ul className={"list-none p-0 m-0 flex flex-col items-center h-screen"} aria-label={"navbar-list"}>
                <NavbarButton href={"/"} text={"Home"}>
                        <Image
                            src={LblcsLogo}
                            height={0}
                            width={0}
                            style={{width: "4rem", height:"auto"}}
                            alt={"LBLCS Logo"}
                        />
                </NavbarButton>

                <NavbarButton href={"/about"} text={"About"}>
                    <AiFillInfoCircle size={42} />
                </NavbarButton>

                <NavbarButton href={"/standings"} text={"Standings"}>
                    <GiPodium size={42} />
                </NavbarButton>

                <NavbarButton href={"/stats"} text={"Stats"}>
                    <MdLeaderboard size={42} />
                </NavbarButton>

                <NavbarButton href={"/contact"} text={"Contact"}>
                    <MdOutlineAlternateEmail size={42} />
                </NavbarButton>

                <NavbarButton href={""} text={"Theme"}>
                    <BsMoonStarsFill size={42} />
                </NavbarButton>
            </ul>
        </nav>
    );
}