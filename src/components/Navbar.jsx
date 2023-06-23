import React, { useEffect, useState } from 'react'
import {MagnifyingGlassIcon , HeartIcon , ShoppingBagIcon} from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { setOpenCart } from '../app/CartSlice';

const Navbar = () => {
    const [navState , setNavState] = useState(false);
    const dispatch = useDispatch();

    const handle = () =>{
        dispatch(setOpenCart({
            cartstate : true
        }))
    }
    

    const onNavScroll = () =>{
        if(window.scrollY > 30)
        {
            setNavState(true)
        }
        else
        {
            setNavState(false)
        }
    }

   const qty = useSelector(state => state.cart.cartTotalAmount);

 

     
    useEffect(() =>{
        window.addEventListener('scroll' , onNavScroll);
        return () =>{
            window.removeEventListener('scroll' , onNavScroll )
        }

    } , [])
  return (
    <>
        <header className={ !navState ? "absolute opacity-100 z-50 top-7 left-0 right-0 " 
                                      : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme " }>
            <nav className='flex items-center justify-between nike-container'>
                <div className='flex items-center'>
                    <img  src={logo} className={`w-16 h-auto ${navState && "filter brightness-0"} `} />
                </div>
              <ul className='flex items-center justify-center gap-x-2'>
                <li className='grid items-center'>
                    <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                </li>
                <li className='grid items-center'>
                    <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                </li>
                <li className='grid items-center'>
                    <button type='button'onClick={handle} className=' active:scale-110 transition-all duration-300 relative'>
                        <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/> 
                            <div className={` rounded-full h-4 w-4 text-[0.65rem] absolute top-4 left-2 
                                             drop-shadow-2xl flex items-center justify-center cursor-pointer 
                                             hover:scale-125 transition-all duration-300 leading-tight shadow-2xl 
                                             ${navState ? "bg-slate-900 text-slate-100 shadow-slate-900 " 
                                                        : "bg-slate-100 text-slate-900 shadow-slate-100  " }`}>{qty}</div>
                    </button>
                </li>
              </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar
