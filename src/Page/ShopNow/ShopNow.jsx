import React, { useState } from 'react';
import UseData from '../../Hooks/UseData';
import ProductCard from '../../Componant/SharedComponant/ProductCard';

const ShopNow = () => {
  const { category = [], products = [] } = UseData() || {};

  // একাধিক ফিল্টারের জন্য array state
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);

  // Category filter handler
  const handleCategorySelect = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(cid => cid !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  // Discount filter handler
  const handleDiscountSelect = (discount) => {
    if (selectedDiscounts.includes(discount)) {
      setSelectedDiscounts(selectedDiscounts.filter(d => d !== discount));
    } else {
      setSelectedDiscounts([...selectedDiscounts, discount]);
    }
  };

  // Clear filter button
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDiscounts([]);
  };

  // Filter logic
  const filteredProducts = products.filter(p => {
    const categoryMatch = selectedCategories.length
      ? selectedCategories.includes(p.categoryid)
      : true;
    const discountMatch = selectedDiscounts.length
      ? selectedDiscounts.includes(p.discount)
      : true;
    return categoryMatch && discountMatch;
  });

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-8">

        {/* Sidebar Filter */}
        <div className="col-span-4 border border-gray-200 px-6 py-6 rounded-lg shadow-sm flex flex-col justify-start h-full">

          {/* Category Filter */}
          <div className="flex flex-col gap-4 mb-8">
            <p className="border border-gray-200 bg-gray-50 shadow-sm px-4 py-2 font-semibold text-gray-700">
              Category
            </p>
            {
              category.map(c => (
                <div key={c.id} className="cursor-pointer flex gap-3 items-center"
                  onClick={() => handleCategorySelect(c.id)}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(c.id)}
                    readOnly
                    className="w-4 h-4 accent-blue-500 cursor-pointer"
                  />
                  <h3 className="font-medium text-gray-700 hover:text-blue-600 transition">
                    {c.name}
                  </h3>
                </div>
              ))
            }
          </div>

          {/* Discount Offer Filter */}
          <div className="flex flex-col gap-4">
            <p className="border border-gray-200 bg-gray-50 shadow-sm px-4 py-2 font-semibold text-gray-700">
              Discount Offer
            </p>
            {
              [...new Set(products.map(p => p.discount))].map((discount, index) => (
                <div key={index} className="cursor-pointer flex gap-3 items-center"
                  onClick={() => handleDiscountSelect(discount)}>
                  <input
                    type="checkbox"
                    checked={selectedDiscounts.includes(discount)}
                    readOnly
                    className="w-4 h-4 accent-blue-500 cursor-pointer"
                  />
                  <h3 className="font-medium text-gray-700 hover:text-blue-600 transition">
                    {discount}
                  </h3>
                </div>
              ))
            }
          </div>

          {/* Clear Filter Button */}
          <button
            onClick={clearFilters}
            className="mt-8 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Clear Filters
          </button>
        </div>

        {/* Product Grid */}
        <div className="col-span-8">
          <div className="grid grid-cols-3 gap-7">
            {
              filteredProducts.length > 0 ? (
                filteredProducts
                  .sort((a, b) => b.rating - a.rating)
                  .map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))
              ) : (
                <p className="text-center text-gray-500 col-span-3">
                  No products found for selected filters.
                </p>
              )
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopNow;
