
import {
	Github,
	Linkedin
} from "lucide-react";

const Footer = () => {
	return (
		<footer id="Footer" className="pt-20 pb-10 px-4 relative overflow-hidden">
			<div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
				{Array.from({ length: 30 }).map((_, i) => (
					<div
						key={i}
						className="absolute text-neon-green text-opacity-70 animate-matrix-fall"
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

			<div className="max-w-6xl mx-auto relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div>
						<h2 className="text-3xl font-bold mb-6">
							<span className="text-gradient">Get in Touch</span>
						</h2>
						<div className="flex gap-6 mb-10">
							<a
								href="https://github.com/devmeireles"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-neon-purple hover:text-neon-purple transition-all"
							>
								<Github size={20} />
							</a>
							<a
								href="https://linkedin.com/in/devmeireles"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-neon-blue hover:text-neon-blue transition-all"
							>
								<Linkedin size={20} />
							</a>
						</div>
					</div>
				</div>

				<div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10" />

				<div className="text-center text-sm text-gray-500">
					<p>© {new Date().getFullYear()} Gabriel Meireles. All rights reserved.</p>
					<p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
