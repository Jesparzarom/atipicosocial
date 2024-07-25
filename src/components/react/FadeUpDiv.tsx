import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";



interface FadeUpDivProps {
    children: string;
    className?: string;
    duration?: number | string;
}
function FadeUpDiv(props: FadeUpDivProps) {
    const FadeUpVariants: Variants = {
        hide: {
            opacity: 0,
            y: 50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: props.duration || 1,
                delay: 0,
                ease: "easeInOut"
            },
        },
    };
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={FadeUpVariants}
            >
                {props.children}
            </motion.div>
        </AnimatePresence>
    );
}

export { FadeUpDiv }
