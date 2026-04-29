/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Store {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  priceLevel: 1 | 2 | 3; // 1: $, 2: $$, 3: $$$
  logo: string;
  websiteUrl: string;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  storeCount: number;
}

export interface Review {
  id: string;
  storeId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export const CATEGORIES: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: 'Cpu', storeCount: 2450 },
  { id: 'fashion', name: 'Fashion & Apparel', icon: 'Shirt', storeCount: 4120 },
  { id: 'home', name: 'Home & Garden', icon: 'Home', storeCount: 1760 },
  { id: 'beauty', name: 'Beauty & Health', icon: 'Sparkles', storeCount: 3200 },
  { id: 'sports', name: 'Sports & Outdoors', icon: 'Trophy', storeCount: 1340 },
  { id: 'digital', name: 'Digital Goods', icon: 'Gamepad2', storeCount: 540 },
];

export const STORES: Store[] = [
  {
    id: '1',
    name: 'CloudNexus Hosting',
    description: 'Enterprise-grade cloud hosting with 99.99% uptime and 24/7 dedicated support for scaling businesses.',
    category: 'electronics',
    rating: 4.8,
    reviewCount: 1240,
    priceLevel: 2,
    logo: 'https://picsum.photos/seed/hosting/100/100',
    websiteUrl: 'https://example.com',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'BlueSky Domains',
    description: 'Affordable domain registration and simple shared hosting packages perfect for small blogs and portfolios.',
    category: 'electronics',
    rating: 4.5,
    reviewCount: 856,
    priceLevel: 1,
    logo: 'https://picsum.photos/seed/domains/100/100',
    websiteUrl: 'https://example.com',
  },
  {
    id: '3',
    name: 'Velvet & Vine',
    description: 'Sustainable fashion label focusing on organic materials and ethical manufacturing for the modern wardrobe.',
    category: 'fashion',
    rating: 4.9,
    reviewCount: 2100,
    priceLevel: 2,
    logo: 'https://picsum.photos/seed/fashion/100/100',
    websiteUrl: 'https://example.com',
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Urban Nest',
    description: 'Curated home decor and modular furniture designed for efficient and aesthetic city living.',
    category: 'home',
    rating: 4.6,
    reviewCount: 332,
    priceLevel: 3,
    logo: 'https://picsum.photos/seed/home/100/100',
    websiteUrl: 'https://example.com',
  },
  {
    id: '5',
    name: 'PureGlow Botanicals',
    description: 'Cruelty-free skincare and wellness products derived from rare alpine botanicals and minerals.',
    category: 'beauty',
    rating: 4.7,
    reviewCount: 520,
    priceLevel: 2,
    logo: 'https://picsum.photos/seed/beauty/100/100',
    websiteUrl: 'https://example.com',
  },
  {
    id: '6',
    name: 'GreenGrocer Direct',
    description: 'Farm-to-table grocery delivery service connecting local organic producers with urban families.',
    category: 'home',
    rating: 4.4,
    reviewCount: 1890,
    priceLevel: 1,
    logo: 'https://picsum.photos/seed/grocery/100/100',
    websiteUrl: 'https://example.com',
  }
];
