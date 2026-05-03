import { useMemo } from "react";

export default function FloatingIcons() {
    const icons = [
        "/icons/charger1.svg",
        "/icons/charger2.svg",
        "/icons/car1.svg",
        "/icons/car2.svg",
        "/icons/car3.svg",
        "/icons/car4.svg",
        "/icons/cable1.svg",
        "/icons/cable2.svg",
        "/icons/building1.svg",
        "/icons/building2.svg",
        "/icons/steering1.svg",
        "/icons/charger1.svg",
        "/icons/charger2.svg",
        "/icons/car1.svg",
        "/icons/car2.svg",
        "/icons/car3.svg",
        "/icons/car4.svg",
        "/icons/cable1.svg",
        "/icons/cable2.svg",
        "/icons/building1.svg",
        "/icons/building2.svg",
        "/icons/steering1.svg"
    ];

    // generate ONCE
    const items = useMemo(() => {
        return icons.map((src, i) => ({
            id: i,
            src,
            size: 25 + Math.random() * 40,
            top: Math.random() * 90,
            left: Math.random() * 90,
            rotate: Math.random() * 60 - 30, // -30° to +30°
            opacity: 0.6 + Math.random() * 0.15,
        }));
    }, []);

    return (
        <div style={styles.container}>
            {items.map((item) => (
                <img
                    key={item.id}
                    src={item.src}
                    style={{
                        position: "absolute",
                        width: `${item.size}px`,
                        top: `${item.top}%`,
                        left: `${item.left}%`,
                        transform: `rotate(${item.rotate}deg)`,
                        opacity: item.opacity,
                        pointerEvents: "none",
                    }}
                />
            ))}
        </div>
    );
}

const styles = {
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
    },
};