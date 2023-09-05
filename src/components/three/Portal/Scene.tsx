import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useHelper,
  Resize,
  Sparkles,
  useGLTF,
  Float,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Portal } from "./Portal";
import {
  BrightnessContrast,
  DepthOfField,
  EffectComposer,
  GodRays,
  SelectiveBloom,
} from "@react-three/postprocessing";
import { BlendFunction, Resizer, BlurPass, KernelSize } from "postprocessing";
import {
  CylinderGeometry,
  Mesh,
  MeshBasicMaterial,
  SpotLight,
  SpotLightHelper,
} from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Frame: THREE.Mesh;
    PortalStair1: THREE.Mesh;
    PortalStair2: THREE.Mesh;
    Portal: THREE.Mesh;
  };
  materials: {};
};

const Scene = ({ enabled }: { enabled: boolean }) => {
  const godray = useRef<SpotLight>(null!);

  const { nodes, materials } = useGLTF("/assets/portal.glb") as GLTFResult;
  const portalRef = useRef<Mesh>(null!);
  const light1 = useRef<SpotLight>(null!);
  const light2 = useRef<SpotLight>(null!);
  const textRef = useRef();

  // useHelper(light2, SpotLightHelper, "rgba(0,0,0,0)");

  let mesh = new Mesh(
    new CylinderGeometry(0.1, 0.2, 0.1, 20),
    new MeshBasicMaterial({
      color: "#aaf",
      transparent: true,
      opacity: 1,
    }),
  );
  mesh.rotation.x = Math.PI / 2;
  mesh.position.set(4, 4.75, 0);
  mesh.scale.set(1.5, 1, 1);

  let portalLightTarget = new Mesh(
    new CylinderGeometry(0, 0, 0, 0),
    new MeshBasicMaterial({}),
  );
  portalLightTarget.position.set(4, 10, 0);

  // useFrame(() => {
  //   if (new Date() % 120 === 0) {
  //     setPortalActive(true);
  //   } else if (new Date() % 120 === 60) {
  //     setPortalActive(false);
  //   }
  // });

  return (
    <group position={[3, 1, 0]}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={1}>
        <Portal castShadow receiveShadow />
        <Sparkles
          position={[4, 4, 0.5]}
          count={50}
          scale={10}
          color={"#aaf"}
          size={6}
          speed={0.2}
          noise={0.1}
        />
        <group visible={enabled}>
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
          <mesh
            geometry={nodes.Portal.geometry}
            material={nodes.Portal.material}
            position={[3.948, 4.317, -0.109]}
            scale={[1.182, 1, 1]}
            ref={portalRef}
          />
          <spotLight
            color={"#aaf"}
            position={[4, 1, 0.1]}
            target={portalLightTarget}
            ref={light1}
            angle={Math.PI / 2}
            power={100}
            distance={10}
            decay={1}
          />
          <primitive object={mesh} />
        </group>
        {/* Light */}
        <spotLight
          color={"#aaf"}
          intensity={0.5}
          angle={Math.PI / 2}
          position={[-15, 15, -10]}
        />
        <spotLight
          color={"#aaf"}
          intensity={0.75}
          angle={Math.PI / 4}
          position={[25, -2, 20]}
        />
      </Float>
      <ambientLight color={"#70f"} intensity={0.2} />
      <PerspectiveCamera makeDefault position={[25, 20, 35]} zoom={0.75} />
      <OrbitControls
        target={[4, 4, 0]}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
      <EffectComposer stencilBuffer>
        <DepthOfField focusDistance={0.015} focalLength={0.15} bokehScale={2} />
        <BrightnessContrast brightness={0.0} contrast={0.035} />
        <>
          {enabled && (
            <GodRays
              sun={mesh}
              // blendFunction={BlendFunction.Screen}
              samples={20}
              density={0.97}
              decay={0.97}
              weight={0.4}
              exposure={0.1}
              clampMax={1}
              // width={Resizer.AUTO_SIZE}
              // height={Resizer.AUTO_SIZE}
              kernelSize={KernelSize.SMALL}
              blur={true}
            />
          )}
        </>
        <>
          {enabled && (
            <SelectiveBloom
              lights={[light1]} // ⚠️ REQUIRED! all relevant lights
              selection={[portalRef]} // selection of objects that will have bloom effect
              selectionLayer={10} // selection layer
              intensity={2.0} // The bloom intensity.
              // width={Resizer.AUTO_SIZE} // render width
              // height={Resizer.AUTO_SIZE} // render height
              kernelSize={KernelSize.LARGE} // blur kernel size
              luminanceThreshold={0.01} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.0125} // smoothness of the luminance threshold. Range is [0, 1]
            />
          )}
        </>
      </EffectComposer>
    </group>
  );
};

const SceneWrapper = ({ enabled }: { enabled: boolean }) => {
  return (
    <Canvas shadows>
      <Suspense fallback={"Loading..."}>
        <Scene enabled={enabled} />
      </Suspense>
    </Canvas>
  );
};

export { SceneWrapper };
