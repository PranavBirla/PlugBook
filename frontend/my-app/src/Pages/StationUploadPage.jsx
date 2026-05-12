import { useState } from "react";

import API from "../api/axios";

import {
    MapPin,
    BatteryCharging,
    Zap,
    LoaderCircle,
    CheckCircle2,
} from "lucide-react";

export default function StationUploadPage() {

    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        stationName: "",
        lat: "",
        lng: "",
        address: "",
        acTotal: "",
        dcTotal: "",
    });

    const handleChange = (e) => {

        setError("");
        setSuccess("");

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            setError("");

            setSuccess("");

            await API.post(
                "/api/station/create",
                {
                    ...formData
                },
                {
                    withCredentials: true
                }
            );

            setSuccess("Charging station uploaded successfully.");

            setFormData({
                stationName: "",
                lat: "",
                lng: "",
                address: "",
                acTotal: "",
                dcTotal: "",
            });

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Failed to upload station."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="relative min-h-screen overflow-hidden bg-black px-4 py-10 lg:px-10">

            {/* BG */}

            <div className="absolute inset-0 -z-10 overflow-hidden">

                <img
                    src="/full-bg2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/65" />

                <div className="absolute inset-0 bg-[#895CE7]/10" />

                <div className="absolute top-[5%] left-[5%] w-[420px] h-[420px] rounded-full bg-[#895CE7]/20 blur-[120px]" />

                <div className="absolute bottom-[0%] right-[0%] w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-[100px]" />

            </div>

            {/* TOP */}

            <div className="max-w-[1450px] mx-auto">

                {/* HEADER */}

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

                    <div>

                        <div className="w-fit px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl text-[11px] tracking-[0.18em] uppercase text-[#eadfff]">

                            Internal Infrastructure Panel

                        </div>

                        <h1 className="mt-6 text-[3rem] sm:text-[4rem] lg:text-[5rem] leading-[0.9] tracking-[-0.06em] font-black text-white">

                            Upload
                            <br />

                            EV Station

                        </h1>

                        <p className="mt-5 max-w-[650px] text-zinc-400 text-[15px] sm:text-[17px] leading-relaxed">

                            Add new charging stations to the PlugBook
                            infrastructure network with live charger
                            configuration and geolocation data.

                        </p>

                    </div>

                    {/* STATUS CARD */}

                    <div className="rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                        <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-2xl border border-white/10 bg-[#895CE7]/15 flex items-center justify-center">

                                <BatteryCharging
                                    size={24}
                                    className="text-white"
                                />

                            </div>

                            <div>

                                <p className="text-zinc-400 text-xs">
                                    Infrastructure
                                </p>

                                <h2 className="mt-1 text-2xl font-black text-white">
                                    Live Network
                                </h2>

                            </div>

                        </div>

                    </div>

                </div>

                {/* MAIN GRID */}

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">

                    {/* FORM */}

                    <div className="rounded-[34px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6"
                        >

                            {/* STATION NAME */}

                            <div>

                                <label className="block mb-3 text-sm font-medium text-zinc-300">

                                    Station Name

                                </label>

                                <input
                                    type="text"
                                    name="stationName"
                                    value={formData.stationName}
                                    onChange={handleChange}
                                    placeholder="CyberCharge Hub"
                                    className="w-full h-[60px] rounded-[22px] border border-white/10 bg-white/[0.05] px-5 text-white placeholder:text-zinc-500 outline-none focus:border-[#895CE7]/40 transition-all duration-300"
                                />

                            </div>

                            {/* LAT LNG */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                <div>

                                    <label className="block mb-3 text-sm font-medium text-zinc-300">

                                        Latitude

                                    </label>

                                    <input
                                        type="number"
                                        step="any"
                                        name="lat"
                                        value={formData.lat}
                                        onChange={handleChange}
                                        placeholder="28.6139"
                                        className="w-full h-[60px] rounded-[22px] border border-white/10 bg-white/[0.05] px-5 text-white placeholder:text-zinc-500 outline-none focus:border-[#895CE7]/40 transition-all duration-300"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-3 text-sm font-medium text-zinc-300">

                                        Longitude

                                    </label>

                                    <input
                                        type="number"
                                        step="any"
                                        name="lng"
                                        value={formData.lng}
                                        onChange={handleChange}
                                        placeholder="77.2090"
                                        className="w-full h-[60px] rounded-[22px] border border-white/10 bg-white/[0.05] px-5 text-white placeholder:text-zinc-500 outline-none focus:border-[#895CE7]/40 transition-all duration-300"
                                    />

                                </div>

                            </div>

                            {/* ADDRESS */}

                            <div>

                                <label className="block mb-3 text-sm font-medium text-zinc-300">

                                    Station Address

                                </label>

                                <textarea
                                    rows={4}
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Sector 18, Noida, Uttar Pradesh"
                                    className="w-full rounded-[24px] border border-white/10 bg-white/[0.05] px-5 py-4 text-white placeholder:text-zinc-500 outline-none resize-none focus:border-[#895CE7]/40 transition-all duration-300"
                                />

                            </div>

                            {/* CHARGERS */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                <div>

                                    <label className="block mb-3 text-sm font-medium text-zinc-300">

                                        AC Chargers

                                    </label>

                                    <input
                                        type="number"
                                        name="acTotal"
                                        value={formData.acTotal}
                                        onChange={handleChange}
                                        placeholder="12"
                                        className="w-full h-[60px] rounded-[22px] border border-white/10 bg-white/[0.05] px-5 text-white placeholder:text-zinc-500 outline-none focus:border-[#895CE7]/40 transition-all duration-300"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-3 text-sm font-medium text-zinc-300">

                                        DC Chargers

                                    </label>

                                    <input
                                        type="number"
                                        name="dcTotal"
                                        value={formData.dcTotal}
                                        onChange={handleChange}
                                        placeholder="8"
                                        className="w-full h-[60px] rounded-[22px] border border-white/10 bg-white/[0.05] px-5 text-white placeholder:text-zinc-500 outline-none focus:border-[#895CE7]/40 transition-all duration-300"
                                    />

                                </div>

                            </div>

                            {/* ERROR */}

                            {error && (

                                <div className="rounded-[20px] border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-300">

                                    {error}

                                </div>

                            )}

                            {/* SUCCESS */}

                            {success && (

                                <div className="rounded-[20px] border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-300 flex items-center gap-3">

                                    <CheckCircle2 size={18} />

                                    {success}

                                </div>

                            )}

                            {/* BUTTON */}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`mt-2 w-full h-[64px] rounded-[24px] flex items-center justify-center gap-3 text-[16px] font-semibold transition-all duration-300 ${loading
                                        ? "bg-zinc-700 text-zinc-300 cursor-not-allowed"
                                        : "bg-white text-black hover:scale-[1.01]"
                                    }`}
                            >

                                {loading ? (
                                    <>
                                        <LoaderCircle
                                            size={18}
                                            className="animate-spin"
                                        />

                                        Uploading Station...
                                    </>
                                ) : (
                                    <>
                                        Upload Station

                                        <Zap size={18} />
                                    </>
                                )}

                            </button>

                        </form>

                    </div>

                    {/* PREVIEW */}

                    <div className="rounded-[34px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col justify-between">

                        {/* TOP */}

                        <div>

                            <div className="flex items-center gap-3">

                                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-[#895CE7]/15 flex items-center justify-center">

                                    <MapPin
                                        size={22}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <p className="text-zinc-400 text-xs">
                                        Live Preview
                                    </p>

                                    <h2 className="text-xl font-bold text-white">
                                        Station Overview
                                    </h2>

                                </div>

                            </div>

                            {/* CARD */}

                            <div className="mt-8 rounded-[28px] overflow-hidden border border-white/10 bg-black/30">

                                {/* IMAGE */}

                                <div className="relative h-[240px] overflow-hidden">

                                    <img
                                        src="/station-preview.jpg"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-black/40" />

                                    <div className="absolute top-5 left-5 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-xs text-white">

                                        PlugBook Station
                                    </div>

                                </div>

                                {/* CONTENT */}

                                <div className="p-6">

                                    <h2 className="text-2xl font-black text-white">

                                        {formData.stationName ||
                                            "CyberCharge Hub"}

                                    </h2>

                                    <p className="mt-3 text-zinc-400 leading-relaxed">

                                        {formData.address ||
                                            "Station address preview will appear here."}

                                    </p>

                                    {/* STATS */}

                                    <div className="mt-7 grid grid-cols-2 gap-4">

                                        <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">

                                            <p className="text-zinc-500 text-xs">
                                                AC Chargers
                                            </p>

                                            <h3 className="mt-2 text-3xl font-black text-white">

                                                {formData.acTotal || "0"}

                                            </h3>

                                        </div>

                                        <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">

                                            <p className="text-zinc-500 text-xs">
                                                DC Chargers
                                            </p>

                                            <h3 className="mt-2 text-3xl font-black text-white">

                                                {formData.dcTotal || "0"}

                                            </h3>

                                        </div>

                                    </div>

                                    {/* LOCATION */}

                                    <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.04] p-5">

                                        <p className="text-zinc-500 text-xs">
                                            Coordinates
                                        </p>

                                        <h3 className="mt-2 text-white font-medium leading-relaxed">

                                            {formData.lat || "0.0000"}
                                            {" , "}
                                            {formData.lng || "0.0000"}

                                        </h3>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}