'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const faqsData = [
  {
    qUr: 'کیا دمہ کا علاج واقعی 100% فری ہے؟',
    qEn: 'Is asthma treatment truly 100% free of charge?',
    aUr: 'جی ہاں، بالکل! ہومیو ڈاکٹر عتیق الرحمٰن بٹ صاحب کی جانب سے دمہ اور شدید سانس کی تکلیف کے مریضوں کا معائنہ اور علاج خالصتاً انسانی ہمدردی اور فی سبیل اللہ فری کیا جاتا ہے۔',
    aEn: 'Yes, absolutely! Dr. Ateeq-ur-Rehman Butt provides asthma and chronic respiratory treatment completely free of cost as a humanitarian community initiative.'
  },
  {
    qUr: 'بے اولاد حضرات کیلئے مفت مشورے کا کیا طریقہ کار ہے؟',
    qEn: 'How does the free consultation for childless couples work?',
    aUr: 'بے اولاد حضرات اور جوڑے براہ راست کلینک تشریف لا سکتے ہیں یا فون / واٹس ایپ پر وقت حاصل کر سکتے ہیں۔ ڈاکٹر صاحب تمام پرانی رپورٹس (جیسے Semen Analysis وغیرہ) کا معائنہ کر کے بغیر کسی فیس کے مخلصانہ طبی مشورہ فراہم کرتے ہیں۔',
    aEn: 'Couples are welcome to visit our clinic or schedule via phone/WhatsApp. Dr. Ateeq will thoroughly review your existing diagnostic reports without charging any consultation fees.'
  },
  {
    qUr: 'مردانہ امراض کے علاج میں رازداری کا کتنا خیال رکھا جاتا ہے؟',
    qEn: 'What level of privacy is maintained for male vitality treatments?',
    aUr: 'مردانہ پوشیدہ اور جسمانی امراض میں مریض کی عزت نفس اور رازداری اولین ترجیح ہے۔ تمام تفصیلات اور رپورٹس مکمل طور پر صیغہ راز میں رکھی جاتی ہیں اور براہ راست صرف ڈاکٹر صاحب ہی مریض کا معائنہ کرتے ہیں۔',
    aEn: 'Patient dignity and confidentiality are our highest priorities. All examinations and medical records are handled personally by the doctor with strict confidentiality.'
  },
  {
    qUr: 'کیا ہومیوپیتھک ادویات کا کوئی نقصان یا سائیڈ ایفیکٹ ہوتا ہے؟',
    qEn: 'Do homeopathic remedies cause side effects?',
    aUr: 'ہومیوپیتھی قدرتی نباتاتی اور معدنی اجزاء سے تیار کی جاتی ہے۔ یہ طریقہ علاج کیمیکلز سے پاک ہوتا ہے، اس لیے اس کا معدے، گردوں یا جگر پر کوئی سائیڈ ایفیکٹ نہیں ہوتا اور یہ ہر عمر کے افراد کیلئے محفوظ ہے۔',
    aEn: 'Homeopathy utilizes natural plant and mineral micro-doses. It does not burden the kidneys or digestive tract with harsh synthetic chemicals and is exceptionally gentle and safe for all age groups.'
  },
  {
    qUr: 'کلینک پر تشریف لانے کے اوقات کیا ہیں؟',
    qEn: 'What are the visiting hours for the clinic?',
    aUr: 'کلینک پیر تا ہفتہ روزانہ صبح 10:00 بجے سے دوپہر 02:00 بجے تک اور شام 05:00 بجے سے رات 09:00 بجے تک کھلا رہتا ہے۔ دور دراز سے آنے والے مریض تشریف لانے سے پہلے 0323-6392323 پر اطلاع کر دیں۔',
    aEn: 'The clinic is open Monday through Saturday: 10:00 AM – 02:00 PM (Morning) and 05:00 PM – 09:00 PM (Evening). Out-of-town patients are advised to call 0323-6392323 beforehand.'
  },
  {
    qUr: 'کلینک کا پتہ کہاں ہے اور پہنچنے کا راستہ کیا ہے؟',
    qEn: 'Where is the clinic located and how can I reach it?',
    aUr: 'کلینک اوکاڑہ شہر میں "چونگی نمبر 7، فردوس ٹاؤن، گلی نمبر 2" میں واقع ہے۔ آپ ویب سائٹ پر موجود "گوگل میپ پر راستہ دیکھیں" کے بٹن پر کلک کر کے بھی باآسانی لوکیشن تک پہنچ سکتے ہیں۔',
    aEn: 'The clinic is conveniently situated at "Chungi No. 7, Firdous Town, Street No. 2, Okara". Click the "Get Directions on Google Maps" button on this website for GPS navigation.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang, t } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-slate-50/60 border-t border-slate-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200/80 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.faqTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.3]">
            {t.faqTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const question = lang === 'ur' ? faq.qUr : faq.qEn;
            const answer = lang === 'ur' ? faq.aUr : faq.aEn;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-emerald-300 bg-white shadow-xs' 
                    : 'border-slate-200/80 bg-white/80 hover:bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-start p-4 sm:p-5 flex items-center justify-between gap-3 font-bold text-slate-900 text-sm sm:text-base focus:outline-none cursor-pointer"
                >
                  <span className="leading-snug">{question}</span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                    isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed sm:leading-loose border-t border-emerald-50 text-start font-medium">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
