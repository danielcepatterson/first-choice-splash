// src/App.tsx

import { useState } from "react";
import "./App.css";

function App() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (email) {
			setSubmitted(true);
			setEmail("");
			setTimeout(() => setSubmitted(false), 3000);
		}
	};

	return (
		<>
			{/* Navigation */}
			<nav className="navbar">
				<div className="container">
					<div className="logo-section">
						<h2 className="logo-text">🔧 First Choice Repair</h2>
					</div>
					<div className="nav-links">
						<a href="#services">Services</a>
						<a href="#about">About</a>
						<a href="#contact">Contact</a>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="hero">
				<div className="container">
					<div className="hero-content">
						<h1 className="hero-title">Your Home Deserves the Best Care</h1>
						<p className="hero-subtitle">
							Professional maintenance and repair services for all your home needs
						</p>
						<a href="#contact" className="cta-button">
							Get a Free Quote
						</a>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="services">
				<div className="container">
					<h2 className="section-title">Our Services</h2>
					<div className="services-grid">
						<div className="service-card">
							<div className="service-icon">🔌</div>
							<h3>Electrical</h3>
							<p>
								From wiring to circuit repairs, we handle all your electrical needs
								safely and efficiently.
							</p>
						</div>
						<div className="service-card">
							<div className="service-icon">🚿</div>
							<h3>Plumbing</h3>
							<p>
								Leak repairs, pipe maintenance, and fixture installation done right.
							</p>
						</div>
						<div className="service-card">
							<div className="service-icon">🏠</div>
							<h3>Carpentry</h3>
							<p>
								Custom builds, repairs, and renovations to enhance your living space.
							</p>
						</div>
						<div className="service-card">
							<div className="service-icon">🌿</div>
							<h3>Landscaping & Outdoor Spaces</h3>
							<p>
								Lawn maintenance, garden design, patio installation, and outdoor
								beautification.
							</p>
						</div>
						<div className="service-card">
							<div className="service-icon">🎨</div>
							<h3>Painting & Drywall</h3>
							<p>
								Interior and exterior painting with expert drywall installation.
							</p>
						</div>
						<div className="service-card">
							<div className="service-icon">🪟</div>
							<h3>General Maintenance</h3>
							<p>
								Routine inspections and preventative maintenance to keep your home in
								top shape.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="about">
				<div className="container">
					<h2 className="section-title">Why Choose Us</h2>
					<div className="about-content">
						<div className="about-text">
							<h3>20+ Years of Experience</h3>
							<p>
								We've been serving homeowners with reliable, professional service for
								over two decades.
							</p>
							<ul className="benefits-list">
								<li>✓ Licensed and Insured</li>
								<li>✓ Same-Day Service Available</li>
								<li>✓ Transparent Pricing</li>
								<li>✓ 100% Satisfaction Guarantee</li>
							</ul>
						</div>
						<div className="about-image">
							<div className="placeholder-image">Professional Home Repair Team</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="contact">
				<div className="container">
					<h2 className="section-title">Get Your Free Quote</h2>
					<form className="contact-form" onSubmit={handleSubmit}>
						<input
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<button type="submit" className="submit-button">
							Request Quote
						</button>
					</form>
					{submitted && (
						<p className="success-message">
							✓ Thanks! We'll contact you soon with a quote.
						</p>
					)}
					<div className="contact-info">
						<p>📞 (555) 123-4567 | 📧 info@firstchoicerepair.com</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<div className="container">
					<p>&copy; 2024 First Choice Repair. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}

export default App;
