import React, { useState } from 'react';
import { X } from 'lucide-react';
import pinIcon from '../../assets/location-pin-red.svg';

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAddress: (address: string) => void;
}

const addresses = [
  'Nmdpra HQ',
  'Nmdpra Jabi office',
  'Nigerian Midstream and Downstream Petroleum Regulatory Authority'
];

const AddressModal: React.FC<AddressModalProps> = ({ isOpen, onClose, onSelectAddress }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredAddresses = addresses.filter(addr => 
    addr.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredAddresses.length > 0) {
        onSelectAddress(filteredAddresses[0]);
      } else {
        onSelectAddress('');
      }
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-[16px] w-[500px] p-[24px] shadow-xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[20px] font-semibold text-[#222222]">Delivery Address</h2>
          <button 
            onClick={onClose}
            className="text-[#667085] hover:text-[#222222] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-[16px]">
          <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#C62222]">
            <img src={pinIcon} alt="" className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Nmdp..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full h-[48px] pl-[48px] pr-[16px] bg-[#F9FAFB] border border-[#EAECF0] rounded-[8px] text-[16px] text-[#222222] placeholder:text-[#667085] outline-none focus:border-[#C62222] transition-colors"
          />
        </div>

        {/* Address List */}
        <div className="flex flex-col gap-[8px] max-h-[300px] overflow-y-auto">
          {filteredAddresses.length > 0 ? (
            filteredAddresses.map((address, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelectAddress(address);
                  onClose();
                }}
                className="w-full text-left px-[16px] py-[12px] hover:bg-[#F9FAFB] rounded-[8px] transition-colors text-[14px] text-[#222222]"
              >
                {address}
              </button>
            ))
          ) : (
            <div className="text-center py-[24px] text-[#667085] text-[14px]">
              No address found
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AddressModal;
