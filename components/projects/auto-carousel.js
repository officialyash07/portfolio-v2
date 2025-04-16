"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import classes from "./auto-carousel.module.scss";

const AutoCarousel = ({ images }) => {
    const [index, setIndex] = useState(0);
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const isResetting = useRef(false);
    const [containerWidth, setContainerWidth] = useState(0);

    const extendedImages = [...images, images[0]];

    // ✅ Observe width of carousel
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.contentRect) {
                    const width = entry.contentRect.width;
                    setContainerWidth(width);
                    x.set(-index * width); // snap to correct position
                }
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [index, x]);

    // ✅ Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isResetting.current) {
                setIndex((prev) => prev + 1);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // ✅ Animate slide or reset when hitting fake slide
    useEffect(() => {
        if (containerWidth === 0) return;

        const targetX = -index * containerWidth;

        animationRef.current = animate(x, targetX, {
            duration: 0.5,
            ease: "easeInOut",
        });

        // If we're on the fake slide, reset
        if (index === images.length) {
            isResetting.current = true;
            setTimeout(() => {
                x.set(0);
                setIndex(0);
                isResetting.current = false;
            }, 510);
        }

        return () => animationRef.current?.stop();
    }, [index, containerWidth, x, images.length]);

    return (
        <div className={classes.carouselWrapper} ref={containerRef}>
            <motion.div className={classes.carouselTrack} style={{ x }}>
                {extendedImages.map((img, i) => (
                    <div className={classes.slide} key={i}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={classes.image}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AutoCarousel;
