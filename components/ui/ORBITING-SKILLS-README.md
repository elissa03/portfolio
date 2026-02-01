# Orbiting Skills Component

A stunning animated 3D-style orbiting skills showcase with customizable tech stack icons.

## ✨ Features

-   **3 Orbital Rings**: Inner (Core Languages), Middle (Frontend), Outer (Backend & Tools)
-   **12 Tech Icons**: JavaScript, TypeScript, Python, React, Redux, HTML5, CSS3, Node.js, MongoDB, MySQL, Git, Firebase
-   **Smooth Animations**: Independent orbit speeds with customizable directions
-   **Interactive Hover**: Icons scale and show labels on hover, animation pauses
-   **Glowing Effects**: Multi-colored orbital paths with pulsing animations
-   **Fully Responsive**: Adapts from mobile to desktop
-   **Performance Optimized**: Uses memoization and requestAnimationFrame

## 🎨 Tech Stack Included

### Inner Orbit (Core Languages) - Cyan Glow

-   JavaScript
-   TypeScript
-   Python

### Middle Orbit (Frontend) - Purple Glow

-   React
-   Redux
-   HTML5
-   CSS3

### Outer Orbit (Backend & Tools) - Green/Orange Glow

-   Node.js
-   MongoDB
-   MySQL
-   Git
-   Firebase

## 🚀 Usage

### Basic Implementation

```tsx
import OrbitingSkills from '@/components/ui/orbiting-skills'

export default function SkillsSection() {
    return (
        <section className='py-20'>
            <OrbitingSkills />
        </section>
    )
}
```

### With Section Wrapper

```tsx
<section id='skills' className='relative bg-background py-20'>
    <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-light text-foreground mb-4'>Tech Stack</h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>Technologies and tools I work with</p>
        </div>
        <OrbitingSkills />
    </div>
</section>
```

## 🎯 Customization

### Adding New Skills

To add a new skill icon, update the `skillsConfig` array:

```tsx
{
  id: 'nextjs',
  orbitRadius: 160,       // Distance from center (100, 160, or 220)
  size: 46,               // Icon size in pixels
  speed: -0.7,            // Rotation speed (negative = counter-clockwise)
  iconType: 'nextjs',     // Icon type (must add to iconComponents)
  phaseShift: 0,          // Starting position in radians
  glowColor: 'purple',    // Orbit glow color
  label: 'Next.js'        // Hover label text
}
```

### Adding Custom Icons

1. Add SVG component to `iconComponents`:

```tsx
nextjs: {
  component: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      {/* Your SVG path here */}
    </svg>
  ),
  color: '#000000'
}
```

2. Add to `IconType`:

```tsx
type IconType = 'javascript' | 'typescript' | 'nextjs' | ...
```

### Customizing Orbit Colors

Update the `glowColors` in the `GlowingOrbitPath` component:

```tsx
const glowColors = {
    cyan: {
        primary: 'rgba(6, 182, 212, 0.4)',
        secondary: 'rgba(6, 182, 212, 0.2)',
        border: 'rgba(6, 182, 212, 0.3)',
    },
    // Add your custom color
    blue: {
        primary: 'rgba(59, 130, 246, 0.4)',
        secondary: 'rgba(59, 130, 246, 0.2)',
        border: 'rgba(59, 130, 246, 0.3)',
    },
}
```

### Adjusting Animation Speed

Modify the `speed` property in `skillsConfig`:

-   Positive values = clockwise rotation
-   Negative values = counter-clockwise rotation
-   Larger absolute values = faster rotation
-   Example: `speed: 1` (slow clockwise), `speed: -2` (fast counter-clockwise)

### Changing Orbit Sizes

Update `orbitRadius` values:

-   Inner orbit: 100px (recommended: 80-120)
-   Middle orbit: 160px (recommended: 140-180)
-   Outer orbit: 220px (recommended: 200-250)

## 🎨 Styling

### Component Classes

-   `.geist-font` - Main heading font
-   `.inter-font` - Body text font
-   `bg-background` - Background color (follows theme)
-   `text-foreground` - Text color (follows theme)
-   `text-muted-foreground` - Muted text color

### Animation Behavior

-   **On Hover (entire component)**: Animations pause
-   **On Hover (individual icon)**:
    -   Icon scales to 125%
    -   Shows glowing shadow
    -   Displays label below
    -   Increases z-index

## 📱 Responsive Design

-   **Mobile**:

    -   Component width: `calc(100vw - 40px)`
    -   Maximum size: 550x550px
    -   Icons remain fully visible

-   **Desktop**:
    -   Fixed size: 550x550px
    -   Optimal viewing experience

## ⚡ Performance

-   **Memoized components** prevent unnecessary re-renders
-   **requestAnimationFrame** for smooth 60fps animations
-   **CSS transforms** for hardware acceleration
-   **Backdrop blur** effects for modern glassmorphism

## 🎭 Dark Mode Support

The component automatically adapts to your theme:

-   Dark mode: Enhanced glow effects
-   Light mode: Subtle, elegant appearance
-   Icons maintain brand colors

## 🔧 Dependencies

All dependencies are already installed:

-   React 19.2.3
-   TypeScript
-   Tailwind CSS 4

No additional packages required!

## 📊 Technical Details

### Animation System

-   Uses `performance.now()` for precise timing
-   Delta time calculation for frame-independent animation
-   Cleanup on unmount prevents memory leaks

### Icon System

-   SVG icons for crisp scaling
-   Brand-accurate colors
-   Optimized paths for small file size

### Orbit System

-   Trigonometric positioning (cos/sin)
-   Independent rotation speeds per orbit
-   Phase shifts prevent icon collision

## 🎨 Visual Effects

-   **Orbital Glow**: Radial gradients with pulse animation
-   **Icon Shadows**: Dynamic box-shadow on hover
-   **Backdrop Blur**: Glassmorphism effect on icons
-   **Smooth Transitions**: 300ms ease-out timing

## 🐛 Troubleshooting

**Icons not appearing?**

-   Check that icon type exists in `iconComponents`
-   Verify SVG viewBox is set correctly

**Animation too fast/slow?**

-   Adjust `speed` values in `skillsConfig`
-   Lower values = slower rotation

**Layout issues?**

-   Ensure parent has sufficient height
-   Add `overflow-hidden` to container if needed

## 📝 License

Part of the portfolio project.
