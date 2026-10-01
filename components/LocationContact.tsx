'use client';

import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Copy, Check, Navigation } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function LocationContact() {
  const [copied, setCopied] = useState(false);
  const { lang, t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(t.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200/80 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.locationTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.3]">
            {t.locationTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.locationSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          
          {/* Card 1: Address */}
          <div className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80 flex flex-col justify-between shadow-xs hover:shadow-sm transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                {t.addressCardTitle}
              </h3>
              <p className="text-slate-800 font-bold text-sm sm:text-base mb-2 leading-relaxed">
                {t.fullAddress}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mb-4 font-english">
                {lang === 'ur' ? 'Chungi No. 7, Firdous Town, Street No. 2, Okara, Punjab' : 'چونگی نمبر 7 فردوس ٹاؤن گلی نمبر 2 اوکاڑہ'}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-200/70">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 shadow-xs transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.addressCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t.copyAddressBtn}</span>
                  </>
                )}
              </button>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Chungi+No+7+Firdous+Town+Okara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.openMapsBtn}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Contact Numbers */}
          <div className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80 flex flex-col justify-between shadow-xs hover:shadow-sm transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4 shadow-xs">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                {t.contactCardTitle}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                {t.contactCardDesc}
              </p>

              <div className="bg-white rounded-xl p-3.5 border border-slate-200 text-center mb-4 shadow-xs">
                <span className="text-[11px] text-slate-500 font-bold block mb-1">{t.primaryNumberLabel}</span>
                <a
                  href="tel:03236392323"
                  className="text-xl sm:text-2xl font-black text-slate-900 hover:text-emerald-600 transition-colors font-english tracking-wider block"
                  dir="ltr"
                >
                  0323-6392323
                </a>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-200/70">
              <a
                href="tel:03236392323"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-all font-english whitespace-nowrap"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="whitespace-nowrap font-bold">0323-6392323</span>
              </a>

              <a
                href="https://wa.me/923236392323"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-xs transition-all font-english whitespace-nowrap"
                dir="ltr"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Clinic Hours & Guidelines */}
          <div className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80 flex flex-col justify-between shadow-xs hover:shadow-sm transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                {t.hoursCardTitle}
              </h3>
              
              <div className="space-y-2.5 mt-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <span className="font-bold text-slate-700">{t.morningSlot}</span>
                  <span className="font-black text-slate-900 font-english text-xs" dir="ltr">10:00 AM – 02:00 PM</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <span className="font-bold text-slate-700">{t.eveningSlot}</span>
                  <span className="font-black text-slate-900 font-english text-xs" dir="ltr">05:00 PM – 09:00 PM</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 text-amber-900">
                  <span className="font-bold">{t.sundaySlot}</span>
                  <span className="font-bold">{t.sundaySlotTime}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] sm:text-xs text-amber-950 leading-relaxed font-medium">
                {t.travelerNotice}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/70 text-center">
              <span className="text-[11px] sm:text-xs text-slate-500 font-bold">
                {t.doctorName}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
