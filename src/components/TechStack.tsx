"use client";

import type React from "react";
import { useState } from "react";

interface TechItemProps {
	name: string;
	category: string;
	color: string;
}

const techData: TechItemProps[] = [
	{ name: "JavaScript", category: "Languages", color: "#F7DF1E" },
	{ name: "TypeScript", category: "Languages", color: "#3178C6" },
	{ name: "PHP", category: "Languages", color: "#777BB4" },
	{ name: "Go", category: "Languages", color: "#00ADD8" },
	{ name: "Python", category: "Languages", color: "#3776AB" },
	{ name: "Ruby", category: "Languages", color: "#E0115F" },

	{ name: "React", category: "Frontend", color: "#61DAFB" },
	{ name: "React Native", category: "Frontend", color: "#F6C915" },
	{ name: "Vue.js", category: "Frontend", color: "#4FC08D" },
	{ name: "Vite", category: "Frontend", color: "#56674D" },
	{ name: "Next.js", category: "Frontend", color: "#FFFFFF" },
	{ name: "Tailwind CSS", category: "Frontend", color: "#06B6D4" },

	{ name: "Node.js", category: "Backend", color: "#339933" },
	{ name: "Express", category: "Backend", color: "#000000" },
	{ name: "Django", category: "Backend", color: "#009688" },
	{ name: "NestJS", category: "Backend", color: "#E0234E" },
	{ name: "Ruby on Rails", category: "Backend", color: "#CC0000" },
	{ name: "Laravel", category: "Backend", color: "#FF2D20" },

	{ name: "PostgreSQL", category: "Database", color: "#4169E1" },
	{ name: "MongoDB", category: "Database", color: "#47A248" },
	{ name: "Redis", category: "Database", color: "#DC382D" },
	{ name: "DynamoDB", category: "Database", color: "#527FFF" },

	{ name: "Docker", category: "DevOps", color: "#2496ED" },
	{ name: "Kubernetes", category: "DevOps", color: "#326CE5" },
	{ name: "Jenkins ", category: "DevOps", color: "#D24939" },
	{ name: "AWS", category: "DevOps", color: "#FF9900" },
	{ name: "GitHub Actions", category: "DevOps", color: "#2088FF" },
	{ name: "Serverless", category: "DevOps", color: "#7B42BC" },
];

const categories = ["All", ...new Set(techData.map((tech) => tech.category))];

const TechItem: React.FC<TechItemProps> = ({ name, color }) => {
	return (
		<div
			className="rounded-full px-4 py-2 border border-opacity-30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
			style={{
				borderColor: color,
				boxShadow: `0 0 10px ${color}30`,
			}}
		>
			<div className="flex items-center gap-2">
				<div
					className="w-3 h-3 rounded-full animate-neon-pulse"
					style={{ backgroundColor: color }}
				></div>
				<span>{name}</span>
			</div>
		</div>
	);
};

const TechStack = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredTech =
		selectedCategory === "All"
			? techData
			: techData.filter((tech) => tech.category === selectedCategory);

	return (
		<section id="tech-stack" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
					<span className="text-gradient">Tech Stack</span>
				</h2>

				<div className="flex justify-center mb-10 flex-wrap gap-2">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full transition-all cursor-pointer ${selectedCategory === category
								? "bg-neon-purple text-white"
								: "bg-dark-lighter text-gray-400 hover:bg-dark-light"
								}`}
						>
							{category}
						</button>
					))}
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fade-in">
					{filteredTech.map((tech, index) => (
						<TechItem key={index} {...tech} />
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
