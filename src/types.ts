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
  ownerEmail?: string;
  isVerified?: boolean;
  isDisabled?: boolean;
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

export interface Coupon {
  id: string;
  storeId: string;
  code: string;
  title: string;
  description: string;
  discount: string;
  expiresAt: string;
  isActive: boolean;
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
    ownerEmail: 'store-ops@example.com',
    isVerified: true,
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
    ownerEmail: 'store-ops@example.com',
    isVerified: true,
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
    ownerEmail: 'fashion-owner@example.com',
    isVerified: true,
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
    ownerEmail: 'store-ops@example.com',
    isVerified: true,
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
    ownerEmail: 'beauty-owner@example.com',
    isVerified: true,
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
    ownerEmail: 'store-ops@example.com',
    isVerified: true,
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    storeId: '1',
    userName: 'John Doe',
    rating: 4,
    comment: 'Excellent service and fast shipping. Highly recommend this store for anyone looking for quality electronics.',
    date: '2 days ago',
    status: 'approved',
  },
  {
    id: 'r2',
    storeId: '1',
    userName: 'Alice Miller',
    rating: 4,
    comment: 'Great selection of products, but the website could be a bit faster. Overall a good experience.',
    date: '4 days ago',
    status: 'approved',
  },
  {
    id: 'r3',
    storeId: '1',
    userName: 'Robert King',
    rating: 5,
    comment: 'The customer support was very helpful when I had a question about my order. Will definitely shop here again.',
    date: '1 week ago',
    status: 'approved',
  },
  {
    id: 'r4',
    storeId: '3',
    userName: 'Maya Stone',
    rating: 5,
    comment: 'Beautiful materials and accurate sizing. The packaging felt thoughtful too.',
    date: '3 days ago',
    status: 'approved',
  },
  {
    id: 'r5',
    storeId: '5',
    userName: 'Sam Lee',
    rating: 4,
    comment: 'Gentle products and quick delivery. I would like to see more travel sizes.',
    date: '5 days ago',
    status: 'approved',
  },
];

export const COUPONS: Coupon[] = [
  {
    id: 'c1',
    storeId: '1',
    code: 'CLOUD20',
    title: '20% off annual hosting',
    description: 'Save on the first year of any annual cloud hosting plan.',
    discount: '20% off',
    expiresAt: '2026-12-31',
    isActive: true,
  },
  {
    id: 'c2',
    storeId: '3',
    code: 'THREADS15',
    title: 'New season discount',
    description: 'Use this code on sustainable apparel orders above $75.',
    discount: '15% off',
    expiresAt: '2026-09-30',
    isActive: true,
  },
];
