# NOMA - Premium Fashion E-Commerce Platform

A study of identity in motion. Limited drops from our ORIGINS: RECODED collection.

## 🚀 Overview

NOMA is a premium fashion e-commerce platform built with Next.js, TypeScript, and Supabase. Features include:

- **Modern African luxury fashion** aesthetic with minimal, editorial design
- **Limited drops** model with scarcity indicators
- **Full-stack integration** with Supabase for auth, database, and storage
- **Responsive design** with mobile-first approach
- **Admin panel** for product and order management
- **Cart system** with local storage persistence
- **Checkout flow** with order processing

## 🛠 Tech Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Context** for state management

### Backend
- **Supabase** for:
  - Authentication (email login + guest checkout)
  - PostgreSQL database
  - File storage for product images
  - Real-time subscriptions

### Deployment
- **Vercel** for hosting
- **GitHub** for version control

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd noma-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project at [supabase.com](https://supabase.com)
   - Run the SQL schema from `supabase/schema.sql` in your Supabase SQL editor
   - Create a storage bucket named `product-images`
   - Copy your Supabase URL and anon key

4. **Environment variables**
   Create `.env.local` and add:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🗂 Project Structure

```
noma-store/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/             # Admin panel
│   │   ├── cart/              # Shopping cart
│   │   ├── checkout/          # Checkout flow
│   │   ├── product/[id]/      # Product detail pages
│   │   ├── store/             # Product listing
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   ├── components/            # Reusable components
│   │   └── ProductGrid.tsx    # Product grid component
│   ├── contexts/              # React contexts
│   │   └── CartContext.tsx    # Shopping cart state
│   └── lib/                   # Utilities
│       └── supabase.ts        # Supabase client
├── supabase/
│   └── schema.sql             # Database schema
└── tailwind.config.ts         # Tailwind configuration
```

## 🎨 Design System

### Colors
- **Black & White palette** with neutral grays
- **High contrast** for luxury aesthetic
- **Minimal borders** and clean typography

### Typography
- **Inter** font family (modern sans-serif)
- **Wide letter spacing** for headings
- **Tracking-wide** for uppercase text

### Layout
- **Luxury whitespace** throughout
- **Grid-based layouts** for products
- **Responsive breakpoints**: mobile-first approach

## 🔐 Features

### Shopping Experience
- **Product browsing** with grid layout and hover effects
- **Product details** with image galleries
- **Size selection** and stock indicators
- **Cart management** with quantity controls
- **Guest checkout** with email collection

### Admin Panel
- **Product management** (CRUD operations)
- **Order management** with status updates
- **Image upload** to Supabase storage
- **Stock tracking** and scarcity indicators

### Business Logic
- **Limited stock model** for drop-based fashion
- **Scarcity indicators** in UI
- **Order processing** with status tracking
- **Email collection** for guest orders

## 🚀 Deployment

### Vercel Deployment
1. **Connect GitHub repository**
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Environment Variables Required
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 📊 Database Schema

### Products Table
```sql
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  category TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  stock INTEGER NOT NULL DEFAULT 0,
  drop_name TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Orders Table
```sql
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  items JSONB NOT NULL,
  total_price NUMERIC(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🛠 Development

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Adding Products
1. Navigate to `/admin`
2. Click "Add Product"
3. Fill in product details
4. Upload images to Supabase storage
5. Save product

### Managing Orders
1. Navigate to `/admin` → Orders tab
2. View order details and customer info
3. Update order status (pending → paid → shipped)

## 🎯 Business Model

- **Limited drops** - No mass production
- **Scarcity marketing** - Limited pieces remaining indicators
- **Premium positioning** - High-end streetwear aesthetic
- **Drop-based releases** - Collections with themes

## 📱 Mobile Experience

- **Mobile-first** responsive design
- **Touch-friendly** interactions
- **Optimized loading** with lazy loading
- **Minimal UI** for luxury feel

## 🔮 Future Enhancements

- **User authentication** with order history
- **Wishlist functionality**
- **Email notifications** for order updates
- **Advanced filtering** and search
- **Payment integration** (Stripe)
- **Shipping calculation**
- **Social sharing** for products

## 📞 Support

For support or questions, please contact the development team.

---

Built with ❤️ for NOMA - A study of identity in motion.
