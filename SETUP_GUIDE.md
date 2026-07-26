# Fashion Portfolio - Complete Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database
- Cloudinary account (for image uploads)

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/Apocalypse-max-design/Fashion-Portfolio-Ferdous-Rahman-103.git
cd Fashion-Portfolio-Ferdous-Rahman-103

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

### 2. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma db push

# Seed the database with initial data
npm run db:seed
```

### 3. Configure Environment Variables

Edit `.env.local`:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/fashion_portfolio"

# JWT Secret (change this in production)
JWT_SECRET="your-secret-key-here"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# App
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 4. Start Development Server

```bash
npm run dev
```

Then open:
- **Portfolio**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **Login**: http://localhost:3000/admin/login

Default credentials:
- Email: `admin@ferdous.com`
- Password: `admin123`

**⚠️ Change password immediately in production!**

---

## 📋 Admin Dashboard Features

### Sections Available

| Section | Features |
|---------|----------|
| **Dashboard** | Overview stats, quick actions, recent activity |
| **Profile** | Edit name, title, bio, contact info, social links |
| **Skills** | Add/edit/delete skills with proficiency levels |
| **Experience** | Manage internships, workshops, projects |
| **Projects** | Create projects with descriptions and tools |
| **Portfolio** | Upload gallery images with categories |
| **Certificates** | Manage certifications with dates |
| **CV** | Upload and manage CV files |
| **Contact** | View and manage contact form submissions |
| **Settings** | Account settings and logout |

---

## 🔐 Authentication

### Login Flow
1. Navigate to `/admin/login`
2. Enter email and password
3. JWT token stored in secure HTTP-only cookie
4. Token expires after 7 days

### Middleware Protection
All admin routes are protected by middleware at `middleware.ts`

---

## 📤 Image & File Uploads

### Cloudinary Integration

All uploads go through Cloudinary:
- Supported: JPG, PNG, GIF, WebP, PDF, DOCX
- Max file size: 30MB
- Automatic optimization and delivery

### Upload Folders
- `fashion-portfolio/projects/` - Project images
- `fashion-portfolio/portfolio/` - Portfolio gallery
- `fashion-portfolio/certificates/` - Certificate files
- `fashion-portfolio/cv/` - CV documents

---

## 🗄️ Database Schema

### Key Models

**Profile**
```
- id (unique)
- name, title, bio
- email, phone, location
- social media links
- CV URL
```

**Skill**
```
- id, name, level (0-100)
- category (Fashion/Software/Professional)
- order (for sorting)
```

**Experience**
```
- id, title, company, location
- startDate, endDate, current
- description, type
- order
```

**Project**
```
- id, title, description
- category, tools (array)
- coverImage, pdfUrl
- status (draft/published)
- images (related ProjectImage)
```

**PortfolioItem**
```
- id, title, category
- imageUrl, description
- order
```

**Certificate**
```
- id, title, organization
- date, description
- imageUrl, pdfUrl
- order
```

**ContactMessage**
```
- id, name, email
- subject, message
- read flag, timestamp
```

---

## 🔄 API Endpoints

### Admin Routes (Protected)

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET/PUT | `/api/admin/profile` | Profile CRUD |
| GET/POST/PUT/DELETE | `/api/admin/skills` | Skills management |
| GET/POST/PUT/DELETE | `/api/admin/experience` | Experience management |
| GET/POST/PUT/DELETE | `/api/admin/projects` | Projects management |
| GET/POST/PUT/DELETE | `/api/admin/portfolio` | Portfolio items |
| GET/POST/PUT/DELETE | `/api/admin/certificates` | Certificates |
| GET/PUT | `/api/admin/cv` | CV management |
| GET/PUT/DELETE | `/api/admin/messages` | Contact messages |
| POST | `/api/admin/reorder` | Reorder items |

### Public Routes

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/contact` | Submit contact form |
| POST | `/api/upload` | Upload files |
| POST | `/api/auth/login` | Admin login |
| POST | `/api/auth/logout` | Admin logout |

---

## 🛠️ Customization

### Styling
- Tailwind CSS configured
- Theme colors in `globals.css`
- Primary color: `#D90429` (red)

### Fonts
- Space Grotesk (headings)
- Inter (body)
- Poppins (secondary)
- Manrope (alternative)

### Animations
- Framer Motion for animations
- Custom CSS animations in globals
- Glassmorphism effects

---

## 📦 Building for Production

```bash
# Build the project
npm run build

# Test production build locally
npm start

# Deploy to Vercel, Netlify, or your host
```

### Production Checklist

- [ ] Change JWT_SECRET in `.env.local`
- [ ] Update DATABASE_URL to production database
- [ ] Configure Cloudinary production credentials
- [ ] Set NEXT_PUBLIC_SITE_URL to your domain
- [ ] Update admin password
- [ ] Test all features
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure CORS if needed
- [ ] Enable HTTPS

---

## 🚨 Troubleshooting

### Database Connection Issues
```bash
# Test database connection
npx prisma db execute --stdin < query.sql

# Reset database (careful!)
npx prisma migrate reset
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Login Issues
- Verify database has user record
- Check JWT_SECRET matches
- Clear browser cookies
- Check browser console for errors

### Upload Issues
- Verify Cloudinary credentials
- Check file type and size limits
- Test upload manually in Cloudinary dashboard

---

## 📚 Tech Stack

- **Frontend**: React 19, Next.js 16, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with HttpOnly cookies
- **File Storage**: Cloudinary
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

---

## 📝 License

This project is private and proprietary.

---

## 🤝 Support

For issues or questions:
1. Check this guide
2. Review GitHub Issues
3. Contact the developer

---

## ✅ Checklist - What's Complete

- ✅ Portfolio frontend (all sections)
- ✅ Admin dashboard (fully functional)
- ✅ Authentication system
- ✅ Database schema & Prisma setup
- ✅ All API routes (CRUD operations)
- ✅ Contact form with validation
- ✅ Image uploads with Cloudinary
- ✅ Responsive design
- ✅ Mobile admin interface
- ✅ Environment configuration
- ✅ Middleware protection

## 🔄 Next Steps (Optional Enhancements)

- Add image gallery with lightbox
- Implement analytics tracking
- Add blog/articles section
- Social media integration
- Email notifications for contact forms
- Dark/light mode toggle
- Multi-language support
- SEO optimization
- Performance monitoring
