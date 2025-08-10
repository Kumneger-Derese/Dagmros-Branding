const GoldText = ({children, className}) => {
    return (
        <p className={`font-semibold text-sm  mb-2 text-slate-900 p-0.5 w-fit rounded-md ${className}`}>
            {children}
        </p>
    );
};

export default GoldText;
