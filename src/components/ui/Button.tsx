import Link from "next/link";
import { ReactNode } from "react";

type Props={

    href:string;

    children:ReactNode;

};

export default function Button({

    href,

    children,

}:Props){

    return(

        <Link

            href={href}

            className="rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-7 py-4 font-semibold text-black shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:scale-105"

        >

            {children}

        </Link>

    );

}