import { ReactNode } from "react";

type Props={

    children:ReactNode;

};

export default function Card({

    children,

}:Props){

    return(

        <div
            className="rounded-3xl border border-yellow-500/10 bg-[#0d1b2a] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10"
        >

            {children}

        </div>

    );

}