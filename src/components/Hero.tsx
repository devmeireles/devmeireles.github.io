"use client";


import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden">
			{/* Background matrix effect */}
			<div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
				{Array.from({ length: 50 }).map((_, i) => (
					<div
						key={i}
						className="absolute text-neon-green text-opacity-50 animate-matrix-fall"
						style={{
							left: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`,
							animationDuration: `${8 + Math.random() * 10}s`,
							fontSize: `${Math.random() * 14 + 10}px`,
						}}
					>
						{String.fromCharCode(33 + Math.floor(Math.random() * 94))}
					</div>
				))}
			</div>

			{/* Scan line effect */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent opacity-30 animate-neon-pulse pointer-events-none" style={{ backgroundSize: '100% 2px', backgroundRepeat: 'repeat-y' }}></div>
			</div>

			<div className={`max-w-4xl mx-auto z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
				<div className="flex items-center mb-4">
					<Terminal className="text-neon-purple mr-2" />
					<h1 className="text-2xl md:text-3xl mb-0 font-light">Hi, I'm</h1>
				</div>

				<div className="glitch-container">
					<h2 className="text-5xl md:text-7xl font-bold mb-4 cyberpunk-text glitch-item" data-text="Gabriel Meireles">
						Gabriel Meireles
					</h2>
				</div>

				<div className="flex items-center">
					<h3 className="text-xl md:text-2xl font-mono mb-6 text-neon-purple">
						<span className="inline-block">Senior Software Enginer</span>
					</h3>
				</div>

				<div className="h-px w-full bg-gradient-to-r from-transparent via-neon-purple to-transparent my-8 relative">
					<div className="absolute top-0 left-0 w-full h-full opacity-70 animate-neon-pulse"></div>
				</div>

				<p className="text-lg mb-8 text-gray-300 max-w-2xl terminal-text">
					Senior Full Stack Engineer with over 12 years of experience designing and
					delivering scalable solutions for global companies across Europe, Brazil,
					and the US. Proficient in React, Node.js, and AWS, with a proven ability to
					enhance performance, streamline workflows, and drive impactful results.
					Open to remote opportunities in innovative industries, including
					technology, SaaS, and beyond.
				</p>

				<div className="mt-10 flex flex-wrap gap-4">
					<Button
						className="bg-transparent hover:bg-neon-purple/20 text-neon-purple neon-border transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
						onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
					>
						View Timeline
						<ArrowDownCircle className="ml-2 h-4 w-4" />
					</Button>

					<Button
						className="bg-neon-purple hover:bg-neon-purple/80 text-white transition-all"
						onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
					>
						Explore My Work
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;