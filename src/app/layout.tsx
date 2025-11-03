import './global.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tom Grusz | Frontend Architect & Software Engineer | Custom Web Apps',
  description:
    'Prague-based Frontend Architect & Software Engineer specializing in custom websites development and interactive web apps, combining a passion for design with expert coding skills.',
  applicationName: 'grusz.dev',
  authors: [{ name: 'Tom Grusz' }],
  keywords: 'website development, web dev, frontend developer, design',
  themeColor: '#252233',
  viewport: { width: 'device-width', initialScale: 1 },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://grusz.dev' },
  openGraph: {
    type: 'website',
    url: 'https://grusz.dev',
    title: 'Tom Grusz | Frontend Architect & Software Engineer | Custom Web Apps',
    description:
      'Prague-based Frontend Architect & Software Engineer specializing in custom websites development and interactive web apps, combining a passion for design with expert coding skills.',
    siteName: 'Tom Grusz | Frontend Architect & Software Engineer',
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
    title: 'Tom Grusz | Frontend Architect & Software Engineer | Custom Web Apps',
    description:
      'Prague-based Frontend Architect & Software Engineer specializing in custom websites development and interactive web apps, combining a passion for design with expert coding skills.',
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
              "name": "Tom Grusz",
              "alternateName": [
                "Tom Grusz",
                "Grusz,
                "Tomáš Grusz"
              ],
              "url": "https://grusz.dev",
              "description": "Prague-based Frontend Architect & Software Engineer specializing in custom websites development and interactive web apps, combining a passion for design with expert coding skills.",
              "image": "https://grusz.dev/favicon.ico",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "grusz.dev",
                  "address": "tomas@grusz.dev",
                  "image": "https://grusz.dev/icon-521.png",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "ratingCount": "4"
                  }
                },
                "ratingValue": "5",
                "ratingCount": "4"
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
              "name": "Tom Grusz",
              "url": "https://grusz.dev",
              "image": "https://grusz.dev/images/icon.png",
              "sameAs": [
                "https://twitter.com/gruszdev",
                "https://www.linkedin.com/in/tomasgrusz/",
                "https://github.com/tomasgrusz",
                "https://grusz.dev",
                "https://dev.to/gruszdev"
              ],
              "jobTitle": "Frontend Architect & Software Engineer",
              "email": "contact@grusz.dev",
              "alternateName": "Tomas Grusz",
              "gender": "Male",
              "additionalName": "Tomáš",
              "alumniOf": "University of Birmingham",
              "worksFor": {
                "@type": "Organization",
                "name": "Mastercard",
                "url": "https://mastercard.com"
              }
            }`,
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "grusz.dev",
            "address": "contact@grusz.dev",
            "image": "https://grusz.dev/icon-521.png",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "4"
            }
          }`,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
