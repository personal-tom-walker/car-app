'use client';
import CustomButton from '../CustomButton';
import Image from 'next/image';

import { heroConstants } from './constants';

const Hero = () => {
    const { title, subtitle, buttonText } = heroConstants;
    const handleScroll = () => {};
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>{title}</h1>
        <p className='hero__subtitle'>{subtitle}</p>
        <CustomButton
          title={buttonText}
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
