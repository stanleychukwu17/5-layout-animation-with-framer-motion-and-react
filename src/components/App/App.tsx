import './app.scss';
import { motion, Variant } from 'framer-motion';
// import { useRef } from 'react';

// import the assets we will be using
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
const images = {img1, img2, img3, img4, img5, img6, img7, img8}

// motion variant
const cardVariant: {initial?: Variant, animate?: Variant} = {
    initial: (custom) => ({
        y: -60, opacity:0,
    }),
    animate: (custom) => ({
        y:0, opacity:1,
        transition: {
            duration: .5,
            delay: custom * 0.2,
            ease: "easeOut"
        }
    })
};



const App = () => {

    return (
        <div className="AppMain">
            <div className="topBar">
                <div className="topLogo">STANLEY TO!</div>
                <div className="topBtn"><button>Latest movies</button></div>
            </div>
            <div className="">

            </div>
            <div className="moviesCvr">
                {Object.values(images).map((item, index) => {
                    return (
                        <motion.div className="ImgCvr" key={item} variants={cardVariant} initial="initial" animate="animate" custom={index}>
                            <img src={item} alt="" />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
export default App;