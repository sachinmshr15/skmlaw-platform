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

            className="
inline-flex
items-center
justify-center
rounded-2xl
bg-gradient-to-r
from-yellow-400
to-yellow-500
px-8
py-4
font-semibold
text-black
shadow-[0_15px_40px_rgba(234,179,8,.35)]
transition-all
duration-300
hover:-translate-y-1
hover:shadow-[0_20px_60px_rgba(234,179,8,.45)]
"

        >

            {children}

        </Link>

    );

}