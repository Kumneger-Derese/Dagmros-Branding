import {blogsData} from "../constant/blogs.js";
import GoldText from "./GoldText.jsx";
import {HiArrowRight} from "react-icons/hi2";

const Blogs = () => {
    return (
        <div className={'mb-32 flex flex-col items-center justify-center  sm:mx-4 lg:mx-16'}>
            <GoldText className={'bg-amber-500 shadow-lg shadow-amber-500  px-2'}>Read</GoldText>
            <h1 className={'text-4xl font-bold font-primary mb-24 text-center'}>Our Blog Posts</h1>

            <div className={'flex flex-col gap-y-12'}>
                {
                    blogsData.map((blog) => (
                            <div key={blog.id} className={'flex flex-col sm:flex-row gap-4'}>
                                <div
                                    className={`flex justify-center items-center rounded-2xl h-72 flex-1/2 ${blog.id === 2 && 'order-2'}`}>
                                    <img src={blog.image} alt={blog.title}
                                         className={`size-full  object-cover rounded-2xl ${blog.id === 2 && 'hidden sm:block'}`}/>
                                </div>

                                <div className={`fle flex-col gap-y-3  items-start flex-1/2 ${blog.id === 2 && 'order-1'} overflow-hidden`}>
                                    <h1 className={'font-medium text-2xl font-primary'}>{blog.title}</h1>
                                    <p className={'p-2 text-slate-500 sm:line-clamp-4 lg:line-clamp-none'}>{blog.content}</p>

                                    <div className={'h-16 bg-white dark:bg-slate-950 blur-xl -mt-12  w-full'}/>

                                    <button
                                        className={'rounded-full w-fit mt-6 border-2 dark:text-slate-300 text-slate-700 dark:border-gray-200 hover:translate-x-2 transition duration-300 font-semibold px-4 py-1.5 flex items-center gap-x-1.5'}>
                                        <span>Read More</span> <HiArrowRight strokeWidth={1.5} className={'inline-block'}/>
                                    </button>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Blogs;