"use client";

import { ExternalLink, Github } from "lucide-react";
import type React from "react";
import { useEffect, useRef } from "react";

interface ProjectCardProps {
	title: string;
	technologies: string[];
	description: string;
	image: string;
	demoLink?: string;
	sourceLink?: string;
	index: number;
}

const projectsData = [
	{
		title: "AI-Powered Analytics Dashboard",
		technologies: ["React", "TypeScript", "Node.js", "TensorFlow.js"],
		description:
			"A real-time analytics platform that uses machine learning to predict user behavior and provide actionable insights.",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		demoLink: "#",
		sourceLink: "#",
	},
	{
		title: "Blockchain Transaction Explorer",
		technologies: ["Vue.js", "Web3.js", "GraphQL", "Docker"],
		description:
			"A comprehensive explorer for blockchain transactions with visualization tools and custom filtering capabilities.",
		image:
			"https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		demoLink: "#",
		sourceLink: "#",
	},
	{
		title: "Secure Messaging Platform",
		technologies: [
			"React Native",
			"Express",
			"Socket.io",
			"End-to-End Encryption",
		],
		description:
			"A cross-platform messaging app with end-to-end encryption, disappearing messages, and zero-knowledge proof authentication.",
		image:
			"https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		demoLink: "#",
	},
	{
		title: "Distributed Cloud Storage System",
		technologies: ["Go", "Kubernetes", "AWS", "Terraform"],
		description:
			"A scalable distributed storage system that dynamically allocates resources based on demand and usage patterns.",
		image:
			"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		sourceLink: "#",
	},
];

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	technologies,
	description,
	image,
	demoLink,
	sourceLink,
	index,
}) => {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("opacity-100");
					entry.target.classList.remove("opacity-0", "translate-y-10");
				}
			},
			{ threshold: 0.1 },
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={cardRef}
			className="glass-card rounded-lg overflow-hidden group transition-all duration-500 opacity-0 translate-y-10 hover:neon-border"
			style={{ transitionDelay: `${index * 150}ms` }}
		>
			<div className="relative overflow-hidden h-48">
				<div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="absolute bottom-0 left-0 w-full p-4 z-20">
					<h3 className="text-xl font-bold text-white mb-2">{title}</h3>
					<div className="flex flex-wrap gap-2">
						{technologies.map((tech, idx) => (
							<span
								key={idx}
								className="text-xs bg-neon-purple/20 text-neon-purple px-2 py-1 rounded"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>

			<div className="p-4">
				<p className="text-gray-300 mb-4">{description}</p>

				<div className="flex gap-4 mt-auto">
					{demoLink && (
						<a
							href={demoLink}
							className="text-neon-blue flex items-center gap-1 hover:text-glow transition-all"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ExternalLink size={16} />
							<span>Live Demo</span>
						</a>
					)}

					{sourceLink && (
						<a
							href={sourceLink}
							className="text-neon-green flex items-center gap-1 hover:text-glow transition-all"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github size={16} />
							<span>Source Code</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<section id="projects" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
					<span className="text-gradient">Project Showcase</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{projectsData.map((project, index) => (
						<ProjectCard key={index} {...project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
