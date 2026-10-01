'use client';

import React, { useState } from 'react';
import { Award, ShieldCheck, HeartPulse, UserCheck, Stethoscope, Eye, X, MessageCircle, Phone, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutDoctor() {
  const [showBannerModal, setShowBannerModal] = useState(false);
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-emerald-50/20 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Visual Info Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-md">
              
              {/* Doctor Avatar Photo */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden ring-4 ring-emerald-500/30 shadow-lg shadow-emerald-600/15 mb-4 bg-slate-100">
                <img
                  src="/pic.png"
                  alt="Homeo Dr. Ateeq-ur-Rehman Butt"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center mb-5">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {t.doctorName}
                </h3>
                <div className="mt-2 text-xs font-bold text-emerald-700 tracking-wider">
                  D.H.M.S • R.H.M.P (Registered Practitioner)
                </div>
              </div>

              {/* Badges list */}
              <div className="space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-700">
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50/70">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">{t.badgeGovt}</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50/70">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">{t.badgeSafe}</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50/70">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">{t.badgePrivacy}</span>
                </div>
              </div>

              {/* View Original Signboard Button */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowBannerModal(true)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-xs transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.viewOriginalBanner}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold shadow-xs">
              <HeartPulse className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t.doctorTag}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-[1.3] sm:leading-[1.3]">
              {t.doctorHeading}
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose font-medium">
              {t.doctorBio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                <h4 className="font-black text-slate-900 text-sm sm:text-base">
                  {t.naturalFeatureTitle}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.naturalFeatureDesc}
                </p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                <h4 className="font-black text-slate-900 text-sm sm:text-base">
                  {t.humanFeatureTitle}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.humanFeatureDesc}
                </p>
              </div>
            </div>

            {/* Direct Consultation CTAs */}
            <div className="pt-2 flex flex-row flex-wrap gap-3 sm:gap-4 items-center">
              <a
                href="https://wa.me/923236392323?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%DB%8C%DA%A9%D9%85%20%DA%88%D8%A7%DA%A9%D9%87%D8%B1%20%D8%B9%D8%AA%DB%8C%D9%82%20%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%B0%D9%86%20%D8%A8%D9%B7%20%D8%B5%D8%A7%D8%AD%D8%A8%D8%8C%20%D9%85%DB%8C%DA%BA%20%D9%85%D8%B4%D9%88%D8%B1%DB%81%20%DA%A9%D8%B1%D9%86%D8%A7%20%DA%86%D8%A7%DB%81%D8%AA%D8%A7%20%DB%81%D9%88%DA%BA%DB%94"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-emerald-600/20 transition-all font-english whitespace-nowrap cursor-pointer"
                dir="ltr"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp</span>
              </a>
              <a
                href="tel:03236392323"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all font-english whitespace-nowrap"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="tracking-wide whitespace-nowrap font-bold">0323-6392323</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Modal for viewing original banner */}
      {showBannerModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowBannerModal(false)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-emerald-600" />
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {lang === 'ur' ? 'کلینک کا اصل اشتہاری بورڈ' : 'Original Clinic Signboard'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowBannerModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center max-h-[65vh]">
              <img
                src="/banner.png"
                alt="Homeo Dr. Ateeq ur Rehman Butt Signboard"
                className="w-full h-auto object-contain max-h-[60vh]"
              />
            </div>

            <div className="text-center text-xs text-slate-500 pt-1 font-medium">
              چونگی نمبر 7 فردوس ٹاؤن گلی نمبر 2 اوکاڑہ • فون: 0323-6392323
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
