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
	Groceries: [
		{
			id: 1,
			name: 'Organic Apples',
			price: 399,
			rating: 4.8,
			reviews: 245,
			img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&q=80',
		},
		{
			id: 2,
			name: 'Whole Wheat Bread',
			price: 279,
			rating: 4.9,
			reviews: 128,
			img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80',
		},
		{
			id: 3,
			name: 'Fresh Milk 1L',
			price: 239,
			rating: 4.7,
			reviews: 312,
			img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80',
		},
		{
			id: 4,
			name: 'Cheddar Cheese',
			price: 559,
			rating: 4.8,
			reviews: 89,
			img: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=500&q=80',
		},
		{
			id: 5,
			name: 'Tomatoes (1kg)',
			price: 319,
			rating: 4.6,
			reviews: 156,
			img: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&q=80',
		},
		{
			id: 6,
			name: 'Spinach Bundle',
			price: 199,
			rating: 4.9,
			reviews: 201,
			img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80',
		},
	],
	Electronics: [
		{
			id: 1,
			name: 'USB-C Cable',
			price: 1049,
			rating: 4.7,
			reviews: 456,
			img: 'https://images.unsplash.com/photo-1591290619762-a9b050dbce6f?w=500&q=80',
		},
		{
			id: 2,
			name: 'Phone Case',
			price: 1199,
			rating: 4.8,
			reviews: 678,
			img: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=500&q=80',
		},
		{
			id: 3,
			name: 'Screen Protector',
			price: 719,
			rating: 4.6,
			reviews: 234,
			img: 'https://images.unsplash.com/photo-1625337278461-f98ecf8e1a7c?w=500&q=80',
		},
		{
			id: 4,
			name: 'Portable Charger',
			price: 2399,
			rating: 4.9,
			reviews: 512,
			img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80',
		},
		{
			id: 5,
			name: 'Bluetooth Speaker',
			price: 2799,
			rating: 4.8,
			reviews: 789,
			img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
		},
		{
			id: 6,
			name: 'Wireless Earbuds',
			price: 3999,
			rating: 4.7,
			reviews: 923,
			img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
		},
	],
	Fashion: [
		{
			id: 1,
			name: 'Cotton T-Shirt',
			price: 1599,
			rating: 4.7,
			reviews: 342,
			img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
		},
		{
			id: 2,
			name: 'Denim Jeans',
			price: 4799,
			rating: 4.8,
			reviews: 567,
			img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
		},
		{
			id: 3,
			name: 'Casual Sneakers',
			price: 6399,
			rating: 4.6,
			reviews: 412,
			img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80',
		},
		{
			id: 4,
			name: 'Baseball Cap',
			price: 1999,
			rating: 4.7,
			reviews: 198,
			img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80',
		},
		{
			id: 5,
			name: 'Sports Socks Pack',
			price: 1199,
			rating: 4.9,
			reviews: 301,
			img: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80',
		},
		{
			id: 6,
			name: 'Summer Dress',
			price: 3599,
			rating: 4.8,
			reviews: 289,
			img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80',
		},
	],
	'Home & Garden': [
		{
			id: 1,
			name: 'LED Desk Lamp',
			price: 2799,
			rating: 4.8,
			reviews: 234,
			img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
		},
		{
			id: 2,
			name: 'Plant Pot Set',
			price: 1999,
			rating: 4.7,
			reviews: 145,
			img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80',
		},
		{
			id: 3,
			name: 'Bath Towels',
			price: 1599,
			rating: 4.9,
			reviews: 378,
			img: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&q=80',
		},
		{
			id: 4,
			name: 'Bed Sheets',
			price: 3599,
			rating: 4.7,
			reviews: 289,
			img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
		},
		{
			id: 5,
			name: 'Kitchen Organizer',
			price: 2399,
			rating: 4.8,
			reviews: 156,
			img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&q=80',
		},
		{
			id: 6,
			name: 'Wall Mirror',
			price: 3999,
			rating: 4.6,
			reviews: 223,
			img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80',
		},
	],
}

