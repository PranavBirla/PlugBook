import React from "react";

import { Circle } from "lucide-react";

import { motion } from "framer-motion";

const Topbar = () => {

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center justify-between rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl px-6 py-5"
        >

            <div>

                <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
                    PlugBook Infrastructure
                </p>

                <h1 className="mt-2 text-2xl md:text-3xl font-black tracking-tight text-white">
                    Grid Intelligence Center
                </h1>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2">

                <Circle
                    size={10}
                    fill="#86efac"
                    className="text-green-300 animate-pulse"
                />

                <p className="text-sm text-green-200 font-medium">
                    All Systems Operational
                </p>

            </div>

        </motion.div>

    );

};

export default Topbar;