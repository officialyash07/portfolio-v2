"use client";
import React, { memo } from "react";

export const AuroraText = memo(
    ({
        children,
        className = "",
        colors = ["#0d483c", "#47ebbc", "#3f95f8", "#38bdf8"],
        speed = 2,
    }) => {
        const gradientStyle = {
            backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
                colors[0]
            })`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animationDuration: `${10 / speed}s`,
        };

        return (
            <span className={`relative inline-block ${className}`}>
                <span className="sr-only">{children}</span>
                <span
                    className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
                    style={gradientStyle}
                    aria-hidden="true"
                >
                    {children}
                </span>
            </span>
        );
    }
);

AuroraText.displayName = "AuroraText";
