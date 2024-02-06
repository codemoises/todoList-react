import { Flex, FlexProps} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const animationContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1.5,
            staggerChildren: 0.2
        }
    }
}

export const animationItem = {
    hidden: { y: -30, opacity: 0 },
    visible: {
        y: 1,
        opacity: 1,
    }
}

export const MotionFlex = motion<FlexProps>(Flex);