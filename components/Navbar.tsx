'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, HeartPulse, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100/80 shadow-xs">
      {/* Top Banner for Critical Announcements */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white py-1.5 px-4 text-center text-[11px] sm:text-xs font-medium tracking-wide">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="bg-white text-emerald-950 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-black shadow-xs">
            {t.announcementTag}
          </span>
          <span className="font-semibold">{t.announcementAsthma}</span>
          <span className="opacity-60 hidden sm:inline">•</span>
          <span className="font-semibold">{t.announcementInfertility}</span>
          <span className="opacity-60 hidden md:inline">•</span>
          <a
            href="tel:03236392323"
            className="inline-flex items-center gap-1 font-bold underline hover:text-emerald-100 transition-colors font-english tracking-wide"
            dir="ltr"
          >
            <Phone className="w-3 h-3" />
            0323-6392323
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Clinic Brand & Logo (without "اوکاڑہ والے", with Okara clinic tag) */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
              <HeartPulse className="w-5 h-5 text-emerald-100" />
            </div>
            <div className="flex flex-col text-start">
              <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                {t.doctorName}
              </span>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <span className="font-bold text-emerald-700">{t.qualifications}</span>
                <span>•</span>
                <span className="truncate">{t.cityTag}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <a href="#specialties" className="hover:text-emerald-600 transition-colors py-1">
              {t.navSpecialties}
            </a>
            <a href="#products-delivery" className="hover:text-emerald-600 transition-colors py-1 text-emerald-800 font-bold">
              {t.navProducts}
            </a>
            <a href="#about" className="hover:text-emerald-600 transition-colors py-1">
              {t.navAbout}
            </a>
            <a href="#location" className="hover:text-emerald-600 transition-colors py-1">
              {t.navLocation}
            </a>
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923236392323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-xs hover:shadow-emerald-500/25 transition-all active:scale-95 font-english whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Call Button */}
            <a
              href="tel:03236392323"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-xs transition-all active:scale-95 font-english whitespace-nowrap"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>0323-6392323</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-1.5">
            <a
              href="tel:03236392323"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
              aria-label="Direct Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <a
            href="#specialties"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 font-bold hover:text-emerald-600 border-b border-slate-100 text-sm"
          >
            {t.navSpecialties}
          </a>
          <a
            href="#products-delivery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-emerald-800 font-bold hover:text-emerald-600 border-b border-slate-100 text-sm"
          >
            {t.navProducts}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 font-bold hover:text-emerald-600 border-b border-slate-100 text-sm"
          >
            {t.navAbout}
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 font-bold hover:text-emerald-600 border-b border-slate-100 text-sm"
          >
            {t.navLocation}
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:03236392323"
              className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-2.5 rounded-lg font-bold font-english text-sm shadow-xs"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              0323-6392323
            </a>
            <a
              href="https://wa.me/923236392323"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-lg font-bold text-sm shadow-xs font-english"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
