import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useHelper,
  Resize,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Portal } from "./Portal";
import "./index.scss";
import {
  BrightnessContrast,
  DepthOfField,
  EffectComposer,
  GodRays,
} from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import {
  CylinderGeometry,
  Mesh,
  MeshBasicMaterial,
  SpotLightHelper,
} from "three";

const Scene = () => {
  const godray = useRef();
  // useHelper(godray, SpotLightHelper, "rgba(0,0,0,0)");

  let mesh = new Mesh(
    new CylinderGeometry(0.1, 0.2, 0.1, 20),
    new MeshBasicMaterial({
      color: "#aaf",
      transparent: true,
      opacity: 1,
    })
  );
  mesh.rotation.x = Math.PI / 2;
  mesh.position.set(4, 7.75, 0.3);
  mesh.scale.set(1.5, 1, 1);

  let portalLightTarget = new Mesh(
    new CylinderGeometry(0, 0, 0, 0),
    new MeshBasicMaterial({})
  );
  portalLightTarget.position.set(4, 0, 8);

  return (
    <>
      <primitive object={portalLightTarget} />
      <spotLight
        penumbra={0.15}
        distance={50}
        angle={Math.PI / 3.5}
        power={10}
        intensity={0.8}
        color={"#70f"}
        position={[4, 7.75, 0.3]}
        target={portalLightTarget}
        ref={godray}
      />
      <primitive object={mesh} />
      <Portal castShadow receiveShadow />
      <ambientLight color={"#70f"} intensity={0.2} />
      <spotLight
        color={"#fff"}
        intensity={0.15}
        position={[10, 15, 10]}
        target-position={[4, 4, 0.15]}
      />
      <PerspectiveCamera makeDefault fov={50} position={[15, 10, 15]} />
      <OrbitControls target={[4, 4, 0]} />

      <Sparkles
        position={[4, 4, 0.5]}
        count={50}
        scale={10}
        color={"#aaf"}
        size={6}
        speed={0.2}
        noise={0.1}
      />

      <EffectComposer stencilBuffer>
        <DepthOfField focusDistance={0.015} focalLength={0.15} bokehScale={2} />
        <BrightnessContrast brightness={0.0} contrast={0.035} />
        <GodRays
          sun={mesh}
          blendFunction={BlendFunction.Screen}
          samples={20}
          density={0.97}
          decay={0.97}
          weight={0.4}
          exposure={0.1}
          clampMax={1}
          width={Resizer.AUTO_SIZE}
          height={Resizer.AUTO_SIZE}
          kernelSize={KernelSize.SMALL}
          blur={true}
        />
      </EffectComposer>
    </>
  );
};

const SceneWrapper = () => {
  return (
    <div className="portal-scene">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export { SceneWrapper };
