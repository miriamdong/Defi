/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'
import  Navbar  from './Navbar';


export default function Example() {
  return (
    <>
    <div className="relative bg-white pt-32" >
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/img/space.jpeg"
            alt=""
          /> <div className="absolute inset-0 bg-gray-800" style={{ mixBlendMode: 'hard-light' }} aria-hidden="true" />
         
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">rocketMEOW</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
            laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
        
      </div>
      
      
      <br></br>
      
    </div>
    </>
  )
}
