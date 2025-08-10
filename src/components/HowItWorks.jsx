import React from 'react'
import GoldText from './GoldText.jsx'
import StepsImage from '../assets/Images/Steps.png'
import { howItWorks } from '../constant/howItWorks.js'

const HowItWorks = () => {
  return (
    <div
      className={
        'flex flex-col justify-center items-center mb-32 bg-slate-950 text-slate-50 p-8 sm:p-12 rounded-md'
      }
    >
      <GoldText className={'bg-amber-500 px-2 shadow-lg shadow-amber-500'}>
        How It Works
      </GoldText>
      <h1 className={'font-bold font-primary text-4xl mb-12 text-white'}>
        Our Streamlined Branding Process
      </h1>

      <section className={'flex flex-col md:flex-row gap-y-16 gap-x-8 items-center '}>
        <div
          className={
            'flex flex-col gap-y-4 items-center flex-1/2 lg:mr-24 order-2 sm:order-none'
          }
        >
          {howItWorks.map(steps => (
            <div
              key={steps.id}
              className={
                'border border-slate-600 hover:border-indigo-400 rounded-md p-4'
              }
            >
              <h2 className={'font-medium font-primary text-xl mb-4'}>
                Step {steps.id}: {steps.title}
              </h2>
              <p className={'text-gray-400'}>{steps.content}</p>
            </div>
          ))}
        </div>

        <div
          className={
            'flex-1/2 flex items-center justify-center relative order-1 sm:order-none self-end'
          }
        >
          <img src={StepsImage} alt='StepsImage'  className={'object-cover rounded-3xl'}/>
          <div
            className={
              'bg-linear-150 from-sky-500/90 to-indigo-700/00 -z-10 blur-3xl size-72 absolute'
            }
          />
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
