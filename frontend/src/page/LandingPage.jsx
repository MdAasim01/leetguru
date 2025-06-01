import React from "react";
import {
	Navbar,
	Hero,
	Features,
	HowItWorks,
	Testimonials,
	Pricing,
	Footer,
	ProblemSets,
} from "../components/Landing";

const LandingPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
			<Navbar />
			<Hero />
			<Features />
			<ProblemSets />
			<HowItWorks />
			<Testimonials />
			<Pricing />
			<Footer />
		</div>
	);
};

export default LandingPage;
