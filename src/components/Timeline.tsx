"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
	year: string;
	title: string;
	company: string;
	description: string;
	index: number;
}

interface TimelineData {
	year: string;
	period: string;
	title: string;
	company: string;
	description: string;
	stack: string;
}

const timelineData: Array<TimelineData> = [
	{
		year: "2024",
		period: "Jun - Present",
		title: "Senior Full Stack Software Engineer",
		company: "FCamara Consulting & Training",
		description:
			"Worked at Brazil’s largest healthcare network, maintaining and optimizing static websites built with Next.js, integrating data from Redis and Strapi to ensure high SEO performance, accessibility, and fast loading times. ",
		stack: 'Next.js, TypeScript, Strapi, Redis, Jenkins, Azure Devops, GCP'
	},
	{
		year: "2024",
		period: "Jan 2024 - Jun 2024",
		title: "Senior Full Stack Software Engineer",
		company: "Little Emperors",
		description:
			"As a full-stack developer, I rewrote a CRM from Laravel to React.js, responsible for managing a luxury hotel member subscriptions.",
		stack: 'React.js, TypeScript, PHP, Laravel'
	},
	{
		year: "2023",
		period: "Jul 2022 - Sep 2023",
		title: "Senior Full Stack Software Engineer",
		company: "Alter Solutions",
		description:
			"Developed and maintained a CRM for the construction market in Nordic countries, supporting thousands of users with Vue.js and TypeScript.",
		stack: 'Vue.js, TypeScript, SASS'
	},
	{
		year: "2021",
		period: 'Jun 2021 - Jul 2022',
		title: "Senior Full Stack Software Engineer",
		company: "Goco",
		description:
			"Designed scalable applications for a growing tech company using React.js, TypeScript, and AWS Serverless architecture.",
		stack: 'React.js, React Native, TypeScript, Node, Jest, AWS, Serverless'
	},
	{
		year: "2020",
		period: "Feb 2020 - Jun 2021",
		title: "Senior Full Stack Software Engineer",
		company: "2Mundos",
		description:
			"Designed and built an edtech platform replicating the structure of a school, including virtual classrooms, payment gateways, and content management, using microservices.",
		stack: 'React.js, Vue.js, TypeScript, Node, Laravel, Jest, StoryBook, SASS'
	},
	{
		year: "2019",
		period: "Oct 2019 - Feb 2020",
		title: "Senior Full Stack Software Engineer",
		company: "Deloitte Touche Tohmatsu",
		description:
			"Migrated a monolithic application from Yii2 to Node.js and React.js, modernizing the stack and addressing technical debt. Improved workflows with Agile and Git Flow methodologies, increasing team productivity",
		stack: 'React.js, JavaScript, Node, Yii2, PHP'
	},
	{
		year: "2019",
		period: "Apr 2019 - Oct 2019",
		title: "Full Stack Software Engineer",
		company: "Sennit - Combining Efforts",
		description: "Developed a check-in and check-out module for one of Brazil's largest car rental companies, significantly reducing service time.",
		stack: 'React.js, JavaScript, Docker, PHP, Laravel, Lumen'
	},
	{
		year: "2017",
		period: "Feb 2017 - Apr 2019",
		title: "Full Stack Software Engineer",
		company: "Quântk Digital Marketing",
		description: "Planned and developed full-stack advertising applications using React.js, Node.js, and Laravel. Built scalable solutions deployed in Docker containers for cloud environments, improving resource eciency",
		stack: "React.js, React Native, JavaScript, Docker, PHP, Laravel, AWS, GPC, Jest, StoryBook"
	},
	{
		year: "2016",
		period: "Jan 2016 - Feb 2017",
		title: "Full Stack Software Engineer",
		company: "PMK Involvement Marketing",
		description: "Maintained a marketing campaign management platform capable of handling high volumes of requests. Developed scalable web and mobile applications using JavaScript and PHP.",
		stack: "React.js, JavaScript, Docker, PHP, Lumen, Zend Framework, AWS",
	}
];

const TimelineItem: React.FC<TimelineItemProps> = ({
	year,
	title,
	company,
	description,
	index,
}) => {
	const itemRef = useRef<HTMLDivElement>(null);

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

		if (itemRef.current) {
			observer.observe(itemRef.current);
		}

		return () => {
			if (itemRef.current) {
				observer.unobserve(itemRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={itemRef}
			className="flex gap-6 md:gap-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			style={{ transitionDelay: `${index * 150}ms` }}
		>
			<div className="flex flex-col items-center">
				<div
					className="w-px h-full bg-neon-purple/30"
					style={{ marginTop: "36px" }}
				/>
				<div className="shrink-0 w-8 h-8 rounded-full border-2 border-neon-purple bg-dark flex items-center justify-center mb-4 relative group">
					<span className="absolute text-[10px] text-neon-purple group-hover:text-glow animate-neon-pulse">
						{year}
					</span>
					<div className="absolute w-full h-full rounded-full bg-neon-purple/20 animate-ping opacity-75 group-hover:opacity-100" />
				</div>
			</div>

			<div className="pb-10">
				<h3
					className="text-xl font-bold text-white mb-1 glitch-text"
					data-text={title}
				>
					{title}
				</h3>
				<h4 className="text-neon-purple mb-3">{company}</h4>
				<p className="text-gray-400 max-w-xl">{description}</p>
			</div>
		</div>
	);
};

const Timeline = () => {
	const [showAllItems, setShowAllItems] = useState(false);
	const visibleItems = showAllItems ? timelineData : timelineData.slice(0, 4);

	return (
		<section id="timeline" className="py-20 px-4 terminal-bg">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
					<span className="text-gradient cyberpunk-text">
						Professional Journey
					</span>
				</h2>

				<div className="relative circuit-overlay">
					{visibleItems.map((item, index) => (
						<TimelineItem key={index} {...item} index={index} />
					))}

					{timelineData.length > 4 && (
						<div className="flex justify-center mt-6 glitch-container">
							<Button
								onClick={() => setShowAllItems(!showAllItems)}
								className="bg-transparent hover:bg-neon-purple/20 text-neon-purple neon-border transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] glitch-item"
								aria-label={
									showAllItems ? "Show less items" : "Show more items"
								}
							>
								{showAllItems ? (
									<>
										<span>Show Less</span>
										<ChevronUp className="ml-2 h-4 w-4" />
									</>
								) : (
									<>
										<span>Show More</span>
										<ChevronDown className="ml-2 h-4 w-4" />
									</>
								)}
							</Button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Timeline;
