'use client'

import {useRef} from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {motion} from 'framer-motion'

const products = [
	{
		name: 'Peri-Peri Fries',
		size: 'Large',
		price: '₹129',
		img: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg',
	},
	{
		name: 'Cheese Nachos',
		size: 'Regular',
		price: '₹199',
		img: 'https://images.unsplash.com/photo-1570466199120-80bba1eabad7?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Hot Chicken Wings',
		size: '8 pcs',
		price: '₹299',
		img: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Masala Popcorn',
		size: 'Tub',
		price: '₹99',
		img: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg',
	},
	{
		name: 'Peri-Peri Fries',
		size: 'Large',
		price: '₹139',
		img: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg',
	},
	{
		name: 'Cheese Nachos',
		size: 'Regular',
		price: '₹149',
		img: 'https://images.unsplash.com/photo-1570466199120-80bba1eabad7?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Hot Chicken Wings',
		size: '8 pcs',
		price: '₹299',
		img: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Masala Popcorn',
		size: 'Tub',
		price: '₹99',
		img: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg',
	},
]

export default function ProductShowcase() {
	const sliderRef = useRef<HTMLDivElement>(null)
	const cardWidth = 33.333

	const slideRight = () => {
		if (sliderRef.current) {
			const containerWidth = sliderRef.current.clientWidth
			const scrollAmount = containerWidth / 3
			sliderRef.current.scrollBy({
				left: scrollAmount,
				behavior: 'smooth',
			})
		}
	}

	const slideLeft = () => {
		if (sliderRef.current) {
			const containerWidth = sliderRef.current.clientWidth
			const scrollAmount = containerWidth / 3
			sliderRef.current.scrollBy({
				left: -scrollAmount,
				behavior: 'smooth',
			})
		}
	}

	return (
		<section className='bg-redOrange font-body text-white py-16 sm:py-24'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4'>
				<motion.div
					initial={{opacity: 0, x: -50}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6, ease: 'easeOut'}}>
					<p className='text-xs font-bold tracking-widest text-supernova uppercase'>
						TRENDING NOW
					</p>
					<h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-wider leading-tight text-white'>
						Hot Picks
					</h2>
					<p className='text-white/80 mt-2 text-base sm:text-lg'>
						Crowd favourites, loved by snack addicts everywhere.
					</p>
				</motion.div>

				<motion.button
					initial={{opacity: 0, x: 50}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6, ease: 'easeOut'}}
					whileHover={{scale: 1.1, rotate: 2}}
					whileTap={{scale: 0.95}}
					className='font-heading text-lg sm:text-xl border-2 border-white text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-white hover:text-redOrange transition-colors duration-300 shadow-md'>
					View All
				</motion.button>
			</div>

			<div className='relative max-w-7xl mx-auto px-4'>
				{/* fade overlays */}
				{/* <div className='pointer-events-none absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-white to-transparent' />
				<div className='pointer-events-none absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-white to-transparent' /> */}

				<div
					ref={sliderRef}
					className='flex gap-6 overflow-x-scroll overflow-y-hidden scroll-smooth no-scrollbar px-6 py-4'
					style={{
						scrollSnapType: 'x mandatory',
						touchAction: 'pan-x',
					}}>
					{products.map((item, i) => (
						<motion.div
							key={i}
							initial={{opacity: 0, y: 30}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true, amount: 0.3}}
							transition={{
								duration: 0.4,
								delay: i * 0.05,
								ease: [0.25, 0.1, 0.25, 1],
							}}
							whileHover={{scale: 1.05, rotate: 1}}
							className='flex-shrink-0 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden'
							style={
								{
									width: 'calc(65% - 12px)',
									scrollSnapAlign: 'start',
									'--desktop-width': 'calc(33.333% - 16px)',
								} as React.CSSProperties
							}
							data-desktop-width='true'>
							<div className='h-40 sm:h-56 overflow-hidden relative'>
								<motion.img
									whileHover={{scale: 1.1}}
									transition={{duration: 0.3}}
									src={item.img}
									alt={item.name}
									className='w-full h-full object-cover'
								/>
								<motion.div
									initial={{scale: 0, rotate: -90}}
									whileInView={{scale: 1, rotate: 0}}
									viewport={{once: true, amount: 0.3}}
									transition={{
										duration: 0.4,
										delay: i * 0.05 + 0.2,
										ease: [0.34, 1.56, 0.64, 1],
									}}
									className='absolute top-3 right-3 bg-supernova text-mineShaft font-heading text-sm px-3 py-1 rounded-full shadow-md'>
									HOT!
								</motion.div>
							</div>

							<div className='p-4 sm:p-5'>
								<h3 className='font-heading text-xl sm:text-2xl text-redOrange mb-1 tracking-wide'>
									{item.name}
								</h3>
								<p className='text-sm text-neutral-600 font-medium'>
									{item.size}
								</p>
							</div>

							<div className='px-4 sm:px-5 pb-4 sm:pb-5 pt-3 flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0 border-t-2 border-neutral-200'>
								<p className='font-heading text-2xl sm:text-3xl text-mineShaft'>
									{item.price}
								</p>
								<motion.button
									whileHover={{scale: 1.1, rotate: -2}}
									whileTap={{scale: 0.95}}
									className='bg-redOrange text-white font-heading text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto'>
									Add to cart
								</motion.button>
							</div>
						</motion.div>
					))}
				</div>

				<motion.button
					initial={{opacity: 0, x: 20}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{once: true}}
					transition={{duration: 0.5, delay: 0.3}}
					whileHover={{scale: 1.1, rotate: 12}}
					whileTap={{scale: 0.9}}
					onClick={slideLeft}
					className='absolute left-1 sm:-left-6 top-1/2 -translate-y-1/2 bg-white border-2 border-white text-redOrange p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-10'>
					<ChevronLeft
						size={20}
						className='sm:w-6 sm:h-6'
					/>
				</motion.button>
				<motion.button
					initial={{opacity: 0, x: -20}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{once: true}}
					transition={{duration: 0.5, delay: 0.3}}
					whileHover={{scale: 1.1, rotate: -12}}
					whileTap={{scale: 0.9}}
					onClick={slideRight}
					className='absolute right-1 sm:-right-6 top-1/2 -translate-y-1/2 bg-white border-2 border-white text-redOrange p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-10'>
					<ChevronRight
						size={20}
						className='sm:w-6 sm:h-6'
					/>
				</motion.button>
			</div>
		</section>
	)
}
