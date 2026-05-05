import { useNavigate } from "react-router-dom";
import { MapPin } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

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
                    ? "bg-[#895CE7] text-black shadow-2xl "
                    : "bg-white hover:bg-gray-50"
                } flex sm:gap-4 md:justify-between shadow-2xl`}
        >

            {/* LEFT */}
            <div onClick={onSelect}
                className={`p-4 mb-3 rounded-2xl cursor-pointer transition-all ${isSelected
                    ? "bg-[#895CE7] text-black "
                    : "bg-white hover:bg-gray-50"
                    } flex flex-col gap-2 w-2/3 `}>

                <h2 className={`font-semibold ${isSelected ? "text-black" : "text-black"}`}>
                    {station.stationName}
                </h2>

                <p className={`text-sm  flex items-center ${isSelected
                    ? " text-black  "
                    : "text-gray-500"
                    }`}>
                   <div> <MapPin strokeWidth={2} size={20} /></div>
                   <div>
                     {station.distance < 1
                        ? `${(station.distance * 1000).toFixed(0)} m away`
                        : `${station.distance.toFixed(2)} km away`}
                        </div>
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
                    className={`mt-3 ${isSelected ? "bg-white" : "bg-black"} ${isSelected ? "text-black" : "text-white"} px-4 py-3 rounded-full text-sm hover:scale-105 transition flex justify-center gap-2 items-center`}
                >
                  <div>  See Station </div>
                  <div><ArrowRight /></div>
                </button>
            </div>

            {/* RIGHT IMAGE (dummy for now) */}
           <div className="w-1/3 lg:w-1/2 rounded-2xl overflow-hidden mt-4">
            <img className="rounded-2xl" src="public\img-car-home.png" alt="" />
           </div>

        </div>
    );
}