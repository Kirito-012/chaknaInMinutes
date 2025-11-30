'use client'

import {motion} from 'framer-motion'
import {Bike, Flame, Wallet, ThumbsUp} from 'lucide-react'

const benefits = [
	{
		title: 'Delivered in Minutes',
		desc: 'Fast delivery that keeps the crunch.',
		icon: (
			<Bike
				size={36}
				strokeWidth={2.5}
			/>
		),
	},
	{
		title: 'Always Hot & Fresh',
		desc: 'Straight from kitchen to your door.',
		icon: (
			<Flame
				size={36}
				strokeWidth={2.5}
			/>
		),
	},
	{
		title: 'Super Affordable',
		desc: 'Premium taste without premium pricing.',
		icon: (
			<Wallet
				size={36}
				strokeWidth={2.5}
			/>
		),
	},
	{
		title: 'Taste Satisfaction',
		desc: 'Loved by thousands of food lovers every day.',
		icon: (
			<ThumbsUp
				size={36}
				strokeWidth={2.5}
			/>
		),
	},
]

export default function WhyChooseUs() {
	return (
		// <section className='relative py-20 bg-redOrange text-white overflow-hidden'>
		<section className='relative py-20 h-screen bg-white text-redOrange overflow-hidden'>
			<motion.h2
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				viewport={{once: true}}
				transition={{duration: 0.5}}
				className='text-center font-heading text-5xl md:text-6xl drop-shadow-lg mb-6'>
				WHY CHOOSE US
			</motion.h2>

			<motion.p
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				viewport={{once: true}}
				transition={{duration: 0.5, delay: 0.15}}
				// className='text-center max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-12'>
				className='text-center max-w-2xl mx-auto text-lg md:text-xl text-redOrange/90 mb-12'>
				We’re obsessed with making snacking fast, fresh and unforgettable.
			</motion.p>

			<div className='relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-6'>
				{benefits.map((item, i) => (
					<motion.div
						key={i}
						initial={{opacity: 0, y: 40}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true, amount: 0.2}}
						transition={{duration: 0.6, delay: i * 0.1}}
						whileHover={{scale: 1.03}}
						className='group bg-white text-mineShaft rounded-xl p-5 sm:p-6 md:p-7 shadow-[0_6px_18px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all flex items-start gap-4 sm:gap-5'>
						<div className='w-12 h-12 sm:w-14 sm:h-14 bg-redOrange/15 rounded-xl flex items-center justify-center text-redOrange flex-shrink-0'>
							{item.icon}
						</div>

						<div>
							<h3 className='font-heading text-xl sm:text-2xl mb-1'>
								{item.title}
							</h3>
							<p className='text-sm text-gray-600 leading-relaxed'>
								{item.desc}
							</p>

							{/* animated underline */}
							<span className='block h-[3px] w-0 bg-redOrange transition-all duration-300 group-hover:w-32 sm:group-hover:w-40 mt-2'></span>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	)
}
