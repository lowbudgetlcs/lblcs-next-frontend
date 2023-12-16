import Link from "next/link";
import React from 'react';

interface NavbarLogoProps {
    href: string
    children: React.ReactNode
    text: string
}

export default function NavbarLogo({ href, children, text}: NavbarLogoProps) {
    return (
        <li className={"font-bold uppercase mb-1 text-center color-[--text-primary] bg-[--bg-secondary] text-2xl w-full"}>
            <Link href={href} className={"flex items-center h-20"} aria-label={"navbar-link"}>
                <div className={"min-w-8 my-0 mx-6 group-hover:ml-32"}>
                    {children}
                </div>
                <span className={"absolute hidden ml-8 tracking-widest group-hover:inline"}>
                    {text}
                </span>
            </Link>
        </li>
    );
}