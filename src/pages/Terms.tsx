import React from "react";

const Terms = () => {
    return (
        <div className={`bg-color1 overflow-y-auto ${window.innerWidth > 768 ? 'py-20' : 'py-32'}`}>
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold">Terms of Service</h1>
                <p className="text-xl">Last Updated: May 27th, 2024</p>
                <div className="text-left max-w-3xl mx-auto mt-5">
                    <h2 className="text-3xl font-bold">1. Acceptance of Terms</h2>
                    <p className="text-xl">Welcome to GameStrats.app! By accessing or using our website, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use GameStrats.app.</p>
                    <br />
                    <h2 className="text-3xl font-bold">2. Use of Website</h2>
                    <br />
                    <h3 className="text-2xl font-bold">2.1 Website Access</h3>
                    <p className="text-xl">GameStrats.app is a resource for video game strategies. Users are permitted to access and use the website for personal, non-commercial purposes only.</p>
                    <br />
                    <h3 className="text-2xl font-bold">2.2 Prohibited Conduct</h3>
                    <p className="text-xl">You agree not to:</p>
                    <ul className="list-disc list-inside text-xl">
                        <li>Copy, modify, or distribute content from the site without prior written permission.</li>
                        <li>Use the website for any illegal purpose or in violation of any local, state, national, or international law.</li>
                        <li>Harm or exploit minors in any way by exposing them to inappropriate content.</li>
                        <li>Transmit viruses, malware, or any other malicious code.</li>
                        <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.</li>
                    </ul>
                    <br />
                    <h2 className="text-3xl font-bold">3. Intellectual Property</h2>
                    <p className="text-xl">All content on GameStrats.app, including text, graphics, logos, and software, is the property of GameStrats.app or its content suppliers and protected by copyright and intellectual property laws.
                    </p>
                    <br />
                    <h2 className="text-3xl font-bold">4. Disclaimer of Warranties</h2>
                    <p className="text-xl">GameStrats.app is provided on an "as is" and "as available" basis. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
                    <br />
                    <h2 className="text-3xl font-bold">5. Limitation of Liability</h2>
                    <p className="text-xl">GameStrats.app or its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the website.</p>
                    <br />
                    <h2 className="text-3xl font-bold">6. Changes to Terms</h2>
                    <p className="text-xl">We reserve the right to modify these Terms at any time. We will provide notice of any significant changes by updating the "Last Updated" date at the top of these Terms.</p>
                    <br />
                    <h2 className="text-3xl font-bold">7. Governing Law</h2>
                    <p className="text-xl">These Terms shall be governed by the laws of USA, New York, without regard to its conflict of law principles.</p>
                    <br />
                    <h2 className="text-3xl font-bold">8. Contact Information</h2>
                    <p className="text-xl">For any questions about these Terms, please contact us at support@gamestrats.app.</p>
                </div>
            </div>
        </div>
    );
};

export default Terms;