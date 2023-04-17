import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html center>
            <span className="canvas-load">
                <p
                    style={{
                        color: "#f1f1f1",
                        fontSize: 14,
                        fontWeight: 800,
                        marginTop: 40
                    }}
                >
                    {progress.toFixed(2)}%
                </p>
            </span>
        </Html>
    )
}

export default CanvasLoader