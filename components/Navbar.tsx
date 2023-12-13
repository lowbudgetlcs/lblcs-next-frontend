import Link from 'next/link'

export default function Navbar() {
    const navbarButtonStyling: string = "bg-gray border-black border-2 rounded-md shadow-lg p-1";
    return (
        <div className="static w-full flex gap-2 p-3">
            <Link href={"/"} className={navbarButtonStyling}>
                LBLCS
            </Link>
            <Link href={"/about"} className={navbarButtonStyling}>
                About
            </Link>
            <Link href={"/standings"} className={navbarButtonStyling}>
                Standings
            </Link>
            <Link href={"/stats"} className={navbarButtonStyling}>
                Stats
            </Link>
            <Link href={"/contact"} className={navbarButtonStyling}>
                Contact
            </Link>
        </div>
    )
}