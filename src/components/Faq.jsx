import { useState } from 'react'
import { faqData } from '../constant/faq'
import GoldText from './GoldText'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = id => {
    if (openIndex === id) {
      setOpenIndex(null)
    } else {
      setOpenIndex(id)
    }
  }

  return (
    <div className='flex flex-col mb-32  items-center'>
      <GoldText className={'bg-amber-500 px-2 shadow-lg shadow-amber-500'}>
        Faq
      </GoldText>
      <h1 className={'font-bold font-primary text-4xl text-center mb-16'}>
        Frequently Asked Questions
      </h1>

      <div className='flex flex-col mx-auto gap-y-2 w-full sm:w-5/6 lg:w-4/6 '>
        {faqData.map(faq => (
          <div key={faq.id} className='rounded-md w-full '>
            <h1
              className='border-b border-b-slate-300 dark:border-b-slate-800 dark:text-gray-300 rounded-md rounded-b-none  font-bold bg-black/10 dark:bg-slate-950 p-3 cursor-pointer'
              onClick={() => toggleAccordion(faq.id)}
            >
              {faq.title}
            </h1>

            {openIndex === faq.id && <p className='px-4 bg-black/5 dark:bg-slate-950/60 py-8'>{faq.content}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
