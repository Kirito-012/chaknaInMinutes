'use client'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
import {Menu, X} from 'lucide-react'

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

						{/* Desktop CTA Button */}
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
							className='md:hidden text-mineShaft p-2'>
							{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
						</motion.button>
					</div>
				</div>
			</motion.header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{opacity: 0, x: '100%'}}
						animate={{opacity: 1, x: 0}}
						exit={{opacity: 0, x: '100%'}}
						transition={{duration: 0.3, ease: 'easeInOut'}}
						className='fixed top-0 right-0 h-screen w-full bg-white z-40 md:hidden pt-24 px-6'>
						<nav className='flex flex-col gap-8 font-heading text-mineShaft'>
							<Link
								href='/'
								onClick={() => setMobileMenuOpen(false)}
								className={`text-3xl transition-all duration-300 ${
									pathname === '/' ? 'text-redOrange' : 'hover:text-redOrange'
								}`}>
								Home
							</Link>
							<Link
								href='/products'
								onClick={() => setMobileMenuOpen(false)}
								className={`text-3xl transition-all duration-300 ${
									pathname === '/products'
										? 'text-redOrange'
										: 'hover:text-redOrange'
								}`}>
								Products
							</Link>
							<Link
								href='/contact'
								onClick={() => setMobileMenuOpen(false)}
								className={`text-3xl transition-all duration-300 ${
									pathname === '/contact'
										? 'text-redOrange'
										: 'hover:text-redOrange'
								}`}>
								Contact
							</Link>
							<motion.button
								whileTap={{scale: 0.95}}
								onClick={() => setMobileMenuOpen(false)}
								className='bg-redOrange text-white font-heading text-2xl px-8 py-3 rounded-xl shadow-md mt-4 w-fit border-2 border-redOrange'>
								Feed Me!
							</motion.button>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
