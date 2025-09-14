import {useState } from 'react';
import ReactPaginate from 'react-paginate';
import Explore_p_card from './Explore_p_card';


const Paginations = ({ itemsPerPage, allproducts }) => {

    const items = allproducts;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
          currentItems.map((item, index) => (   // ✅ no nested map
            <Explore_p_card
              key={index}           // ✅ stable key
              item={item}                       // ✅ correct prop name
            />
          ))}
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
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
      />
    </>
   
  )
}

export default Paginations
