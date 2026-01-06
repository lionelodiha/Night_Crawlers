import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { AddRestaurantForm as IAddRestaurantForm } from '../../types';

interface AddRestaurantFormProps {
  onSubmit?: (formData: IAddRestaurantForm) => void;
}

const AddRestaurantForm: React.FC<AddRestaurantFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<IAddRestaurantForm>({
    name: '',
    categories: '',
    address: '',
    description: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        coverImage: file,
      }));

      // Create image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.categories || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    }

    // Reset form
    setFormData({
      name: '',
      categories: '',
      address: '',
      description: '',
    });
    setImagePreview(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Add Restaurant
        </h2>
        <p className="text-gray-600">
          Add your restaurant details and cover image
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Restaurant Name */}
        <Input
          label="Restaurant Name *"
          name="name"
          type="text"
          placeholder="Enter restaurant name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        {/* Food Categories */}
        <Input
          label="Food Categories *"
          name="categories"
          type="text"
          placeholder="e.g., African, Italian, Seafood"
          value={formData.categories}
          onChange={handleInputChange}
          required
        />

        {/* Address */}
        <Input
          label="Address *"
          name="address"
          type="text"
          placeholder="Enter restaurant address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

        {/* Description */}
        <div className="w-full">
          <label className="block text-sm font-medium text-night-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Tell customers about your restaurant"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-night-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-night-red-500 focus:border-transparent transition-colors duration-200 resize-none"
          />
        </div>

        {/* Cover Image URL (text) */}
        <Input
          label="Cover Image URL *"
          name="coverImageUrl"
          type="text"
          placeholder="https://example.com/cover.jpg"
          value={(formData as any).coverImageUrl || ''}
          onChange={(e: any) => setFormData(prev => ({ ...prev, coverImage: e.target.value }))}
          className="bg-gray-100"
          required
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          className="w-full py-3 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
          </svg>
          Add Restaurant
        </Button>
      </form>
    </div>
  );
};

export default AddRestaurantForm;
