import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Input from '../components/ui/Input';

// Assets
// Removed decorative vector and background logo to avoid duplication
import iconMail from '../assets/contact/icon-mail.svg';
import iconChat from '../assets/contact/icon-chat.svg';
import iconPhone from '../assets/contact/icon-phone.svg';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins overflow-x-hidden">
      <Header />
      
      <main className="flex-1 w-full max-w-[1440px] mx-auto pt-0 relative flex flex-col items-start">

        {/* AutoWrapper2 - Title Section */}
        <div className="relative mt-[16px] lg:ml-[9px] w-full lg:w-[1386px] lg:h-[130px] px-4 lg:px-0">
            <div className="relative flex flex-col items-start lg:pr-[586px] lg:pl-[32px] w-full lg:w-[1386px] gap-[20px]">
                <div className="flex flex-col items-start self-stretch gap-[12px]">
                    <p className="text-[#C62222] text-[16px] font-semibold leading-[24px] font-poppins">Contact us</p>
                    <h1 className="text-[#101828] text-[32px] font-semibold leading-[44px] tracking-[-0.64px] font-poppins">Chat to our friendly team</h1>
                </div>
                <p className="text-[#667085] text-[20px] leading-[30px] font-poppins">
                    We’d love to hear from you. Please fill out this form or shoot us an email.
                </p>
            </div>
        </div>

        {/* Container - Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-[64px] mt-[24px] lg:ml-[10px] p-[32px] w-full lg:w-[1358px]">
            {/* Left Content */}
            <div className="flex flex-col grow items-start gap-[48px] w-full">
                {/* Email Row */}
                <div className="flex flex-col sm:flex-row items-start self-stretch gap-[32px]">
                    <div className="flex flex-col grow items-start gap-[16px]">
                         <img src={iconMail} alt="Email" className="w-[24px] h-[24px]" />
                         <div className="flex flex-col items-start self-stretch gap-[8px]">
                            <p className="text-[#101828] text-[20px] font-medium leading-[30px] font-poppins">Email</p>
                            <p className="text-[#667085] text-[16px] leading-[24px] font-poppins">Our friendly team is here to help.</p>
                         </div>
                         <a href="mailto:help@nightcrawlers.com" className="text-[#C62222] text-[16px] font-medium leading-[24px] font-poppins">help@nightcrawlers.com</a>
                    </div>
                    
                    <div className="flex flex-col grow items-start gap-[16px]">
                         <img src={iconChat} alt="Chat" className="w-[24px] h-[24px]" />
                         <div className="flex flex-col items-start self-stretch gap-[8px]">
                            <p className="text-[#101828] text-[20px] font-medium leading-[30px] font-poppins">Live chat</p>
                            <p className="text-[#667085] text-[16px] leading-[24px] font-poppins">Our friendly team is here to help.</p>
                         </div>
                         <a href="#" className="text-[#C62222] text-[16px] font-medium leading-[24px] font-poppins">Start new chat</a>
                    </div>
                </div>

                {/* Phone Row */}
                <div className="flex flex-col items-start self-stretch gap-[16px]">
                     <img src={iconPhone} alt="Phone" className="w-[24px] h-[24px]" />
                     <div className="flex flex-col items-start self-stretch gap-[8px]">
                        <p className="text-[#101828] text-[20px] font-medium leading-[30px] font-poppins">Phone</p>
                        <p className="text-[#667085] text-[16px] leading-[24px] font-poppins">Mon-Fri from 8am to 5pm.</p>
                     </div>
                     <a href="tel:+15550000000" className="text-[#C62222] text-[16px] font-medium leading-[24px] font-poppins">+1 (555) 000-0000</a>
                </div>
            </div>

            {/* Right Form */}
            <div className="flex flex-col items-start border border-[#EAECF0] rounded-[10px] shadow-[4px_4px_15px_2px_rgba(168,166,166,0.32)] bg-[#F9FAFB] px-[24px] md:px-[92px] py-[39px] gap-[32px] w-full lg:max-w-[600px] overflow-hidden">
                <div className="flex flex-col items-start self-stretch gap-[24px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="flex flex-col items-start gap-[6px] w-full">
                            <p className="text-[#344054] text-[14px] font-medium leading-[20px] font-poppins">First name</p>
                            <Input 
                              type="text"
                              placeholder="First name"
                              className="w-full bg-white border border-[#D0D5DD] rounded-[4px] px-[15px] py-[11px] text-[16px] leading-[24px]"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-[6px] w-full">
                            <p className="text-[#344054] text-[14px] font-medium leading-[20px] font-poppins">Last name</p>
                            <Input 
                              type="text"
                              placeholder="Last name"
                              className="w-full bg-white border border-[#D0D5DD] rounded-[4px] px-[15px] py-[11px] text-[16px] leading-[24px]"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-start self-stretch gap-[6px]">
                        <p className="text-[#344054] text-[14px] font-medium leading-[20px] font-poppins">Email</p>
                        <Input
                          type="email"
                          placeholder="you@gmail.com"
                          className="w-full bg-white border border-[#D0D5DD] rounded-[4px] px-[15px] py-[11px] text-[16px] leading-[24px]"
                        />
                    </div>

                    <div className="flex flex-col items-start self-stretch h-[154px] gap-[6px]">
                        <p className="text-[#344054] text-[14px] font-medium leading-[20px] font-poppins">Message</p>
                        <textarea className="flex grow items-center self-stretch gap-[8px] border border-[#D0D5DD] rounded-[4px] shadow-xs bg-white px-[13px] py-[9px] resize-none outline-none"></textarea>
                    </div>

                    <div className="flex items-center self-stretch gap-[12px]">
                        <div className="w-[20px] h-[20px] border border-[#D0D5DD] rounded-[6px] bg-white overflow-hidden flex items-center justify-center relative">
                            <input type="checkbox" className="absolute w-full h-full opacity-0 cursor-pointer z-10" />
                            <div className="hidden checked:block w-3 h-3 bg-[#C62222] rounded-[2px]"></div>
                        </div>
                        <p className="grow text-[16px] leading-[24px] font-poppins">
                            <span className="text-[#667085]">You agree to our friendly </span>
                            <span className="text-[#C62222] underline cursor-pointer">privacy policy</span>
                            <span className="text-[#667085]">.</span>
                        </p>
                    </div>
                </div>

                <button className="flex items-center self-stretch justify-center gap-[8px] border border-[#C62222] rounded-[4px] shadow-xs bg-[#C62222] px-[19px] py-[11px] cursor-pointer hover:bg-[#a51d1d] transition-colors">
                    <p className="text-white text-[20px] font-medium leading-[24px] font-poppins">Send message</p>
                </button>
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
