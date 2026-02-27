'use client';

import PlaceholderImage from './PlaceholderImage';
import Image from 'next/image';
import { APP_STORE_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] py-4 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      {/* Animated floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-[#34C759]/10 to-[#2db14e]/5 dark:from-[#58D158]/10 dark:to-[#4abb4a]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-[15%] w-96 h-96 bg-gradient-to-br from-[#34C759]/8 to-[#2db14e]/3 dark:from-[#58D158]/8 dark:to-[#4abb4a]/3 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 left-[20%] w-64 h-64 bg-gradient-to-br from-[#34C759]/6 to-[#2db14e]/2 dark:from-[#58D158]/6 dark:to-[#4abb4a]/2 rounded-full blur-3xl animate-float" style={{animationDelay: '-10s'}} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-snug animate-fadeInUp">
            Scan a receipt<br />
            <span className="gradient-text text-shadow-soft">split the bill</span><br />
            Effortlessly
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 animate-fadeInUp-delay-1">
            Tired of the awkward math after a group meal? Splitra is an iOS app that lets you split a restaurant bill just by scanning it with your camera. Our AI automatically reads the items and prices, so you can assign items to friends and see who owes what in seconds.
          </p>
          <div className="mt-8 animate-fadeInUp-delay-2">
            <a
              href={APP_STORE_URL}
              className="inline-block transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
                priority
              />
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end animate-scaleIn">
          <div className="relative w-[320px] h-auto">
            {/* Enhanced multi-layer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#34C759] to-[#2db14e] rounded-[60px] blur-2xl opacity-20 animate-pulse dark:from-[#58D158] dark:to-[#4abb4a]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#34C759]/30 via-transparent to-[#2db14e]/30 rounded-[60px] blur-xl opacity-30 dark:from-[#58D158]/30 dark:to-[#4abb4a]/30" />
            <div className="relative">
              <PlaceholderImage
                width={310}
                height={679.2}
                text=""
                bgColor="#f5f5f7 dark:bg-black"
                textColor="#0071E3"
                className="relative z-10 rounded-[60px]"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex ">
                <Image
                  src="/images/receipt_total_light.png"
                  width={320}
                  height={696}
                  alt="Splitra AI receipt scanner showing itemized bill split with automatic item detection and price calculation"
                  className='relative z-20 w-auto h-full object-contain rounded-[60px] shadow-2xl mb-4 block dark:hidden'
                />
                <Image
                  src="/images/receipt_total_dark.png"
                  width={320}
                  height={696}
                  alt="Splitra AI receipt scanner showing itemized bill split with automatic item detection and price calculation"
                  className='relative z-20 w-auto h-full object-contain rounded-[60px] shadow-2xl mb-4 hidden dark:block'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-black"></div>
    </section>
  );
}