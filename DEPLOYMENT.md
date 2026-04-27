# Deployment Guide

## 🚀 Quick Start to Production

### 1. Supabase Setup (Required)

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Choose a region close to your customers

2. **Run Database Schema**
   - Copy contents of `supabase/schema.sql`
   - Paste in Supabase SQL Editor
   - Run the schema

3. **Create Storage Bucket**
   - Go to Storage section
   - Create new bucket named `product-images`
   - Set up appropriate access policies

4. **Get Environment Variables**
   - Project Settings → API
   - Copy:
     - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
     - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

### 2. Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Add your Supabase credentials

# Start development server
npm run dev
```

Visit: http://localhost:3000

### 3. Production Deployment (Vercel)

#### Option A: Automatic Deployment
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: NOMA e-commerce platform"
   git branch -M main
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy

#### Option B: Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

### 4. Environment Variables (Vercel)

In Vercel dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 5. Admin Access

1. Navigate to `/admin` on your deployed site
2. Add your first products
3. Upload product images to Supabase storage
4. Set up inventory and pricing

### 6. Testing Checklist

- [ ] Home page loads with hero section
- [ ] Store page shows products
- [ ] Product detail pages work
- [ ] Cart functionality works
- [ ] Checkout process completes
- [ ] Admin panel accessible
- [ ] Can add/edit products
- [ ] Can view and update orders

### 7. Custom Domain (Optional)

In Vercel dashboard:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### 8. Performance Optimization

- **Images**: Upload optimized images to Supabase storage
- **CDN**: Vercel provides automatic CDN
- **Caching**: Built-in Next.js caching
- **SEO**: Meta tags already configured

### 9. Security Notes

- Keep Supabase keys secure
- Use environment variables, never commit keys
- Enable RLS (Row Level Security) in Supabase
- Regularly update dependencies

### 10. Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Supabase Logs**: Database and auth logs
- **Error Tracking**: Consider adding Sentry for production

## 🎯 Next Steps

1. **Add Real Products**: Replace sample data with actual products
2. **Upload Images**: Add product images to Supabase storage
3. **Test Checkout**: Verify the complete purchase flow
4. **Set Up Payments**: Integrate Stripe for real payments
5. **Configure Shipping**: Set up shipping calculations
6. **Email Notifications**: Add order confirmation emails

## 📞 Support

For deployment issues:
1. Check Vercel deployment logs
2. Verify Supabase connection
3. Ensure all environment variables are set
4. Test with sample data first

---

Your NOMA store is now ready for production! 🚀
