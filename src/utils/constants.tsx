import React from 'react';
import { Vendor, Feature } from '../types';
import { Phone, Clock, Award } from 'lucide-react';

export const VENDORS: Vendor[] = [
  {
    id: '1',
    name: 'KFC',
    logo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=KFC%20restaurant%20logo%2C%20red%20and%20white%20colors%2C%20circular%20format%2C%20professional%20food%20delivery%20app%20style&image_size=square',
    altText: 'KFC restaurant logo'
  },
  {
    id: '2',
    name: 'Chicken Republic',
    logo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Chicken%20Republic%20restaurant%20logo%2C%20warm%20colors%2C%20circular%20format%2C%20professional%20food%20delivery%20app%20style&image_size=square',
    altText: 'Chicken Republic restaurant logo'
  },
  {
    id: '3',
    name: 'Dominos Pizza',
    logo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Domino%27s%20Pizza%20restaurant%20logo%2C%20blue%20and%20red%20colors%2C%20circular%20format%2C%20professional%20food%20delivery%20app%20style&image_size=square',
    altText: 'Dominos Pizza restaurant logo'
  },
  {
    id: '4',
    name: 'Kilimanjaro',
    logo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Kilimanjaro%20restaurant%20logo%2C%20African%20inspired%20design%2C%20earth%20tones%2C%20circular%20format%2C%20professional%20food%20delivery%20app%20style&image_size=square',
    altText: 'Kilimanjaro restaurant logo'
  },
  {
    id: '5',
    name: 'Haansa',
    logo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Haansa%20restaurant%20logo%2C%20modern%20design%2C%20appetizing%20colors%2C%20circular%20format%2C%20professional%20food%20delivery%20app%20style&image_size=square',
    altText: 'Haansa restaurant logo'
  }
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Easy to Order',
    description: 'From anywhere, whenever. Choose your meal and place your order—simple and convenient.',
    icon: <Phone className="w-12 h-12 text-night-red-500" />
  },
  {
    id: '2',
    title: 'Fast Delivery',
    description: 'From pickup to your doorstep, we deliver quickly so you enjoy your meal on time.',
    icon: <Clock className="w-12 h-12 text-night-red-500" />
  },
  {
    id: '3',
    title: 'Best Quality',
    description: 'Partnered with top vendors to ensure quality, consistency, and satisfaction.',
    icon: <Award className="w-12 h-12 text-night-red-500" />
  }
];

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Vendors', href: '/vendors' },
  { name: 'FAQs', href: '/faq' }
];

export const FOOTER_LINKS = {
  product: [
    { name: 'Overview', href: '/overview' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Promotions', href: '/promotions' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Press', href: '/press' }
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Security', href: '/security' }
  ]
};
