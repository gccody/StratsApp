import React from "react";

const Privacy = () => {
    return (
        <div className={`bg-color1 overflow-y-auto ${window.innerWidth > 768 ? 'py-20' : 'py-32'}`}>
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold">Privacy Policy</h1>
                <p className="text-xl">Last Updated: May 27th, 2024</p>
                <div className="text-left max-w-3xl mx-auto mt-5">
                    <h2 className="text-3xl font-bold">1. Introduction</h2>
                    <p className="text-xl">Welcome to GameStrats.app! We value your privacy and are committed to protecting it. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you use our website.</p>
                    <br />
                    <h2 className="text-3xl font-bold">2. No Data Collection</h2>
                    <p className="text-xl">GameStrats.app is designed to run entirely offline and does not collect, store, or transmit any personal data or information. We do not require you to provide any personal information to use our website.</p>
                    <br />
                    <h2 className="text-3xl font-bold">3. Use of Cookies</h2>
                    <p className="text-xl">As GameStrats.app operates completely offline, we do not use cookies or any other tracking technologies to monitor your activities.</p>
                    <br />
                    <h2 className="text-3xl font-bold">4. Third-Party Services</h2>
                    <p className="text-xl">Since GameStrats.app does not connect to the internet, no third-party services are used within our application. Your data remains completely within your control and is not shared with any external parties.</p>
                    <br />
                    <h2 className="text-3xl font-bold">5. Security</h2>
                    <p className="text-xl">Even though GameStrats.app does not collect any data, we are dedicated to ensuring the security of the application. Our offline-first approach minimizes any risks associated with data breaches or unauthorized access.</p>
                    <br />
                    <h2 className="text-3xl font-bold">6. Changes to This Privacy Policy</h2>
                    <p className="text-xl">We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website. The "Last Updated" date at the top of this page indicates when the latest changes were made.</p>
                    <br />
                    <h2 className="text-3xl font-bold">7. Contact Us</h2>
                    <p className="text-xl">If you have any questions or concerns about this Privacy Policy, please contact us at support@gamestrats.app.</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;