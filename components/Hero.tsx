'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white py-12 sm:py-16 md:py-20 border-b border-emerald-100/60">
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 pointer-events-none overflow-hidden opacity-25">
        <div className="absolute top-4 right-10 w-72 h-72 rounded-full bg-emerald-200/50 blur-3xl"></div>
        <div className="absolute top-8 left-10 w-80 h-80 rounded-full bg-teal-200/40 blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Doctor Portrait Image (Clean Minimalist Circle) */}
          <div className="shrink-0 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Soft decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-400 to-teal-400 rounded-full blur-md opacity-25 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Circular Photo Frame with Thin Border */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full p-1 sm:p-1.5 bg-white border border-emerald-300 shadow-xl shadow-emerald-950/5 ring-4 ring-emerald-500/15">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                  <img
                    src="/pic.png"
                    alt="Homeo Dr. Ateeq-ur-Rehman Butt - Okara"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Info & CTAs */}
          <div className="flex-1 text-center lg:text-start order-2 lg:order-1 space-y-4 sm:space-y-5 max-w-2xl">
            
            {/* Top Qualifications Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs sm:text-sm font-semibold border border-emerald-200/90 shadow-xs mb-3 sm:mb-4">
              <Award className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.registeredDoctor}</span>
              <span className="text-emerald-300">•</span>
              <span className="font-english font-bold text-slate-800">D.H.M.S • R.H.M.P</span>
            </div>

            {/* Doctor Name Heading with generous vertical clearance for Nastaliq calligraphy */}
            <div className="py-2 sm:py-3 my-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-slate-900 leading-[2.1] sm:leading-[2.2] tracking-tight py-2">
                <span>{t.heroTitlePrefix}{' '}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                  {t.heroTitleName}
                </span>
              </h1>

              {/* Subheading Typography (Not a capsule) */}
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-emerald-800 font-english uppercase tracking-wider mt-4 sm:mt-5 mb-2">
                Homeopathic Physician & Consultant • Okara
              </h3>
            </div>

            {/* Brief Description with generous line-height for Nastaliq */}
            <p className={`text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 pt-1 ${
              lang === 'ur' ? 'leading-[2.2] sm:leading-[2.3]' : 'leading-relaxed sm:leading-loose'
            }`}>
              {t.heroSubtitle}
            </p>

            {/* Primary Action Buttons: WhatsApp & Phone */}
            <div className="pt-2 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/923236392323?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%DB%8C%DA%A9%D9%85%20%DA%88%D8%A7%DA%A9%D9%87%D8%B1%20%D8%B9%D8%AA%DB%8C%D9%82%20%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%B0%D9%86%20%D8%A8%D9%B7%20%D8%B5%D8%A7%D8%AD%D8%A8%D8%8C%20%D9%85%DB%8C%DA%BA%20%D8%B1%D8%A7%D8%A8%D8%B7%DB%81%20%DA%A9%D8%B1%D9%86%D8%A7%20%DA%86%D8%A7%DB%81%D8%AA%D8%A7%20%DB%81%D9%88%DA%BA%DB%94"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] font-english whitespace-nowrap cursor-pointer"
                dir="ltr"
              >
                <MessageCircle className="w-4.5 h-4.5 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp</span>
              </a>

              {/* Phone Call Button */}
              <a
                href="tel:03236392323"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] font-english whitespace-nowrap"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="tracking-wide whitespace-nowrap font-bold">0323-6392323</span>
              </a>
            </div>

            {/* Clinic Location Address Link */}
            <div className="pt-1 flex items-center justify-center lg:justify-start">
              <a
                href="#location"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 bg-white/90 backdrop-blur px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{t.clinicAddressShort}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
