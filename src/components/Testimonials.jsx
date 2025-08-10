import GoldText from "./GoldText.jsx";
import React from "react";
import {testimonials} from "../constant/testimonials.js";
import {HiStar} from "react-icons/hi2";

const Testimonials = () => {
    return (
        <div className={'mb-32 flex flex-col items-center'}>
            <GoldText className={'bg-amber-500 px-2 shadow-lg shadow-amber-500'}>
                What They Say
            </GoldText>
            <h1 className={'font-bold font-primary text-4xl mb-12 '}>
                Testimonials
            </h1>

            {/*Testimonial list*/}
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4'}>
                {
                    testimonials.map((testimonial) => (
                        <div
                            className={'flex flex-col border hover:border-indigo-600 transition-colors duration-500 border-slate-200 bg-linear-150 from-gray-50/60' +
                                ' to-gray-100 dark:from-slate-800/80 dark:to-slate-800 dark:border-slate-600 rounded-md p-4 w-full sm:w-80'}>
                            <div className={'flex items-start gap-x-4'}>
                                <img src={testimonial.avatar} alt="testimonialimg" className={'size-16 rounded-full'}/>

                                <div className={'flex flex-col'}>
                                    <h1 className={'text-lg font-medium font-primary'}>{testimonial.name}</h1>
                                    <h2 className={'text-gray-700 dark:text-gray-400 text-sm'}>{testimonial.position}</h2>
                                </div>
                            </div>

                            {/*Quote and star */}
                            <div className={'flex flex-col mt-4 px-2 gap-y-2 italic'}>
                                <p className={'text-sm'}>{testimonial.quote}</p>
                                <div className={'flex gap-x-1 items-center'}>
                                    {
                                        [...Array(testimonial.rating)].map((i, index) => (
                                            <div key={index}>
                                                <HiStar size={18} className={'text-amber-500'}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonials;
