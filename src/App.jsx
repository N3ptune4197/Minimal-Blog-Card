import { useState } from 'react'
import Background from './assets/cactus_img.jpg'


function App() {

  return (
    <>
      <div className='bg-white w-[368px] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] shadow-[0_30px_100px_0_rgba(229,234,240)] rounded-xl box-content'>

        <div className='contentImg mb-[16px] px-[16px] pt-[20px]'>
          <img src={Background} alt="" className='rounded-xl' />
        </div>

        <div className='tags px-[16px]'>
          <span className='bg-cactus-bg text-tag-text text-xs px-[16px] py-[6px] rounded-full font-semibold  '>Design</span>
        </div>

        <div className='texts pl-[16px] pr-[10px]'>
          <h1 className='text-xl mt-[16px] font-semibold text-title-color mb-[6px]'>Embracing Minimalism</h1>
          <p className='text-paragraph text-sm pr-14 leading-relaxed mb-[20px]'>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
        </div>
        <hr />
          <p className='px-[16px] py-[20px] text-sm text-paragraph'>Annie Spratt</p>

      </div>
    </>
  )
}

export default App
