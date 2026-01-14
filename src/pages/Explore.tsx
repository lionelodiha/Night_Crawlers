import React, { useEffect, useRef, useState } from 'react';
import { Search, ChevronDown, ShoppingBasket, Pill, Disc, Utensils, Wine, X, Clock, Heart, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AddressModal from '../components/modals/AddressModal';
import { useCart } from '../context/CartContext';
import pinIcon from '../assets/location-pin-red.svg';
import { BusinessType, VendorStore, getStoresForExplore } from '../lib/mockBackend';
// import promoBanner from '../assets/signin-image.png'; // Using placeholder for now, ideally would be specific promo image

interface CategoryItemProps {
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  blobShape: string;
  iconColor?: string;
  onClick?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, icon, bgColor, blobShape, iconColor = "text-[#222222]", onClick }) => {
  return (
    <div className="flex flex-col items-center gap-[8px] sm:gap-[12px]" onClick={onClick}>
      <div 
        className={`w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] md:w-[110px] md:h-[110px] flex items-center justify-center ${bgColor} transition-transform hover:scale-105 cursor-pointer`}
        style={{ borderRadius: blobShape }}
      >
        <div className={`${iconColor}`}>
            {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </div>
      </div>
      <span className="text-[#222222] text-[12px] sm:text-[13px] md:text-[14px] font-medium leading-[18px] sm:leading-[20px] text-center">{name}</span>
    </div>
  );
};

interface StoreCardProps {
  name: string;
  rating: number;
  time: string;
  image: string;
  onClick: () => void;
}

const StoreCard: React.FC<StoreCardProps> = ({ name, rating, time, image, onClick }) => {
  return (
    <div className="flex flex-col gap-[8px] sm:gap-[12px] w-full max-w-[280px] group cursor-pointer" onClick={onClick}>
      <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <button className="absolute top-[8px] right-[8px] sm:top-[12px] sm:right-[12px] w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <Heart size={14} className="text-[#C62222]" />
        </button>
      </div>
      <div className="flex flex-col gap-[3px] sm:gap-[4px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[#222222] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24px]">{name}</h3>
          <div className="flex items-center gap-[3px] sm:gap-[4px]">
            <span className="text-[#222222] text-[11px] sm:text-[12px] font-medium">{rating}</span>
            <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] bg-[#FFD700] rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-[4px] sm:gap-[6px] text-[#667085]">
          <Clock size={12} />
          <span className="text-[11px] sm:text-[12px] leading-[16px] sm:leading-[18px]">{time}</span>
        </div>
      </div>
    </div>
  );
};

const Explore: React.FC = () => {
  const navigate = useNavigate();
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, removeFromCart, clearCart, cartTotal } = useCart();
  const promoContainerRef = useRef<HTMLDivElement | null>(null);
  const [promoIndex, setPromoIndex] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const storesSectionRef = useRef<HTMLDivElement | null>(null);

  const handleOpenAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const handleCloseAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const handleSelectAddress = (address: string) => {
    setSelectedAddress(address);
    setIsAddressModalOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleStoreClick = (store: VendorStore) => {
    navigate('/vendor-details', { state: store });
  };

  const filteredStores = getStoresForExplore(
    selectedAddress,
    selectedCategory === 'All' ? undefined : (selectedCategory as BusinessType),
  );
  const fallbackStores = getStoresForExplore(
    null,
    selectedCategory === 'All' ? undefined : (selectedCategory as BusinessType),
  );
  const shouldUseFallback = Boolean(selectedAddress) && filteredStores.length === 0;
  const displayedStores = shouldUseFallback ? fallbackStores : filteredStores;

  const handleCategoryClick = (name: string) => {
    setSelectedCategory(name);
    if (storesSectionRef.current) {
      storesSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const container = promoContainerRef.current;
    if (!container) return;
    const slides = container.querySelectorAll<HTMLElement>('.promo-slide');
    if (!slides.length) return;

    // Ensure we start from the first slide when showing the carousel
    setPromoIndex(0);
    container.scrollTo({ left: slides[0].offsetLeft, behavior: 'auto' });

    const id = window.setInterval(() => {
      setPromoIndex((prev) => {
        const next = (prev + 1) % slides.length;
        const target = slides[next];
        container.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
        return next;
      });
    }, 4000);

    return () => window.clearInterval(id);
  }, [selectedAddress]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins relative overflow-x-hidden">
        <Header onCartClick={toggleCart} />

        {/* Main Content */}
        <main className="flex-grow w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[60px] pt-[16px] sm:pt-[20px] pb-[80px] sm:pb-[100px] flex flex-col lg:flex-row gap-[24px] lg:gap-[40px]">
            
            {/* Left Column (Main) */}
            <div className={`flex-grow transition-all duration-300 ${isCartOpen ? 'lg:mr-[400px]' : ''}`}>
                {/* Search and Address Row */}
                <div className="flex flex-row items-center justify-between gap-[10px] md:gap-[20px] mb-[40px] md:mb-[60px]">
                    {/* Search Bar */}
                    <div className="flex items-center flex-1 w-full max-w-[640px] md:max-w-[720px] h-[40px] border border-[#D0D5DD] rounded-[4px] overflow-hidden bg-white/50">
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-grow h-full px-[12px] md:px-[16px] text-[12px] md:text-[13px] text-[#667085] bg-transparent outline-none placeholder:text-[#98A2B3] min-w-0"
                        />
                        <button className="w-[36px] md:w-[40px] h-full bg-[#C62222] flex items-center justify-center text-white hover:bg-[#A01B1B] transition-colors shrink-0">
                            <Search size={16} />
                        </button>
                    </div>

                    {/* Address Selector */}
                    <button 
                        onClick={handleOpenAddressModal}
                        className="flex items-center gap-[6px] md:gap-[8px] cursor-pointer hover:opacity-80 shrink-0"
                        aria-label="Select address"
                    >
                        <img src={pinIcon} alt="" className="w-[18px] h-[18px]" />
                        <span className="text-[#344054] text-[13px] md:text-[15px] font-medium hidden sm:block max-w-[220px] truncate">
                          {selectedAddress || 'Select address'}
                        </span>
                        <span className="text-[#344054] text-[13px] md:text-[15px] font-medium sm:hidden">
                          {selectedAddress ? 'Address set' : 'Address'}
                        </span>
                        <ChevronDown className="text-[#344054]" size={14} />
                    </button>
                </div>

                {/* Explore Categories */}
                <div className="mb-[40px] md:mb-[60px]">
                    <h2 className="text-[18px] md:text-[20px] font-medium text-[#222222] mb-[24px] md:mb-[32px]">Explore Categories</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-y-[26px] lg:gap-y-[34px] gap-x-[12px] sm:gap-x-[14px] md:flex md:flex-row md:flex-nowrap md:justify-between md:gap-0">
                        <div className="w-full min-w-0 flex justify-center md:flex-1 md:justify-center">
                            <CategoryItem 
                                name="Groceries" 
                                icon={<ShoppingBasket />} 
                                bgColor="bg-[#FEE4E2]" 
                                blobShape="45% 55% 40% 60% / 55% 45% 55% 45%"
                                iconColor="text-[#C62222]"
                                onClick={() => handleCategoryClick('Groceries')}
                            />
                        </div>
                        <div className="w-full min-w-0 flex justify-center md:flex-1 md:justify-center">
                            <CategoryItem 
                                name="Pharmacy" 
                                icon={<Pill />} 
                                bgColor="bg-[#D1FADF]" 
                                blobShape="55% 45% 60% 40% / 40% 60% 40% 60%"
                                iconColor="text-[#039855]"
                                onClick={() => handleCategoryClick('Pharmacy')}
                            />
                        </div>
                        <div className="w-full min-w-0 flex justify-center md:flex-1 md:justify-center">
                            <CategoryItem 
                                name="Clubs/Lounges" 
                                icon={<Disc />} 
                                bgColor="bg-[#D9D6FE]" 
                                blobShape="40% 60% 55% 45% / 55% 45% 55% 45%"
                                iconColor="text-[#7A5AF8]"
                                onClick={() => handleCategoryClick('Clubs/Lounges')}
                            />
                        </div>
                        <div className="w-full min-w-0 flex justify-center md:flex-1 md:justify-center">
                            <CategoryItem 
                                name="Food" 
                                icon={<Utensils />} 
                                bgColor="bg-[#FEE4E2]" 
                                blobShape="60% 40% 45% 55% / 45% 55% 45% 55%"
                                iconColor="text-[#C62222]"
                                onClick={() => handleCategoryClick('Food')}
                            />
                        </div>
                        <div className="w-full min-w-0 flex justify-center md:flex-1 md:justify-center">
                            <CategoryItem 
                                name="Drinks" 
                                icon={<Wine />} 
                                bgColor="bg-[#FEF0C7]" 
                                blobShape="50% 50% 60% 40% / 50% 60% 40% 60%"
                                iconColor="text-[#DC6803]"
                                onClick={() => handleCategoryClick('Drinks')}
                            />
                        </div>
                    </div>
                </div>

                <>
                  {/* All Stores */}
                  <div className="mb-[40px] md:mb-[60px]" ref={storesSectionRef}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h2 className="text-[18px] md:text-[20px] font-medium text-[#222222] mb-[16px] sm:mb-[24px] md:mb-[32px]">
                          {selectedCategory === 'All' ? 'All Stores' : `${selectedCategory} Stores`}
                        </h2>
                        {!selectedAddress && (
                          <p className="text-[12px] sm:text-[13px] text-[#667085]">
                            Showing all stores. Select an address to filter by delivery area.
                          </p>
                        )}
                        {selectedAddress && shouldUseFallback && (
                          <p className="text-[12px] sm:text-[13px] text-[#667085]">
                            No exact matches for this address yet. Showing all stores.
                          </p>
                        )}
                      </div>
                      {displayedStores.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] md:gap-[20px] lg:gap-[24px] justify-items-center">
                            {displayedStores.map((store) => (
                                <StoreCard 
                                    key={store.id} 
                                    name={store.name}
                                    rating={4.5}
                                    time="15-25 mins"
                                    image={store.imageUrl}
                                    onClick={() => handleStoreClick(store)}
                                />
                            ))}
                        </div>
                      ) : (
                        <div className="text-center text-[#667085] text-sm mt-6">
                          No stores available for {selectedCategory}.
                        </div>
                      )}
                  </div>

                  {/* Promos */}
                  <div className="mb-[40px]">
                      <h2 className="text-[18px] md:text-[20px] font-medium text-[#222222] mb-[24px] md:mb-[32px]">Promos</h2>
                      <div className="relative w-full overflow-hidden rounded-[12px] md:rounded-[16px]">
                        <div ref={promoContainerRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4">
                            {[1, 2, 3].map((_, idx) => (
                                <div key={idx} className="promo-slide snap-center shrink-0 w-full md:w-[80%] lg:w-[60%] h-[180px] sm:h-[200px] md:h-[250px] rounded-[12px] md:rounded-[16px] overflow-hidden relative">
                                    <img 
                                        src={`https://picsum.photos/seed/promo${idx}/800/400`} 
                                        alt={`Promo ${idx + 1}`} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <h3 className="text-white text-2xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
                                            {idx === 0 ? '50% OFF KFC BUCKETS' : idx === 1 ? 'FREE DELIVERY' : 'BUY 1 GET 1 FREE'}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                      </div>
                  </div>
                </>
            </div>

            {/* Right Cart Drawer */}
            <div 
                className={`fixed top-0 right-0 h-full w-[320px] sm:w-[360px] md:w-[400px] bg-white shadow-[-4px_0_15px_rgba(0,0,0,0.1)] z-40 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full p-[24px]">
                    {/* Cart Header */}
                    <div className="flex items-center justify-between mb-[32px]">
                        <div className="flex items-center gap-[8px]">
                            <h2 className="text-[#C62222] text-[20px] font-medium">Cart</h2>
                            <div className="w-[20px] h-[20px] bg-[#C62222] rounded-full flex items-center justify-center text-white text-[12px] font-bold">{cartItems.length}</div>
                        </div>
                        <button onClick={toggleCart} className="text-[#667085] hover:text-[#222222]">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-grow overflow-y-auto">
                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-start h-full text-center pt-6">
                                <ShoppingBasket size={48} className="text-[#C62222] mb-2" />
                                <p className="text-[#667085] text-[12px]">Your Cart is empty</p>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="bg-[#F9FAFB] p-[12px] rounded-[8px] flex gap-[12px] mb-[16px]">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-[60px] h-[60px] object-cover rounded-[4px]"
                                    />
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-[#222222] text-[14px] font-medium truncate w-[180px]">{item.name}</h3>
                                            <span className="text-[#667085] text-[12px]">{item.quantity} Item{item.quantity > 1 ? 's' : ''}</span>
                                        </div>
                                        <div className="flex justify-between items-end mt-[4px]">
                                            <p className="text-[#667085] text-[12px] leading-[16px]">
                                                ₦{item.price.toLocaleString()}
                                            </p>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-[#C62222] hover:text-[#A01B1B] p-1"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        
                        {cartItems.length > 0 && (
                            <div className="flex items-center justify-between mb-[24px] mt-4 border-t pt-4">
                                <span className="text-[#667085] text-[14px] font-medium">Total: ₦{cartTotal.toLocaleString()}</span>
                                <div className="flex items-center gap-[12px]">
                                    <button className="h-[36px] px-[16px] bg-[#C62222] text-white text-[12px] font-medium rounded-[4px] hover:bg-[#A01B1B] transition-colors">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Clear Cart */}
                    {cartItems.length > 0 && (
                        <div className="mt-auto flex justify-end">
                            <button 
                                onClick={clearCart}
                                className="h-[32px] px-[12px] bg-[#FEE4E2] text-[#C62222] text-[12px] font-medium rounded-[4px] hover:bg-[#FECDCA] transition-colors"
                            >
                                Clear Cart
                            </button>
                        </div>
                    )}
                </div>
            </div>

        </main>

        <Footer />

        {/* Address Modal */}
        <AddressModal 
          isOpen={isAddressModalOpen}
          onClose={handleCloseAddressModal}
          onSelectAddress={handleSelectAddress}
        />
    </div>
  );
};

export default Explore;
