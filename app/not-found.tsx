'use client';

import React from 'react';
import Link from 'next/link';
import { Home, HeartPulse } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFCFB] px-4 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-emerald-100 shadow-xl space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
          <HeartPulse className="w-8 h-8" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          صفحہ دستیاب نہیں ہے
        </h1>
        <p className="text-sm font-english font-bold text-slate-500">
          Page Not Found (404)
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          یہ صفحہ موجود نہیں ہے۔ کلینک کی تمام خدمات اور رابطہ دیکھنے کے لیے نیچے دیے گئے بٹن پر کلک کر کے مرکزی صفحہ پر تشریف لائیں۔
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all w-full"
          >
            <Home className="w-4 h-4" />
            <span>مرکزی صفحہ پر جائیں (Return Home)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
