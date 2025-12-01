'use client'

import {motion} from 'framer-motion'
import {ShieldCheck, Leaf, UtensilsCrossed, CheckCircle} from 'lucide-react'

const benefits = [
	{
		icon: (
			<Leaf
				size={28}
				strokeWidth={2.4}
			/>
		),
		title: 'Healthy Ingredients',
		text: 'Wholesome, nutrient-aware recipes crafted for mindful eating.',
	},
	{
		icon: (
			<ShieldCheck
				size={28}
				strokeWidth={2.4}
			/>
		),
		title: 'Strict Hygiene',
		text: 'Sanitized kitchens and clean handling at every step.',
	},
	{
		icon: (
			<UtensilsCrossed
				size={28}
				strokeWidth={2.4}
			/>
		),
		title: 'Freshly Prepared',
		text: 'Cooked in real-time — never stored or reheated.',
	},
	{
		icon: (
			<CheckCircle
				size={28}
				strokeWidth={2.4}
			/>
		),
		title: 'Quality Certified',
		text: 'FSSAI & ISO certified processes with regular checks.',
	},
]

export default function HowItWorks() {
	return (
		<section className='relative py-24 bg-redOrange text-white overflow-hidden'>
			{/* Soft Glow Lighting */}
			<div className='absolute inset-0 bg-gradient-to-r from-redOrange/70 via-redOrange to-redOrange/70 pointer-events-none' />

			<div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
				{/* LEFT TEXT CONTENT */}
				<div>
					<motion.h2
						initial={{opacity: 0, y: 15}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true, margin: '-50px'}}
						transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
						className='font-heading text-5xl md:text-6xl tracking-wider mb-6 leading-tight'
						style={{textShadow: '3px 3px 0 rgba(0,0,0,0.25)'}}>
						Health Comes First
					</motion.h2>

					<motion.p
						initial={{opacity: 0, y: 15}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true, margin: '-50px'}}
						transition={{duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1]}}
						className='font-body text-lg md:text-xl opacity-95 max-w-xl mb-10'>
						Fuel your cravings the right way — clean, safe and consciously made
						snacks engineered for your wellbeing.
					</motion.p>

					{/* Benefits List */}
					<div className='flex flex-col gap-6'>
						{benefits.map((b, i) => (
							<motion.div
								key={i}
								initial={{opacity: 0, x: -20}}
								whileInView={{opacity: 1, x: 0}}
								viewport={{once: true, margin: '-50px'}}
								transition={{delay: i * 0.08, duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
								className='flex items-start gap-4'>
								<div className='p-3 rounded-full bg-white/15 border border-white/25'>
									{b.icon}
								</div>
								<div>
									<h3 className='font-heading text-xl mb-1 tracking-wide'>
										{b.title}
									</h3>
									<p className='font-body text-sm opacity-85 max-w-sm'>
										{b.text}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Certifications Row */}
					{/* <div className='mt-12 flex flex-wrap gap-8 font-body tracking-wide text-sm opacity-90'>
						<span>✔ ISO:22000 Certified</span>
						<span>✔ FSSAI Verified</span>
						<span>✔ Zero Preservatives</span>
						<span>✔ Zero Trans Fat</span>
					</div> */}
				</div>

				{/* RIGHT IMAGE BLOCK */}
				<motion.div
					initial={{opacity: 0, scale: 0.96}}
					whileInView={{opacity: 1, scale: 1}}
					viewport={{once: true, margin: '-50px'}}
					transition={{duration: 0.5, ease: [0.4, 0, 0.2, 1]}}
					className='relative flex justify-center'>
					<div className='absolute w-[420px] h-[420px] rounded-full bg-white/20 blur-3xl -z-10'></div>

					<img
						src='/healthy_snacks.webp'
						alt='Healthy Snack'
						className='w-[420px] h-[420px] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
					/>
				</motion.div>
			</div>
		</section>
	)
}
