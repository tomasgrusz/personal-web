import './global.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tomáš Grusz - Building Interactive React Websites',
  description:
    "Transform your online presence! I specialize in creating custom websites and web applications using React. Let's turn ideas into interactive online experiences.",
  applicationName: 'tomasgrusz',
  authors: [{ name: 'Tomáš Grusz' }],
  keywords: 'website development, web dev, react, frontend developer',
  themeColor: '#252233',
  viewport: { width: 'device-width', initialScale: 1 },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://grusz.dev' },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    { rel: 'icon', url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'mask-icon', color: '#aaaaff', url: '/safari-pinned-tab.svg' },
  ],
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://grusz.dev',
    title: 'Tomáš Grusz - Building Interactive React Websites',
    description:
      "Transform your online presence! I specialize in creating custom websites and web applications using React. Let's turn ideas into interactive online experiences.",
    siteName: 'Tomáš Grusz - Building Interactive React Websites',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IE',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@gruszdev',
    images: '/banner.png',
    title: 'Tomáš Grusz - Building Interactive React Websites',
    description:
      "Transform your online presence! I specialize in creating custom websites and web applications using React. Let's turn ideas into interactive online experiences.",
  },
  other: {
    'msapplication-TileColor': '#603cba',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
