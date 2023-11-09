'use client';

import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';

import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              alt='Generic car logo'
              width={20}
              height={20}
              className='ml-4'
            />
          </Combobox.Button>
          <Combobox.Input
            className='search-manufacturer__input'
            placeholder='Seat'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition as={Fragment}>
            <Combobox.Options></Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
