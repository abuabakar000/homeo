'use client';

import React from 'react';
import { 
  HeartHandshake, 
  Baby, 
  ShieldAlert, 
  Wind, 
  Activity, 
  Pill, 
  Sparkles, 
  Check, 
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const specialtiesData = [
  {
    id: 'male-health',
    titleUr: 'مردانہ امراض کا شافی علاج',
    titleEn: "Men's Health & Vitality",
    badgeUr: 'کامیاب و مجرب',
    badgeEn: 'Proven Results',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: ShieldAlert,
    iconBg: 'bg-emerald-50 text-emerald-600',
    descUr: 'مردانہ کمزوری، جریان، سرعت انزال اور تولیدی نقائص کا بغیر سائیڈ ایفیکٹ کے جڑی بوٹیوں اور خالص ہومیوپیتھک طریقہ سے مستقل علاج۔',
    descEn: 'Natural and confidential treatment for male reproductive health, physical vitality, stamina, and nervous weakness without side effects.',
    pointsUr: [
      'مکمل رازداری اور پردہ داری کے ساتھ معائنہ',
      'جسمانی توانائی اور اعصابی قوت کی بحالی',
      'کسی بھی قسم کے مصنوعی کیمیکلز سے پاک طریقہ علاج'
    ],
    pointsEn: [
      '100% discrete and confidential patient consultation',
      'Restores physiological stamina and nervous balance',
      'Completely free from synthetic steroids or stimulants'
    ]
  },
  {
    id: 'infertility',
    titleUr: 'بے اولاد حضرات کیلئے خوشخبری',
    titleEn: 'Infertility & Fertility Consultation',
    badgeUr: 'مشورہ مفت',
    badgeEn: 'Free Consultation',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    icon: Baby,
    iconBg: 'bg-amber-50 text-amber-600',
    descUr: 'اولاد کے خواہشمند جوڑوں کیلئے تفصیلی تشخیص اور رہنمائی۔ سپرم کاؤنٹ میں کمی، موٹیلٹی، ہارمونل بے اعتدالی اور نسوانی رکاوٹوں کا قدرتی علاج۔',
    descEn: 'Dedicated constitutional guidance for childless couples. Natural treatment for low sperm counts, motility, and hormonal balance.',
    pointsUr: [
      'ڈاکٹر صاحب سے تشخیصی مشورہ بالکل مفت',
      'قدرتی ادویات کے ذریعے جراثیم کی افزائش',
      'سالہا سال کے تجربات کی روشنی میں رہنمائی'
    ],
    pointsEn: [
      'Free initial consultation and report analysis by the doctor',
      'Safe homeopathic herbs to improve count and vitality',
      'Backed by extensive clinical success across Punjab'
    ]
  },
  {
    id: 'asthma',
    titleUr: 'دمہ اور سانس کا علاج',
    titleEn: 'Asthma & Respiratory Care',
    badgeUr: 'علاج 100% فری',
    badgeEn: '100% Free Care',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    icon: Wind,
    iconBg: 'bg-teal-50 text-teal-600',
    descUr: 'دمہ (Asthma)، دائمی کھانسی، سینے کی جکڑن اور الرجی سے نجات۔ کلینک پر دمہ کے مریضوں کی ادویات و دیکھ بھال بلا معاوضہ (فری) کی جاتی ہے۔',
    descEn: 'Comprehensive relief for chronic bronchial asthma, allergy, and seasonal wheezing. Asthma treatment is provided completely free.',
    pointsUr: [
      'دمہ کا علاج فی سبیل اللہ فری فراہم کیا جاتا ہے',
      'انہیلر پر انحصار کم کرنے میں معاون ادویات',
      'موسمی و گرد و غبار کی الرجی کا شافی حل'
    ],
    pointsEn: [
      'Treatment provided completely free for humanitarian service',
      'Helps reduce chronic dependence on inhalers',
      'Gentle remedies for seasonal and dust allergies'
    ]
  },
  {
    id: 'chronic',
    titleUr: 'جوڑوں اور مہروں کا درد',
    titleEn: 'Joint Pain, Sciatica & Arthritis',
    badgeUr: 'قدرتی تسکین',
    badgeEn: 'Natural Relief',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: Activity,
    iconBg: 'bg-blue-50 text-blue-600',
    descUr: 'گھٹنوں، کمر، مہروں اور عرق النساء (سیاٹیکا) کے درد کا ہومیوپیتھک علاج، جو درد کی جڑ پر اثر کرتا ہے بغیر معدے کو نقصان پہنچائے۔',
    descEn: 'Homeopathic formulas for knee pain, vertebrae stiffness, uric acid, and sciatica that heal without damaging the stomach lining.',
    pointsUr: [
      'پین کلرز کے بغیر قدرتی درد سے نجات',
      'ہڈیوں و جوڑوں کی لچک میں بہتری',
      'بزرگوں کیلئے انتہائی محفوظ طریقہ علاج'
    ],
    pointsEn: [
      'Long-term pain relief without heavy NSAID pain-killers',
      'Improves joint lubrication and mobility',
      'Exceptionally safe for elderly patients'
    ]
  },
  {
    id: 'stomach',
    titleUr: 'معدہ، گیس اور جگر کے امراض',
    titleEn: 'Digestive & Liver Disorders',
    badgeUr: 'مکمل شفا',
    badgeEn: 'Gentle Cure',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: Pill,
    iconBg: 'bg-purple-50 text-purple-600',
    descUr: 'دائمی قبض، تبخیر معدہ، تیزابیت، فیٹی لیور اور السر کا پائیدار علاج تاکہ کھانا جزو بدن بنے اور نظام انہضام درست رہے۔',
    descEn: 'Effective treatment for chronic acidity, gas, constipation, fatty liver, and indigestion to restore digestive wellness.',
    pointsUr: [
      'بدہضمی اور گیس کا جڑ سے خاتمہ',
      'بھوک اور جگر کے افعال میں قدرتی بہتری',
      'ہومیوپیتھک قطروں اور گولیوں کے ذریعے آسان استعمال'
    ],
    pointsEn: [
      'Resolves bloating and gastric reflux naturally',
      'Regulates liver metabolic function and healthy appetite',
      'Easy-to-take sweet pills and herbal drops'
    ]
  },
  {
    id: 'kidney',
    titleUr: 'گردہ و مثانہ کی پتھری',
    titleEn: 'Kidney & Urinary Stone Care',
    badgeUr: 'بغیر آپریشن',
    badgeEn: 'Non-Surgical',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    icon: HeartHandshake,
    iconBg: 'bg-rose-50 text-rose-600',
    descUr: 'ہومیوپیتھک ادویات سے گردے و مثانے کی چھوٹی پتھریوں کو بغیر آپریشن پگھلا کر قدرتی طریقے سے خارج کرنے میں مدد ملتی ہے۔',
    descEn: 'Homeopathic medicine to naturally dissolve and flush out renal calculus and urinary deposits without surgical invasion.',
    pointsUr: [
      'بغیر کسی تکلیف دہ سرجری کے علاج کی کوشش',
      'پیشاب کی جلن و انفیکشن کا خاتمہ',
      'پتھری کے دوبارہ بننے کے رجحان کو روکنا'
    ],
    pointsEn: [
      'Gentle non-invasive approach for urinary stones',
      'Soothes urinary burning and irritation',
      'Discourages recurrent stone formation'
    ]
  }
];

export default function Specialties() {
  const { lang, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="specialties" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.specialtiesTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.3]">
            {t.specialtiesTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            {t.specialtiesSubtitle}
          </p>
        </div>

        {/* Grid of specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {specialtiesData.map((item) => {
            const Icon = item.icon;
            const title = lang === 'ur' ? item.titleUr : item.titleEn;
            const subTitle = lang === 'ur' ? item.titleEn : item.titleUr;
            const badge = lang === 'ur' ? item.badgeUr : item.badgeEn;
            const desc = lang === 'ur' ? item.descUr : item.descEn;
            const points = lang === 'ur' ? item.pointsUr : item.pointsEn;

            return (
              <div 
                key={item.id}
                className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[11px] text-emerald-700 font-bold mb-3 font-english tracking-wide">
                    {subTitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                    {desc}
                  </p>

                  <ul className="space-y-2 mb-5 border-t border-slate-200/70 pt-3.5">
                    {points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={`https://wa.me/923236392323?text=${encodeURIComponent(
                      lang === 'ur' 
                        ? `السلام علیکم ڈاکٹر صاحب! میں "${item.titleUr}" کے سلسلے میں معلومات اور مشورہ حاصل کرنا چاہتا/چاہتی ہوں۔`
                        : `Hello Dr. Ateeq! I am inquiring about "${item.titleEn}" treatment at your Okara clinic.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-white hover:bg-emerald-600 text-slate-800 hover:text-white text-xs font-bold border border-slate-200 hover:border-emerald-600 shadow-xs transition-all group"
                  >
                    <span>{t.consultAboutThis}</span>
                    <ArrowIcon className="w-3.5 h-3.5 transform group-hover:-translate-x-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free consultation banner highlight with WhatsApp & Phone buttons */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1.5 text-center md:text-start">
            <span className="bg-white/20 text-[11px] font-bold px-2.5 py-0.5 rounded-full inline-block">
              {t.bannerHighlightTag}
            </span>
            <h3 className="text-xl sm:text-2xl font-black leading-snug">
              {t.bannerHighlightTitle}
            </h3>
            <p className="text-amber-50 text-xs sm:text-sm max-w-xl leading-relaxed">
              {t.bannerHighlightSubtitle}
            </p>
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center gap-3 flex-wrap">
            {/* WhatsApp Button in English */}
            <a
              href="https://wa.me/923236392323?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%DB%8C%DA%A9%D9%85%20%DA%88%D8%A7%DA%A9%D9%87%D8%B1%20%D8%B9%D8%AA%DB%8C%D9%82%20%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%B0%D9%86%20%D8%A8%D9%B7%20%D8%B5%D8%A7%D8%AD%D8%A8%D8%8C%20%D9%85%DB%8C%DA%BA%20%D9%85%D9%81%D8%AA%20%D8%B9%D9%84%D8%A7%D8%AC%20%D9%88%20%D9%85%D8%B4%D9%88%D8%B1%DB%81%20%DA%A9%DB%92%20%D8%B3%D9%84%D8%B3%D9%84%DB%92%20%D9%85%DB%8C%DA%BA%20%D8%B1%D8%A7%D8%A8%D8%B7%DB%81%20%DA%A9%D8%B1%20%D8%B1%DB%81%D8%A7%20%DB%81%D9%88%DA%BA%DB%94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all font-english whitespace-nowrap cursor-pointer"
              dir="ltr"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Phone Button */}
            <a
              href="tel:03236392323"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm shadow-xs transition-all font-english whitespace-nowrap"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>0323-6392323</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
