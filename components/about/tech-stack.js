"use client";

import classes from "./tech-stach.module.scss";

import Image from "next/image";

import { motion } from "motion/react";

import apigatewayIcon from "@/public/icons/api-gateway.svg";
import apiIcon from "@/public/icons/api.svg";
import awsIcon from "@/public/icons/aws.svg";
import cicdIcon from "@/public/icons/ci-cd.svg";
import cssIcon from "@/public/icons/css.svg";
import databaseIcon from "@/public/icons/database.svg";
import figmaIcon from "@/public/icons/figma.svg";
import gitIcon from "@/public/icons/git.svg";
import graphqlIcon from "@/public/icons/graphql.svg";
import htmlIcon from "@/public/icons/html.svg";
import jsIcon from "@/public/icons/js.svg";
import linuxIcon from "@/public/icons/linux.svg";
import mongodbIcon from "@/public/icons/mongodb.svg";
import nextIcon from "@/public/icons/next.svg";
import nodeIcon from "@/public/icons/nodejs.svg";
import reactrouterIcon from "@/public/icons/react-router.svg";
import reactIcon from "@/public/icons/react.svg";
import reduxIcon from "@/public/icons/redux.svg";
import tailwindIcon from "@/public/icons/tailwind.svg";
import vercelIcon from "@/public/icons/vercel.svg";
import viteIcon from "@/public/icons/vite.svg";
import vscodeIcon from "@/public/icons/vscode.svg";

const icons = [
    { src: apigatewayIcon, alt: "API Gateway" },
    { src: apiIcon, alt: " Rest Api" },
    { src: awsIcon, alt: "AWS" },
    { src: cicdIcon, alt: "CI/CD" },
    { src: cssIcon, alt: "CSS" },
    { src: databaseIcon, alt: "Database" },
    { src: figmaIcon, alt: "Figma" },
    { src: gitIcon, alt: "Git" },
    { src: graphqlIcon, alt: "GraphQl" },
    { src: htmlIcon, alt: "HTML" },
    { src: jsIcon, alt: "JS" },
    { src: linuxIcon, alt: "Linux" },
    { src: mongodbIcon, alt: "MongoDB" },
    { src: nextIcon, alt: "NextJs" },
    { src: nodeIcon, alt: "NodeJs" },
    { src: reactrouterIcon, alt: "React Router" },
    { src: reactIcon, alt: "ReactJs" },
    { src: reduxIcon, alt: "Redux" },
    { src: tailwindIcon, alt: "Tailwind" },
    { src: vercelIcon, alt: "Vercel" },
    { src: viteIcon, alt: "Vite" },
    { src: vscodeIcon, alt: "Vs Code" },
];

const TechStack = () => {
    return (
        <div className={classes.marqueeWrapper}>
            <motion.div
                className={classes.marqueeContent}
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 40,
                    ease: "linear",
                }}
            >
                {[...icons, ...icons].map((icon, index) => (
                    <motion.div
                        className={classes.iconContainer}
                        key={index}
                        whileHover={{ y: -6, scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                        }}
                    >
                        <Image
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            width={60}
                            height={60}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStack;
