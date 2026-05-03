import { useNavigate } from "react-router-dom";

export default function StationPopup({ station }) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        const lat = station.location.lat;
        const lng = station.location.lng;

        window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
        );
    };

    return (
        <div style={{ minWidth: "200px" }}>
            <h3 style={{ margin: 0 }}>{station.stationName}</h3>

            <p style={{ fontSize: "12px", color: "#666" }}>
                {station.address}
            </p>

            <p>📍 {station?.distance < 1
                ? `${(station.distance * 1000).toFixed(0)} m away`
                : `${station.distance.toFixed(2)} km away`}
            </p>

            <p>
                ⚡ AC: {station.chargers.AC.available}/{station.chargers.AC.total}
            </p>

            <p>
                ⚡ DC: {station.chargers.DC.available}/{station.chargers.DC.total}
            </p>

            <button
                style={{
                    marginTop: "8px",
                    padding: "8px",
                    width: "100%",
                    background: "#000000",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
                onClick={() => navigate(`/book/${station._id}`)}
            >
                Book Slot
            </button>

            <button
                style={{
                    marginTop: "8px",
                    padding: "8px",
                    width: "100%",
                    background: "#895CE7",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
                onClick={handleNavigate}
            >
                Navigate
            </button>
        </div>
    );
}