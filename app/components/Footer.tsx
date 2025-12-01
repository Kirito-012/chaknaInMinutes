'use client'

import {motion} from 'framer-motion'
import {
	Instagram,
	Twitter,
	Facebook,
	Mail,
	Phone,
	MapPin,
	Heart,
	ArrowUp,
} from 'lucide-react'

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	}

	return (
		<footer className='relative bg-redOrange font-body overflow-hidden'>
			<div className='absolute top-0 left-0 w-96 h-96 bg-supernova/10 rounded-full blur-3xl'></div>
			<div className='absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl'></div>
			<motion.div
				initial={{scale: 0}}
				animate={{scale: 1}}
				transition={{duration: 0.8, delay: 0.2, ease: 'easeOut'}}
				className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] pointer-events-none'
			/>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 relative z-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5}}>
						<h3 className='font-heading text-4xl sm:text-5xl text-white mb-4 tracking-wider'>
							Chakna In
							<br />
							Minutes
						</h3>
						<p className='text-white/80 text-sm sm:text-base leading-relaxed mb-6'>
							Fast snacks, real flavor. Delivered to your doorstep in minutes,
							not days. That's the ChaknaInMinutes promise.
						</p>
						<div className='flex gap-3'>
							{[
								{icon: Instagram, link: '#'},
								{icon: Twitter, link: '#'},
								{icon: Facebook, link: '#'},
							].map((social, idx) => (
								<motion.a
									key={idx}
									href={social.link}
									initial={{opacity: 0, scale: 0}}
									whileInView={{opacity: 1, scale: 1}}
									viewport={{once: true}}
									transition={{delay: idx * 0.1}}
									whileHover={{scale: 1.2, rotate: 10}}
									whileTap={{scale: 0.9}}
									className='bg-white/10 hover:bg-supernova text-white hover:text-mineShaft p-3 rounded-xl backdrop-blur-sm transition-all shadow-md'>
									<social.icon className='w-5 h-5' />
								</motion.a>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5, delay: 0.1}}>
						<h4 className='font-heading text-2xl sm:text-3xl text-white mb-6 tracking-wide'>
							Quick Links
						</h4>
						<ul className='space-y-3'>
							{['About Us', 'Menu', 'How It Works', 'FAQs', 'Careers'].map(
								(link, idx) => (
									<motion.li
										key={idx}
										whileHover={{x: 5}}
										transition={{duration: 0.2}}>
										<a
											href='#'
											className='text-white/80 hover:text-white hover:font-semibold text-sm sm:text-base transition-all flex items-center gap-2 group'>
											<span className='w-0 h-0.5 bg-supernova group-hover:w-4 transition-all duration-300'></span>
											{link}
										</a>
									</motion.li>
								)
							)}
						</ul>
					</motion.div>

					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5, delay: 0.2}}>
						<h4 className='font-heading text-2xl sm:text-3xl text-white mb-6 tracking-wide'>
							Categories
						</h4>
						<ul className='space-y-3'>
							{[
								'Chips & Crisps',
								'Namkeen',
								'Sweets',
								'Beverages',
								'Combos',
							].map((category, idx) => (
								<motion.li
									key={idx}
									whileHover={{x: 5}}
									transition={{duration: 0.2}}>
									<a
										href='#'
										className='text-white/80 hover:text-white hover:font-semibold text-sm sm:text-base transition-all flex items-center gap-2 group'>
										<span className='w-0 h-0.5 bg-supernova group-hover:w-4 transition-all duration-300'></span>
										{category}
									</a>
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5, delay: 0.3}}>
						<h4 className='font-heading text-2xl sm:text-3xl text-white mb-6 tracking-wide'>
							Contact Us
						</h4>
						<ul className='space-y-4'>
							<li className='flex items-start gap-3 text-white/80 text-sm sm:text-base'>
								<MapPin className='w-5 h-5 text-supernova flex-shrink-0 mt-1' />
								<span>123 Snack Street, Food District, Mumbai 400001</span>
							</li>
							<li className='flex items-center gap-3 text-white/80 text-sm sm:text-base'>
								<Phone className='w-5 h-5 text-supernova flex-shrink-0' />
								<a
									href='tel:+911234567890'
									className='hover:text-white hover:font-semibold transition-all'>
									+91 12345 67890
								</a>
							</li>
							<li className='flex items-center gap-3 text-white/80 text-sm sm:text-base'>
								<Mail className='w-5 h-5 text-supernova flex-shrink-0' />
								<a
									href='mailto:hello@chaknainminutes.com'
									className='hover:text-white hover:font-semibold transition-all'>
									hello@chaknainminutes.com
								</a>
							</li>
						</ul>
					</motion.div>
				</div>

				<div className='h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8'></div>

				<motion.div
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					viewport={{once: true}}
					transition={{duration: 0.5, delay: 0.4}}
					className='flex flex-col sm:flex-row justify-between items-center gap-4 text-white/70 text-sm'>
					<p className='flex items-center gap-2'>
						© 2025 ChaknaInMinutes. All Rights Reserved
					</p>
					<div className='flex flex-wrap justify-center gap-4 sm:gap-6'>
						<a
							href='#'
							className='hover:text-white hover:font-semibold transition-all'>
							Privacy Policy
						</a>
						<a
							href='#'
							className='hover:text-white hover:font-semibold transition-all'>
							Terms of Service
						</a>
						<a
							href='#'
							className='hover:text-white hover:font-semibold transition-all'>
							Cookie Policy
						</a>
					</div>
				</motion.div>

				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.5, delay: 0.5}}
					className='text-center mt-8 pt-6 border-t border-white/10 relative'>
					<p className='font-heading text-xl sm:text-2xl text-white/90 tracking-wide mb-4'>
						Snack Fast. Snack Fresh. Snack Happy! 🍿
					</p>

					<motion.button
						onClick={scrollToTop}
						initial={{opacity: 0, scale: 0.8}}
						whileInView={{opacity: 1, scale: 1}}
						viewport={{once: true}}
						whileHover={{scale: 1.15, rotate: 360}}
						whileTap={{scale: 0.9}}
						transition={{rotate: {duration: 0.6}}}
						className='inline-flex items-center justify-center bg-supernova text-mineShaft p-3 sm:p-4 rounded-full font-bold shadow-[0_8px_30px_rgba(255,202,10,0.4)] hover:shadow-[0_12px_40px_rgba(255,202,10,0.6)] transition-all'>
						<ArrowUp className='w-5 h-5 sm:w-6 sm:h-6' />
					</motion.button>
				</motion.div>
			</div>
		</footer>
	)
}