// mood-based, funky tabs that still map to your product keys
const categoryTabs = [
	{
		key: 'Groceries',
		label: 'Daily Essentials',
		emoji: '⚡',
		tagline: 'Milk, bread, fruits & more',
	},
	{
		key: 'Electronics',
		label: 'Gadget Lifesavers',
		emoji: '🔋',
		tagline: 'Cables, chargers & fixes',
	},
	{
		key: 'Fashion',
		label: 'Style & Swag',
		emoji: '🔥',
		tagline: 'Wear it, flex it',
	},
	{
		key: 'Home & Garden',
		label: 'Home Vibes',
		emoji: '🏡',
		tagline: 'Cozy corners, happy plants',
	},
]

const marqueeContent = [
	'🚀 10-minute delivery on thousands of items',
	'🔥 Fresh, hot & handpicked for your cravings',
	'⭐ Loved by snack addicts across the city',
	'💥 Order now & feel that snack rush!',
]

export default function CategoriesShowcase() {
	const [activeCategory, setActiveCategory] = useState<string>('Groceries')

	return (
		<section className='py-16 sm:py-24 bg-pearlLusta relative overflow-hidden'>
			{/* Soft gradient blobs */}
			<div className='pointer-events-none absolute -top-24 -left-20 w-72 h-72 bg-supernova/25 rounded-full blur-3xl' />
			<div className='pointer-events-none absolute -bottom-32 -right-16 w-80 h-80 bg-redOrange/25 rounded-full blur-3xl' />

			{/* Floating doodles */}
			<motion.div
				className='pointer-events-none absolute top-24 left-10 text-5xl opacity-40'
				animate={{y: [0, -12, 0]}}
				transition={{duration: 5, repeat: Infinity, ease: 'easeInOut'}}>
				🍟
			</motion.div>
			<motion.div
				className='pointer-events-none absolute bottom-32 right-12 text-6xl opacity-30'
				animate={{y: [0, 14, 0]}}
				transition={{duration: 6, repeat: Infinity, ease: 'easeInOut'}}>
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
					viewport={{once: true}}
					transition={{duration: 0.5}}
					className='hidden sm:flex flex-wrap justify-center gap-3 sm:gap-4 mb-10'>
					{categoryTabs.map((tab, idx) => {
						const isActive = activeCategory === tab.key
						return (
							<motion.button
								key={tab.key}
								onClick={() => setActiveCategory(tab.key)}
								whileHover={{scale: 1.06}}
								whileTap={{scale: 0.96}}
								className={`relative overflow-hidden rounded-2xl px-6 py-4 flex flex-col items-start min-w-[210px] border font-body text-left transition-all duration-300 ${
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
					viewport={{once: true}}
					transition={{duration: 0.5}}
					className='flex sm:hidden gap-3 overflow-x-auto no-scrollbar pb-3 mb-8'>
					{categoryTabs.map((tab) => {
						const isActive = activeCategory === tab.key
						return (
							<motion.button
								key={tab.key}
								onClick={() => setActiveCategory(tab.key)}
								whileTap={{scale: 0.95}}
								className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full font-heading text-base tracking-wide ${
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
					transition={{duration: 0.4}}
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
					{products[activeCategory]?.map((product, idx) => (
						<motion.div
							key={product.id}
							initial={{opacity: 0, y: 30, scale: 0.9}}
							animate={{opacity: 1, y: 0, scale: 1}}
							transition={{duration: 0.4, delay: idx * 0.08}}
							whileHover={{y: -8, scale: 1.02}}
							className='group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(255,59,48,0.25)] transition-all duration-300'>
							{/* Product Image */}
							<div className='relative h-48 sm:h-56 overflow-hidden'>
								<img
									src={product.img}
									alt={product.name}
									className='w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-mineShaft/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300' />
								<div className='absolute top-3 right-3 bg-supernova text-mineShaft px-3 py-1 rounded-full text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300'>
									★ {product.rating}
								</div>
							</div>

							{/* Product Info */}
							<div className='relative p-4 sm:p-5'>
								<h3 className='font-heading text-lg sm:text-xl text-mineShaft mb-2 tracking-wide leading-tight line-clamp-1 group-hover:text-redOrange transition-colors duration-300'>
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
									className='w-full bg-gradient-to-r from-redOrange to-redOrange/90 hover:from-redOrange/90 hover:to-redOrange text-white py-3 px-4 rounded-xl font-body font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-[0_8px_25px_rgba(255,59,48,0.35)] flex items-center justify-center gap-2 group/btn'>
									<ShoppingCart className='w-5 h-5 group-hover/btn:scale-110 transition-transform' />
									<span>ADD TO CART</span>
								</motion.button>

								<div className='absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-supernova to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
