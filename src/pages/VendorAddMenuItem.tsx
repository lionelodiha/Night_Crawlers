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

const VendorAddMenuItem: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const restaurantState = location.state as Partial<Restaurant> | undefined;

  const restaurant: Restaurant = useMemo(() => {
    return {
      id: Number(id) || restaurantState?.id || Date.now(),
      name: restaurantState?.name || 'Amala Central Foods',
      description: restaurantState?.description || 'Authentic african cuisine with a modern twist',
      address: restaurantState?.address || '123 Main Street, Downtown',
      openingTime: '8:00 am - 8:00 pm',
      imageUrl: restaurantState?.imageUrl || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    };
  }, [id, restaurantState]);

  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: '', category: '', price: '', description: '', imageUrl: '' });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-poppins">
      <main className="flex-grow w-full">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FEECEC] rounded-md flex items-center justify-center">
                <Store className="w-5 h-5 text-[#C62222]" />
              </div>
              <h1 className="text-3xl font-bold text-[#C62222]">Vendor Dashboard</h1>
            </div>
            <Link
              to={`/vendor-dashboard/restaurant/${restaurant.id}`}
              state={restaurant}
              className="inline-flex items-center gap-2 text-[#667085] hover:text-[#C62222] text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Restaurant
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-lg overflow-hidden border border-[#EAECF0] mb-6">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[320px]">
              <img
                src={restaurant.imageUrl}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#222222] mb-1">
                {restaurant.name}
              </h2>
              <p className="text-[#667085] text-sm sm:text-base mb-2">
                {restaurant.description}
              </p>
              <div className="text-[#667085] text-sm">
                <span className="block">Opening Time</span>
                <span className="text-[#222222] font-medium">
                  {restaurant.openingTime}
                </span>
              </div>
            </div>
          </div>

          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Add Menu Items</h2>
              <p className="text-sm text-gray-600">Add items to your restaurant menu</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Item Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="e.g. Fried Rice"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Food Categories</label>
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="e.g. Rice"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Price</label>
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="e.g. 2500"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Food Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full min-h-[90px] px-3 py-2 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="Short description about the item"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Food Cover Image URL *</label>
                <input
                  name="imageUrl"
                  value={form.imageUrl}
                  onChange={handleChange}
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorAddMenuItem;
