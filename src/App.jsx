import React from 'react'
import { Hero , Sales , FlexContent , Stories , Footer , Navbar , Cart } from './components/index'
import {heroapi , popularsales , toprateslaes , sneaker , highlight , story , footerAPI} from './data/data'


const App = () => {
  return (
    <>
    <Navbar />
    <Cart />
      <main className='grid gap-16 relative'>
        <Hero heroapi ={heroapi} />
        <Sales endpoint = {popularsales} ifExists />
        <FlexContent endpoint = {highlight} ifExists  />
        <Sales endpoint = {toprateslaes} />
        <FlexContent endpoint = {sneaker} />
        <Stories story = {story} />
     </main>
     <Footer footerAPI={footerAPI} />
    </>
    
  )
}

export default App
