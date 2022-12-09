import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './app.scss';

// motion variant
import { cardVariant, imgTitleVar, imgMainVar } from './Variants';

// import the assets we will be using
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'

const img = [img1, img2, img3, img4, img5, img6, img7, img8]
const movieTitles = [
    'The Batman (2022)', 'Avatar: The Way of Water (2022)', 'Glass Onion: A Knives Out Mystery (2022)',
    'Killers of the Flower Moon (2023)', 'Spider-Man: Across the Spider-Verse (2023)', 'Elvis (2022)',
    'Babylon (I) (2022)', 'Sherlock Holmes 3'
]
const movieGenre = ['action', 'comedy', 'comedy', 'action', 'comedy', 'action', 'action', 'comedy']

type singleImgType = {key:number, img:string, title:string, genre:string}
const imgObj: singleImgType[] = []
// const imgObj: Record<string, {img:string}> = {}

img.forEach((ech, index) => {
    imgObj.push({key:gsap.utils.random(0, 100), img:ech, title:movieTitles[index], 'genre':movieGenre[index]})
})
img.forEach((ech, index) => {
    imgObj.push({key:gsap.utils.random(0, 100), img:ech, title:movieTitles[index], 'genre':movieGenre[index]})
})


type imgProps = {
    obj: singleImgType,
    index: number
}
const ImgComp = ({obj, index}: imgProps) => {
    return (
        <motion.div className="ImgBoth" key={`${obj.key}-${obj.title}`} variants={cardVariant} initial="initial" animate="animate" custom={index}>
            <motion.div className='ImgCvr' >
                <motion.img src={obj.img} alt="" variants={imgMainVar} />
            </motion.div>
            <motion.div className="ImgTitle" variants={imgTitleVar}>{obj.title}</motion.div>
        </motion.div>
    )
}

const App = () => {

    return (
        <div className="AppMain">
            <div className="topBar">
                <div className="topLogo">STANLEY TO!</div>
                <div className="topBtn"><button>Latest movies</button></div>
            </div>
            <div className="filterCvr">
                <div className=""><button>All movies</button></div>
                <div className=""><button>Comedy</button></div>
                <div className=""><button>Action</button></div>
            </div>
            <div className="moviesCvr">
                {imgObj.map((ech, index) => {
                    return <ImgComp key={index} obj={ech} index={index} />
                })}
            </div>
        </div>
    )
}
export default App;