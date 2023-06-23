import React from 'react'

const Footer = ({footerAPI : {titles , links}}) => {

  return (
   <>
      <footer className='bg-theme pt-7 pb-5'>
        <div className='nike-container text-slate-200 '>
          <div className='grid grid-cols-3 items-start max-w-2xl  w-full mx-auto md:max-w-none md:gap-5' >
          {titles.map((val , index) =>(
              <div key={index} className='grid items-center' >
                <h1 className=' text-lg lg:text-base md:text-sm font-semibold uppercase'>{val.title}</h1>
              </div>
          ))}
          {links.map((pos , index) =>(
            <ul key={index} className='grid items-center gap-1 '>
              {pos.map((val , index)=>(
                <li key={index} className='text-sm sm:text-sm '>
                  {val.link}
                </li>
              ))}
            </ul>
          ))}
          </div>
          <div className='mt-5 text-center'>
            <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights </p>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer
