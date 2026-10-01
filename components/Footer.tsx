'use client';

import React from 'react';
import { HeartPulse, Phone, MapPin, MessageCircle, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 md:pb-14 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          
          {/* Column 1: About Doctor */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-black text-base">
                  {t.doctorName}
                </h4>
                <span className="text-xs text-emerald-400 font-bold">
                  {t.cityTag}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'ur'
                ? 'ڈی - ایچ - ایم - ایس، آر - ایچ - ایم - پی۔ اوکاڑہ میں خالص اور بے ضرر ہومیوپیتھک طریقہ علاج کے ساتھ انسانیت کی بے لوث خدمت میں مصروف عمل۔'
                : 'D.H.M.S, R.H.M.P. Dedicated to restoring health with pure, non-toxic homeopathic medicine in Okara.'}
            </p>
          </div>

          {/* Column 2: Key Offers */}
          <div className="space-y-2.5">
            <h4 className="text-white font-black text-sm border-b border-slate-800 pb-2">
              {t.footerOffersTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>{lang === 'ur' ? 'بے اولاد حضرات کیلئے مفت مشورہ' : 'Free Consultation for Couples'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                <span>{lang === 'ur' ? 'دمہ اور سانس کے امراض کا فری علاج' : 'Free Asthma Care'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>{lang === 'ur' ? 'مردانہ پوشیدہ امراض کا کامیاب حل' : 'Men’s Vitality Care'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
                <span>{lang === 'ur' ? 'جوڑوں و مہروں کے درد کا علاج' : 'Joint Pain Relief'}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Contact */}
          <div className="space-y-2.5">
            <h4 className="text-white font-black text-sm border-b border-slate-800 pb-2">
              {t.footerContactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:03236392323" className="hover:text-white font-english font-bold text-xs tracking-wider" dir="ltr">
                  0323-6392323
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/923236392323" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white font-bold"
                >
                  WhatsApp: 0323-6392323
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Medical Principles */}
          <div className="space-y-2.5">
            <h4 className="text-white font-black text-sm border-b border-slate-800 pb-2">
              {t.footerAdviceTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerAdviceText}
            </p>
            <div className="p-2.5 rounded-xl bg-slate-800/80 text-[11px] text-emerald-300 font-medium">
              {t.footerCallBefore}
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-start font-medium">
          <div>
            © {new Date().getFullYear()} {t.footerCopyright}
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-[11px]">
            <span>{t.footerHeartText}</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline shrink-0" />
          </div>
        </div>

      </div>
    </footer>
  );
}
