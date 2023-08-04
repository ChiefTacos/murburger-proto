import {
  Float,
  MeshDistortMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import * as THREE from "three"; 
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  // const responsiveratio = viewport.width / 12;
  
  const [section, setSection] = useState(0);
  
  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);
  const sectionAnimations = {
    0: "Hip Hop Dancing",
    1: "Sitting",
    2: "Hip Hop Dancing",
    3:"Hip Hop Dancing",
    default: "Falling",

  };
  
  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  useFrame((state) => {

    let curSection = Math.floor(data.scroll.current * data.pages);
if (curSection > 3) {
  curSection = 3;
}
    if (curSection !== section) {
      setSection(curSection);
    }
    state.camera.position.x = cameraPositionX.get();
    if (typeof cameraLookAtX.get() === "number") {
      state.camera.lookAt(new THREE.Vector3(cameraLookAtX.get(), 0, 0));
    }

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z,]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z])
  })

  return (
    
    <>
        

    {/* AVATAR */}
      <motion.group 
      position={[0.34, 0.39, 4.32]} 
      rotation={[-3.141592653589793, 3.42, -3.141592653589793]} 
      animate={"" + section}
      scale={[0.8, 0.8, 0.8]}
      transition={{
        duration: 0.6,
      }}
      style={{ opacity: section === 0 || section === 2 ? 0 : 1 }}

      variants={{
        0: {
          scaleX: 0.01,
          scaleY: 0.01,
          scaleZ: 0.01,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },
        1: {
          y: -viewport.height - 0.55,
          x: 1.1,
          z: 1.4,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },
        2: {
          
          scaleX: 0.01,
          scaleY: 0.01,
          scaleZ: 0.01,
          x: 2,
          y: -viewport.height - 10.5,
          z: 3,
          rotateX: 0,
          rotateY: Math.PI / 7,
          rotateZ: 0,
        },
        3: {
          x: isMobile? 0 : -0.4,
          y: -viewport.height * 3 + 1,
          z: 8.5,
          rotateX: -0.2,
          rotateY: Math.PI / 8,
          rotateZ: 0,
        },
      }}
      >
      <Avatar animation={sectionAnimations[section]  || sectionAnimations.default} wireframe={section === 3}    />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[isMobile ? 0 : 1.5, isMobile ? -viewport.height / 6: 0, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={0}
        animate={{
          // y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
      </motion.group>
      
      {/* SKILLS */}
     
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        {/* Background Blobs */}
        
        <Float>
          <mesh scale={[5, 4, 3]} position={[-8.5, -2.7, -7]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={3}
              color="red"
            />
          </mesh>
        </Float>
       




        {/* secondhouse */}
        <motion.group
        position={[-5, -16, 0]}
        scale={[0]}
        rotation-y={-Math.PI / 4}
        animate={"" + section}
      transition={{
        duration: 0.6,
        
      }}
      variants={{
        0: {
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },
        1: {
          y: -1,
          x: 2,
          z: 0,
          scaleY: 1,
          scaleZ: 1,
          scaleX: 1,
          rotateX: 0,
          rotateY: -Math.PI / 4,
          rotateZ: 0,
        },
        2: {
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },
        // 3: {
        //   rotateX: 0,
        //   rotateY: 0,
        //   rotateZ: 0,
        // },
      }}
      >
        <Office section={section} />
      </motion.group>
      </motion.group>
      <Projects />
      

    </>
  );
};
