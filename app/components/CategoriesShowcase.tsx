'use client'

import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {Star, ShoppingCart} from 'lucide-react'
const products: Record<
	string,
	Array<{
		id: number
		name: string
		price: number
		rating: number
		reviews: number
		img: string
	}>
> = {
	'Healthy Namkeen': [
		{
			id: 1,
			name: 'Roasted Chana Jor Garam',
			price: 149,
			rating: 4.8,
			reviews: 421,
			img: 'https://jagdishfarshan.com/cdn/shop/files/Roasted_Chana_Jor_Garam.jpg?v=1709877275&width=1946',
		},
		{
			id: 2,
			name: 'Jowar Puffs - Masala',
			price: 129,
			rating: 4.7,
			reviews: 312,
			img: 'https://simplydelish.in/cdn/shop/files/SID4419.jpg?v=1701775731&width=990',
		},
		{
			id: 3,
			name: 'Baked Multigrain Mixture',
			price: 159,
			rating: 4.9,
			reviews: 198,
			img: 'https://rethinksnacks.in/wp-content/uploads/2024/09/1-2-1-1536x1536.jpg',
		},
		{
			id: 4,
			name: 'Protein Makhana',
			price: 239,
			rating: 4.8,
			reviews: 276,
			img: 'https://www.mypunepulse.com/wp-content/uploads/2025/02/makhana-1296x728-header.webp',
		},
		{
			id: 5,
			name: 'Roasted Peanuts Masala',
			price: 119,
			rating: 4.6,
			reviews: 159,
			img: 'https://5.imimg.com/data5/IOS/Default/2024/5/418198129/TL/CW/FW/10916742/product-jpeg-1000x1000.png',
		},
		{
			id: 6,
			name: 'Baked Nachni Chips',
			price: 169,
			rating: 4.7,
			reviews: 142,
			img: 'https://famousdishes.in/wp-content/uploads/2020/05/nachni-chips-recipe-image-in-a-bowl.jpg',
		},
	],

	'Sprouts & Salads': [
		{
			id: 1,
			name: 'Classic Sprout Salad Bowl',
			price: 199,
			rating: 4.9,
			reviews: 312,
			img: 'https://images.unsplash.com/photo-1604908140918-2799bb203271?w=500&q=80',
		},
		{
			id: 2,
			name: 'Moong Sprouts Lemon Mix',
			price: 179,
			rating: 4.8,
			reviews: 221,
			img: 'https://images.unsplash.com/photo-1524061662617-532de5a1e6df?w=500&q=80',
		},
		{
			id: 3,
			name: 'Chickpea Protein Bowl',
			price: 229,
			rating: 4.7,
			reviews: 189,
			img: 'https://images.unsplash.com/photo-1536514498073-adfb6f6f33e1?w=500&q=80',
		},
		{
			id: 4,
			name: 'Veggie Detox Salad',
			price: 249,
			rating: 4.8,
			reviews: 302,
			img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80',
		},
	],

	'Corn & Chaat': [
		{
			id: 1,
			name: 'Tandoori Corn Chaat',
			price: 159,
			rating: 4.8,
			reviews: 278,
			img: 'https://images.unsplash.com/photo-1626082927389-6c66044324ef?w=500&q=80',
		},
		{
			id: 2,
			name: 'Classic Butter Corn Cup',
			price: 129,
			rating: 4.7,
			reviews: 193,
			img: 'https://images.unsplash.com/photo-1629973893444-8d8c1ac44e0e?w=500&q=80',
		},
		{
			id: 3,
			name: 'Cheesy Sweet Corn Mix',
			price: 169,
			rating: 4.9,
			reviews: 325,
			img: 'https://images.unsplash.com/photo-1604908812730-516f33e92e7a?w=500&q=80',
		},
	],

	'Dry Fruits & Seeds': [
		{
			id: 1,
			name: 'Mixed Dry Fruits Pack',
			price: 299,
			rating: 4.9,
			reviews: 430,
			img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&q=80',
		},
		{
			id: 2,
			name: 'Almonds & Raisins Combo',
			price: 279,
			rating: 4.8,
			reviews: 312,
			img: 'https://images.unsplash.com/photo-1576092768242-6f5d346ba1f6?w=500&q=80',
		},
		{
			id: 3,
			name: 'Seeds Mix – Omega Boost',
			price: 199,
			rating: 4.7,
			reviews: 256,
			img: 'https://images.unsplash.com/photo-1585842265985-4bfdc88a5f7b?w=500&q=80',
		},
		{
			id: 4,
			name: 'Pistachios Salted',
			price: 349,
			rating: 4.8,
			reviews: 198,
			img: 'https://images.unsplash.com/photo-1615485290399-3861a0c5d28f?w=500&q=80',
		},
	],
}

