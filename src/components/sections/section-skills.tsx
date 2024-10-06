import * as motion from 'framer-motion/client';
import { Container } from '../shared';
import { AnimatedLine, YAnimation } from '../animations';
import { SKILLS } from '@/data';

export const SectionSkills = (): React.ReactElement => {
	return (
		<section className="relative flex items-center h-screen">
			<Container className="flex gap-32 justify-between z-20">
				<div className="flex flex-col justify-center text-white min-h-screen py-12">
					{/* Skills Header */}
					<div className="flex flex-col items-center justify-center mb-10">
						<div className="flex justify-center items-center w-max space-x-2 mb-2 relative">
							<h2 className="text-5xl font-bold text-brand !ml-0">
								<YAnimation>Skills</YAnimation>
							</h2>
							<AnimatedLine />
						</div>
						<motion.p
							className="text-lg text-gray-400"
							whileInView={{ opacity: [0, 1], y: [100, 0], scale: [0.5, 1] }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
							}}
						>
							I am striving to never stop learning and improving
						</motion.p>
					</div>

					{/* Skills Icons */}
					<div className="flex justify-center gap-10 flex-wrap">
						<YAnimation type="node">
							{SKILLS.map((skill) => {
								return (
									<div
										key={skill.name}
										className="flex flex-col items-center justify-center"
									>
										<div
											className=" rounded-full p-6 w-max"
											style={{ backgroundColor: skill.color }}
										>
											{skill.icon}
										</div>
										<p className="mt-4 text-xl" style={{ color: skill.color }}>
											{skill.name}
										</p>
									</div>
								);
							})}
						</YAnimation>
					</div>
				</div>
			</Container>
		</section>
	);
};
