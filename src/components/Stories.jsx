import React from 'react'
import Title from './utils/Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {HeartIcon , ClockIcon , HashtagIcon} from "@heroicons/react/24/solid"
const Stories = ({story}) => {
const {title , news} = story;


const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
      1200: { perPage: 3},
      991: { perPage: 2.3},
      768: { perPage: 2},
      500: { perPage: 1.3},
      425: { perPage: 1},
    },
  };

    

  return (
    <>
    <div className='nike-container mb-11'>
        <Title title={title} /> 
        <div className='mt-7'>    
            <Splide  options={splideOptions}>
                {news.map((news , index) =>(
                    <SplideSlide key={index} className='mb-0.5'>
                        <div className='relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 
                                         ring-1 ring-slate-100 '>
                            <div className='flex items-center justify-center'>
                                <img src={news.img} className=' w-full h-auto object-cover shadow-md shadow-slate-200 
                                                                rounded-tl-lg rounded-tr-lg   '/>
                            </div>
                         </div>
                    </SplideSlide>
                 ))}
            </Splide>
        </div>
    </div>
    </>
  )
}

export default Stories
