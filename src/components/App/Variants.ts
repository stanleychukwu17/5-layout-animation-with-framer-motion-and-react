import { Variant } from "framer-motion";

export const cardVariant: {initial?: Variant, animate?: Variant} = {
    initial: (custom) => ({
        y: -60, opacity:0,
    }),
    animate: (custom) => ({
        y:0, opacity:1,
        transition: {
            duration: 1,
            delay: custom * 0.2,
            ease: "easeOut"
        }
    })
};