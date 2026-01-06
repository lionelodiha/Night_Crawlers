import React from 'react';
import { Search, MapPin, ChevronDown, Clock, Plus, Trash2, ShoppingBasket, Minus, ChevronLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useCart } from '../context/CartContext';

// Mock Data for Menu Items
const menuItems = [
  { id: 1, name: 'Jollof Rice', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, name: 'Fried Rice', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, name: 'Turkey', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, name: 'Amala', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, name: 'Ewedu', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, name: 'Gbegiri', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 7, name: 'Jollof Rice', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 8, name: 'Fried Rice', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 9, name: 'Jollof Rice', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 10, name: 'Fried Rice', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 11, name: 'Jollof Rice', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
  { id: 12, name: 'Fried Rice', description: '1 portion of Classic West African dish, richly spiced and cooked in a flavorful tomato', price: 2500, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
];

const VendorDetails: React.FC = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  const incrementCartItem = (id: number) => {
    const item = cartItems.find(i => i.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const decrementItem = (id: number) => {
    const item = cartItems.find(i => i.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins relative overflow-x-hidden">
      <Header />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-[24px] md:px-[60px] pt-[0px] pb-[100px]">
        
        {/* Top Navigation Row: Search and Location */}
        <div className="flex flex-row items-center justify-between gap-[10px] md:gap-[20px] mb-[20px] sm:mb-[24px] mt-[20px] sm:mt-[24px]">
             <div className="flex-1 flex items-center h-[36px] sm:h-[40px] border border-[#D0D5DD] rounded-[6px] sm:rounded-[8px] overflow-hidden bg-white max-w-[400px]">
                <input
                  type="text"
                  placeholder="Search here"
                  className="flex-grow h-full px-[12px] sm:px-[16px] text-[12px] sm:text-[13px] text-[#667085] bg-transparent outline-none placeholder:text-[#98A2B3]"
                />
                <button className="w-[36px] sm:w-[40px] h-full bg-[#C62222] flex items-center justify-center text-white hover:bg-[#A01B1B] transition-colors">
                  <Search size={16} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
              <div className="flex items-center gap-[3px] sm:gap-[4px]">
                <MapPin className="text-[#C62222]" size={16} fill="#C62222" />
                <span className="text-[#222222] text-[13px] sm:text-[15px] font-semibold hidden sm:inline">Nmdpra HQ</span>
                <span className="text-[#222222] text-[13px] sm:text-[15px] font-semibold sm:hidden">Address</span>
                <ChevronDown className="text-[#222222]" size={14} />
              </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-[3px] sm:gap-[4px] text-[#667085] text-[12px] sm:text-[14px] mb-[20px] sm:mb-[24px]">
            <ChevronLeft size={12} />
            <span className="text-[#667085] font-medium cursor-pointer hover:text-[#C62222]">Food</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[40px]">
          {/* Left Column (Banner, Info, Menu) */}
          <div className="flex-grow w-full lg:w-3/4">
            
            {/* Vendor Banner */}
            <div className="w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-[12px] sm:rounded-[16px] overflow-hidden mb-[20px] sm:mb-[24px] relative">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                alt="Amala Central Foods" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vendor Info */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-[16px] mb-[32px] sm:mb-[40px]">
            <div>
              <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#222222] mb-[12px] sm:mb-[16px]">Amala Central Foods</h1>
              <div className="flex items-center gap-[20px] sm:gap-[32px]">
                <div className="flex flex-col items-center gap-[3px] sm:gap-[4px]">
                  <Clock size={16} className="text-[#C62222]" />
                  <span className="text-[#667085] text-[10px] sm:text-[12px]">10-15 mins</span>
                </div>
                <div className="flex flex-col items-center gap-[3px] sm:gap-[4px]">
                  <span className="text-[#C62222] font-medium text-[12px] sm:text-[14px]">₦ 800</span>
                  <span className="text-[#667085] text-[10px] sm:text-[12px]">Delivery</span>
                </div>
              </div>
            </div>
            <div className="text-right sm:text-left">
              <span className="text-[#667085] text-[12px] sm:text-[14px]">Opening Time</span>
              <p className="text-[#222222] text-[12px] sm:text-[14px] font-medium">8:00 am - 8:00 pm</p>
            </div>
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap items-center gap-[12px] sm:gap-[20px] md:gap-[32px] border-b border-[#EAECF0] mb-[32px] sm:mb-[40px] pb-[12px] sm:pb-[16px]">
            {['All', 'Pasta', 'Soup', 'Swallow', 'Protein'].map((cat, idx) => (
              <button 
                key={cat}
                className={`text-[12px] sm:text-[14px] font-medium transition-colors ${idx === 0 ? 'text-[#C62222] bg-[#FEE4E2] px-[12px] sm:px-[16px] py-[4px] sm:py-[6px] rounded-[4px]' : 'text-[#667085] hover:text-[#222222]'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] md:gap-[24px]">
            {menuItems.map((item) => (
              <div key={item.id} className="flex gap-[12px] sm:gap-[16px] p-[12px] sm:p-[16px] border border-[#EAECF0] rounded-[8px] sm:rounded-[12px] bg-white hover:shadow-sm transition-shadow">
                <img src={item.image} alt={item.name} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover rounded-[6px] sm:rounded-[8px]" />
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-[14px] sm:text-[16px] font-bold text-[#222222] mb-[3px] sm:mb-[4px]">{item.name}</h3>
                    <p className="text-[#667085] text-[10px] sm:text-[12px] leading-[14px] sm:leading-[18px] line-clamp-2">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-[8px] sm:mt-[12px]">
                    <span className="text-[#222222] text-[12px] sm:text-[14px] font-bold">₦ {item.price.toLocaleString()}</span>
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] bg-[#F9FAFB] rounded-full flex items-center justify-center hover:bg-[#EAECF0] transition-colors"
                    >
                      <Plus size={14} className="text-[#667085]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          </div>

          {/* Right Column: Your Order (Persistent) */}
          <div className="w-full lg:w-1/4 min-w-[280px] sm:min-w-[320px]">
            <div className="bg-[#FAFAFA] rounded-[12px] sm:rounded-[16px] p-[16px] sm:p-[24px] sticky top-[100px] sm:top-[120px] flex flex-col min-h-[280px] sm:min-h-[300px] border border-[#EAECF0]">
              <div className="mb-[16px] sm:mb-[24px]">
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#222222]">Your Order</h2>
              {cartItems.length > 0 && (
                 <p className="text-[#667085] text-[12px] sm:text-[14px] mt-1">{cartItems.length} items</p>
              )}
            </div>
            
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center w-full py-6 sm:py-8">
                <ShoppingBasket size={36} className="text-[#C62222] mb-[12px] sm:mb-[16px]" />
                <p className="text-[#667085] text-[12px] sm:text-[14px]">Your Cart is empty</p>
              </div>
            ) : (
              <div className="w-full flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-[10px] sm:gap-[12px] w-full">
                    {/* Item Image */}
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] object-cover rounded-[6px] sm:rounded-[8px]"
                    />
                    
                    {/* Item Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h3 className="text-[#222222] text-[12px] sm:text-[14px] font-bold truncate w-[100px] sm:w-[140px]">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#C62222] hover:text-[#A01B1B] transition-colors"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                      
                      <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                        <span className="text-[#667085] text-[10px] sm:text-[12px]">₦ {item.price.toLocaleString()}</span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-[8px] sm:gap-[12px]">
                          <button 
                            onClick={() => decrementItem(item.id)}
                            className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-[#F2F4F7] rounded-[3px] sm:rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#EAECF0] transition-colors"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-[#222222] text-[10px] sm:text-[12px] font-medium min-w-[14px] sm:min-w-[16px] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => incrementCartItem(item.id)}
                            className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-[#F2F4F7] rounded-[3px] sm:rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#EAECF0] transition-colors"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Footer Section */}
                <div className="mt-[20px] sm:mt-[24px] pt-[16px] sm:pt-[24px] border-t border-[#EAECF0] w-full">
                   <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[#667085] text-[12px] sm:text-[14px]">Total:</span>
                        <span className="text-[#222222] text-[14px] sm:text-[16px] md:text-[18px] font-bold">₦{cartTotal.toLocaleString()}</span>
                      </div>
                      <button className="h-[36px] sm:h-[40px] md:h-[44px] px-[16px] sm:px-[20px] md:px-[24px] bg-[#C62222] text-white text-[12px] sm:text-[14px] font-medium rounded-[4px] hover:bg-[#A01B1B] transition-colors">
                        Proceed to Checkout
                      </button>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorDetails;
