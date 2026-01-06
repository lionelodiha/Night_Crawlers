import React, { useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { Store, ChevronLeft, Upload } from 'lucide-react';
 
type Restaurant = {
  id: number;
  name: string;
  description: string;
  address: string;
  openingTime: string;
  imageUrl: string;
};
 
type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};
 
const categories = ['Rice', 'Pasta', 'Soup', 'Swallow', 'Protein'];
 
const sampleItems: MenuItem[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: 'Fried Rice',
  description:
    '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato',
  price: 2500,
  image:
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
}));
 
const VendorRestaurant: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>('Rice');
  const [viewMode, setViewMode] = useState<'menu' | 'add'>('menu');
 
  const restaurant: Restaurant = useMemo(() => {
    const state = location.state as Partial<Restaurant> | undefined;
    return {
      id: Number(id) || state?.id || Date.now(),
      name: state?.name || 'Amala Central Foods',
      description:
        state?.description || 'Authentic african cuisine with a modern twist',
      address: state?.address || '123 Main Street, Downtown',
      openingTime: '8:00 am - 8:00 pm',
      imageUrl:
        state?.imageUrl ||
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    };
  }, [id, location.state]);
 
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-poppins">
      <main className="flex-grow w-full">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-full px-4 sm:px-6 md:px-8 py-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FEECEC] rounded-md flex items-center justify-center">
                <Store className="w-5 h-5 text-[#C62222]" />
              </div>
              <h1 className="text-3xl font-bold text-[#C62222]">Vendor Dashboard</h1>
            </div>
            <Link
              to="/vendor-dashboard"
              className="inline-flex items-center gap-2 text-[#667085] hover:text-[#C62222] text-sm mt-6 mb-0"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Restaurant
            </Link>
          </div>
        </div>
 
        <div className="max-w-full px-4 sm:px-6 md:px-8 pt-8 pb-10">
          <div className="rounded-lg overflow-hidden border border-[#EAECF0] mb-8">
            <div className="w-full h-[280px] sm:h-[360px] md:h-[440px]">
              <img
                src={restaurant.imageUrl}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-5 pt-6 pb-6 sm:px-7 sm:pt-7 sm:pb-7">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#222222] mb-1">
                {restaurant.name}
              </h2>
              <p className="text-[#667085] text-sm sm:text-base mb-2">
                {restaurant.description}
              </p>
              <div className="text-[#667085] text-sm">
                <span className="block">Opening time</span>
                <span className="text-[#222222] font-medium">
                  {restaurant.openingTime}
                </span>
              </div>
              <div className="mt-4 inline-flex items-center rounded-md bg-[#FEE4E2] p-1">
                <button
                  onClick={() => setViewMode('menu')}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${viewMode === 'menu' ? 'bg-[#C62222] text-white' : 'text-[#C62222]'}`}
                >
                  View Menu
                </button>
                <button
                  onClick={() => setViewMode('add')}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${viewMode === 'add' ? 'bg-[#C62222] text-white' : 'text-[#C62222]'}`}
                >
                  Add Menu Item
                </button>
              </div>
            </div>
          </div>
 
          {viewMode === 'menu' && (
            <>
              <div className="flex items-center gap-6 border-b border-[#EAECF0] mb-8 pb-3 overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={
                      activeCategory === cat
                        ? 'text-[#C62222] bg-[#FEE4E2] px-3 py-1 rounded text-sm font-medium'
                        : 'text-[#667085] hover:text-[#222222] text-sm'
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>
 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {sampleItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-[#EAECF0] rounded-lg bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[90px] h-[90px] object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-[#222222] text-sm sm:text-base font-semibold">
                          {item.name}
                        </h3>
                        <span className="text-[#222222] text-sm sm:text-base font-semibold">
                          ₦ {item.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[#667085] text-xs sm:text-sm mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
 
          {viewMode === 'add' && (
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Add Menu Items</h2>
                <p className="text-sm text-gray-600">Add items to your restaurant menu</p>
              </div>
 
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setViewMode('menu');
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Item Name *</label>
                  <input
                    name="name"
                    className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="e.g. Fried Rice"
                  />
                </div>
 
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Food Categories</label>
                  <input
                    name="category"
                    className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="e.g. Rice"
                  />
                </div>
 
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Price</label>
                  <input
                    name="price"
                    className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="e.g. 2500"
                  />
                </div>
 
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Food Description</label>
                  <textarea
                    name="description"
                    className="w-full min-h-[90px] px-3 py-2 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="Short description about the item"
                  />
                </div>
 
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Food Cover Image URL *</label>
                  <input
                    name="imageUrl"
                    className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="https://example.com/cover.jpg"
                  />
                </div>
 
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 bg-[#C62222] text-white text-sm font-medium rounded-md hover:bg-[#A01B1B] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C62222]"
                >
                  <Upload className="w-4 h-4" />
                  Add Menu Item
                </button>
              </form>
            </section>
          )}
        </div>
      </main>
 
      <Footer />
    </div>
  );
};
 
export default VendorRestaurant;
