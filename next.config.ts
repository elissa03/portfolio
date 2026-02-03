import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Enable compression
    compress: true,
    // Optimize CSS (Note: SWC minification is enabled by default in Next.js 13+)
    experimental: {
        optimizeCss: true,
    },
}

export default nextConfig
