import React from "react";

const StationGrid = ({ stationAnalytics }) => {

    return (

        <div className="rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-7">

            <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
                Infrastructure Overview
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                Station Intelligence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">

                {
                    stationAnalytics.map((station) => (

                        <div
                            key={station.stationId}
                            className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6"
                        >

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <h3 className="text-xl font-bold text-white">
                                        {station.stationName}
                                    </h3>

                                    <p className="mt-2 text-zinc-400 text-sm">
                                        {station.address}
                                    </p>

                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-6">

                                <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">

                                    <p className="text-zinc-500 text-xs uppercase tracking-widest">
                                        AC Slots
                                    </p>

                                    <h2 className="mt-3 text-3xl font-black text-white">
                                        {station.AC.available}
                                    </h2>

                                </div>

                                <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">

                                    <p className="text-zinc-500 text-xs uppercase tracking-widest">
                                        DC Slots
                                    </p>

                                    <h2 className="mt-3 text-3xl font-black text-white">
                                        {station.DC.available}
                                    </h2>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );

};

export default StationGrid;