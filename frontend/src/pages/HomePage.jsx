import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <header className="flex justify-between items-center py-6 px-4">
                <div className="text-3xl font-bold text-primary">LeetGuru</div>
                <nav className="space-x-4">
                    <button className="btn btn-ghost">Login</button>
                    <button className="btn btn-primary">Get Started</button>
                </nav>
            </header>

            <main className="space-y-20 px-6 py-10">
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold leading-tight">
                            Master DSA & Crack Your Dream Job with
                            <span className="text-primary"> LeetGuru</span>
                        </h1>
                        <TypeAnimation
                            sequence={[
                                "Handpicked DSA Problems...",
                                2000,
                                "Real Interview Questions...",
                                2000,
                                "Track Progress & Build Streaks...",
                                2000,
                                "Custom Problems for Interviews...",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-lg text-secondary"
                            repeat={Infinity}
                        />
                        <p className="text-gray-300">
                            LeetGuru is your one-stop platform for preparing with curated problems,
                            tracking stats, and showcasing your skills. Whether you’re a candidate or a company,
                            LeetGuru makes interviews seamless.
                        </p>
                        <div className="space-x-4">
                            <button className="btn btn-primary">Start Solving</button>
                            <button className="btn btn-outline btn-secondary">Learn More</button>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-xl border border-gray-700 bg-gray-800 p-10">
                        <img src="/preview.png" alt="LeetGuru Preview" className="rounded-lg" />
                    </div>
                </section>

                <section className="text-center space-y-6">
                    <h2 className="text-4xl font-bold">Why Choose LeetGuru?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Curated DSA Problems</h3>
                            <p className="text-gray-400">Tackle a diverse set of handpicked problems designed to sharpen your skills.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Company Mode</h3>
                            <p className="text-gray-400">Companies can create private question sets and monitor candidates’ solutions securely.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
                            <p className="text-gray-400">Visualize your success rate, daily streaks, and progress history to stay motivated.</p>
                        </div>
                    </div>
                </section>

                <section className="text-center space-y-6">
                    <h2 className="text-4xl font-bold">For Companies</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Register as a company and create customized, token-protected interview problems. Invite candidates to solve them in a real-time environment while you track their performance.
                    </p>
                    <button className="btn btn-accent">Create Company Account</button>
                </section>

                <section className="bg-gray-800 py-16 rounded-xl text-center space-y-6">
                    <h2 className="text-4xl font-bold">Ready to Begin?</h2>
                    <p className="text-gray-400">Join thousands of developers preparing smarter with LeetGuru.</p>
                    <div className="space-x-4">
                        <button className="btn btn-primary">Join Now</button>
                        <button className="btn btn-outline btn-secondary">Explore Features</button>
                    </div>
                </section>
            </main>

            <footer className="text-center py-6 text-gray-500">
                © 2025 LeetGuru. All rights reserved.
            </footer>
        </div>
    );
}
