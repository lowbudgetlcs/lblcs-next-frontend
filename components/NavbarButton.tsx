import Link from "next/link";
import React from 'react';

interface NavbarButtonProps {
    href: string
    children: React.ReactNode
    text: string
}

export default function NavbarButton({ href, children, text }: NavbarButtonProps) {
    return (
        <li className={"flex w-full last:mt-auto"}>
            <Link href={href} className={"h-20 text-[--text-black]"} aria-label={"navbar-link"}>
                <div className={"flex my-0 mx-6 items-center"} aria-label={"navbar-icon"}>
                    {children}
                    <p className={"hidden group-hover:block"}>
                        {text}
                    </p>
                </div>
            </Link>
        </li>
    );
}