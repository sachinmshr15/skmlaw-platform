type Props={

    eyebrow:string;

    title:string;

    description:string;

};

export default function SectionHeading({

    eyebrow,

    title,

    description,

}:Props){

    return(

        <div className="mx-auto max-w-3xl text-center">

            <span
                className="uppercase tracking-[5px] text-yellow-400 text-sm font-semibold"
            >
                {eyebrow}
            </span>

            <h2
                className="mt-4 text-5xl font-bold text-white"
            >
                {title}
            </h2>

            <p
                className="mt-6 leading-8 text-gray-400"
            >
                {description}
            </p>

        </div>

    );

}