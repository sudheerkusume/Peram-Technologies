import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Particles(props) {
    const ref = useRef();
    const [positions] = useState(() => {
        const arr = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 10;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return arr;
    });

    useFrame((state, delta) => {
        ref.current.rotation.x += delta * 0.05;
        ref.current.rotation.y += delta * 0.08;
    });

    return (
        <Points ref={ref} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#00c6ff"
                size={0.02}
                sizeAttenuation
                depthWrite={false}
            />
        </Points>
    );
}

export default function ParticlesCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <Particles />
        </Canvas>
    );
}