import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pb-12">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <p className="text-[#C62222] font-semibold text-sm mb-2">Contact us</p>
              <h1 className="text-[#101828] text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                Chat to our friendly team
              </h1>
              <p className="text-[#667085] text-base md:text-lg">
                We'd love to hear from you. Please fill out this form or shoot us an email.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-4 space-y-8">
                {/* Email and Live Chat Row */}
                <div className="flex gap-24">
                  {/* Email */}
                  <div className="flex-1">
                    <div className="flex-shrink-0 mb-3">
                      <Mail className="w-5 h-5 text-[#C62222]" />
                    </div>
                    <div>
                      <h3 className="text-[#101828] text-lg font-bold mb-1">Email</h3>
                      <p className="text-[#667085] text-sm mb-1 whitespace-nowrap">Our friendly team is here to help.</p>
                      <a href="mailto:help@nightcrawlers.com" className="text-[#C62222] font-semibold text-sm">
                        help@nightcrawlers.com
                      </a>
                    </div>
                  </div>

                  {/* Live Chat */}
                  <div className="flex-1">
                    <div className="flex-shrink-0 mb-3">
                      <MessageCircle className="w-5 h-5 text-[#C62222]" />
                    </div>
                    <div>
                      <h3 className="text-[#101828] text-lg font-bold mb-1">Live chat</h3>
                      <p className="text-[#667085] text-sm mb-1 whitespace-nowrap">Our friendly team is here to help.</p>
                      <a href="#" className="text-[#C62222] font-semibold text-sm">
                        Start new chat
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex-shrink-0 mb-3">
                    <Phone className="w-5 h-5 text-[#C62222]" />
                  </div>
                  <div>
                    <h3 className="text-[#101828] text-lg font-bold mb-1">Phone</h3>
                    <p className="text-[#667085] text-sm mb-1 whitespace-nowrap">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+15550000000" className="text-[#C62222] font-semibold text-sm">
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>
              </div>

              {/* Spacer Column */}
              <div className="hidden lg:block lg:col-span-3"></div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-5">
                <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-xl shadow-sm border border-[#EAECF0]">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-[#344054]">First name</label>
                        <Input 
                          placeholder="First name" 
                          className="bg-white border-[#D0D5DD] h-9 text-sm"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-[#344054]">Last name</label>
                        <Input 
                          placeholder="Last name" 
                          className="bg-white border-[#D0D5DD] h-9 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#344054]">Email</label>
                      <Input 
                        type="email" 
                        placeholder="you@gmail.com" 
                        className="bg-white border-[#D0D5DD] h-9 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#344054]">Message</label>
                      <textarea 
                        className="w-full min-h-[100px] px-3 py-2 bg-white border border-[#D0D5DD] rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#C62222] focus:border-[#C62222] resize-y text-sm"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="flex h-5 items-center">
                        <input
                          id="privacy-policy"
                          name="privacy-policy"
                          type="checkbox"
                          className="h-3.5 w-3.5 rounded border-gray-300 text-[#C62222] focus:ring-[#C62222]"
                        />
                      </div>
                      <div className="text-xs leading-5">
                        <label htmlFor="privacy-policy" className="text-[#667085]">
                          You agree to our friendly <a href="#" className="font-semibold text-[#667085] underline decoration-solid">privacy policy</a>.
                        </label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#C62222] hover:bg-[#a51d1d] text-white py-2.5 rounded-lg text-sm font-semibold shadow-sm"
                    >
                      Send message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
