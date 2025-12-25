import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Kaushik Vaghasiya Portfolio',
        short_name: 'Kaushik',
        description: 'Senior Node.js Developer & Team Lead Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#18181b',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/profile.jpg',
                sizes: '192x192', // Assuming profile.jpg is sufficient resolution
                type: 'image/jpeg',
            },
            {
                src: '/profile.jpg',
                sizes: '512x512',
                type: 'image/jpeg',
            },
        ],
    }
}
