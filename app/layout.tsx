import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#059669',
};

export const metadata: Metadata = {
  title: 'ہومیو ڈاکٹر عتیق الرحمٰن بٹ | Homeo Dr. Ateeq-ur-Rehman Butt (Okara Clinic)',
  description: 'ہومیو ڈاکٹر عتیق الرحمٰن بٹ (D.H.M.S, R.H.M.P)۔ بے اولاد حضرات کیلئے خوشخبری، مفت مشورہ۔ دمہ کا علاج فری۔ Homeopathic Clinic Okara. Phone: 0323-6392323',
  keywords: [
    'ہومیوپیتھک ڈاکٹر اوکاڑہ',
    'ہومیو ڈاکٹر عتیق الرحمٰن بٹ',
    'Homeo Doctor Ateeq ur Rehman Butt',
    'Homeopathic Clinic Okara',
    'Free Asthma Treatment Okara',
    'Male Infertility Treatment Okara',
    'DHMS RHMP Okara'
  ],
  authors: [{ name: 'Dr. Ateeq ur Rehman Butt' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-emerald-100 selection:text-emerald-900 bg-[#FAFCFB] text-slate-800">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
