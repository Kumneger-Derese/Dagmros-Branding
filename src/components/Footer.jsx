import {SiFacebook, SiLinkedin, SiTiktok} from "react-icons/si";
import {FaInstagram, FaInstagramSquare} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {footerData} from "../constant/footer.js";

const Footer = () => {
    return (
        <div className={'flex flex-col gap-y-12 justify-between  p-8 items-center sm:flex-row bg-black text-white'}>
            <div className={'flex flex-col flex-1 items-center  sm:items-start'}>
                <h1 className={'font-bold font-primary text-3xl mb-2'}>Dagmaros</h1>

                <div className={'flex flex-col items-center sm:items-start mb-3'}>
                    <h1 className={'font-bold mb-2'}>Stay connected</h1>
                    <div className={'flex items-center flex-wrap gap-4'}>
                        <SiFacebook className={'size-6 md:size-3 lg:size-8'}/>
                        <FaXTwitter className={'size-6 md:size-3 lg:size-8'}/>
                        <FaInstagramSquare className={'size-8 md:size-3 lg:size-8'}/>
                        <SiLinkedin className={'size-6 md:size-3 lg:size-8'}/>
                        <SiTiktok className={'size-6 md:size-3 lg:size-8'}/>
                    </div>
                </div>
            </div>

            <section
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-12 lg:gap-x-24 gap-y-12 place-content-baseline '}>
                {
                    footerData.map((item) => (
                        <div key={item.id} className={'flex flex-col w-full'}>
                            <h1 className={'font-bold mb-4 text-2xl text-slate-400'}>{item.title}</h1>

                            <ul className={'flex flex-col gap-y-4'}>
                                {
                                    item.links.map((link, index) => (
                                        <li key={index} className={''}>{link}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default Footer;
