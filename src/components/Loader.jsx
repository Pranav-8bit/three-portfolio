import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress(); // Destructure the progress property
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress.toFixed(2)}% {/* Use the progress value */}
      </p>
    </Html>
  );
};

export default Loader;
