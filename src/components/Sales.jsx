import React from 'react'
import Title from './utils/Title';
import Item from './utils/Item';
import { setOpenCart } from '../app/CartSlice';
import { useDispatch } from 'react-redux';

const Sales = ({ifExists , endpoint :{title , items}}) => {
  const dispatch  = useDispatch()
 
  return (
    
    <>
    <div className='nike-container' >
      <Title title={title}  />
      <div className={` grid  justify-items-center items-center 
                      gap-7 lg:gap-5 mt-7  ${ifExists ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1" 
                                                            : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "}  `}>
        {items.map((item , index) =>(
           <Item {...item} key={index} ifExists = {ifExists} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Sales
