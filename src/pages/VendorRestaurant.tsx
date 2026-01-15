import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { Store, ChevronLeft, Upload } from 'lucide-react';
import {
  getBusinessTypeMeta,
  getCurrentVendor,
  getStoreById,
  updateStore,
  VendorStore,
} from '../lib/mockBackend';
import { resolveImageUrl } from '../lib/imageUtils';
 
type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};
 
const defaultCategories = ['Rice', 'Pasta', 'Soup', 'Swallow', 'Protein'];
 
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
  const [viewMode, setViewMode] = useState<'menu' | 'add' | 'edit'>('menu');
 
  const storeState = location.state as Partial<VendorStore> | undefined;
  const storeId = id || (storeState?.id ? String(storeState.id) : undefined);

  const resolveStore = () => {
    const fromStore = storeId ? getStoreById(storeId) : null;
    if (fromStore) return fromStore;

    const currentVendor = getCurrentVendor();
    const businessType = storeState?.businessType || currentVendor?.businessType || 'Food';

    return {
      id: storeId || `${Date.now()}`,
      vendorId: currentVendor?.id || 'unknown',
      name: storeState?.name || 'Sample Store',
      description: storeState?.description || 'Store description goes here.',
      address: storeState?.address || '123 Main Street, Downtown',
      openingTime: storeState?.openingTime || '8:00 am - 8:00 pm',
      imageUrl:
        storeState?.imageUrl ||
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
      businessType,
      categories: storeState?.categories || [],
      createdAt: storeState?.createdAt || new Date().toISOString(),
      closingTime: storeState?.closingTime || '',
    };
  };

  const [store, setStore] = useState<VendorStore>(resolveStore);

  useEffect(() => {
    setStore(resolveStore());
  }, [storeId, storeState]);

  const typeMeta = getBusinessTypeMeta(store.businessType);
  const menuCategories = store.categories.length > 0 ? store.categories : defaultCategories;

  const [editForm, setEditForm] = useState({
    name: store.name,
    categories: store.categories.join(', '),
    address: store.address,
    description: store.description,
    openingTime: store.openingTime,
    closingTime: store.closingTime || '',
    imageUrl: store.imageUrl,
  });
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [editMessage, setEditMessage] = useState('');
  const [editError, setEditError] = useState('');

  useEffect(() => {
    setEditForm({
      name: store.name,
      categories: store.categories.join(', '),
      address: store.address,
      description: store.description,
      openingTime: store.openingTime,
      closingTime: store.closingTime || '',
      imageUrl: store.imageUrl,
    });
    setEditImageFile(null);
    setEditMessage('');
    setEditError('');
  }, [store.id, store.name, store.address, store.description, store.imageUrl, store.openingTime, store.closingTime, store.categories]);

  const parseCategories = (value: string) =>
    value
      .split(',')
      .map((category) => category.trim())
      .filter(Boolean);

  const readFileAsDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error('Unable to read image file.'));
      reader.readAsDataURL(file);
    });

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEditError('');
    setEditMessage('');

    if (!editForm.name.trim()) {
      setEditError('Please enter a name.');
      return;
    }

    if (!editForm.address.trim()) {
      setEditError('Please enter an address.');
      return;
    }

    if (!editForm.imageUrl.trim() && !editImageFile) {
      setEditError('Please add a cover image URL or upload a file.');
      return;
    }

    setIsSaving(true);
    let imageUrl = editForm.imageUrl.trim();
    if (editImageFile) {
      try {
        imageUrl = await readFileAsDataUrl(editImageFile);
      } catch (error) {
        setIsSaving(false);
        setEditError('Unable to upload the image. Please try again.');
        return;
      }
    } else {
      const resolvedUrl = await resolveImageUrl(imageUrl);
      if (!resolvedUrl) {
        setIsSaving(false);
        setEditError('Please use a direct image URL or upload a file.');
        return;
      }
      imageUrl = resolvedUrl;
    }

    const updated = updateStore(store.id, {
      name: editForm.name.trim(),
      categories: parseCategories(editForm.categories),
      address: editForm.address.trim(),
      description: editForm.description.trim(),
      imageUrl,
      openingTime: editForm.openingTime.trim() || store.openingTime,
      closingTime: editForm.closingTime.trim(),
    });

    setStore(updated);
    setEditImageFile(null);
    setIsSaving(false);
    setEditMessage('Details updated.');
  };
 
  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins">
      <main className="flex-grow w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="pt-6 pb-0">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 flex items-center justify-center text-[#C62222]">
              <Store className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-semibold text-[#C62222] leading-tight">Vendor Dashboard</h1>
          </div>
          <Link
            to="/vendor-dashboard"
            className="inline-flex items-center gap-2 text-[#475467] hover:text-[#C62222] text-sm mb-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="pt-2 pb-10">
          <div className="rounded-lg overflow-hidden mb-8">
            <div className="w-full h-[300px] sm:h-[380px] md:h-[460px]">
              <img
                src={store.imageUrl}
                alt={store.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-5 px-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#222222] mb-1">
                {store.name}
              </h2>
              <p className="text-[#667085] text-sm sm:text-base mb-3">
                {store.description}
              </p>
              <div className="text-[#667085] text-sm mb-10">
                <span className="block text-[#111827] font-medium">Opening Time</span>
                <span>{store.openingTime}</span>
              </div>
              <div className="inline-flex items-center rounded-sm bg-[#F2F4F7] p-1">
                <button
                  onClick={() => setViewMode('menu')}
                  className={`px-4 py-2 text-xs font-medium rounded-sm ${
                    viewMode === 'menu'
                      ? 'bg-[#C62222] text-white'
                      : 'text-[#4B5563] hover:text-[#111827]'
                  }`}
                >
                  View {typeMeta.itemPlural}
                </button>
                <button
                  onClick={() => setViewMode('add')}
                  className={`px-4 py-2 text-xs font-medium rounded-sm ${
                    viewMode === 'add'
                      ? 'bg-[#C62222] text-white'
                      : 'text-[#4B5563] hover:text-[#111827]'
                  }`}
                >
                  Add {typeMeta.itemSingular}
                </button>
                <button
                  onClick={() => setViewMode('edit')}
                  className={`px-4 py-2 text-xs font-medium rounded-sm ${
                    viewMode === 'edit'
                      ? 'bg-[#C62222] text-white'
                      : 'text-[#4B5563] hover:text-[#111827]'
                  }`}
                >
                  Edit Details
                </button>
              </div>
            </div>
          </div>
 
          {viewMode === 'menu' && (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-6 border-b border-[#EAECF0] mb-8 pb-3">
                {menuCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`min-w-[70px] text-center text-sm px-3 py-1 rounded ${
                      activeCategory === cat
                        ? 'text-[#C62222] bg-[#FEE4E2] font-medium'
                        : 'text-[#667085] hover:text-[#222222]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sampleItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 p-4 border border-[#EAECF0] rounded-lg bg-white shadow-sm"
                    >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[80px] h-[80px] object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-[#222222] text-sm sm:text-base font-semibold leading-snug">
                          {item.name}
                        </h3>
                        <span className="text-[#222222] text-sm sm:text-base font-semibold whitespace-nowrap">
                          ƒ,İ {item.price.toLocaleString()}
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
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Add {typeMeta.itemPlural}</h2>
                <p className="text-sm text-gray-600">Add items to your store catalog</p>
              </div>
 
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setViewMode('menu');
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">{typeMeta.itemSingular} Name *</label>
                  <input
                    name="name"
                    className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="e.g. Fried Rice"
                  />
                </div>
 
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Item Categories</label>
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
                  <label className="block text-gray-700 text-sm font-medium mb-1">Item Description</label>
                  <textarea
                    name="description"
                    className="w-full min-h-[90px] px-3 py-2 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="Short description about the item"
                  />
                </div>
 
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Item Cover Image URL *</label>
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
                  Add {typeMeta.itemSingular}
                </button>
              </form>
            </section>
          )}

          {viewMode === 'edit' && (
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Edit Store Details</h2>
                <p className="text-sm text-gray-600">Update your store information.</p>
              </div>

              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Store Name *</label>
                  <input
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="Store name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Categories</label>
                  <input
                    name="categories"
                    value={editForm.categories}
                    onChange={handleEditChange}
                    className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="e.g. Local, Premium"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Address *</label>
                  <input
                    name="address"
                    value={editForm.address}
                    onChange={handleEditChange}
                    className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="123 Main Street, Downtown"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={handleEditChange}
                    className="w-full min-h-[90px] px-3 py-2 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="Short description about the store"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Opening Time</label>
                    <input
                      name="openingTime"
                      value={editForm.openingTime}
                      onChange={handleEditChange}
                      className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                      placeholder="8:00 am - 8:00 pm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Closing Time</label>
                    <input
                      name="closingTime"
                      value={editForm.closingTime}
                      onChange={handleEditChange}
                      className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Cover Image URL *</label>
                  <input
                    name="imageUrl"
                    value={editForm.imageUrl}
                    onChange={handleEditChange}
                    className="w-full h-10 px-3 bg-[#F7F7F7] border border-[#EAECF0] rounded-md text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C62222] focus:border-transparent"
                    placeholder="https://example.com/cover.jpg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Or Upload Cover Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => setEditImageFile(event.target.files?.[0] ?? null)}
                    className="w-full text-sm text-gray-700"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 bg-[#C62222] text-white text-sm font-medium rounded-md hover:bg-[#A01B1B] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C62222] disabled:opacity-70"
                >
                  <Upload className="w-4 h-4" />
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>

                {editError && (
                  <p className="text-xs text-[#C62222]" role="alert">
                    {editError}
                  </p>
                )}
                {editMessage && (
                  <p className="text-xs text-[#16A34A]" role="status">
                    {editMessage}
                  </p>
                )}
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
