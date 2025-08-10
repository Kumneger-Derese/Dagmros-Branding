import GoldText from "./GoldText.jsx";
import {features} from "../constant/features.js";

const Features = () => {
    return (
        <div className={'flex flex-col items-center justify-center mb-32 relative'}>
            <GoldText className={'bg-amber-500 shadow-lg shadow-amber-500 px-2'}>Deliver</GoldText>
            <h1 className={'text-4xl font-bold font-primary mb-12 text-center'}>What We Deliver</h1>

            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 '}>
                {
                    features.map((benefit) => (
                        <div key={benefit.id}
                             className={'flex flex-col gap-y-4 shadow-2xl p-3 w-full sm:w-72 pb-4 bg-white dark:bg-slate-950 dark:border-slate-700  dark:text-slate-50 justify-center rounded-2xl border border-slate-300'}>
                            <img src={benefit.image} alt={benefit.title}
                                 // style={{backgroundImage: benefit.id === 2 && ''}}/>/
                                 className={`w-full object-contain h-48 rounded-2xl bg-linear-150 from-amber-200 via-purple-300 to-sky-300
                                 ${benefit.id === 2 && 'from-sky-300 via-sky-200 to-purple-400'}
                                 `}/>

                            <div className="flex flex-col items-center gap-y-2.5 px-4">
                                <h1 className={'text-3xl font-bold font-primary'}>{benefit.title}</h1>
                                <p className={'text-center dark:text-gray-400'}>{benefit.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/*underlay*/}
            <div
                className="absolute bg-linear-150 from-blue-800/20 to-purple-900/20 size-full rounded-full blur-3xl -z-20"/>

        </div>
    );
};

export default Features;
