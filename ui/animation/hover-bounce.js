"use client";

import { motion } from "motion/react";

export default function HoverBounce({ children }) {
    return (
        <motion.div
            whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
        >
            {children}
        </motion.div>
    );
}
