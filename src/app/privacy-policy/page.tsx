'use client';

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            Last Updated: February 27, 2026
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Introduction</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Welcome to Splitra. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains our approach to privacy and how your information is handled when you use our receipt scanning bill-splitting application.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Splitra uses third-party artificial intelligence services to process receipt images and extract text for bill-splitting calculations. While we strive to protect your privacy, please be aware that receipt data is transmitted to these services for processing.
                        </p>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
                            <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                                <strong>Important:</strong> Do not scan receipts containing personally identifying information, sensitive personal data, or confidential information. Use Splitra only for standard retail receipts.
                            </p>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Third-Party AI Processing</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Splitra uses third-party artificial intelligence services to process receipt images and extract text information for bill-splitting calculations. When you scan a receipt, the image is transmitted to these AI services for processing, and the extracted data is returned to the app.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Our approach includes these privacy considerations:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">We do not store receipt images or extracted data on our own servers</li>
                            <li className="mb-2">Third-party AI services are subject to their own privacy policies and data handling practices</li>
                            <li className="mb-2">Processing requires an internet connection to access AI services</li>
                            <li className="mb-2">We recommend using only standard retail receipts without sensitive personal information</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Data Processing and Third-Party Services</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Splitra&apos;s data processing involves third-party AI services. Here&apos;s how your data is handled:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">We do not operate our own servers for receipt processing</li>
                            <li className="mb-2">Receipt images are transmitted to third-party AI services for text extraction</li>
                            <li className="mb-2">We do not store your receipt data on our servers after processing</li>
                            <li className="mb-2">Third-party AI services have their own data retention and privacy policies</li>
                            <li className="mb-2">Bill splitting calculations are performed within the app after receiving extracted data</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Standard app functionality services provided by Apple (App Store downloads and crash reporting) are governed by Apple&apos;s privacy policy and remain unchanged.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Camera Permission</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Splitra requires camera permission to function properly. This permission is used exclusively for scanning receipts. When you take a photo of a receipt:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">The image is transmitted to third-party AI services for text extraction</li>
                            <li className="mb-2">The image is only stored temporarily during the processing session</li>
                            <li className="mb-2">We do not store the image on our own servers after processing</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            You can revoke camera permission at any time through your device settings, though this will limit the app&apos;s functionality as receipt scanning is our core feature.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Data Handling</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Splitra handles data as follows:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">Receipt images are transmitted to third-party AI services for processing</li>
                            <li className="mb-2">Extracted receipt data (items, prices, etc.) is returned from AI services to the app</li>
                            <li className="mb-2">Bill splitting calculations are performed within the app</li>
                            <li className="mb-2">App preferences and settings are stored locally on your device</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Data processed during your session is automatically cleared when you close the app or start a new receipt scanning session. We do not maintain a history of your receipts or transactions on our servers. However, third-party AI services may have their own data retention policies.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Handling of Financial Information</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Splitra processes financial information from your receipts, including:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">Item names and prices</li>
                            <li className="mb-2">Tax amounts</li>
                            <li className="mb-2">Total bill amounts</li>
                            <li className="mb-2">Merchant information</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            This information is:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">Transmitted to third-party AI services for text extraction processing</li>
                            <li className="mb-2">Used only for the purpose of splitting the bill</li>
                            <li className="mb-2">Not stored on our servers after processing</li>
                            <li className="mb-2">Not used by us for any advertising, marketing, or analytics purposes</li>
                            <li className="mb-2">Subject to the privacy policies of third-party AI service providers</li>
                            <li className="mb-2">Automatically cleared from the app when you close it or start a new receipt scanning session</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Sharing Results</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Splitra allows you to share bill splitting results with others. When you use this feature:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">You control who receives the information</li>
                            <li className="mb-2">Sharing happens through your device&apos;s native sharing features (Messages, Email, etc.)</li>
                            <li className="mb-2">We do not have access to or control over the information once you share it</li>
                            <li className="mb-2">The privacy policies of the apps you use to share (Messages, Email, etc.) will apply to that shared data</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Children&apos;s Privacy</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Splitra is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Your Rights</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            While we do not collect or store your personal data on our servers, your receipt data is processed by third-party AI services. For data rights related to third-party processing, you should consult the privacy policies of those services.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            You can:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">Control camera permissions through your device settings</li>
                            <li className="mb-2">Delete the app at any time, which will remove all app-related data from your device</li>
                            <li className="mb-2">Use the app without creating an account or providing any personal information</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Email: privacy@splitra.app
                        </p>
                    </div>
                </div>
            </main>

        </div>
    );
}