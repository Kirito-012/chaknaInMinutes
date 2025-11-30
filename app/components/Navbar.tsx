'use client'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [mobileMenuOpen])

	return (
		<>
			<motion.header
				initial={{y: -100, opacity: 0}}
				animate={{y: 0, opacity: 1}}
				transition={{duration: 0.6, ease: 'easeOut'}}
				className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
					scrolled ? 'bg-transparent backdrop-blur-xl' : 'bg-redOrange'
				}`}>
				<div
					className={`max-w-[1320px] mx-auto px-4 sm:px-6 transition-all duration-300 ${
						scrolled ? 'py-2' : 'py-3 sm:py-4'
					}`}>
					<div
						className={`rounded-full shadow-lg flex items-center justify-between px-4 sm:px-8 transition-all duration-300 ${
							scrolled
								? 'py-2 bg-white/60 backdrop-blur-xl shadow-xl scale-[0.96]'
								: 'py-2 sm:py-3 bg-white shadow-lg scale-100'
						}`}>
						<motion.div
							className='flex items-center'
							whileHover={{scale: 1.05, rotate: 2}}
							transition={{duration: 0.3}}>
							<Image
								src='/logo.png'
								alt='Logo'
								width={80}
								height={40}
								className='h-10 sm:h-14 w-auto transition-all'
							/>
						</motion.div>
						<nav className='hidden md:flex font-heading items-center gap-10 text-gray-800 text-lg tracking-wider font-medium'>
							<Link
								href='/'
								className={`transition-all duration-300 hover:rotate-[2deg] hover:scale-110 inline-block ${
									pathname === '/'
										? 'text-redOrange text-2xl'
										: 'hover:text-redOrange'
								}`}>
								Home
							</Link>
							<Link
								href='/products'
								className={`transition-all duration-300 hover:rotate-[2deg] hover:scale-110 inline-block ${
									pathname === '/products'
										? 'text-redOrange text-2xl'
										: 'hover:text-redOrange'
								}`}>
								Products
							</Link>
							<Link
								href='/contact'
								className={`transition-all duration-300 hover:rotate-[2deg] hover:scale-110 inline-block ${
									pathname === '/contact'
										? 'text-redOrange text-2xl'
										: 'hover:text-redOrange'
								}`}>
								Contact
							</Link>
						</nav>

						<motion.button
							whileHover={{scale: 1.1, rotate: -2}}
							whileTap={{scale: 0.95}}
							className='hidden md:block bg-redOrange text-white font-heading text-xl sm:text-2xl px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 tracking-wide border-2 border-redOrange hover:border-mineShaft'>
							Feed Me!
						</motion.button>

						{/* Mobile Hamburger Button */}
						<motion.button
							whileTap={{scale: 0.9}}
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='md:hidden text-mineShaft p-2 relative w-10 h-10 flex items-center justify-center'>
							<div className='w-6 h-5 flex flex-col justify-between'>
								<motion.span
									animate={
										mobileMenuOpen ? {rotate: 45, y: 8} : {rotate: 0, y: 0}
									}
									transition={{duration: 0.3}}
									className='w-full h-0.5 bg-mineShaft rounded-full origin-center'
								/>
								<motion.span
									animate={
										mobileMenuOpen ? {opacity: 0, x: -10} : {opacity: 1, x: 0}
									}
									transition={{duration: 0.3}}
									className='w-full h-0.5 bg-mineShaft rounded-full'
								/>
								<motion.span
									animate={
										mobileMenuOpen ? {rotate: -45, y: -8} : {rotate: 0, y: 0}
									}
									transition={{duration: 0.3}}
									className='w-full h-0.5 bg-mineShaft rounded-full origin-center'
								/>
							</div>
						</motion.button>
					</div>
				</div>
			</motion.header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<>
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							transition={{duration: 0.3}}
							onClick={() => setMobileMenuOpen(false)}
							className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
						/>

						<motion.div
							initial={{x: '100%'}}
							animate={{x: 0}}
							exit={{x: '100%'}}
							transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
							className='fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-gradient-to-br from-redOrange via-redOrange to-[#FF5048] z-50 md:hidden shadow-2xl'>
							<motion.button
								initial={{rotate: 0, opacity: 0}}
								animate={{rotate: 0, opacity: 1}}
								transition={{delay: 0.2}}
								whileHover={{rotate: 90, scale: 1.1}}
								whileTap={{scale: 0.9}}
								onClick={() => setMobileMenuOpen(false)}
								className='absolute top-6 right-6 text-white p-2 hover:bg-white/20 rounded-full transition-colors z-10'>
								<div className='w-6 h-6 relative'>
									<motion.span className='absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full rotate-45 origin-center' />
									<motion.span className='absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full -rotate-45 origin-center' />
								</div>
							</motion.button>

							<div className='absolute top-0 right-0 w-64 h-64 bg-supernova/20 rounded-full blur-3xl'></div>
							<div className='absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl'></div>

							<div className='relative h-full flex flex-col pt-24 px-8 pb-8'>
								<nav className='flex flex-col gap-6 font-heading flex-1'>
									{[
										{href: '/', label: 'Home'},
										{href: '/products', label: 'Products'},
										{href: '/contact', label: 'Contact'},
									].map((link, idx) => (
										<motion.div
											key={link.href}
											initial={{x: 50, opacity: 0}}
											animate={{x: 0, opacity: 1}}
											transition={{delay: idx * 0.1, duration: 0.4}}
											whileHover={{x: 10, scale: 1.05}}
											className='relative'>
											<Link
												href={link.href}
												onClick={() => setMobileMenuOpen(false)}
												className={`text-4xl transition-all duration-300 inline-block ${
													pathname === link.href
														? 'text-supernova'
														: 'text-white hover:text-supernova'
												}`}>
												{link.label}
											</Link>
											{pathname === link.href && (
												<motion.div
													layoutId='mobile-active-link'
													className='absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 bg-supernova rounded-full'
												/>
											)}
										</motion.div>
									))}

									<motion.button
										initial={{y: 50, opacity: 0}}
										animate={{y: 0, opacity: 1}}
										transition={{delay: 0.3, duration: 0.4}}
										whileHover={{scale: 1.05, rotate: -2}}
										whileTap={{scale: 0.95}}
										onClick={() => setMobileMenuOpen(false)}
										className='bg-white text-redOrange font-heading text-2xl px-8 py-4 rounded-2xl shadow-lg mt-auto border-4 border-white hover:bg-supernova hover:text-mineShaft hover:border-supernova transition-all duration-300'>
										Feed Me! 🍿
									</motion.button>

									<motion.p
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										transition={{delay: 0.5}}
										className='text-white/60 text-sm text-center mt-6 font-body'>
										Fast snacks, real flavor ⚡
									</motion.p>
								</nav>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	)
}
