# Portfolio Landing Page

A beautiful, animated portfolio landing page built with Next.js, Three.js, and Tailwind CSS.

## ✨ Features

-   **Animated Aurora Background**: Stunning WebGL-powered aurora borealis effect using Three.js
-   **Fully Customizable**: All content is configurable via props
-   **Glass Morphism Design**: Modern UI with frosted glass effects
-   **Responsive Layout**: Works beautifully on all screen sizes
-   **TypeScript Support**: Full type safety and IntelliSense
-   **Smooth Animations**: Floating animations and smooth transitions

## 🚀 Quick Start

The portfolio component is located at `components/ui/starfall-portfolio-landing.tsx`.

### Basic Usage

```tsx
import { PortfolioPage } from '@/components/ui/starfall-portfolio-landing'

export default function Home() {
    return <PortfolioPage />
}
```

### Custom Usage

See `app/page.tsx` for a fully customized example with:

-   Custom hero text
-   Personalized navigation links
-   Custom projects with images
-   Custom statistics
-   Custom button actions

## 🎨 Customization

### Props Interface

```typescript
interface PortfolioPageProps {
    logo?: { initials: React.ReactNode; name: React.ReactNode }
    navLinks?: NavLink[]
    resume?: { label: string; onClick?: () => void }
    hero?: {
        titleLine1: React.ReactNode
        titleLine2Gradient: React.ReactNode
        subtitle: React.ReactNode
    }
    ctaButtons?: {
        primary: { label: string; onClick?: () => void }
        secondary: { label: string; onClick?: () => void }
    }
    projects?: Project[]
    stats?: Stat[]
    showAnimatedBackground?: boolean
}
```

### Example: Adding Custom Project Images

```tsx
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

const myProjects = [
    {
        title: 'My Awesome Project',
        description: 'Built with Next.js and TypeScript',
        tags: ['Next.js', 'TypeScript', 'Tailwind'],
        imageContent: (
            <div className='relative w-full h-full overflow-hidden'>
                <Image
                    src='https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
                    alt='Project Screenshot'
                    fill
                    className='object-cover'
                    unoptimized
                />
            </div>
        ),
    },
    {
        title: 'Another Project',
        description: 'With custom icon',
        tags: ['React', 'AI'],
        imageContent: (
            <div className='flex items-center justify-center h-full'>
                <Sparkles className='w-12 h-12 text-purple-400' />
            </div>
        ),
    },
]
```

### Example: Custom Button Actions

```tsx
const customCTA = {
    primary: {
        label: 'View Portfolio',
        onClick: () => {
            document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth',
            })
        },
    },
    secondary: {
        label: 'Email Me',
        onClick: () => {
            window.location.href = 'mailto:your@email.com'
        },
    },
}
```

## 🎭 Demo Component

Check out `components/ui/demo.tsx` for an alternative implementation example with different data and styling.

## 🔧 Tech Stack

-   **Next.js 16** - React framework
-   **Three.js** - WebGL 3D graphics
-   **Tailwind CSS 4** - Utility-first CSS
-   **TypeScript** - Type safety
-   **lucide-react** - Icon library
-   **shadcn/ui** - Component architecture

## 📦 Dependencies

All required dependencies are already installed:

-   `three` - 3D graphics library
-   `@types/three` - TypeScript types
-   `lucide-react` - Icons
-   `tw-animate-css` - Tailwind animations

## 🎨 Styling

The component uses custom CSS classes defined in `app/globals.css`:

-   `.geist-font` - Primary font family
-   `.glass-button` - Frosted glass button effect
-   `.glass-card` - Frosted glass card effect
-   `.gradient-text` - Gradient text effect
-   `.primary-button` - Primary CTA button
-   `.float-animation` - Floating animation
-   `.divider` - Horizontal divider line

## 🌐 Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📝 Notes

-   The aurora background animation runs on WebGL and is performant on most devices
-   You can disable the background by setting `showAnimatedBackground: false`
-   Images from Unsplash are used in the demo (configured in `next.config.ts`)
-   All animations respect user's motion preferences

## 🎯 Next Steps

1. Replace placeholder text with your own content
2. Add your own project images
3. Customize colors in `app/globals.css`
4. Add more sections as needed
5. Deploy to Vercel or your preferred platform

## 📄 License

This project uses Next.js and is configured with the default Next.js license.
