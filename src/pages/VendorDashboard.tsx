import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { Store, Upload } from 'lucide-react';
import pinIcon from '../assets/location-pin-red.svg';
import {
  createStore,
  getBusinessTypeMeta,
  getCurrentVendor,
  getStoresForVendor,
  VendorAccount,
  VendorStore,
} from '../lib/mockBackend';

type StoreForm = {
  name: string;
  openingTime: string;
  closingTime: string;
  categories: string;
  address: string;
  description: string;
  imageUrl: string;
};

const VendorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [vendor, setVendor] = useState<VendorAccount | null>(null);
  const [stores, setStores] = useState<VendorStore[]>([]);
  const [form, setForm] = useState<StoreForm>({
    name: '',
    openingTime: '',
    closingTime: '',
    categories: '',
    address: '',
    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    const currentVendor = getCurrentVendor();
    if (!currentVendor) {
      navigate('/vendor-signin');
      return;
    }
    setVendor(currentVendor);
    setStores(getStoresForVendor(currentVendor.id));
  }, [navigate]);

  if (!vendor) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-poppins">
        <p className="text-sm text-[#667085]">Loading...</p>
      </div>
    );
  }

  const typeMeta = getBusinessTypeMeta(vendor.businessType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const parseCategories = (value: string) =>
    value
      .split(',')
      .map((category) => category.trim())
      .filter(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    const created = createStore({
      name: form.name,
      categories: parseCategories(form.categories),
      address: form.address,
      description: form.description,
      imageUrl: form.imageUrl,
      openingTime: form.openingTime,
      closingTime: form.closingTime,
    });

    setStores((prev) => [...prev, created]);
    setForm({
      name: '',
      openingTime: '',
      closingTime: '',
      categories: '',
      address: '',
      description: '',
      imageUrl: '',
    });

    navigate(`/vendor-dashboard/restaurant/${created.id}`, { state: created });
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
              <p className="text-sm text-[#4B5563]">
                Account type: {typeMeta.singular}
              </p>
            </div>
          </div>
        </div>

        {/* Your Stores */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[#1F2937] mb-1">Your {typeMeta.plural}</h2>
          <p className="text-sm text-[#4B5563] mb-6">
            Select a {typeMeta.singular.toLowerCase()} to manage its items, or add a new one.
          </p>

          {stores.length === 0 ? (
            <p className="text-sm text-[#6B7280]">No {typeMeta.plural.toLowerCase()} yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/vendor-dashboard/restaurant/${store.id}`, { state: store })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      navigate(`/vendor-dashboard/restaurant/${store.id}`, { state: store });
                    }
                  }}
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img src={store.imageUrl} alt={store.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-[#111827]">{store.name}</h3>
                      <span className="px-2 py-1 text-[10px] rounded-full bg-[#FEE4E2] text-[#C62222]">
                        {store.businessType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#4B5563] mb-2">
                      <img src={pinIcon} alt="" className="w-4 h-4" />
                      <span>{store.address}</span>
                    </div>
                    {store.categories.length > 0 && (
                      <p className="text-[11px] text-[#6B7280] mb-2">{store.categories.join(', ')}</p>
                    )}
                    <p className="text-xs text-[#4B5563]">{store.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Add Store */}
        <section className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm p-6 sm:p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#111827] mb-1">Add {typeMeta.singular}</h2>
            <p className="text-sm text-[#4B5563]">
              Add your {typeMeta.singular.toLowerCase()} details and cover image.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">{typeMeta.singular} Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full h-11 px-3 bg-[#F7F7F7] border border-[#E5E7EB] rounded-sm text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                placeholder={`${typeMeta.singular} name`}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">{typeMeta.categoryLabel}</label>
              <input
                name="categories"
                value={form.categories || ''}
                onChange={handleChange}
                className="w-full h-11 px-3 bg-[#F7F7F7] border border-[#E5E7EB] rounded-sm text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                placeholder="e.g. Local, Premium"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Address *</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full h-11 px-3 bg-[#F7F7F7] border border-[#E5E7EB] rounded-sm text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                placeholder="123 Main Street, Downtown"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full min-h-[80px] px-3 py-2 bg-[#F7F7F7] border border-[#E5E7EB] rounded-sm text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                placeholder={`Short description about the ${typeMeta.singular.toLowerCase()}`}
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
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full h-11 px-4 bg-[#C62222] text-white text-sm font-medium rounded-sm hover:bg-[#A01B1B] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C62222]"
            >
              <Upload className="w-4 h-4" />
              Add {typeMeta.singular}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VendorDashboard;
