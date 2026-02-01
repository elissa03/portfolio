'use client'

import { PortfolioPage, PortfolioPageProps, AuroraBackground } from '@/components/ui/starfall-portfolio-landing'
import OrbitingSkills from '@/components/ui/orbiting-skills'
import { Carousel } from '@/components/ui/carousel'
import ScrollReveal from '@/components/ui/scroll-reveal'
import Footer from '@/components/ui/footer'

const customPortfolioData: PortfolioPageProps = {
    logo: {
        initials: 'ET',
        name: 'Elissa Abou Hassan',
    },
    navLinks: [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
    ],
    resume: {
        label: 'Resume',
        onClick: () => {
            // Open Google Drive resume in new tab
            window.open('https://drive.google.com/file/d/1bdMBFy25zU0LGL9TEPMJ_GX41ElxHRHy/view?usp=drive_link', '_blank')
        },
    },
    hero: {
        titleLine1: 'Full Stack Developer &',
        titleLine2Gradient: 'Software Engineer',
        subtitle: 'I design and build performant web applications, from intuitive interfaces to scalable backend systems.',
    },
    ctaButtons: {
        primary: {
            label: 'View My Work',
            onClick: () => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            },
        },
        secondary: {
            label: 'Get In Touch',
            onClick: () => {
                window.location.href = 'mailto:elissaahassan@gmail.com'
            },
        },
    },
    showAnimatedBackground: true,
}

const projectSlides = [
    {
        title: 'E-commerce Platform',
        button: 'View Project',
        src: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=3540&auto=format&fit=crop',
    },
    {
        title: 'SaaS Dashboard',
        button: 'View Project',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop',
    },
    {
        title: 'Mobile Banking App',
        button: 'View Project',
        src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=3540&auto=format&fit=crop',
    },
    {
        title: 'AI Content Generator',
        button: 'View Project',
        src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3540&auto=format&fit=crop',
    },
]

export default function Home() {
    return (
        <div className='bg-background text-foreground'>
            <AuroraBackground />
            <div className='relative'>
                <PortfolioPage {...customPortfolioData} />

                <section id='skills' className='relative py-20'>
                    <div className='max-w-7xl mx-auto px-6'>
                        <ScrollReveal delay={0.1}>
                            <div className='text-center mb-16'>
                                <h2 className='text-4xl md:text-5xl font-light text-foreground geist-font mb-4'>Tech Stack</h2>
                                <p className='text-muted-foreground inter-font text-lg max-w-2xl mx-auto'>
                                    Technologies and tools I work with to build modern web applications
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <OrbitingSkills />
                        </ScrollReveal>
                    </div>
                </section>

                <section id='projects' className='relative py-20 min-h-screen flex items-center'>
                    <div className='w-full px-6'>
                        <ScrollReveal delay={0.1}>
                            <div className='text-center mb-16'>
                                <h2 className='text-4xl md:text-5xl font-light text-foreground geist-font mb-4'>Featured Projects</h2>
                                <p className='text-muted-foreground inter-font text-lg max-w-2xl mx-auto'>
                                    A showcase of my recent work and creative explorations
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <Carousel slides={projectSlides} />
                        </ScrollReveal>
                    </div>
                </section>

                <Footer
                    email='elissaahassan@gmail.com'
                    linkedin='https://www.linkedin.com/in/elissa-abou-hassan/'
                    github='https://github.com/elissa03'
                />
            </div>
        </div>
    )
}
