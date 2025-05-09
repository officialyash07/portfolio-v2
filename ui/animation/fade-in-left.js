"use client";
import { motion } from "motion/react";

export default function FadeInLeft({ children, delay = 0 }) {
    const variants = {
        hidden: { x: -80, opacity: 0, filter: "blur(6px)" },
        visible: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { delay, duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
