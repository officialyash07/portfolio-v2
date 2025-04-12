"use client";

import classes from "./nav-link.module.scss";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "motion/react";

const NavLink = ({ href, children }) => {
    const currentPath = usePathname();

    return (
        <Link href={href} className={classes.link}>
            {children}
            {currentPath === href && (
                <motion.div
                    layoutId="linkIndicator"
                    className={classes.activeIndicator}
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 100,
                    }}
                ></motion.div>
            )}
        </Link>
    );
};

export default NavLink;
