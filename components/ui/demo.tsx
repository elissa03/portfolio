'use client'

import { PortfolioPage, PortfolioPageProps } from '@/components/ui/starfall-portfolio-landing'
import { Sparkles, Code2, Palette, Briefcase, Trophy, Zap } from 'lucide-react'
import Image from 'next/image'

// Example: Custom Portfolio Data
const customPortfolioData: PortfolioPageProps = {
    logo: {
        initials: 'AT',
        name: 'Alex Thompson',
    },
    navLinks: [
        { label: 'Bio', href: '#about' },
        { label: 'Work', href: '#projects' },
        { label: 'Expertise', href: '#skills' },
    ],
    resume: {
        label: 'Download CV',
        onClick: () => alert('Downloading CV...'),
    },
    hero: {
        titleLine1: 'Full-Stack Engineer &',
        titleLine2Gradient: 'UX Architect',
        subtitle: 'I build robust and scalable web applications with a strong focus on user-centric design and performance.',
    },
    ctaButtons: {
        primary: {
            label: 'Explore My Work',
            onClick: () => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            },
        },
        secondary: {
            label: 'Contact Me',
            onClick: () => {
                window.location.href = 'mailto:alex.thompson@example.com'
            },
        },
    },
    projects: [
        {
            title: 'E-commerce Platform',
            description: 'A scalable online store built with Next.js, TypeScript, and Stripe.',
            tags: ['Next.js', 'Stripe', 'Vercel'],
            imageContent: (
                <div className='relative w-full h-full overflow-hidden'>
                    <Image
                        src='https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
                        alt='E-commerce Platform'
                        fill
                        className='object-cover'
                        unoptimized
                    />
                </div>
            ),
        },
        {
            title: 'SaaS Dashboard',
            description: 'A real-time analytics dashboard for a B2B software-as-a-service product.',
            tags: ['React', 'Chart.js', 'Firebase'],
            imageContent: (
                <div className='relative w-full h-full overflow-hidden'>
                    <Image
                        src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
                        alt='SaaS Dashboard'
                        fill
                        className='object-cover'
                        unoptimized
                    />
                </div>
            ),
        },
        {
            title: 'AI Content Generator',
            description: 'Leveraging OpenAI to generate marketing copy for businesses.',
            tags: ['SvelteKit', 'OpenAI', 'Tailwind CSS'],
            imageContent: (
                <div className='flex items-center justify-center h-full'>
                    <Sparkles className='w-12 h-12 text-purple-400' />
                </div>
            ),
        },
    ],
    stats: [
        { value: '7+', label: 'Years of Experience' },
        { value: '30+', label: 'Client Projects' },
        { value: '99%', label: 'Client Satisfaction' },
    ],
    showAnimatedBackground: true,
}

const DemoOne = () => {
    return <PortfolioPage {...customPortfolioData} />
}

export { DemoOne }
