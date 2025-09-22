import React from 'react'
// import crossicon from '../assets/crossicon.png'
import { useDispatch } from 'react-redux'
// import { RemoveCartReducer,QuentityUpdate, SubTotalReducer } from '../Slices/ProductSlice'
// import { IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";




const CartItem = ({ img, title, price,  id, quan , index}) => {

  const dispatch = useDispatch();

  

  // function handleDelete() {
  //   dispatch(RemoveCartReducer(id));
    
  // }

  // function handelIncrement() {
  //   dispatch(QuentityUpdate({ id:index, quan, actionname: "increment"}));
  //   dispatch(SubTotalReducer());
  // }

  // function handleDectement() {
  //   dispatch(QuentityUpdate({ id:index, quan, actionname: "Decrement"}));
  //    dispatch(SubTotalReducer());
  // }
  




  return (
    <>
      <div>
        
        <div className='mt-10 flex justify-between items-center px-10'>
          <div className='flex gap-2 items-center' >
            <div className='relative h-12 w-15'>
              <img src={img} alt="" />
              {/* <img src={} alt="" className='absolute -top-1 -left-1' onClick={handleDelet} /> */}
            </div>
            <div>
              <h3>{title}</h3>
            </div>
          </div>

          <div className='ml-[-120px]'>
            <h4>{price}</h4>
          </div>
          <div className='flex items-center gap-4 px-3 py-1.5 border-1 border-gray-500 rounded-[4px]'>
           <div>
            {}
           </div>
           <div>
            <button>
            
            </button>
           </div>
          </div>

          <div>
            <h3> {Number(quan * price).toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem