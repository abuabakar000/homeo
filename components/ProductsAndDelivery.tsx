'use client';

import React from 'react';
import { 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  Check, 
  MessageCircle, 
  Phone, 
  Flame, 
  PackageCheck 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductsAndDelivery() {
  const { lang, t } = useLanguage();

  return (
    <section id="products-delivery" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-emerald-50/25 to-white border-y border-emerald-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.deliveryTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.8] sm:leading-[1.9] py-1.5">
            {t.deliverySectionTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 leading-[2.1] max-w-xl mx-auto font-medium">
            {t.deliverySectionSubtitle}
          </p>
        </div>

        {/* 2-Column Grid: Tila Lajawab & Home Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Tila Lajawab */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            {/* Top subtle ambient glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-100 rounded-full blur-2xl opacity-60 pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 shadow-xs">
                  {t.tilaCardBadge}
                </span>
              </div>

              <div className="py-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-[1.8] pb-1">
                  {t.tilaCardTitle}
                </h3>
                
                <p className="text-xs sm:text-sm font-bold text-amber-700 mt-2 mb-3.5 leading-[1.8]">
                  {t.tilaCardSubtitle}
                </p>
              </div>

              <p className={`text-xs sm:text-sm text-slate-600 mb-5 font-medium ${
                lang === 'ur' ? 'leading-[2.2]' : 'leading-relaxed'
              }`}>
                {t.tilaCardDesc}
              </p>

              {/* Checklist */}
              <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-4">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{t.tilaPoint1}</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{t.tilaPoint2}</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{t.tilaPoint3}</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 items-stretch">
              <a
                href={`https://wa.me/923236392323?text=${encodeURIComponent(
                  lang === 'ur'
                    ? 'السلام علیکم ڈاکٹر صاحب! مجھے طلاء لاجواب کے متعلق معلومات، قیمت اور آرڈر کرنے کا طریقہ بتا دیں۔'
                    : 'Hello Dr. Ateeq! I would like to inquire and place an order for Tila Lajawab.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all font-english cursor-pointer"
                dir="ltr"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap font-bold">WhatsApp Order</span>
              </a>

              <a
                href="tel:03236392323"
                className="inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all font-english whitespace-nowrap"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>0323-6392323</span>
              </a>
            </div>
          </div>

          {/* Card 2: Medicine Home Delivery */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-teal-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            {/* Top subtle ambient glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-teal-100 rounded-full blur-2xl opacity-60 pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white flex items-center justify-center shadow-md shadow-teal-600/20">
                  <Truck className="w-6 h-6" />
                </div>
              </div>

              <div className="py-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-[1.8] pb-1">
                  {t.parcelCardTitle}
                </h3>
                
                <p className="text-xs sm:text-sm font-bold text-teal-700 mt-2 mb-3.5 leading-[1.8]">
                  {t.parcelCardSubtitle}
                </p>
              </div>

              <p className={`text-xs sm:text-sm text-slate-600 mb-5 font-medium ${
                lang === 'ur' ? 'leading-[2.2]' : 'leading-relaxed'
              }`}>
                {t.parcelCardDesc}
              </p>

              {/* Checklist */}
              <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-4">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <PackageCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{t.parcelPoint1}</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{t.parcelPoint2}</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <Truck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{t.parcelPoint3}</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 items-stretch">
              <a
                href={`https://wa.me/923236392323?text=${encodeURIComponent(
                  lang === 'ur'
                    ? 'السلام علیکم ڈاکٹر صاحب! میں گھر بیٹھے ادویات بذریعہ پارسل منگوانا چاہتا/چاہتی ہوں۔ برائے مہربانی طریقہ کار بتا دیں۔'
                    : 'Hello Dr. Ateeq! I would like to order prescribed medicines for home delivery.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all font-english cursor-pointer"
                dir="ltr"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap font-bold">WhatsApp Delivery</span>
              </a>

              <a
                href="tel:03236392323"
                className="inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all font-english whitespace-nowrap"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>0323-6392323</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
