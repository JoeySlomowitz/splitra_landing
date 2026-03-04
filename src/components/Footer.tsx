'use client';

import Link from 'next/link';
import PlaceholderImage from './PlaceholderImage';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <PlaceholderImage
                width={40}
                height={40}
                text=""
                isIcon={true}
                bgColor="#34C759"
                className="mr-2 rounded-lg dark:bg-[#58D158]"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Splitra</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              The easiest way to split receipts with friends. Scan, split, and share in seconds.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/splitraapp?s=21&t=YbKAF7AlNFH_lloQdmEMxg" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <span className="sr-only">X</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/splitraapp" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 134 134" aria-hidden="true">
                  <path d="M66.5369 0C48.4665 0 46.2006 0.0766603 39.1037 0.400337C32.0216 0.723419 27.1849 1.84836 22.9525 3.4929C18.5771 5.19329 14.8665 7.46853 11.1676 11.1674C7.46853 14.8663 5.19329 18.5773 3.49309 22.9527C1.84817 27.1849 0.723617 32.0216 0.400139 39.1037C0.0764622 46.2006 0 48.4665 0 66.5369C0 84.607 0.0764622 86.8729 0.400139 93.9698C0.723617 101.052 1.84817 105.889 3.49309 110.121C5.19349 114.496 7.46873 118.207 11.1676 121.906C14.8667 125.605 18.5771 127.88 22.9525 129.581C27.1849 131.225 32.0216 132.35 39.1037 132.673C46.2006 132.997 48.4665 133.074 66.5369 133.074C84.607 133.074 86.8729 132.997 93.9698 132.673C101.052 132.35 105.889 131.225 110.121 129.581C114.496 127.88 118.207 125.605 121.906 121.906C125.605 118.207 127.88 114.496 129.581 110.121C131.225 105.889 132.35 101.052 132.673 93.9698C132.997 86.8729 133.074 84.607 133.074 66.5369C133.074 48.4665 132.997 46.2006 132.673 39.1037C132.35 32.0216 131.225 27.1849 129.581 22.9527C127.88 18.5773 125.605 14.8663 121.906 11.1674C118.207 7.46853 114.496 5.19329 110.121 3.4929C105.889 1.84836 101.052 0.723419 93.9698 0.400337C86.8729 0.0766603 84.607 0 66.5369 0ZM66.5369 11.9885C84.3027 11.9885 86.4072 12.0565 93.4233 12.3766C99.9107 12.6723 103.434 13.7563 105.778 14.6675C108.884 15.8746 111.101 17.3163 113.429 19.6446C115.757 21.973 117.199 24.1896 118.406 27.2952C119.317 29.6398 120.401 33.163 120.697 39.6502C121.017 46.6663 121.085 48.7708 121.085 66.5368C121.085 84.3027 121.017 86.4072 120.697 93.4233C120.401 99.9107 119.317 103.434 118.406 105.778C117.199 108.884 115.757 111.101 113.429 113.429C111.101 115.757 108.884 117.199 105.778 118.406C103.434 119.317 99.9105 120.401 93.4233 120.697C86.4084 121.017 84.3041 121.085 66.5368 121.085C48.7694 121.085 46.6655 121.017 39.6502 120.697C33.1628 120.401 29.6398 119.317 27.2954 118.406C24.1894 117.199 21.973 115.757 19.6448 113.429C17.3165 111.101 15.8746 108.884 14.6675 105.778C13.7563 103.434 12.6725 99.9105 12.3766 93.4233C12.0565 86.4072 11.9885 84.3027 11.9885 66.5368C11.9885 48.7708 12.0565 46.6663 12.3766 39.6502C12.6725 33.1628 13.7563 29.6398 14.6675 27.2954C15.8746 24.1894 17.3165 21.973 19.6446 19.6448C21.973 17.3163 24.1896 15.8746 27.2952 14.6675C29.6398 13.7563 33.163 12.6723 39.6502 12.3766C46.6663 12.0565 48.7708 11.9885 66.5368 11.9885" />
                  <path d="M66.537 88.7157C54.2876 88.7157 44.3578 78.7859 44.3578 66.5369C44.3578 54.2875 54.2876 44.3577 66.537 44.3577C78.786 44.3577 88.7157 54.2875 88.7157 66.5369C88.7157 78.7859 78.786 88.7157 66.537 88.7157ZM66.537 32.3692C47.6664 32.3692 32.3693 47.6664 32.3693 66.5369C32.3693 85.407 47.6664 100.704 66.537 100.704C85.4071 100.704 100.704 85.407 100.704 66.5369C100.704 47.6664 85.4071 32.3692 66.537 32.3692ZM110.039 31.0193C110.039 35.4291 106.464 39.0036 102.054 39.0036C97.6448 39.0036 94.0699 35.4291 94.0699 31.0193C94.0699 26.6096 97.6448 23.0347 102.054 23.0347C106.464 23.0347 110.039 26.6096 110.039 31.0193Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/support" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Help & Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Splitra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}