import Link from "next/link";
import React from 'react';

interface NavbarButtonProps {
    href: string
    children: React.ReactNode
}

export default function NavbarButton({ href, children }: NavbarButtonProps) {
    return (
        <Link href={href} className={"flex p-2 font-bold hover:font-extrabold"}>
            <div className={"justify-self-end self-end"}>
                {children}
            </div>
        </Link>
)
    ;
}