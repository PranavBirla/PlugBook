import React from 'react'

const CardDekstop = () => {

    const cards = [
        {
            img: "/tesla-img.jpg",
            tag: "Eco Friendly",
            title: "Drive Clean Energy",
            desc: "Sustainable Future",
        },

        {
            img: "/car-map.jpg",
            tag: "Find Chargers",
            title: "Nearby Instantly",
            desc: "Real-Time Locations",
        },

        {
            img: "/car-charger.jpg",
            tag: "Fast Charging",
            title: "Book Your Slot",
            desc: "No Waiting Time",
        }
    ];

    return (

        <section className="px-4 sm:px-8 md:px-10 lg:px-14 py-10">

            <div className="relative">

                {/* GLOW */}

                <div className="absolute inset-0 bg-[#595CE7]/60 blur-[120px]" />

                {/* GRID */}

                <div className="
                    relative z-10
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    gap-4
                ">

                    {cards.map((card, index) => (

                        <div
                            key={index}
                            className="
                                group relative overflow-hidden
                                h-[240px] md:h-[300px] lg:h-[360px]
                                rounded-[32px]
                                border border-white/10
                                bg-white/[0.04]
                                backdrop-blur-2xl
                                shadow-[0_10px_40px_rgba(0,0,0,0.22)]

                                transition-all duration-700

                                hover:scale-[1.02]
                                hover:border-[#895CE7]/30
                            "
                        >

                            {/* IMAGE */}

                            <img
                                src={card.img}
                                alt=""
                                className="
                                    absolute inset-0
                                    w-full h-full object-cover
                                    transition-all duration-1000
                                    group-hover:scale-105
                                "
                            />

                            {/* DARK OVERLAY */}

                            <div className="
                                absolute inset-0
                                bg-black/25
                            " />

                            {/* PURPLE TINT */}

                            <div className="
                                absolute inset-0
                                bg-[#895CE7]/10
                            " />

                            {/* GRADIENT */}

                            <div className="
                                absolute inset-0
                                bg-gradient-to-t
                                from-black/80
                                via-black/10
                                to-transparent
                            " />

                            {/* GLOW */}

                            <div className="
                                absolute inset-0 opacity-0
                                bg-[#895CE7]/10 blur-3xl
                                transition-all duration-700
                                group-hover:opacity-100
                            " />

                            {/* CONTENT */}

                            <div className="
                                absolute bottom-0 left-0
                                w-full p-5 md:p-6
                            ">

                                {/* TAG */}

                                <div className="
                                    w-fit px-4 py-2 mb-4
                                    rounded-full
                                    border border-white/10
                                    bg-white/10
                                    backdrop-blur-xl
                                    text-[#eadfff]
                                    text-[10px] md:text-xs
                                    font-medium tracking-[0.18em]
                                    uppercase
                                ">

                                    {card.tag}

                                </div>

                                {/* TITLE */}

                                <h2 className="
                                    text-2xl md:text-3xl
                                    font-black tracking-tight
                                    text-white leading-[1]
                                ">

                                    {card.title}

                                </h2>

                                {/* DESC */}

                                <p className="
                                    mt-3
                                    text-zinc-300
                                    text-sm md:text-[15px]
                                ">

                                    {card.desc}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default CardDekstop