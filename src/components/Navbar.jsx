import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center m-10 p-2'>
      <div className='text-30 flex font-medium space-x-6 -ml-5'>
        <a className='cursor-pointer' href="/">Catalog</a>
        <a className='cursor-pointer' href="/">About</a>
        <a className='cursor-pointer' href="/">Delivery</a>
        <a className='cursor-pointer' href="/">Blog</a>
        <a className='cursor-pointer' href="/">Support</a>
      </div>
      <a className='cursor-pointer text-3xl font-bold -ml-20' href="/">
        <span className='text-red-500'>E</span>STORE
      </a>
      <div className='flex space-x-4'>
        <FaSearch className='cursor-pointer text-gray-700' size={20} />
        <FaHeart className='cursor-pointer text-gray-700' size={20} />
        <FaShoppingCart className='cursor-pointer text-gray-700' size={20} />
        <FaUser className='cursor-pointer text-gray-700' size={20} />
      </div>
    </div>
  );
};

export default Navbar;
