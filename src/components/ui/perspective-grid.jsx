import React from "react";
import { cn } from "../../lib/utils.js";

export function PerspectiveGrid({
    className,
    showOverlay = true,
    fadeRadius = 80,
}) {
    return (
        <div
            className={cn(
                "relative w-full h-full overflow-hidden bg-[#0d1b2e]",
                "[--fade-stop:#0d1b2e]",
                className
            )}
            style={{
                perspective: "2000px",
            }}
        >
            {/* Single div with CSS background-image grid — replaces 1600 DOM nodes */}
            <div
                className="absolute w-[80rem] aspect-square origin-center"
                style={{
                    left: "50%",
                    top: "50%",
                    transform:
                        "translate(-50%, -50%) rotateX(30deg) rotateY(-5deg) rotateZ(20deg) scale(2)",
                    backgroundImage:
                        "linear-gradient(to right, rgba(30,52,87,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,52,87,0.8) 1px, transparent 1px)",
                    backgroundSize: "2.5% 2.5%",
                }}
            />

            {/* Radial Gradient Mask (Overlay) */}
            {showOverlay && (
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(circle, transparent 25%, var(--fade-stop) ${fadeRadius}%)`,
                    }}
                />
            )}
        </div>
    );
}

export default PerspectiveGrid;
