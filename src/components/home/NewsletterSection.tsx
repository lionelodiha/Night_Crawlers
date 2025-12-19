import React, { useState } from 'react';
import { NewsletterForm } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';

const NewsletterSection: React.FC = () => {
  const [formData, setFormData] = useState<NewsletterForm>({
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for subscribing!');
      setFormData({ email: '' });
    }, 2000);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-night-dark-900 mb-4 leading-tight">
              Exclusive Menus & <br /> Promotions
            </h2>
            <p className="text-lg text-night-gray-600 mb-8 leading-relaxed">
               Join the Night Crawlers tribe! Be the first to know about fresh deals,
               new food spots, and exclusive night-time treats.
            </p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="flex-1 bg-gray-50 border-gray-200"
                />
                <Button 
                  type="submit" 
                  variant="primary"
                  disabled={isSubmitting}
                  className="px-8"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-[400px]">
              <img 
                 src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Happy%20delivery%20man%20in%20red%20uniform%20holding%20pizza%20boxes%20and%20phone%2C%20studio%20shot%2C%20white%20background%2C%20professional%20photography&image_size=portrait"
                 alt="Delivery Person"
                 className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;