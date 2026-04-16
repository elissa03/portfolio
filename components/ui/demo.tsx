'use client'

import { PortfolioPage, PortfolioPageProps } from '@/components/ui/starfall-portfolio-landing'

// Example: Custom Portfolio Data //
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
    showAnimatedBackground: true,
}

const DemoOne = () => {
    return <PortfolioPage {...customPortfolioData} />
}

export { DemoOne }
