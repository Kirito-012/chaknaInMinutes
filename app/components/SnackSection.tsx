'use client'

import {motion} from 'framer-motion'
import React from 'react'
import {Flame, ChefHat, Package, Zap} from 'lucide-react'

const steps = [
	{
		icon: Flame,
		emoji: '🧼',
		title: 'Fresh Prep Every Batch',
		text: 'Made-to-order, never stored — hygiene checked every 4 hours.',
		color: 'from-orange-400 to-red-500',
	},
	{
		icon: ChefHat,
		emoji: '🍳',
		title: 'Cooked by Real Chefs',
		text: 'Handcrafted flavors by experts who know your cravings.',
		color: 'from-yellow-400 to-orange-500',
	},
	{
		icon: Package,
		emoji: '📦',
		title: 'Sealed & Safe Packaging',
		text: 'Tamper-proof, temperature-locked & spill-proof packaging.',
		color: 'from-supernova to-yellow-500',
	},
	{
		icon: Zap,
		emoji: '🏍️',
		title: '10-Minute Turbo Delivery',
		text: 'AI-powered routing ensures ultra-fast, hot delivery.',
		color: 'from-red-500 to-redOrange',
	},
]

export default function SnackLabSection() {
	return (
		<section className='relative py-16 sm:py-24 bg-gradient-to-br from-pearlLusta via-white to-pearlLusta overflow-hidden'>
			<div className='pointer-events-none absolute -top-40 -left-32 w-96 h-96 bg-supernova/30 rounded-full blur-3xl will-change-transform' />
			<div className='pointer-events-none absolute top-1/2 right-0 w-80 h-80 bg-redOrange/20 rounded-full blur-3xl will-change-transform' />
			<div className='pointer-events-none absolute -bottom-40 left-1/4 w-96 h-96 bg-supernova/25 rounded-full blur-3xl will-change-transform' />

			<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,202,10,0.1),rgba(255,255,255,0)_70%)] pointer-events-none' />
			<motion.div
				animate={{y: [0, -15, 0]}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: [0.4, 0, 0.2, 1],
					repeatType: 'loop',
				}}
				className='absolute left-8 sm:left-16 top-32 text-5xl sm:text-7xl opacity-30 pointer-events-none'>
				🥟
			</motion.div>
			<motion.div
				animate={{y: [0, 20, 0]}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: [0.4, 0, 0.2, 1],
					repeatType: 'loop',
				}}
				className='absolute right-8 sm:right-20 top-20 text-6xl sm:text-8xl opacity-25 pointer-events-none'>
				🍕
			</motion.div>
			<motion.div
				animate={{y: [0, -15, 0]}}
				transition={{
					duration: 5.5,
					repeat: Infinity,
					ease: [0.4, 0, 0.2, 1],
					repeatType: 'loop',
				}}
				className='absolute right-12 sm:right-32 bottom-32 text-5xl sm:text-7xl opacity-30 pointer-events-none'>
				🍟
			</motion.div>
			<motion.div
				animate={{y: [0, 18, 0]}}
				transition={{
					duration: 7,
					repeat: Infinity,
					ease: [0.4, 0, 0.2, 1],
					repeatType: 'loop',
				}}
				className='absolute left-16 sm:left-40 bottom-20 text-6xl opacity-25 pointer-events-none'>
				🌮
			</motion.div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Header */}
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, margin: '-50px'}}
					transition={{duration: 0.5, ease: [0.4, 0, 0.2, 1]}}
					className='text-center mb-16 sm:mb-20'>
					<motion.div
						initial={{opacity: 0}}
						whileInView={{opacity: 1}}
						viewport={{once: true}}
						transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
						className='inline-block mb-4'>
						<span className='inline-block bg-supernova/20 text-redOrange px-6 py-2 rounded-full font-heading text-sm sm:text-base tracking-wider border-2 border-supernova/40'>
							HOW WE DO IT
						</span>
					</motion.div>

					<h2 className='font-heading text-4xl lg:text-6xl text-mineShaft mb-6 tracking-wider leading-tight'>
						INSIDE THE{' '}
						<span className='relative inline-block'>
							<span className='relative z-10 text-redOrange'>
								CHAKNA IN MINUTES
							</span>
							<motion.span
								initial={{scaleX: 0}}
								whileInView={{scaleX: 1}}
								viewport={{once: true}}
								transition={{
									delay: 0.3,
									duration: 0.6,
									ease: [0.4, 0, 0.2, 1],
								}}
								className='absolute bottom-2 left-0 w-full h-3 bg-supernova/40 -z-0'
							/>
						</span>{' '}
						🔬
					</h2>

					<p className='font-body text-base lg:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
						See how your order gets prepared, packed and delivered in record
						time -{' '}
						<span className='font-semibold text-redOrange'>
							freshness engineered
						</span>{' '}
						&{' '}
						<span className='font-semibold text-redOrange'>
							speed perfected
						</span>
						.
					</p>
				</motion.div>

				{/* Timeline Steps */}
				<div className='relative mb-16 sm:mb-20'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative'>
						{steps.map((step, index) => {
							const IconComponent = step.icon
							return (
								<motion.div
									key={index}
									initial={{opacity: 0, y: 30}}
									whileInView={{opacity: 1, y: 0}}
									viewport={{once: true, margin: '-50px'}}
									transition={{
										delay: index * 0.08,
										duration: 0.4,
										ease: [0.4, 0, 0.2, 1],
									}}
									whileHover={{y: -8}}
									className='relative flex flex-col items-center text-center group'>
									{/* Icon Container */}
									<motion.div
										whileHover={{scale: 1.1}}
										transition={{duration: 0.2, ease: [0.4, 0, 0.2, 1]}}
										className={`relative mb-6 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:shadow-[0_12px_40px_rgba(255,59,48,0.3)] transition-shadow duration-300`}>
										<IconComponent
											className='w-10 h-10 sm:w-12 sm:h-12 text-white'
											strokeWidth={2.5}
										/>

										{/* Floating emoji */}
										<motion.span
											animate={{y: [0, -6, 0]}}
											transition={{
												duration: 2.5,
												repeat: Infinity,
												delay: index * 0.2,
												ease: [0.4, 0, 0.2, 1],
												repeatType: 'loop',
											}}
											className='absolute -top-3 -right-3 text-3xl sm:text-4xl'>
											{step.emoji}
										</motion.span>

										{/* Number Badge */}
										<div className='absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-supernova'>
											<span className='font-heading text-redOrange text-sm font-bold'>
												{index + 1}
											</span>
										</div>
									</motion.div>

									{/* Content */}
									<h3 className='font-heading text-xl sm:text-2xl text-mineShaft tracking-wide mb-3 leading-tight'>
										{step.title}
									</h3>

									<p className='font-body text-sm sm:text-base text-gray-600 leading-relaxed max-w-[260px]'>
										{step.text}
									</p>

									{/* Bottom Accent Line */}
									<motion.div
										initial={{scaleX: 0}}
										whileInView={{scaleX: 1}}
										viewport={{once: true}}
										transition={{
											delay: index * 0.08 + 0.3,
											duration: 0.4,
											ease: [0.4, 0, 0.2, 1],
										}}
										className='mt-4 h-1 w-16 bg-gradient-to-r from-supernova to-redOrange rounded-full'
									/>
								</motion.div>
							)
						})}
					</div>
				</div>

				{/* Video Preview Card */}
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, margin: '-50px'}}
					transition={{duration: 0.5, ease: [0.4, 0, 0.2, 1]}}
					whileHover={{scale: 1.02}}
					className='relative group cursor-pointer'>
					<div className='relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-gradient-to-br from-redOrange via-[#FF5048] to-redOrange'>
						{/* Gradient overlay */}
						<div className='absolute inset-0 bg-gradient-to-br from-transparent via-supernova/10 to-transparent' />

						{/* Content */}
						<div className='relative h-full flex flex-col items-center justify-center text-white px-6'>
							<motion.div
								animate={{scale: [1, 1.05, 1]}}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: [0.4, 0, 0.2, 1],
									repeatType: 'loop',
								}}
								className='mb-6 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 group-hover:border-supernova transition-colors'>
								<div className='w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1'></div>
							</motion.div>

							<h3 className='font-heading text-3xl sm:text-4xl lg:text-5xl mb-3 tracking-wider text-center'>
								CHAKNA IN MINUTES IN ACTION
							</h3>
							<p className='font-body text-base sm:text-lg text-white/90 mb-4'>
								Behind-the-scenes video coming soon!
							</p>

							<motion.div
								initial={{opacity: 0, y: 10}}
								animate={{opacity: 1, y: 0}}
								transition={{delay: 0.5}}
								className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/40 group-hover:bg-supernova group-hover:border-supernova group-hover:text-mineShaft transition-all'>
								<span className='font-heading text-sm sm:text-base tracking-wider'>
									COMING SOON
								</span>
								<motion.span
									animate={{x: [0, 4, 0]}}
									transition={{
										duration: 1.8,
										repeat: Infinity,
										ease: [0.4, 0, 0.2, 1],
										repeatType: 'loop',
									}}
									className='inline-block'>
									→
								</motion.span>
							</motion.div>
						</div>

						{/* Decorative Elements */}
						<div className='absolute top-4 left-4 w-16 h-16 bg-supernova/30 rounded-full blur-2xl'></div>
						<div className='absolute bottom-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl'></div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
