import React from 'react'

const Img_det = ({head, det, className, className1}) => {
  return (
    <>
       <div className='absolute bottom-[32px] left-0 text-white pl-[29px]'>
            <h3 className={`text-[24px] font-semibold mb-[16px] ${className}`}>{head}</h3>
                <p className={`text-[14px] font-normal mb-[16px] w-[242px] ${className1}`}>{det}</p>
                <a className='text-[16px] font-medium underline' href="#">Shop Now</a>
        </div>
    
    
    </>
  )
}

export default Img_det
