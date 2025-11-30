'use client'

import {motion, useScroll, useTransform} from 'framer-motion'
import {useRef} from 'react'

export default function Hero() {
	const ref = useRef(null)
	const {scrollY} = useScroll()
	const y1 = useTransform(scrollY, [0, 600], [0, -60])
	const y2 = useTransform(scrollY, [0, 600], [0, 80])
	const y3 = useTransform(scrollY, [0, 600], [0, -100])
	const y4 = useTransform(scrollY, [0, 600], [0, 120])

	return (
		<motion.section
			ref={ref}
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{duration: 0.8, ease: 'easeOut'}}
			className='relative bg-redOrange min-h-screen flex items-center justify-center overflow-hidden'>
			<motion.div
				initial={{scale: 0}}
				animate={{scale: 1}}
				transition={{duration: 0.8, delay: 0.2, ease: 'easeOut'}}
				className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),rgba(255,255,255,0)_65%)] pointer-events-none'
			/>
			<motion.img
				src='/doodle-fries.png'
				style={{y: y1}}
				initial={{opacity: 0, x: -100}}
				animate={{
					opacity: 0.4,
					x: 0,
					rotate: [0, 5, -5, 0],
					scale: [1, 1.05, 1],
				}}
				transition={{
					opacity: {duration: 0.6, delay: 1.8},
					x: {duration: 0.6, delay: 1.8},
					rotate: {
						duration: 3,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 2.4,
					},
					scale: {duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2.4},
				}}
				className='absolute top-20 sm:top-44 left-4 sm:left-72 w-28 sm:w-44 select-none pointer-events-none opacity-30 sm:opacity-40'
			/>
			<motion.img
				src='/doodle-pancake.png'
				style={{y: y2}}
				initial={{opacity: 0, x: -100}}
				animate={{
					opacity: 0.4,
					x: 0,
					rotate: [0, -5, 5, 0],
					scale: [1, 1.08, 1],
				}}
				transition={{
					opacity: {duration: 0.6, delay: 2.1},
					x: {duration: 0.6, delay: 2.1},
					rotate: {
						duration: 3.5,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 2.7,
					},
					scale: {
						duration: 3.5,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 2.7,
					},
				}}
				className='absolute bottom-32 sm:bottom-52 left-8 sm:left-56 w-28 sm:w-36 select-none pointer-events-none opacity-30 sm:opacity-40'
			/>
			<motion.img
				src='/doodle-pizza.png'
				style={{y: y3}}
				initial={{opacity: 0, x: 100}}
				animate={{
					opacity: 0.4,
					x: 0,
					rotate: [0, 5, -5, 0],
					scale: [1, 1.06, 1],
				}}
				transition={{
					opacity: {duration: 0.6, delay: 2.4},
					x: {duration: 0.6, delay: 2.4},
					rotate: {
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 3.0,
					},
					scale: {duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 3.0},
				}}
				className='absolute top-32 sm:top-72 right-4 sm:right-72 w-28 sm:w-64 select-none pointer-events-none'
			/>
			<motion.img
				src='/doodle-chips1.png'
				style={{y: y4}}
				initial={{opacity: 0, x: 100}}
				animate={{
					opacity: 0.4,
					x: 0,
					rotate: [0, -5, 5, 0],
					scale: [1, 1.07, 1],
				}}
				transition={{
					opacity: {duration: 0.6, delay: 2.7},
					x: {duration: 0.6, delay: 2.7},
					rotate: {
						duration: 3.2,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 3.3,
					},
					scale: {
						duration: 3.2,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 3.3,
					},
				}}
				className='absolute bottom-20 sm:bottom-32 right-2 sm:right-80 w-36 sm:w-40 select-none pointer-events-none opacity-30 sm:opacity-40'
			/>

			{/* MAIN CONTENT */}
			<div className='relative z-10 max-w-[1200px] mx-auto text-center text-white px-4 sm:px-6 py-12'>
				<motion.h1
					initial={{opacity: 0, y: 80}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, delay: 0.4, ease: 'easeOut'}}
					className='font-heading text-[48px] sm:text-[64px] md:text-[90px] leading-none drop-shadow-lg'>
					SNACKS THAT HIT <br /> DIFFERENT, FAST
				</motion.h1>

				<motion.p
					initial={{opacity: 0, y: 30}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.7, delay: 0.9}}
					className='mt-6 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-medium px-4'>
					Packed with real flavor, delivered to you in minutes — not days. This
					is how snacking should feel.
				</motion.p>

				<motion.div
					initial={{opacity: 0, y: 30}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, delay: 1.3}}
					className='mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4'>
					<motion.button
						initial={{opacity: 0, scale: 0.8}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.4, delay: 1.5}}
						whileHover={{scale: 1.12, rotate: 3}}
						whileTap={{scale: 0.9}}
						className='bg-white text-redOrange font-heading text-xl sm:text-2xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl shadow-lg transition-all tracking-wide'>
						Grab a Bite
					</motion.button>{' '}
					<motion.button
						initial={{opacity: 0, scale: 0.8}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.4, delay: 1.7}}
						whileHover={{
							scale: 1.12,
							rotate: -3,
							backgroundColor: '#fff',
							color: '#FF3B30',
						}}
						whileTap={{scale: 0.9}}
						className='border-2 border-white text-white font-heading text-xl sm:text-2xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all tracking-wide shadow-md'>
						Just Looking 😋
					</motion.button>
				</motion.div>
			</div>
		</motion.section>
	)
}
