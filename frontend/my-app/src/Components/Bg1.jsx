import React from 'react'

const Bg1 = () => {
    return (
        <div>
            {/* ================= BACKGROUND ================= */}

            <div className="fixed inset-0 -z-10">

                {/* GRADIENT TOP */}
                <div
                    className="
        h-[55vh]
        bg-cover
        bg-center
        bg-no-repeat
        opacity-90
    "

                    style={{
                        backgroundImage:
                            "url('/background1.jpg')"
                    }}
                />

                {/* LIGHT LOWER SECTION */}
                <div className="h-[55vh] bg-zinc-100" />

            </div>
        </div>
    )
}

export default Bg1