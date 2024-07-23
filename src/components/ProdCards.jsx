import React, { useState } from 'react';

const ProdCards = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Updated categories with the new Electronics category and products
  const categories = [
    {
      name: 'Clothes and shoes',
      elements: [
        {
          title: 'Macbook Air 13 256Gb',
          brand: 'Apple',
          price: '935.90',
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSt4Y7v3IXZTwCG52-PeL6x2UwufHAFA7ch-bsQ_1Hbf02mEAZncjLWDSBYX18jN3VOV6RJU1xDL9dDTZFL_MN3GqqtcODx9JQuyTqmyVNCgSGJuG5TLRajzIVEM0nco1U4JOKMM7ZHRqg&usqp=CAc',
          imageUrl: 'https://example.com/doja-cat',
        },
        {
          title: 'Buds 4 lite black',
          brand: 'Xiaomi',
          price: '41.25',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupx7imKBcMoWx23nlFu5G7wCmef75lMVKFw&s',
          imageUrl: 'https://example.com/doja-cat',
        },
      ],
    },
    {
      name: 'Electronics',
      elements: [
        {
          title: 'Macbook Air 13 256Gb',
          brand: 'Apple',
          price: '935.90',
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSt4Y7v3IXZTwCG52-PeL6x2UwufHAFA7ch-bsQ_1Hbf02mEAZncjLWDSBYX18jN3VOV6RJU1xDL9dDTZFL_MN3GqqtcODx9JQuyTqmyVNCgSGJuG5TLRajzIVEM0nco1U4JOKMM7ZHRqg&usqp=CAc',
          imageUrl: 'https://example.com/doja-cat',
        },
        {
          title: 'Buds 4 lite black',
          brand: 'Xiaomi',
          price: '41.25',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupx7imKBcMoWx23nlFu5G7wCmef75lMVKFw&s',
          imageUrl: 'https://example.com/doja-cat',
        },
        {
          title: 'Playstation 5 825Gb',
          brand: 'Sony',
          price: '684.60',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupx7imKBcMoWx23nlFu5G7wCmef75lMVKFw&s',
          imageUrl: 'https://example.com/doja-cat',
        },
        {
          title: 'Galaxy watch 40mm',
          brand: 'Samsung',
          price: '168.50',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupx7imKBcMoWx23nlFu5G7wCmef75lMVKFw&s',
          imageUrl: 'https://example.com/doja-cat',
        },
      ],
    },
    {
      name: 'Sports goods',
      elements: [
        {
          title: 'Macbook Air 13 256Gb',
          brand: 'Apple',
          price: '935.90',
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSt4Y7v3IXZTwCG52-PeL6x2UwufHAFA7ch-bsQ_1Hbf02mEAZncjLWDSBYX18jN3VOV6RJU1xDL9dDTZFL_MN3GqqtcODx9JQuyTqmyVNCgSGJuG5TLRajzIVEM0nco1U4JOKMM7ZHRqg&usqp=CAc',
          imageUrl: 'https://example.com/doja-cat',
        },
        {
          title: 'Buds 4 lite black',
          brand: 'Xiaomi',
          price: '41.25',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupx7imKBcMoWx23nlFu5G7wCmef75lMVKFw&s',
          imageUrl: 'https://example.com/doja-cat',
        },
      ],
    },
    {
      name: "Children's goods",
      elements: [
        {
          title: 'Macbook Air 13 256Gb',
          brand: 'Apple',
          price: '935.90',
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSt4Y7v3IXZTwCG52-PeL6x2UwufHAFA7ch-bsQ_1Hbf02mEAZncjLWDSBYX18jN3VOV6RJU1xDL9dDTZFL_MN3GqqtcODx9JQuyTqmyVNCgSGJuG5TLRajzIVEM0nco1U4JOKMM7ZHRqg&usqp=CAc',
          imageUrl: 'https://example.com/doja-cat',
        },
        {
          title: 'Buds 4 lite black',
          brand: 'Xiaomi',
          price: '41.25',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupx7imKBcMoWx23nlFu5G7wCmef75lMVKFw&s',
          imageUrl: 'https://example.com/doja-cat',
        },
      ],
    },
    {
      name: 'Beauty',
      elements: [
        {
          title: 'Macbook Air 13 256Gb',
          brand: 'Apple',
          price: '935.90',
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSt4Y7v3IXZTwCG52-PeL6x2UwufHAFA7ch-bsQ_1Hbf02mEAZncjLWDSBYX18jN3VOV6RJU1xDL9dDTZFL_MN3GqqtcODx9JQuyTqmyVNCgSGJuG5TLRajzIVEM0nco1U4JOKMM7ZHRqg&usqp=CAc',
          imageUrl: 'https://example.com/doja-cat',
        },
        {
          title: 'Buds 4 lite black',
          brand: 'Xiaomi',
          price: '41.25',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupx7imKBcMoWx23nlFu5G7wCmef75lMVKFw&s',
          imageUrl: 'https://example.com/doja-cat',
        },
      ],
    },
    {
      name: 'Furniture',
      elements: [
        {
          title: 'Macbook Air 13 256Gb',
          brand: 'Apple',
          price: '935.90',
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSt4Y7v3IXZTwCG52-PeL6x2UwufHAFA7ch-bsQ_1Hbf02mEAZncjLWDSBYX18jN3VOV6RJU1xDL9dDTZFL_MN3GqqtcODx9JQuyTqmyVNCgSGJuG5TLRajzIVEM0nco1U4JOKMM7ZHRqg&usqp=CAc',
          imageUrl: 'https://example.com/doja-cat',
        },
        {
          title: 'Buds 4 lite black',
          brand: 'Xiaomi',
          price: '41.25',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupx7imKBcMoWx23nlFu5G7wCmef75lMVKFw&s',
          imageUrl: 'https://example.com/doja-cat',
        },
      ],
    },
  ];

  // Function to handle click event and set active category
  const handleCategoryClick = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
  };

  return (
    <>
      <div className='flex justify-between items-center m-10 p-2'>
        <h1 className='text-2xl font-semibold'>Popular Products</h1>
        <div className='text-30 flex space-x-6 '>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`cursor-pointer border ${
                index === activeCategory ? 'bg-black text-white' : 'border-gray-500'
              } py-1 px-2 rounded-full`}
              onClick={() => handleCategoryClick(index)}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>

      {/* Display elements of the active category */}
      {activeCategory !== null && (
        <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {categories[activeCategory].elements.map((product, index) => (
            <div key={index} className="bg-white rounded-lg p-4 flex flex-col items-center">
              <a href={product.imageUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-50 h-48 object-cover rounded-lg"
                />
              </a>
              <div className="text-center">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.brand}</p>
                <p className="text-gray-800 font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </>
  );
};

export default ProdCards;
