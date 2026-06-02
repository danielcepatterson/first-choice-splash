// src/App.tsx

import { useState } from "react";
import logo from "./assets/FirstChoice_Logo.svg";
import "./App.css";

function App() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (email) {
			// Send email to the backend API
			fetch("/api/quote", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			})
				.then((res) => res.json())
				.then(() => {
					setSubmitted(true);
					setEmail("");
					setTimeout(() => setSubmitted(false), 3000);
				})
				.catch((error) => {
					console.error("Error submitting quote request:", error);
					setSubmitted(true);
					setEmail("");
					setTimeout(() => setSubmitted(false), 3000);
				});
		}
	};

	return (
		<>
			{/* Navigation */}
			<nav className="navbar">
				<div className="container">
					<div className="logo-section">
					<img src={logo} alt="First Choice Logo" className="navbar-logo" />
					<h2 className="logo-text">First Choice Repair</h2>
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
						<h3>10+ Years of Experience</h3>
						<p>
							With a decade of experience, we take pride in serving homeowners with reliable, professional service.
							</p>						<p className="service-area">
							Servicing Wilmington, Carolina Beach, Leland, and the surrounding Area
						</p>							<ul className="benefits-list">
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
						<p>📞 (910) 319-1402 | 📧 firstchoicegmhr@gmail.com</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<div className="container">
					<p>&copy; 2026 First Choice Repair. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}

export default App;
