import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const links = [{
        name: "Home",
        href: "/"
    }, {
        name: "about",
        href: "/about"
    }, {
        name: "skating",
        href: "/skating"
    }, {
        name: "shop",
        href: "/shop"
    }, {
        name: "contact",
        href: "/contact"
    }
    ]
    return (
        <div className="bg-[#F0390F] text-white">
            <div className="container m-auto">
                <div className="px-4 flex flex-col items-center gap-8 lg:flex-row py-6 justify-between">
                    <div className="left flex flex-col items-center justify-center lg:flex-row gap-8">
                        <div className="copy"> &copy; 2024 sbs </div>
                    </div>
                    <ul className="text-sm lg:text-base flex flex-wrap  items-center justify-center gap-4">
                        {links.map((link, key) => (
                            <li key={key}>
                                <Link href={link.href} className="text-white" >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}