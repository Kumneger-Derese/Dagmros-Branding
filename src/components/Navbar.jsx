import {navLinks} from "../constant/navLinks.js";
import {HiArrowRight, HiMoon, HiSun, HiXMark} from "react-icons/hi2";
import {HiMenuAlt3,} from "react-icons/hi";
import {useState} from "react";
import {useTheme} from "../context/ThemeContext.jsx";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {toggleTheme, isDark} = useTheme()

    return (
        <div className={'flex flex-row justify-between items-center pt-4'}>
            {/*Logo*/}
            <h1 className={'sm:text-3xl text-2xl font-semibold font-primary'}>Dagmaros</h1>

            {/*Desktop nav*/}
            <ul className={'hidden lg:flex space-x-6 items-center '}>
                {
                    navLinks.map((link,) => (
                        <li key={link.id}>
                            <a className={'dark:hover:text-gray-500 hover:font-semibold hover:underline hover:decoration-wavy hover:underline-offset-2 transition-all duration-75'} href={link.href}>{link.title}</a>
                        </li>
                    ))
                }

            </ul>

            {/*Desktop Action Button*/}
            <div className={'hidden  lg:flex gap-x-3 items-center'}>
                <button
                    className={'rounded-full transition duration-300 hover:text-white hover:bg-blue-600 bg-black w-fit text-white dark:bg-white/90 dark:text-black font-semibold px-4 py-1.5 lg:flex items-center gap-x-1.5'}>
                    <span>Talk to Us</span> <HiArrowRight strokeWidth={1.5} className={'inline-block'}/>
                </button>

                <button className={`p-1.5 rounded-full flex items-center justify-center transition-colors duration-500 ${isDark ? 'bg-white text-black' : 'bg-black text-white ' }`} onClick={toggleTheme}>
                    {
                        isDark ? <HiSun size={28}/> : <HiMoon size={28}/>
                    }
                </button>
            </div>


            {/*Mobile Tigger*/}
            <button className={'lg:hidden'} onClick={() => setIsOpen(true)}>
                <HiMenuAlt3 size={28} strokeWidth={0.1}/>
            </button>

            {/*Mobile Menu*/}
            <div
                className={`lg:hidden z-50 flex flex-col bg-slate-900 text-white dark:bg-slate-700 fixed top-0 right-0 h-full w-60 sm:w-1/2 px-4 sm:p-8 font-semibold transform transition duration-300 items-center             
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                <button className={'text-right self-end py-8 hover:text-red-500'} onClick={() => setIsOpen(false)}>
                    <HiXMark size={28} strokeWidth={1}/>
                </button>

                <ul className={`flex flex-col space-y-4 w-full`}>
                    {
                        navLinks.map((link,) => (
                            <li key={link.id} className={'hover:bg-slate-600 w-full p-2 rounded-md'}
                                onClick={() => setIsOpen(false)}>
                                <a className={'px-2'} href={link.href}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>

                {/*Mobile Theme Toggle*/}
                <button className={`p-2 mt-8 w-full rounded-md flex items-center justify-center transition-colors duration-500 dark:bg-white dark:text-black bg-black text-white`} onClick={toggleTheme}>
                    {
                        isDark ? <HiSun size={28}/> : <HiMoon size={28}/>
                    }
                </button>
            </div>
        </div>
    );
};

export default Navbar;
