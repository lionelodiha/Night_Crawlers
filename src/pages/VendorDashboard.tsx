import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { MapPin, Image as ImageIcon, Upload } from 'lucide-react';

type Restaurant = {
  id: number;
  name: string;
  cuisine: string;
  categories?: string;
  address: string;
  description: string;
  imageUrl: string;
};

const VendorDashboard: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
    {
      id: 1,
      name: 'Amala Central Foods',
      cuisine: 'Amala',
      categories: 'Local',
      address: '123 Main Street, Downtown',
      description: 'Authentic african cuisine with a modern twist',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
    }
  ]);

  const [form, setForm] = useState<Omit<Restaurant, 'id'>>({
    name: '',
    cuisine: '',
    categories: '',
    address: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.cuisine) return;
    const next: Restaurant = { id: Date.now(), ...form };
    setRestaurants(prev => [next, ...prev]);
    setForm({ name: '', cuisine: '', categories: '', address: '', description: '', imageUrl: '' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins">
      <Header />

      <main className="flex-grow w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10">
        <h1 className="flex items-center gap-2 text-[#C62222] text-2xl sm:text-3xl font-semibold mb-2">
          <ImageIcon className="w-6 h-6" />
          Vendor Dashboard
        </h1>
        <h2 className="text-[#222222] text-lg sm:text-xl font-semibold mt-4">Your Restaurants</h2>
        <p className="text-[#667085] text-sm sm:text-base mb-8">Select a restaurant to manage its menu, or add a new one.</p>

        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {restaurants.map((r) => (
              <div key={r.id} className="border border-[#EAECF0] rounded-lg shadow-sm overflow-hidden bg-white">
                <div className="h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                  <img src={r.imageUrl || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[#222222] text-lg font-semibold">{r.name}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-[#FEE4E2] text-[#C62222]">{r.cuisine}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#667085] text-sm mb-2">
                    <MapPin className="w-4 h-4 text-[#C62222]" />
                    <span>{r.address || 'No address provided'}</span>
                  </div>
                  <p className="text-[#667085] text-sm">{r.description || 'No description provided'}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border border-[#EAECF0] rounded-lg bg-white shadow-sm p-4 sm:p-6">
          <h2 className="text-[#222222] text-lg font-semibold mb-1">Add Restaurant</h2>
          <p className="text-[#667085] text-sm mb-6">Add your restaurant details and cover image.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#344054] text-sm font-medium mb-1">Restaurant Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full h-10 px-3 bg-white border border-[#D0D5DD] rounded-[6px] text-[#667085] text-sm shadow-sm"
                placeholder="Restaurant name"
              />
            </div>

            <div>
              <label className="block text-[#344054] text-sm font-medium mb-1">Cuisine Type</label>
              <input
                name="cuisine"
                value={form.cuisine}
                onChange={handleChange}
                className="w-full h-10 px-3 bg-white border border-[#D0D5DD] rounded-[6px] text-[#667085] text-sm shadow-sm"
                placeholder="e.g. Amala"
              />
            </div>

            <div>
              <label className="block text-[#344054] text-sm font-medium mb-1">Food Categories</label>
              <input
                name="categories"
                value={form.categories}
                onChange={handleChange}
                className="w-full h-10 px-3 bg-white border border-[#D0D5DD] rounded-[6px] text-[#667085] text-sm shadow-sm"
                placeholder="e.g. Local, Grill, Vegan"
              />
            </div>

            <div>
              <label className="block text-[#344054] text-sm font-medium mb-1">Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full h-10 px-3 bg-white border border-[#D0D5DD] rounded-[6px] text-[#667085] text-sm shadow-sm"
                placeholder="123 Main Street, Downtown"
              />
            </div>

            <div>
              <label className="block text-[#344054] text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full min-h-[90px] px-3 py-2 bg-white border border-[#D0D5DD] rounded-[6px] text-[#667085] text-sm shadow-sm"
                placeholder="Short description about the restaurant"
              />
            </div>

            <div>
              <label className="block text-[#344054] text-sm font-medium mb-1">Cover Image URL *</label>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="w-full h-10 px-3 bg-white border border-[#D0D5DD] rounded-[6px] text-[#667085] text-sm shadow-sm"
                placeholder="https://example.com/cover.jpg"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 w-full h-10 px-4 bg-[#C62222] text-white text-sm font-medium rounded-[6px] hover:bg-[#A01B1B] transition-colors"
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
