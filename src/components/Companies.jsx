import {
  SiZara,
  SiMeta,
  SiPuma,
  SiAdidas,
  SiBmw,
  SiAirbnb,
  SiAdobe,
  SiCocacola,
  SiNike,
  SiSpacex
} from 'react-icons/si'
import GoldText from './GoldText.jsx'
import Marquee from 'react-fast-marquee'

const Companies = () => {
  return (
    <div
      className={
        'overflow-hidden w-full relative mb-32 flex flex-col items-center justify-center '
      }
    >
      <GoldText className={'bg-amber-500 shadow-lg shadow-amber-500 px-2'}>
        Trusted
      </GoldText>
      <h1 className={'text-4xl font-bold font-primary mb-12 text-center'}>
        Companies That Trust Us
      </h1>

      <div className={'w-full py-12'}>
        <Marquee
          loop={0}
          pauseOnHover={true}
          direction={'right'}
          speed={20}
        >
          <SiMeta className='mx-8' size={60} />
          <SiZara className='mx-8' size={60} />
          <SiPuma className='mx-8' size={60} />
          <SiBmw className='mx-8' size={60} />
          <SiAirbnb className='mx-8' size={60} />
          <SiAdobe className='mx-8' size={60} />
          <SiAdidas className='mx-8' size={60} />
          <SiCocacola className='mx-8' size={60} />
          <SiNike className='mx-8' size={60} />
          <SiSpacex className='mx-8' size={60} />
          <SiMeta className='mx-8' size={60} />
          <SiZara className='mx-8' size={60} />
          <SiPuma className='mx-8' size={60} />
          <SiBmw className='mx-8' size={60} />
          <SiAirbnb className='mx-8' size={60} />
          <SiAdobe className='mx-8' size={60} />
          <SiAdidas className='mx-8' size={60} />
          <SiCocacola className='mx-8' size={60} />
          <SiNike className='mx-8' size={60} />
          <SiSpacex className='mx-8' size={60} />
        </Marquee>

        <Marquee
          loop={0}
          pauseOnHover={true}
          direction={'left'}
          className={'mt-8'}
          speed={20}
        >
          <SiMeta className='mx-8' size={60} />
          <SiZara className='mx-8' size={60} />
          <SiPuma className='mx-8' size={60} />
          <SiBmw className='mx-8' size={60} />
          <SiAirbnb className='mx-8' size={60} />
          <SiAdobe className='mx-8' size={60} />
          <SiAdidas className='mx-8' size={60} />
          <SiCocacola className='mx-8' size={60} />
          <SiNike className='mx-8' size={60} />
          <SiSpacex className='mx-8' size={60} />
          <SiMeta className='mx-8' size={60} />
          <SiZara className='mx-8' size={60} />
          <SiPuma className='mx-8' size={60} />
          <SiBmw className='mx-8' size={60} />
          <SiAirbnb className='mx-8' size={60} />
          <SiAdobe className='mx-8' size={60} />
          <SiAdidas className='mx-8' size={60} />
          <SiCocacola className='mx-8' size={60} />
          <SiNike className='mx-8' size={60} />
          <SiSpacex className='mx-8' size={60} />
        </Marquee>
      </div>
    </div>
  )
}

export default Companies
