"use client";

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-lighter/80 backdrop-blur-md shadow-md' : 'bg-transparent'
				}`}
		>
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<a href="#" className="text-2xl font-bold text-gradient">
						GM
					</a>

					<nav className="hidden md:flex space-x-8">
						<a
							href="#"
							className="text-gray-300 hover:text-neon-purple transition-colors"
						>
							Home
						</a>
						<a
							href="#timeline"
							className="text-gray-300 hover:text-neon-purple transition-colors"
						>
							Timeline
						</a>
						<a
							href="#projects"
							className="text-gray-300 hover:text-neon-purple transition-colors"
						>
							Projects
						</a>
						<a
							href="#tech-stack"
							className="text-gray-300 hover:text-neon-purple transition-colors"
						>
							Tech Stack
						</a>
					</nav>

					<div className="md:hidden">
						<button
							className="text-gray-300 hover:text-neon-purple focus:outline-none"
							onClick={toggleMenu}
						>
							{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`md:hidden bg-dark-lighter/95 backdrop-blur-md transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
					}`}
			>
				<div className="px-4 py-4 space-y-4">
					<a
						href="#"
						className="block text-gray-300 hover:text-neon-purple"
						onClick={() => setMobileMenuOpen(false)}
					>
						Home
					</a>
					<a
						href="#timeline"
						className="block text-gray-300 hover:text-neon-purple"
						onClick={() => setMobileMenuOpen(false)}
					>
						Timeline
					</a>
					<a
						href="#projects"
						className="block text-gray-300 hover:text-neon-purple"
						onClick={() => setMobileMenuOpen(false)}
					>
						Projects
					</a>
					<a
						href="#tech-stack"
						className="block text-gray-300 hover:text-neon-purple"
						onClick={() => setMobileMenuOpen(false)}
					>
						Tech Stack
					</a>
					<a
						href="#contact"
						className="block text-gray-300 hover:text-neon-purple"
						onClick={() => setMobileMenuOpen(false)}
					>
						Contact
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;