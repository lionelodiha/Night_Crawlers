import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { Store, Upload } from 'lucide-react';
import pinIcon from '../assets/location-pin-red.svg';

type Restaurant = {
  id: number;
  name: string;
  cuisine?: string;
  openingTime?: string;
  closingTime?: string;
  categories?: string;
  address: string;
  description: string;
  imageUrl: string;
};

const VendorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
    {
      id: 1,
      name: 'Amado Central Foods',
      cuisine: 'African',
      categories: 'Local',
      address: '123 Main Street, Downtown',
      description: 'Authentic african cuisine with a modern twist',
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Amado Central Foods',
      cuisine: 'African',
      categories: 'Local',
      address: '123 Main Street, Downtown',
      description: 'Authentic african cuisine with a modern twist',
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Amado Central Foods',
      cuisine: 'African',
      categories: 'Local',
      address: '123 Main Street, Downtown',
      description: 'Authentic african cuisine with a modern twist',
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
    }
  ]);

  const [form, setForm] = useState<Omit<Restaurant, 'id'>>({
    name: '',
    openingTime: '',
    closingTime: '',
    categories: '',
    address: '',
    description: '',
    imageUrl: ''
  });
  const [categoryTags, setCategoryTags] = useState<string[]>([]);
  const [categoryInput, setCategoryInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) return;
    const categoriesStr = categoryTags.join(', ') || form.categories;
    const next: Restaurant = {
      id: Date.now(),
      ...form,
      categories: categoriesStr,
      openingTime: form.openingTime || '8:00 am - 8:00 pm',
      closingTime: form.closingTime || '',
    };
    setRestaurants(prev => [...prev, next]);
    setForm({ name: '', openingTime: '', closingTime: '', categories: '', address: '', description: '', imageUrl: '' });
    setCategoryTags([]);
    setCategoryInput('');
    navigate(`/vendor-dashboard/restaurant/${next.id}`, { state: next });
  };

  const addCategoryTag = () => {
    const val = categoryInput.trim();
    if (!val) return;
    setCategoryTags(prev => [...prev, val]);
    setCategoryInput('');
  };

  const removeCategoryTag = (idx: number) => {
    setCategoryTags(prev => prev.filter((_, i) => i !== idx));
  };

  const handleCategoryKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCategoryTag();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Dashboard Header */}
        <div className="pt-10 pb-10">
          <div className="flex items-start gap-6">
            <div className="w-9 h-9 flex items-center justify-center text-[#C62222]">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#C62222] leading-tight">Vendor Dashboard</h1>
            </div>
          </div>
        </div>

        {/* Your Restaurants */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[#1F2937] mb-1">Your Restaurants</h2>
          <p className="text-sm text-[#4B5563] mb-6">
            Select a restaurant to manage its menu, or add a new one.
          </p>

          {restaurants.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((r) => (
                <div
                  key={r.id}
                  className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img src={r.imageUrl} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-[#111827]">{r.name}</h3>
                      <span className="px-2 py-1 text-[10px] rounded-full bg-[#FEE4E2] text-[#C62222]">
                        {r.cuisine}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#4B5563] mb-2">
                      <img src={pinIcon} alt="" className="w-4 h-4" />
                      <span>{r.address}</span>
                    </div>
                    <p className="text-xs text-[#4B5563]">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Add Restaurant */}
        <section className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm p-6 sm:p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#111827] mb-1">Add Restaurant</h2>
            <p className="text-sm text-[#4B5563]">Add your restaurant details and cover image.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Restaurant Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full h-11 px-3 bg-[#F7F7F7] border border-[#E5E7EB] rounded-sm text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                placeholder="Restaurant name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Food Categories</label>
              <input
                name="categories"
                value={form.categories || ''}
                onChange={handleChange}
                className="w-full h-11 px-3 bg-[#F7F7F7] border border-[#E5E7EB] rounded-sm text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                placeholder="e.g. African, Local"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full h-11 px-3 bg-[#F7F7F7] border border-[#E5E7EB] rounded-sm text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                placeholder="123 Main Street, Downtown"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full min-h-[80px] px-3 py-2 bg-[#F7F7F7] border border-[#E5E7EB] rounded-sm text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                placeholder="Short description about the restaurant"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Cover Image URL *</label>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="w-full h-11 px-3 bg-[#F7F7F7] border border-[#E5E7EB] rounded-sm text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                placeholder="https://example.com/cover.jpg"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full h-11 px-4 bg-[#C62222] text-white text-sm font-medium rounded-sm hover:bg-[#A01B1B] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C62222]"
            >
              <Upload className="w-4 h-4" />
              Add Restaurant
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VendorDashboard;
