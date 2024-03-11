import './global.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tomas Grusz - Frontend Web Developer',
  description:
    "I'm a Frontend Web Developer currently based in Prague, Czech Republic. With enthusiasm for design, I specialize in creating custom websites and interactive web applications.",
  applicationName: 'tomasgrusz',
  authors: [{ name: 'Tomas Grusz' }],
  keywords: 'website development, web dev, frontend developer',
  themeColor: '#252233',
  viewport: { width: 'device-width', initialScale: 1 },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://grusz.dev' },
  openGraph: {
    type: 'website',
    url: 'https://grusz.dev',
    title: 'Tomas Grusz - Frontend Web Developer',
    description:
      "I'm a Frontend Web Developer currently based in Prague, Czech Republic. With enthusiasm for design, I specialize in creating custom websites and interactive web applications.",
    siteName: 'Tomas Grusz',
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
    title: 'Tomas Grusz - Frontend Web Developer',
    description:
      "I'm a Frontend Web Developer currently based in Prague, Czech Republic. With enthusiasm for design, I specialize in creating custom websites and interactive web applications.",
  },
  other: {
    'msapplication-TileColor': '#603cba',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Tomáš Grusz",
              "alternateName": ["Tomas Grusz", "Grusz"],
              "url": "https://grusz.dev",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }`,
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Tomáš Grusz",
              "url": "https://grusz.dev",
              "image": "https://pbs.twimg.com/profile_images/1710629613129359361/-0KpGWTv_400x400.jpg",
              "sameAs": [
                "https://twitter.com/gruszdev",
                "https://www.linkedin.com/in/tomasgrusz/",
                "https://github.com/tomasgrusz",
                "https://grusz.dev"
              ],
              "jobTitle": "Associate Software Engineer - Frontend",
              "worksFor": {
                "@type": "Organization",
                "name": "Make"
              }
            }`,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
