import './cierre.css'
import React from "react";
import { motion, Variants } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const imageVariants = {
    hidden: {
        y: 100, // Start position (move images down)
        opacity: 1, // Initially hidden
    },
    visible: {
        y: 0, // Final position (move images to their original position)
        opacity: 1, // Make them visible
        transition: {
            duration: 2, // Animation duration
            type: "spring",
        },
    },
};

const imageVariants_2 = {
    hidden: {
        y: 100, // Start position (move images down)
        opacity: 1, // Initially hidden
    },
    visible: {
        y: 0, // Final position (move images to their original position)
        opacity: 1, // Make them visible
        transition: {
            duration: 2.2, // Animation duration
            type: "spring",
        },
    },
};

const imageVariants_3 = {
    hidden: {
        y: 100, // Start position (move images down)
        opacity: 1, // Initially hidden
    },
    visible: {
        y: 0, // Final position (move images to their original position)
        opacity: 1, // Make them visible
        transition: {
            duration: 2.4, // Animation duration
            type: "spring",
        },
    },
};

const imageVariants_4 = {
    hidden: {
        y: 100, // Start position (move images down)
        opacity: 1, // Initially hidden
    },
    visible: {
        y: 0, // Final position (move images to their original position)
        opacity: 1, // Make them visible
        transition: {
            duration: 2.6, // Animation duration
            type: "spring",
        },
    },
};

const textVariants = {
    hidden: {
        x: -100, // Start position (move text from left)
        opacity: 0, // Initially hidden
    },
    visible: {
        x: 0, // Final position (move text to its original position)
        opacity: 1, // Make it visible
        transition: {
            duration: 2.5, // Animation duration
            ease: 'easeOut', // Use easeOut for a smooth animation
        },
    },
};


function Cierre() {
    const [ref, inView] = useInView({
        // Trigger animation only once when the element comes into view
    });

    return (
        <div className="cierreComponent" ref={ref}>

            <motion.div
                className="cierre-title"
              /*   initial={inView ? 'hidden' : 'hidden'} // Change to 'hidden' to start hidden
                animate={inView ? 'visible' : 'hidden'} // Change to 'hidden' to start hidden
                variants={textVariants}
                transition={{ delay: 1 }} */
            >
                Vamos por más derechos
            </motion.div>
            <motion.div className="cierre-caption"
               /*  initial={inView ? 'hidden' : 'hidden'} // Change to 'hidden' to start hidden
                animate={inView ? 'visible' : 'hidden'} // Change to 'hidden' to start hidden
                variants={textVariants} */
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </motion.div>

            <div className="cierre-imagen-component">
                <motion.div className="cierre-imagen-1" initial={inView ? "visible" : "hidden"} animate={inView ? "visible" : "hidden"} variants={imageVariants}>
                    <img src="./casita.png" alt="casita" />
                </motion.div>
                <motion.div className="cierre-imagen-2" initial={inView ? "visible" : "hidden"} animate={inView ? "visible" : "hidden"} variants={imageVariants_2}>
                    <img src="./casita.png" alt="casita" />
                </motion.div>
                <motion.div className="cierre-imagen-3" initial={inView ? "visible" : "hidden"} animate={inView ? "visible" : "hidden"} variants={imageVariants_3}>
                    <img src="./casita.png" alt="casita" />
                </motion.div>
                <motion.div className="cierre-imagen-4" initial={inView ? "visible" : "hidden"} animate={inView ? "visible" : "hidden"} variants={imageVariants_4}>
                    <img src="./casita.png" alt="casita" />
                </motion.div>
            </div>
        </div>
    );
}

export default Cierre;