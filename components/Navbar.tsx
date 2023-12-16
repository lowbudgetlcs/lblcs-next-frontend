import Image from 'next/image';
import { AiFillInfoCircle } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { GiPodium } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsMoonStarsFill } from 'react-icons/bs';

import NavbarButton from '@/components/NavbarButton';
import NavbarLogo from "@/components/NavbarLogo";

import lblcs_logo from '@/public/lblcs_logo.svg';

export default function Navbar() {
    return (
        <nav className="w-20 h-screen fixed bg-[--bg-secondary] border-r-2 border-[--bg-primary] group hover:w-64 transition-all duration-600 ease-in " aria-label={"navbar"}>
            <ul className={"list-none p-0 m-0 flex flex-col items-center h-screen"} aria-label={"navbar-container"}>
                <NavbarLogo href={"/"} text={"LBLCS"}>
                    <Image
                        src={lblcs_logo}
                        alt={"LBLCS Logo"}
                    />
                </NavbarLogo>

                <NavbarButton href={"/about"} text={"About"}>
                    <AiFillInfoCircle size={"2rem"}/>
                </NavbarButton>

                <NavbarButton href={"/standings"} text={"Standings"}>
                    <GiPodium size={"2rem"}/>
                </NavbarButton>

                <NavbarButton href={"/stats"} text={"Stats"}>
                    <MdLeaderboard size={"2rem"}/>
                </NavbarButton>

                <NavbarButton href={"/contact"} text={"Contact"}>
                    <MdOutlineAlternateEmail size={"2rem"}/>
                </NavbarButton>

                <NavbarButton href={""} text={"Theme"}>
                    <BsMoonStarsFill size={"2rem"}/>
                </NavbarButton>
            </ul>
        </nav>
    );
}