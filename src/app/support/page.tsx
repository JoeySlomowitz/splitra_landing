'use client';

import { useState, FormEvent } from 'react';

const FORMSPREE_ID = 'xdalqwed';

export default function Support() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">Support</h1>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Have a question, issue, or suggestion? We&apos;re here to help. Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            We typically respond within 48 hours.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>

                        {status === 'success' ? (
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-8">
                                <p className="text-green-800 dark:text-green-200 font-medium">
                                    Thanks for reaching out! We&apos;ll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#34C759] dark:focus:ring-[#58D158] focus:border-transparent outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#34C759] dark:focus:ring-[#58D158] focus:border-transparent outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#34C759] dark:focus:ring-[#58D158] focus:border-transparent outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#34C759] dark:focus:ring-[#58D158] focus:border-transparent outline-none transition-colors resize-vertical"
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
                                        <p className="text-red-800 dark:text-red-200 font-medium">
                                            Something went wrong. Please try again later.
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#34C759] to-[#2db14e] hover:from-[#2db14e] hover:to-[#28a745] dark:from-[#58D158] dark:to-[#4abb4a] dark:hover:from-[#4abb4a] dark:hover:to-[#3ca842] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Frequently Asked Questions</h2>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">How do I scan a receipt?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Open the app and point your camera at the receipt and Splitra will automatically detect and extract the items and prices.  You can also use an image of a receipt from your photo gallery.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">Is my data private?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Yes. Splitra does not store your receipt images or data on our servers. Receipt images are processed by third-party AI services for text extraction only. See our <a href="/privacy-policy" className="text-[#34C759] dark:text-[#58D158] hover:underline">Privacy Policy</a> for full details.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">How do I report a bug?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Use the contact form above to describe the issue. Please include what you were doing when the bug occurred and any error messages you saw.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">What types of receipts are supported?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Splitra works best with standard retail and restaurant receipts that list individual items with prices. For best results, make sure the receipt is well-lit and fully visible in the camera frame.
                        </p>
                    </div>
                </div>
            </main>

        </div>
    );
}
