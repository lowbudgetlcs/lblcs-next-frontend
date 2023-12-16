import Link from "next/link";
import React from 'react';

interface NavbarButtonProps {
    href: string
    children: React.ReactNode
    text: string
}

export default function NavbarButton({ href, children, text }: NavbarButtonProps) {
    return (
        <li className={"w-full md:last:mt-auto"}>
            <Link href={href} className={"flex max-md:justify-center items-center h-20"} aria-label={"navbar-link"}>
                <div className={"min-w-8 my-0 mx-6"}>
                    {children}
                </div>
                <span className={"hidden ml-4 md:group-hover:inline"}>
                    {text}
                </span>
            </Link>
        </li>
    );
}