"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import classes from "./custom-cursor.module.scss";

const CustomCursor = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 90, stiffness: 300 };
    const smoothX = useSpring(x, springConfig);
    const smoothY = useSpring(y, springConfig);

    const offsetX = useTransform(smoothX, (val) => val - 450);
    const offsetY = useTransform(smoothY, (val) => val - 450);

    useEffect(() => {
        const handleMouseMove = (event) => {
            x.set(event.clientX);
            y.set(event.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <div className={classes.background}>
            <motion.div
                className={classes.circle}
                style={{ x: offsetX, y: offsetY }}
            ></motion.div>
        </div>
    );
};

export default CustomCursor;
