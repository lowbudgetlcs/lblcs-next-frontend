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
        <nav className="bottom-0 md:top-0 w-screen md:w-20 h-20 md:h-screen fixed bg-[--bg-secondary] border-r-2 border-[--bg-primary] group md:hover:w-64 md:transition-all md:duration-600 md:ease-in " aria-label={"navbar"}>
            <ul className={"list-none p-0 m-0 flex md:flex-col flex-row items-center h-full"} aria-label={"navbar-container"}>
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