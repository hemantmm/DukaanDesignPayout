import React from 'react'
import Menubar from './Menubar'

function Sidebar() {
  return (
    <>
    <div className='sticky bg-slate-800 h-screen w-56 inset-0 text-stone-300'>
        <div className='flex flex-col h-full'>
          <div className='flex gap-3 pt-4 pr-4 pb-5 pl-4'>
            <div className='userLogo'>
              <img src='https://a56-dukaan.vercel.app/img/store-def.jpg' className='w-11 h-11 rounded' alt='hi' />
            </div>
            <div className='userInfo'>
              <div className='text-white text-s font-medium mb-1'>Nishyan</div>
              <div className='text-zinc-400 text-xs underline'>Visit store</div>
            </div>
            <div className='text-white font-medium ml-8 mt-4'>
            <svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-chevron-down-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>  
            </div>
          </div>
          <Menubar />
          <div className='flex items-center mt-auto mb-5 ml-4 mr-4 pt-2 pb-2 pl-4 pr-4 gap-3 rounded text-sm bg-slate-600'>
            <div>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr12">
                <rect width="36" height="36" rx="4" fill="white" fill-opacity="0.1"></rect>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99995 9.79751C8.42319 9.79751 7.79995 10.3555 7.79995 11.2475V24.7475C7.79995 25.6395 8.42319 26.1975 8.99995 26.1975H27C27.5767 26.1975 28.2 25.6395 28.2 24.7475V21.8475H23C20.8737 21.8475 19.15 20.1238 19.15 17.9975C19.15 15.8712 20.8737 14.1475 23 14.1475H28.2V11.2475C28.2 10.3555 27.5767 9.79751 27 9.79751H8.99995ZM29.7999 14.1475V11.2475C29.7999 9.65423 28.6323 8.19751 27 8.19751H8.99995C7.36758 8.19751 6.19995 9.65423 6.19995 11.2475V24.7475C6.19995 26.3408 7.36758 27.7975 8.99995 27.7975H27C28.6323 27.7975 29.7999 26.3408 29.7999 24.7475V21.8475H29.85V14.1475H29.7999ZM22 17.9475C22 17.4781 22.3806 17.0975 22.85 17.0975H24.15C24.6194 17.0975 25 17.4781 25 17.9475C25 18.417 24.6194 18.7975 24.15 18.7975H22.85C22.3806 18.7975 22 18.417 22 17.9475ZM20.85 17.9975C20.85 16.8101 21.8126 15.8475 23 15.8475H28.15V20.1475H23C21.8126 20.1475 20.85 19.1849 20.85 17.9975Z" fill="white"></path>
              </svg>
            </div>
            <div className='flex flex-col gap-1'>
              <span>Available credits</span>
              <span className='rounded-2xl font-medium text-white'>222.10</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar