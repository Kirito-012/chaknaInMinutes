'use client'

import {motion} from 'framer-motion'
import {ShieldCheck, Leaf, UtensilsCrossed, CheckCircle} from 'lucide-react'

const points = [
	{
		icon: (
			<Leaf
				size={32}
				strokeWidth={2.4}
			/>
		),
		title: 'Healthy Ingredients',
		text: 'Wholesome, nutrient-aware recipes designed with wellness in mind.',
	},
	{
		icon: (
			<UtensilsCrossed
				size={32}
				strokeWidth={2.4}
			/>
		),
		title: 'Freshly Prepared',
		text: 'Cooked just before dispatch — never stored or reheated.',
	},
	{
		icon: (
			<ShieldCheck
				size={32}
				strokeWidth={2.4}
			/>
		),
		title: 'Strict Hygiene',
		text: 'International food safety standards and sanitized kitchens.',
	},
	{
		icon: (
			<CheckCircle
				size={32}
				strokeWidth={2.4}
			/>
		),
		title: 'Quality Certified',
		text: 'Regular audits & compliance checks for consistent excellence.',
	},
]

export default function HowItWorks() {
	return (
		<section className='relative py-24 bg-redOrange text-white'>
			<div className='max-w-6xl mx-auto px-6 text-center'>
				{/* Heading */}
				<motion.h2
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					className='font-heading text-5xl md:text-6xl mb-4 tracking-wider'
					style={{textShadow: '3px 3px 0 rgba(0,0,0,0.25)'}}>
					Health Comes First
				</motion.h2>

				<motion.p
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					className='font-body text-lg md:text-xl max-w-2xl mx-auto opacity-95'>
					We’re committed to crafting snacks that respect your body — clean,
					fresh and consciously made.
				</motion.p>

				{/* Divider */}
				<div className='w-24 h-[3px] bg-supernova mx-auto mt-10 mb-14 rounded-full'></div>

				{/* Feature row */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{points.map((point, i) => (
						<motion.div
							key={i}
							initial={{opacity: 0, y: 30}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true}}
							transition={{delay: i * 0.15}}
							whileHover={{y: -8}}
							className='flex flex-col items-center text-center gap-4 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300'>
							<div className='p-4 rounded-full bg-gradient-to-br bg-redOrange text-white shadow-lg'>
								{point.icon}
							</div>

							<h3 className='font-heading text-2xl tracking-wide mb-1 text-mineShaft'>
								{point.title}
							</h3>
							<p className='font-body text-sm text-gray-700 leading-relaxed'>
								{point.text}
							</p>
						</motion.div>
					))}
				</div>

				{/* Accreditation row */}
				{/* <div className='mt-16 flex flex-wrap justify-center gap-12 font-body text-sm tracking-wide opacity-90'>
					<span>ISO:22000 Certified</span>
					<span>FSSAI Verified</span>
					<span>Zero Preservatives</span>
					<span>Zero Trans Fat</span>
				</div> */}
			</div>
		</section>
	)
}