const categoryTabs = [
	{
		key: 'Healthy Namkeen',
		label: 'Crispy & Clean',
		emoji: '🥜',
		tagline: 'Roasted, baked, never fried',
	},
	{
		key: 'Sprouts & Salads',
		label: 'Fresh Fuel',
		emoji: '🥗',
		tagline: 'Protein-packed goodness',
	},
	{
		key: 'Corn & Chaat',
		label: 'Zesty Bites',
		emoji: '🌽',
		tagline: 'Tangy bowls for instant cravings',
	},
	{
		key: 'Dry Fruits & Seeds',
		label: 'Power Boost',
		emoji: '💪',
		tagline: 'Energy for the grind',
	},
]

const marqueeContent = [
	'🚀 10-minute delivery on thousands of items',
	'🔥 Fresh, hot & handpicked for your cravings',
	'⭐ Loved by snack addicts across the city',
	'💥 Order now & feel that snack rush!',
]

export default function CategoriesShowcase() {
	const [activeCategory, setActiveCategory] =
		useState<string>('Healthy Namkeen')

	return (
		<section className='py-16 sm:py-24 bg-pearlLusta relative overflow-hidden'>
			<div className='pointer-events-none absolute -top-24 -left-20 w-72 h-72 bg-supernova/25 rounded-full blur-3xl' />
			<div className='pointer-events-none absolute -bottom-32 -right-16 w-80 h-80 bg-redOrange/25 rounded-full blur-3xl' />

			<motion.div
				className='pointer-events-none absolute top-24 left-10 text-5xl opacity-40 will-change-transform'
				animate={{y: [0, -12, 0]}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: [0.4, 0, 0.2, 1],
					repeatType: 'loop',
				}}>
				🍟
			</motion.div>
			<motion.div
				className='pointer-events-none absolute bottom-32 right-12 text-6xl opacity-30 will-change-transform'
				animate={{y: [0, 14, 0]}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: [0.4, 0, 0.2, 1],
					repeatType: 'loop',
				}}>
				🧃
			</motion.div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Heading */}
				<div className='text-center mb-10 sm:mb-14'>
					<motion.p
						initial={{opacity: 0, y: 20}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5}}
						className='font-body text-xs font-semibold tracking-[0.25em] text-redOrange uppercase mb-3'>
						Shop by mood
					</motion.p>
					<motion.h2
						initial={{opacity: 0, y: 20}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5, delay: 0.1}}
						className='font-heading text-4xl sm:text-5xl md:text-6xl text-mineShaft mb-3 tracking-wider'>
						BROWSE COLLECTION
					</motion.h2>
					<motion.p
						initial={{opacity: 0, y: 20}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5, delay: 0.2}}
						className='font-body text-base sm:text-lg text-gray-700 max-w-2xl mx-auto'>
						Pick a vibe, we’ll handle the rest — fresh, fast and right on time.
					</motion.p>
				</div>

				{/* Tabs */}
				<motion.div
					initial={{opacity: 0, y: 15}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, margin: '-50px'}}
					transition={{duration: 0.5, ease: [0.4, 0, 0.2, 1]}}
					className='hidden sm:flex flex-wrap justify-center gap-3 sm:gap-4 mb-10'>
					{categoryTabs.map((tab, idx) => {
						const isActive = activeCategory === tab.key
						return (
							<motion.button
								key={tab.key}
								onClick={() => setActiveCategory(tab.key)}
								whileHover={{scale: 1.06}}
								whileTap={{scale: 0.96}}
								transition={{duration: 0.2, ease: [0.4, 0, 0.2, 1]}}
								className={`relative overflow-hidden rounded-2xl px-6 py-4 flex flex-col items-start min-w-[210px] border font-body text-left transition-all duration-300 will-change-transform ${
									isActive
										? 'border-redOrange bg-white shadow-[0_10px_30px_rgba(255,59,48,0.35)]'
										: 'border-transparent bg-white/80 shadow-md hover:shadow-lg hover:border-redOrange/60'
								}`}>
								<div className='flex items-center gap-2 mb-1'>
									<span className='text-2xl'>{tab.emoji}</span>
									<span className='font-heading text-lg tracking-wide text-mineShaft'>
										{tab.label}
									</span>
								</div>
								<span className='text-sm text-gray-600 font-body'>
									{tab.tagline}
								</span>

								{isActive && (
									<motion.div
										layoutId='tabUnderline'
										className='absolute bottom-0 left-4 right-4 h-1 rounded-full bg-supernova'
									/>
								)}
							</motion.button>
						)
					})}
				</motion.div>

				{/* Mobile horizontal scroll version */}
				<motion.div
					initial={{opacity: 0, y: 15}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, margin: '-50px'}}
					transition={{duration: 0.5, ease: [0.4, 0, 0.2, 1]}}
					className='flex sm:hidden gap-3 overflow-x-auto no-scrollbar pb-3 mb-8'>
					{categoryTabs.map((tab) => {
						const isActive = activeCategory === tab.key
						return (
							<motion.button
								key={tab.key}
								onClick={() => setActiveCategory(tab.key)}
								whileTap={{scale: 0.95}}
								transition={{duration: 0.2, ease: [0.4, 0, 0.2, 1]}}
								className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full font-heading text-base tracking-wide will-change-transform ${
									isActive
										? 'bg-redOrange text-white shadow-[0_8px_20px_rgba(255,59,48,0.35)]'
										: 'bg-white text-mineShaft shadow-md'
								}`}>
								<span className='text-lg'>{tab.emoji}</span>
								{tab.label}
							</motion.button>
						)
					})}
				</motion.div>

				{/* Marquee strip */}
				<div className='mb-10 relative'>
					<div className='relative overflow-hidden rounded-full bg-mineShaft text-white py-2 px-4'>
						<motion.div
							animate={{x: ['0%', '-100%']}}
							transition={{duration: 14, repeat: Infinity, ease: 'linear'}}
							className='flex whitespace-nowrap font-heading text-sm sm:text-base tracking-wide'>
							<div className='flex items-center gap-10'>
								{marqueeContent.map((item, idx) => (
									<span key={idx}>{item}</span>
								))}
							</div>

							<div className='flex items-center gap-10 ml-10'>
								{marqueeContent.map((item, idx) => (
									<span key={`copy-${idx}`}>{item}</span>
								))}
							</div>
						</motion.div>
					</div>
				</div>

				{/* Product Grid */}
				<motion.div
					key={activeCategory}
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.35, ease: [0.4, 0, 0.2, 1]}}
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
					{products[activeCategory]?.map((product, idx) => (
						<motion.div
							key={product.id}
							initial={{opacity: 0, y: 30, scale: 0.95}}
							animate={{opacity: 1, y: 0, scale: 1}}
							transition={{
								duration: 0.35,
								delay: idx * 0.06,
								ease: [0.4, 0, 0.2, 1],
							}}
							whileHover={{y: -8, scale: 1.02}}
							className='group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(255,59,48,0.25)] transition-shadow duration-300'>
							{/* Product Image */}
							<div className='relative h-48 sm:h-56 overflow-hidden'>
								<img
									src={product.img}
									alt={product.name}
									className='w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 ease-out'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-mineShaft/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300' />
								<div className='absolute top-3 right-3 bg-supernova text-mineShaft px-3 py-1 rounded-full text-xs font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out'>
									★ {product.rating}
								</div>
							</div>{' '}
							{/* Product Info */}
							<div className='relative p-4 sm:p-5'>
								<h3 className='font-heading text-lg sm:text-xl text-mineShaft mb-2 tracking-wide leading-tight line-clamp-1 group-hover:text-redOrange transition-colors duration-250 ease-out'>
									{product.name}
								</h3>

								<div className='flex items-center gap-1 mb-3 text-xs text-gray-500'>
									<Star className='w-3 h-3 fill-supernova text-supernova' />
									<span className='font-semibold'>
										{product.reviews} reviews
									</span>
								</div>

								<div className='flex items-end justify-between mb-4'>
									<div>
										<span className='font-heading text-3xl sm:text-4xl text-redOrange tracking-tight leading-none block'>
											₹{product.price}
										</span>
										<span className='font-body text-xs text-gray-500 font-medium'>
											Best Price
										</span>
									</div>
								</div>

								<motion.button
									whileHover={{scale: 1.03}}
									whileTap={{scale: 0.97}}
									transition={{duration: 0.2, ease: [0.4, 0, 0.2, 1]}}
									className='w-full bg-gradient-to-r from-redOrange to-redOrange/90 hover:from-redOrange/90 hover:to-redOrange text-white py-3 px-4 rounded-xl font-body font-semibold text-sm sm:text-base transition-colors shadow-md hover:shadow-[0_8px_25px_rgba(255,59,48,0.35)] flex items-center justify-center gap-2 group/btn'>
									<ShoppingCart className='w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200 ease-out' />
									<span>ADD TO CART</span>
								</motion.button>

								<div className='absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-supernova to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out' />
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
