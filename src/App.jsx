import React from 'react'
import './App.css'
import Photo from "./assets/photo.jpg"


function App() {

return (
  <div class="h-96 w-64 bg-primary fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center rounded-lg font-Gabarito">
  <img src={Photo} alt=""  className='h-20 w-20 rounded-full mt-4 '/>
  <p className='text-white mt-3 font-medium text-xl'>Abdelhafidh Haouari</p>
  <p className='text-secondary font-bold text-sm'>Frontend Developer</p>
  <a href="https://github.com/7afidhou" className='text-background bg-secondary mt-4 w-[80%] text-sm p-3 rounded-3xl'>GitHub</a>
  <a href="https://instagram.com/7afidhou" className='text-white bg-background mt-2 w-[80%] text-sm p-3 rounded-3xl'>Instagram</a>
  <a href="https://facebook.com/7afidhou"  className='text-white bg-background mt-2 w-[80%] text-sm p-3 rounded-3xl'>Facebook</a>
  <a href="https://twitterq.com/7afidhou"  className='text-white bg-background mt-2  w-[80%] text-sm p-3 rounded-3xl'>Twitter</a>


</div>
  )
}

export default App
