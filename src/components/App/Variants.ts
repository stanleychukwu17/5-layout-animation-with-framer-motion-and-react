import { Variant } from "framer-motion";

export const cardVariant: {initial?: Variant, animate?: Variant, exit?: Variant} = {
    initial: (custom) => ({
        x: -60, opacity:0,
    }),
    animate: (custom) => ({
        x:0, opacity:1,
        transition: {
            duration: 1,
            delay: custom * 0.2,
            ease: "easeOut",
            when: "beforeChildren"
        }
    }),
    exit: {
        x: -60, opacity: 0,
        transition: {
            duration: .5
        }
    }
};


export const imgMainVar: {initial?: Variant, animate?: Variant} = {
    initial: (custom) => ({
        scale: 1.3
    }),
    animate: (custom) => ({
        scale: 1,
        transition: {
            duration: 2,
            ease: "circInOut",
        }
    })
};

export const imgTitleVar: {initial?: Variant, animate?: Variant} = {
    initial: (custom) => ({
        y: 60, opacity:0,
    }),
    animate: (custom) => ({
        y:0, opacity:1,
        transition: {
            opacity: {duration: 3, delay: custom * 0.2},
            duration: 2,
            delay: custom * 0.2,
        }
    })
};