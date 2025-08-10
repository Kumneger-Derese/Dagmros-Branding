import GoldText from "./GoldText.jsx";

const HeroStatus = () => {
    return (
        <div
            className={'grid grid-cols-2 sm:grid-cols-3 justify-around gap-x-4 gap-y-8 sm:border border-gray-300 rounded-full p-4'}>
            <div className={'flex flex-col space-y-0.5'}>
                <GoldText className={'dark:text-gray-400'}>CLIENT RETENTION</GoldText>
                <h2 className={'font-bold font-primary text-4xl'}>15.2K</h2>
            </div>
            <div className={'flex flex-col space-y-0.5'}>
                <GoldText className={'dark:text-gray-400'}>EMAILS PER MONTH</GoldText>
                <h2 className={'font-bold font-primary text-4xl'}>+130K</h2>
            </div>
            <div className={'flex flex-col space-y-0.5'}>
                <GoldText className={'bg-amber-500 shadow-lg px-2 shadow-amber-500'}>CLIENT RETENTION</GoldText>
                <h2 className={'font-bold font-primary text-4xl'}>+147K</h2>
            </div>
        </div>
    );
};

export default HeroStatus;
