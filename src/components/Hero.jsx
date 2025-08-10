import {HiArrowRight} from "react-icons/hi2";
import GoldText from "./GoldText.jsx";
import HeroStatus from "./HeroStatus.jsx";
import HeroImage from '../assets/Images/HeroImage.png'

const Hero = () => {
    return (
        <div className={'mb-32 flex flex-col  lg:flex-row pt-16 gap-y-24'}>
            {/*Left section*/}
            <section className={'flex-1/2 flex flex-col gap-y-2 mx-0 md:mx-16 lg:mx-0'}>
                <GoldText className={'bg-amber-500 shadow-lg px-2 shadow-amber-500'}>Branding Done Right</GoldText>
                <h1 className={'text-5xl font-bold font-primary mb-2'}>Shaping The Future of <br className={'hidden lg:block'}/>
                    Your Brand.
                </h1>

                <p className={'font-secondary text-lg mb-3'}>
                    We help you stand out in the ever-evolving digital landscape by crafting
                    strategies that drive measurable results. Let's turn your goals into achievement.
                </p>

                <button
                    className={'rounded-full w-fit mb-8 hover:translate-x-2 transition duration-300 hover:bg-blue-600 hover:text-white  bg-black text-white dark:bg-white/90 dark:text-black font-semibold px-4 py-1.5 flex items-center gap-x-1.5'}>
                    <span>Talk to Us</span> <HiArrowRight strokeWidth={1.5} className={'inline-block'}/>
                </button>

                <HeroStatus/>
            </section>

            {/*right section */}
            <section className={'flex-1/2 flex items-center justify-center relative'}>
                <img src={HeroImage} alt="hero" className={'size-full md:size-3/5 lg:size-full mx-auto object-contain z-20'}/>

                <div
                    className={'bg-linear-150 from-sky-500/60 to-indigo-700/60 -z-10 blur-3xl size-64 absolute'}/>
            </section>
        </div>
    );
};

export default Hero;
