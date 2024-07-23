import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomePage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount=5;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPageCount ? prevPage + 1 : prevPage));    
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage-1 : prevPage));
  }
  return (
    <div className="p-5">
      <div className="flex space-x-1">
        <div className="w-7/12 rounded-lg overflow-hidden">
          <div className="relative rounded-lg " style={{ height: '500px' }}>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/12/IX/LG/PD/150386269/dsc-5669-1000x1000.JPG"
              alt="Minimal chair"
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="absolute top-4 left-4 text-white ">
              <h2 className="text-xl font-mediumbold bg-opacity-0 p-2 rounded">
                Complete your interior with a minimalist designer chandelier
              </h2> 
            </div>
            <div className="absolute bottom-4 left-8 right-8  p-4 rounded-lg backdrop-blur-sm bg-white bg-opacity-10">
              <div className="flex flex-col cursor-pointer">
                <p className="text-white bg-opacity-50  rounded">Minimal chair</p>
                <p className="text-white bg-opacity-50  rounded">Yoell</p>
              </div>
              <div className="absolute bottom-7 right-4 flex items-center space-x-4">
                <button 
                  className="bg-white text-black p-2 rounded-full"
                  onClick={handlePrevPage}
                  disabled={currentPage ===1 }>
                  <FaChevronLeft />
                </button>
                <p className="mx-2 text-white">{currentPage}/{totalPageCount}</p>
                <button 
                  className="bg-white text-black p-2 rounded-full"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPageCount}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12 rounded-lg overflow-hidden -mt-4 ">
          <div className="relative p-4 rounded-lg" style={{ height: '530px' }}>
            <div className="absolute top-10 left-10 flex -space-x-1">
              <span className="bg-gray-500 rounded-full w-5 h-5"></span>
              <span className="bg-black rounded-full w-5 h-5"></span>
              <span className="bg-orange-500 rounded-full w-5 h-5"></span>
            </div>
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBoOkLMhtRsSCkAvCFriBI34lFktqJeJkLeksbMXLtGRwOSUm4"
              alt="Cast Lights"
              className="w-full h-full object-cover rounded-lg"
            />
           <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-end h-full p-4">
              <div className="flex flex-col -mb-8">
                <h3 className="text-xl text-black font-semibold">Cast Lights</h3>
                <p className="text-gray-600">GlowGalore Store</p>
              </div>
              <div className="flex justify-end mb-4">
                <button className="bg-black text-white py-1 px-2 rounded-full">
                  Add to cart $45.90
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
