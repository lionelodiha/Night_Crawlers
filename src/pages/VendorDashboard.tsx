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
    setRestaurants(prev => [...prev, next]);
    setForm({ name: '', cuisine: '', categories: '', address: '', description: '', imageUrl: '' });
  };

  const handleManage = (id: number) => {
    console.log('Manage restaurant:', id);
    // TODO: Navigate to restaurant management page
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-poppins">
      <Header />

      <main className="flex-grow w-full">
        {/* Dashboard Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FEECEC] rounded-md flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-[#C62222]" />
              </div>
              <h1 className="text-3xl font-bold text-[#C62222]">
                Vendor Dashboard
              </h1>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Your Restaurants Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Your Restaurants
              </h2>
              <p className="text-gray-600">
                Select a restaurant to manage its menus, add items and more
              </p>
            </div>

            {restaurants.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {restaurants.map((r) => (
                  <div key={r.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 w-full overflow-hidden">
                      <img src={r.imageUrl} alt={r.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{r.name}</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-[#FEE4E2] text-[#C62222]">{r.cuisine}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <MapPin className="w-4 h-4 text-[#C62222]" />
                        <span>{r.address}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{r.description}</p>
                      <button 
                        onClick={() => handleManage(r.id)}
                        className="w-full bg-[#C62222] text-white py-2 px-4 rounded-md hover:bg-[#A01B1B] transition-colors text-sm font-medium"
                      >
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Add Restaurant Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Add Restaurant</h2>
              <p className="text-sm text-gray-600">Add your restaurant details and cover image.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Restaurant Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="Restaurant name"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Cuisine Type *</label>
                <input
                  name="cuisine"
                  value={form.cuisine}
                  onChange={handleChange}
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="e.g. Amala"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Food Categories</label>
                <input
                  name="categories"
                  value={form.categories}
                  onChange={handleChange}
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="e.g. Local, Grill, Vegan"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Address</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="123 Main Street, Downtown"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full min-h-[90px] px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="Short description about the restaurant"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Cover Image URL *</label>
                <input
                  name="imageUrl"
                  value={form.imageUrl}
                  onChange={handleChange}
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                  placeholder="https://example.com/cover.jpg"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 bg-[#C62222] text-white text-sm font-medium rounded-md hover:bg-[#A01B1B] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C62222]"
              >
                <Upload className="w-4 h-4" />
                Add Restaurant
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorDashboard;