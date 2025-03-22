import React from 'react'
import GenerateForm from '../general/GenerateForm'
import { suggestionText } from '@/lib/constants';
import { SuggestionText } from '@/lib/types';


const HeroSection = () => {
  return (
    <section className='mt-12 md:mt-24 w-full'>
        <div className='text-center relative py-6'>
            {/* glow effect: */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50 -z-10'>
            </div>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
                Built AI Driven Forms Effortlessly
            </h1>
            <p className='mt-4 text-lg text-gray-800'>
                Leverage the power of AI to create responsive and dynamic fonts in minutes
            </p>
        </div>

        {/* Generate Form Input: */}
        <GenerateForm/>

        {/* suggestion buttons: */}
        <div className=' flex flex-wrap items-center justify-center gap-4 mt-8'>
        {
            suggestionText.map((item:SuggestionText) => (
                <button 
                key={item?.label}
                className='border border-gray-300 px-4 py-1 rounded-full hover:bg-black hover:text-white w-fit h-10'
                >
                    {item?.label}
                </button>
            ))
        }
        </div>
        

    </section>
  )
}

export default HeroSection