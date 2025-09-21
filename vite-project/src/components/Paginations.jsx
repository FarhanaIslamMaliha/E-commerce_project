import {useState } from 'react';
import ReactPaginate from 'react-paginate';
import Explore_p_card from './Explore_p_card';
import { useSelector } from 'react-redux';


const Paginations = ({itemsPerPage}) => {

    const productData = useSelector((state) => state.allProduct.product)
    const items = productData;

function Items({ currentItems }) {
  return (
    <>
      <div className='flex flex-wrap gap-5'>
        {currentItems &&
          currentItems.map((item, id) => {
            return(
              
              <Explore_p_card
              productDetails ={item}
              key={id}           
              id ={item.id} 
              Img =  {item.thumbnail} 
              discount = {item.discountPercentage}
              title = {item.title}
              price ={item.price}
              discountprice = {Math.floor (item.price / (1-item.discountPercentage / 100))}
              rating={item.rating}
              review = {item.review}
                               
            />

              
            );
            
})}
      </div>
    </>
  );
}

// Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    
    setItemOffset(newOffset);
  };
  return (
   <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className='flex gap-4'
        pageClassName='px-[25px] py-[2px] bg-black text-white mt-10'
      />
    </>
   
  )
}

export default Paginations
