import React, { useState } from 'react';
import Footer from '../components/layout/Footer';
import RestaurantCard from '../components/vendors/RestaurantCard';
import AddRestaurantForm from '../components/vendors/AddRestaurantForm';
import { Restaurant, AddRestaurantForm as IAddRestaurantForm } from '../types';

const VendorDashboard: React.FC = () => {
  // Mock data - replace with real data from API
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
    {
      id: '1',
      name: 'Amado Central Foods',
      address: '123 Main Street, Downtown',
      coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      altText: 'Amado Central Foods',
      description: 'Authentic african cuisine with a modern twist',
      categories: ['African', 'Local'],
    },
    {
      id: '2',
      name: 'Amado Central Foods',
      address: '123 Main Street, Downtown',
      coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      altText: 'Amado Central Foods',
      description: 'Authentic african cuisine with a modern twist',
      categories: ['African', 'Local'],
    },
    {
      id: '3',
      name: 'Amado Central Foods',
      address: '123 Main Street, Downtown',
      coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      altText: 'Amado Central Foods',
      description: 'Authentic african cuisine with a modern twist',
      categories: ['African', 'Local'],
    },
  ]);

  const handleAddRestaurant = (formData: IAddRestaurantForm) => {
    // Create image URL from file (in real app, upload to server)
    const imageUrl = formData.coverImage 
      ? URL.createObjectURL(formData.coverImage)
      : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';

    const newRestaurant: Restaurant = {
      id: Date.now().toString(),
      name: formData.name,
      address: formData.address,
      coverImage: imageUrl,
      altText: formData.name,
      description: formData.description,
      categories: formData.categories.split(',').map(cat => cat.trim()),
    };

    setRestaurants([...restaurants, newRestaurant]);
    alert('Restaurant added successfully!');
  };

  const handleManageRestaurant = (id: string) => {
    console.log('Managing restaurant:', id);
    // TODO: Navigate to restaurant management page
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="w-full">
        {/* Dashboard Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-night-red-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.5 1.5H5.5a2 2 0 00-2 2v13a2 2 0 002 2h9a2 2 0 002-2v-9" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
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

            {restaurants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {restaurants.map(restaurant => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    onManage={handleManageRestaurant}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m0 0h6m0-6v6m0 0v6"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No restaurants yet
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by adding your first restaurant below.
                </p>
              </div>
            )}
          </section>

          {/* Add Restaurant Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <AddRestaurantForm onSubmit={handleAddRestaurant} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorDashboard;
