import useCanvasCursor from "../hooks/useCanvasCursor"; // fix path

const CanvasCursor = () => {
    useCanvasCursor();

    return (
        <canvas
            id="canvas"
            className="pointer-events-none fixed inset-0 z-[9999]"
        />
    );
};

export default CanvasCursor;