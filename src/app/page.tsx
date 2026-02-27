'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import WaveDivider from '@/components/WaveDivider';
import { APP_STORE_URL } from '@/lib/constants';

export default function Home() {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    // Function to scroll to element by ID
    const scrollToElement = (id: string) => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };

    // Handle initial load with hash in URL (coming from another page)
    const handleInitialHash = () => {
      if (window.location.hash && window.location.hash.startsWith('#')) {
        const targetId = window.location.hash.slice(1);
        // Use setTimeout to ensure the DOM is fully loaded
        setTimeout(() => scrollToElement(targetId), 100);
      }
    };

    // Handle anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        // Check if it's an internal link to the current page
        const isInternalLink =
          anchor.origin === window.location.origin &&
          (anchor.pathname === window.location.pathname ||
           anchor.pathname === '/' + window.location.pathname ||
           window.location.pathname + '/' === anchor.pathname);

        if (isInternalLink) {
          e.preventDefault();
          const targetId = anchor.hash.slice(1);
          scrollToElement(targetId);
          
          // Update URL without scrolling
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    // Add event listeners
    handleInitialHash();
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />

        <div id="features" className="relative">
          <Features />
          <WaveDivider flip={false} className="absolute -bottom-px left-0 right-0 z-10" />
        </div>

        <div id="how-it-works" className="relative bg-gray-50 dark:bg-gray-900">
          <Steps />
        </div>

        <section id="download" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to <span className="gradient-text">Split Bills</span> Effortlessly?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Download Splitra today and never worry about complicated bill splitting again.
            </p>
            <a
              href={APP_STORE_URL}
              className="inline-block transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                width={200}
                height={67}
              />
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}
