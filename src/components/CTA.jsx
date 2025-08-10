import React from 'react';

const CTA = () => {
    return (
        <div id={'contact'} className={'flex flex-col items-center justify-center gap-y-8 py-12 rounded-xl ' +
            'text-white mb-32 bg-linear-150 from-sky-500 to-purple-700 px-4'}>
            <h1 className={'font-bold font-primary mb-8  text-4xl sm:text-5xl text-center'}>Let's Get Started</h1>
            <div className={'sm:w-3/6 mx-auto flex flex-col sm:flex-row items-center justify-center w-full px-4 sm:px-0 gap-y-4'}>
                <input type={'email'} className={'py-3 px-2 rounded-md border-2 sm:rounded-r-none sm:border-r-0  w-full outline-none focus:outline-none focus:border-black'}
                placeholder={'kumnegerderese@example.com'}
                />
                <button onClick={() => alert('Thanks for subscribing.')} className={'py-3 px-6 w-full sm:w-fit rounded-md sm:rounded-l-none border-2 sm:border-l-0 border-black 0 bg-black hover:bg-black/70 font-bold'}>Subscribe</button>
            </div>
        </div>
    );
};

export default CTA;