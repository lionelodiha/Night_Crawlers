import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { VENDORS } from '../../utils/constants';

import kfcImg from '../../../.figma/image/mje79tfs-ebqiolr.png';
import chickenRepublicImg from '../../../.figma/image/mje79tft-mnpk82m.png';
import dominosImg from '../../../.figma/image/mje79tfy-zdt3g00.png';
import kilimanjaroImg from '../../../.figma/image/mje79tfy-vnfduy8.png';
import pizzaHutImg from '../../../.figma/image/mje79tfy-l6ekoeg.png';

const VendorShowcase: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1386px] mx-auto h-auto min-h-[753px] gap-[120px] py-16">
      <div className="flex items-center justify-between w-full px-8">
        <h2 className="text-[#222222] text-[32px] font-semibold leading-[40px] tracking-normal font-poppins w-[299px]">
          Order Tasty Meals through us
        </h2>
        <div className="relative w-[233px] h-[30px]">
          <Link to="/vendors" className="absolute top-[2px] left-[-26px] w-[236px] h-[27px] text-center text-[#c62222] text-[20px] font-semibold tracking-normal font-poppins hover:underline">
            Explore all Restaurants
          </Link>
          <ChevronRight className="absolute top-[5px] left-[209px] w-5 h-5 text-[#c62222]" strokeWidth={3} />
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-[60px]">
        {/* Row 1: KFC, Chicken Republic, Dominos */}
        <div className="flex justify-center items-center w-full gap-[274px]">
            <div className="flex flex-col items-center gap-[14px]">
              <div className="w-[158px] h-[167px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300">
                <img src={kfcImg} alt="KFC" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#c62222] text-[24px] font-medium leading-[36px] tracking-normal font-poppins m-0 text-center">
                KFC
              </p>
            </div>

            <div className="flex flex-col items-center gap-[14px]">
              <div className="w-[158px] h-[167px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300">
                <img src={chickenRepublicImg} alt="Chicken Republic" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#c62222] text-[24px] font-medium leading-[36px] tracking-normal font-poppins m-0 text-center">
                Chicken Republic
              </p>
            </div>

            <div className="flex flex-col items-center gap-[14px]">
              <div className="w-[158px] h-[167px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300">
                <img src={dominosImg} alt="Dominos Pizza" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#c62222] text-[24px] font-medium leading-[36px] tracking-normal font-poppins m-0 text-center">
                Dominos Pizza
              </p>
            </div>
        </div>

        {/* Row 2: Kilimanjaro, Pizza Hut */}
        <div className="flex justify-center items-center w-full gap-[274px]">
            <div className="flex flex-col items-center gap-[14px]">
              <div className="w-[158px] h-[167px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300">
                <img src={kilimanjaroImg} alt="Killimanjaro" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#c62222] text-[24px] font-medium leading-[36px] tracking-normal font-poppins m-0 text-center">
                Killimanjaro
              </p>
            </div>

            <div className="flex flex-col items-center gap-[14px]">
              <div className="w-[158px] h-[167px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300">
                <img src={pizzaHutImg} alt="Pizza Hut" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#c62222] text-[24px] font-medium leading-[36px] tracking-normal font-poppins m-0 text-center">
                Pizza Hut
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VendorShowcase;