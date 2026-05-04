import { useNavigate } from "react-router-dom";

export default function StationCard({ station, isSelected, onSelect, refProp }) {
    const navigate = useNavigate();

    const handleSelect = () => {
        
        navigate("/slots", {
            state: { station }
        });
    };

    return (
        <div
            ref={refProp}
            className={`rounded-2xl p-4 mb-4 transition-all ${isSelected
                    ? "bg-black text-white shadow-lg scale-[1.02]"
                    : "bg-white hover:bg-gray-50"
                }`}
        >

            {/* LEFT */}
            <div onClick={onSelect}
                className={`p-4 mb-3 rounded-2xl cursor-pointer transition-all ${isSelected
                    ? "bg-black text-white shadow-lg scale-[1.02]"
                    : "bg-white hover:bg-gray-50"
                    }`}>

                <h2 className={`font-semibold ${isSelected ? "text-white" : "text-black"}`}>
                    {station.stationName}
                </h2>

                <p className="text-sm text-gray-500">
                    📍 {station.distance < 1
                        ? `${(station.distance * 1000).toFixed(0)} m away`
                        : `${station.distance.toFixed(2)} km away`}
                </p>

                <p className="text-sm mt-1">
                    <span className="text-green-500 font-semibold">
                        {station.chargers.AC.available + station.chargers.DC.available}
                    </span>
                    {" / "}
                    {station.chargers.AC.total + station.chargers.DC.total} slots available
                </p>

                <button
                    onClick={handleSelect}
                    className={`mt-3 ${isSelected ? "bg-white" : "bg-black"} ${isSelected ? "text-black" : "text-white"} px-4 py-2 rounded-full text-sm hover:scale-105 transition`}
                >
                    See Station →
                </button>
            </div>

            {/* RIGHT IMAGE (dummy for now) */}
            <div className="w-32 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-xs text-gray-400">
                Image
            </div>

        </div>
    );
}