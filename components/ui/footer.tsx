'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

interface FooterProps {
    email?: string
    linkedin?: string
    github?: string
}

export default function Footer({ email = 'hello@example.com', linkedin, github }: FooterProps) {
    const socialLinks = [
        {
            name: 'Email',
            href: `mailto:${email}`,
            icon: Mail,
            label: email,
        },
        {
            name: 'LinkedIn',
            href: linkedin || 'https://linkedin.com',
            icon: Linkedin,
            label: 'LinkedIn',
        },
        {
            name: 'GitHub',
            href: github || 'https://github.com',
            icon: Github,
            label: 'GitHub',
        },
    ]

    return (
        <footer className='relative border-t border-border/50 backdrop-blur-md bg-background/80'>
            <div className='max-w-7xl mx-auto px-6 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    {/* Left side - Branding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='text-center md:text-left'
                    >
                        <h3 className='text-2xl font-light text-foreground geist-font mb-2'>Let's Connect</h3>
                        <p className='text-muted-foreground inter-font text-sm max-w-md'>
                            Feel free to reach out for collaborations, opportunities, or just to say hello.
                        </p>
                    </motion.div>

                    {/* Right side - Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col items-center md:items-end gap-4'
                    >
                        <div className='flex flex-wrap gap-3 justify-center md:justify-end'>
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target={link.name !== 'Email' ? '_blank' : undefined}
                                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='group glass-button px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium inter-font text-foreground'
                                >
                                    <link.icon className='w-4 h-4 transition-transform group-hover:rotate-12' />
                                    <span className='hidden sm:inline'>{link.label}</span>
                                    {link.name !== 'Email' && (
                                        <ExternalLink className='w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity' />
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='mt-8 pt-8 border-t border-border/50 text-center'
                >
                    <p className='text-muted-foreground inter-font text-sm'>
                        © {new Date().getFullYear()} Elissa Abou Hassan. Built with Next.js & Three.js
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
