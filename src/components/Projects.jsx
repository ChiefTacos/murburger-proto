import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import {motion} from "framer-motion-3d";
import { useAtom, atom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
    {
        title: "Chicken Tenders",
        url: "https://sirmur.com",
        image: "projects/buttermilk-chicken-tenders.webp",
        description: "4 Pieces of juicy white meat chicken tenderloins, hand-breaded and deep fried to perfection",
    },
    {
        title: "Cheeseburger",
        url: "https://sirmur.com",
        image: "projects/doubleCheeseburger.jpg",
        description: "Rendering two big all beef patties, topped with anything you like",
    },
    {
        title: "Chicken Tenders",
        url: "https://sirmur.com",
        image: "projects/buttermilk-chicken-tenders.webp",
        description: "4 Pieces of juicy white meat chicken tenderloins, hand-breaded and deep fried to perfection",
    },
    {
        title: "Cheeseburger",
        url: "https://sirmur.com",
        image: "projects/doubleCheeseburger.jpg",
        description: "Rendering two big all beef patties, topped with anything you like",
    },
    {
        title: "Chicken Tenders",
        url: "https://sirmur.com",
        image: "projects/buttermilk-chicken-tenders.webp",
        description: "4 Pieces of juicy white meat chicken tenderloins, hand-breaded and deep fried to perfection",
    },
    {
        title: "Cheeseburger",
        url: "https://sirmur.com",
        image: "projects/doubleCheeseburger.jpg",
        description: "Rendering two big all beef patties, topped with anything you like",
    },
 
]

const Project = (props) => {
    const { project, highlighted } = props;
    
    const background = useRef();
    const bgOpacity = useMotionValue(0.4);

    useEffect(() => {
        animate(bgOpacity, highlighted ? 0.7 : 0.4)
    }, [highlighted]);

    useFrame(() => {
        background.current.material.opacity = bgOpacity.get();
    })
    return (
        <group  position-y={-1.8} {...props}>
            <mesh position-z={-0.001} onClick={() => window.open(project.url, "_blank")} ref={background}>
            {/* <mesh position-z={-0.001} ref={background}> */}

                <planeGeometry args={[2.4, 2.2]} />
                <meshBasicMaterial color="black" transparent opacity={0.4} />
            </mesh>
            <Image scale={[2.4, 1.7, 1.5]} url={project.image} toneMapped={false} position-y={0.6} />
            <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.2} position={[-1, -0.4, 0]}>
            {project.title.toUpperCase()}
            </Text>
            <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.12} position={[-1, -0.6, 0]}>
            {project.description}
            </Text>
        </group>
    )
}
export const currentProjectAtom = atom(Math.floor(projects.length / 2));


export const Projects = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);

    return <group position-y={-viewport.height * 2 + 1}>
    {
        projects.map((project, index) => (
            <motion.group key={"project_" + index} position={[index * 3.3, 0, -3]}
            animate={{
                x: 0 + (index - currentProject) * 2.9,
                y: currentProject === index ? 0 : -0.1,
                z: currentProject === index ? -2 : -2.5,
                rotateX: currentProject === index ? 0 : -Math.PI / 3.4,
                rotateZ: currentProject === index ? 0 : -0.1 * Math.PI/2.4,
            }}
            >
                <Project project={project} highlighted={index===currentProject} />
            </motion.group>
        ))
    }

</group>;
    
};