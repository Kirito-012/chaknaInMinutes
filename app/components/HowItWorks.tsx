'use client'

import {motion} from 'framer-motion'
import {ShoppingBag, MapPin, Clock} from 'lucide-react'

export default function HowItWorks() {
	return (
		<section
			id='how-it-works'
			className='py-16 sm:py-24 bg-redOrange relative overflow-hidden'>
			<motion.div
				initial={{scale: 0}}
				animate={{scale: 1}}
				transition={{duration: 0.8, delay: 0.2, ease: 'easeOut'}}
				className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),rgba(255,255,255,0)_65%)] pointer-events-none'
			/>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='text-center mb-12 sm:mb-16'>
					<motion.p
						initial={{opacity: 0, y: 20}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5}}
						className='text-xs font-bold tracking-widest text-supernova uppercase mb-2'>
						LIGHTNING FAST
					</motion.p>
					<motion.h2
						initial={{opacity: 0, y: 20}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5, delay: 0.1}}
						className='font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-4 tracking-wider'>
						HOW IT WORKS
					</motion.h2>
					<motion.p
						initial={{opacity: 0, y: 20}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5, delay: 0.2}}
						className='text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium'>
						Three simple steps to get snacks delivered right to your door
					</motion.p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
					{[
						{
							step: 1,
							icon: ShoppingBag,
							title: 'Browse & Order',
							description:
								'Browse our tasty collection and place your order in seconds',
						},
						{
							step: 2,
							icon: MapPin,
							title: 'We Pack Fresh',
							description:
								'Our team quickly packs your snacks fresh with care and attention',
						},
						{
							step: 3,
							icon: Clock,
							title: 'Fast Delivery',
							description:
								"Track your order as it's delivered to your doorstep in minutes",
						},
					].map((item, idx) => {
						const Icon = item.icon
						return (
							<motion.div
								key={idx}
								initial={{opacity: 0, y: 40}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true, amount: 0.2}}
								transition={{duration: 0.6, delay: idx * 0.15}}
								whileHover={{scale: 1.05, rotate: 1}}
								className='group relative bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-300'>
								<div className='absolute -top-6 left-6 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-supernova rounded-full flex items-center justify-center text-mineShaft font-heading text-xl sm:text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg'>
									{item.step}
								</div>

								<div className='mb-6 pt-4 sm:pt-6'>
									<Icon className='w-10 h-10 sm:w-12 sm:h-12 text-redOrange' />
								</div>

								<h3 className='font-heading text-xl sm:text-2xl text-mineShaft mb-3 tracking-wide'>
									{item.title}
								</h3>
								<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
									{item.description}
								</p>

								<span className='block h-[3px] w-0 bg-redOrange transition-all duration-300 group-hover:w-24 mt-4'></span>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
