# DealFinder

<div align="center">
  <img width="1200" height="475" alt="DealFinder Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

> The ultimate platform for discovering and comparing the best online retailers across every niche, from global SaaS to local fashion.

DealFinder is a comprehensive directory for trusted online retailers, designed to help shoppers find reliable stores and the best deals. Built with modern web technologies, it offers a clean, accessible, and high-performance user experience.

## ✨ Features

### 🏪 Store Discovery
- **Personalized Hero Section**: Global search with category exploration
- **Trending Categories**: Hand-picked categories with store counts
- **Featured Stores**: Highlighted retailers for quick access

### 🔍 Advanced Search & Filtering
- **Real-time Filtering**: By category, price level ($ to $$$), and sorting by ratings/reviews
- **Fuzzy Search**: Search across store names, descriptions, and keywords
- **Responsive Design**: Optimized for desktop and mobile devices

### 📋 Store Profiles
- **Detailed Information**: High-resolution logos, descriptions, and verified stats
- **Interactive Actions**: Visit website, save to favorites, write reviews
- **Related Stores**: Recommendations based on category

### ❤️ Favorites Management
- **Persistent Favorites**: Save and manage favorite stores across sessions
- **User Authentication**: Login required for favorites (mock implementation)
- **State Persistence**: Favorites stored in localStorage
- **Role support**: Shopper, Store, and Admin accounts with separate portals and permissions

### 👨‍💼 Admin Dashboard
- **Store Management**: CRUD operations for store listings
- **Review Moderation**: Approve/reject pending user reviews
- **Analytics Overview**: Metrics on stores, reviews, and categories

### 🏪 Merchant Portal
- **Store Submission**: Dedicated flow for retailers to submit their business
- **Verification Process**: Form-based submission with category selection

### 🌙 Dark Mode
- **Theme Toggle**: Global dark/light mode switch
- **Persistence**: Theme preference saved across sessions

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/dealfinder.git
   cd dealfinder
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   - Copy `.env.example` to `.env.local`
   - Add any required values such as `GEMINI_API_KEY` or `APP_URL`

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## 📖 Usage

### For Shoppers
1. **Browse Categories**: Click on trending categories or use the search bar
2. **Explore Stores**: Filter by category, price level, and sort options
3. **View Details**: Click on any store card to see full profile
4. **Save Favorites**: Log in and heart stores to save them
5. **Write Reviews**: Share your experience on store detail pages

### For Merchants
1. **Submit Your Store**: Use the "Submit a Store" link in the footer
2. **Fill Out Form**: Provide store details, category, and description
3. **Await Verification**: Submissions are reviewed by our team

### For Admins
1. **Access Dashboard**: Log in with admin credentials (email containing 'admin')
2. **Manage Stores**: Add, edit, or remove store listings
3. **Moderate Reviews**: Approve or reject pending user reviews
4. **View Analytics**: Check metrics on platform usage

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React useState/useEffect
- **Persistence**: localStorage for favorites and theme

## 📁 Project Structure

```
dealfinder/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   ├── types.ts         # TypeScript interfaces and data
│   └── vite-env.d.ts    # Vite environment types
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern React and TypeScript
- Icons provided by Lucide React
- UI inspired by industry-leading e-commerce platforms
- Special thanks to the open-source community

---

**DealFinder** - Discover trusted online stores with confidence. 🛍️✨
