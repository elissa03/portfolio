'use client'

import { Carousel } from '@/components/ui/carousel'

export function CarouselDemo() {
    const slideData = [
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
            title: 'Mobile App',
            button: 'View Project',
            src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=3540&auto=format&fit=crop',
        },
        {
            title: 'AI Content Generator',
            button: 'View Project',
            src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3540&auto=format&fit=crop',
        },
    ]

    return (
        <div className='relative overflow-hidden w-full h-full py-20'>
            <Carousel slides={slideData} />
        </div>
    )
}
