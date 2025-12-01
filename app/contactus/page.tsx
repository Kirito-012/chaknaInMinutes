'use client'

import {motion} from 'framer-motion'
import {Mail, Phone, MapPin} from 'lucide-react'
import {useRef, useState, MouseEvent} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function ContactPage() {
	const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
	const btnRef = useRef<HTMLButtonElement>(null)

	// Magnet hover effect
	const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
		if (!btnRef.current) return

		const rect = btnRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left - rect.width / 2
		const y = e.clientY - rect.top - rect.height / 2

		btnRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
	}

	const handleMouseLeave = () => {
		if (!btnRef.current) return
		btnRef.current.style.transform = `translate(0px,0px)` // reset
	}

	const handleSubmit = () => {
		setStatus('loading')

		setTimeout(() => {
			setStatus('success')
			setTimeout(() => setStatus('idle'), 2000)
		}, 2000)
	}
	return (
		<>
			<Navbar />
			<section className='relative min-h-screen bg-redOrange overflow-hidden flex items-center pt-24 pb-12 sm:py-16 md:py-20'>
				<div className='max-w-7xl mx-auto w-full px-6 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start'>
					<div>
						<motion.h1
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							className='font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide leading-tight sm:leading-none break-words'>
							LET'S TALK
						</motion.h1>

						<motion.div
							initial={{width: 0}}
							whileInView={{width: '140px'}}
							transition={{duration: 0.7}}
							className='h-1.5 sm:h-2 bg-supernova rounded-full mt-2 sm:mt-3 mb-6 sm:mb-8'
						/>
						<motion.h2
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}>
							<p className='font-body text-sm sm:text-base md:text-lg max-w-lg opacity-95'>
								Your ideas, feedback, and conversations shape the future of fast
								snacking. Want to collaborate, ask something, or bring something
								new to the table? We're listening — real people, real
								conversations, real impact.
							</p>
						</motion.h2>

						<div className='mt-8 sm:mt-10 md:mt-12 space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base font-body'>
							<motion.div
								initial={{opacity: 0, x: -20}}
								whileInView={{opacity: 1, x: 0}}
								viewport={{once: true}}
								transition={{duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1]}}
								whileHover={{x: 6}}
								className='flex items-center gap-3 sm:gap-4 text-gray-700 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow'>
								<div className='p-1.5 sm:p-2 rounded-full bg-redOrange/10 flex-shrink-0'>
									<Mail
										className='text-redOrange'
										size={18}
									/>
								</div>
								<span className='break-all sm:break-normal'>
									support@chaknainminutes.com
								</span>
							</motion.div>
							<motion.div
								initial={{opacity: 0, x: -20}}
								whileInView={{opacity: 1, x: 0}}
								viewport={{once: true}}
								transition={{duration: 0.4, delay: 0.3, ease: [0.4, 0, 0.2, 1]}}
								whileHover={{x: 6}}
								className='flex items-center gap-3 sm:gap-4 text-gray-700 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow'>
								<div className='p-1.5 sm:p-2 rounded-full bg-supernova/10 flex-shrink-0'>
									<Phone
										className='text-supernova'
										size={18}
									/>
								</div>
								<span>+91 98765 43210</span>
							</motion.div>
							<motion.div
								initial={{opacity: 0, x: -20}}
								whileInView={{opacity: 1, x: 0}}
								viewport={{once: true}}
								transition={{duration: 0.4, delay: 0.4, ease: [0.4, 0, 0.2, 1]}}
								whileHover={{x: 6}}
								className='flex items-center gap-3 sm:gap-4 text-gray-700 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow'>
								<div className='p-1.5 sm:p-2 rounded-full bg-redOrange/10 flex-shrink-0'>
									<MapPin
										className='text-redOrange'
										size={18}
									/>
								</div>
								<span>Mumbai, India</span>
							</motion.div>
						</div>
					</div>

					<motion.form
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.5, ease: [0.4, 0, 0.2, 1]}}
						className='w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-6 pt-8 sm:p-8 space-y-6 sm:space-y-8 mt-8 lg:mt-0'>
						{[
							{label: 'Name', type: 'text'},
							{label: 'Email', type: 'email'},
							{label: 'Phone Number', type: 'text'},
						].map((field, i) => (
							<div
								key={i}
								className='relative group'>
								<input
									type={field.type}
									className='w-full bg-transparent border-b-2 border-gray-300 py-2.5 sm:py-3 font-body text-mineShaft text-sm sm:text-base outline-none
        focus:border-redOrange transition-all peer'
								/>
								<label
									className='absolute pt-2 left-0 top-2.5 sm:top-3 text-gray-500 text-sm sm:text-base font-body transition-all pointer-events-none
        peer-focus:-top-4 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-redOrange peer-valid:-top-4 peer-valid:text-xs sm:peer-valid:text-sm'>
									{field.label}
								</label>
							</div>
						))}

						<div className='relative group'>
							<textarea
								rows={4}
								className='w-full bg-transparent border-b-2 border-gray-300 py-2.5 sm:py-3 font-body text-mineShaft text-sm sm:text-base outline-none
      focus:border-redOrange transition-all peer resize-none'
							/>
							<label
								className='absolute left-0 top-2.5 sm:top-3 text-gray-500 text-sm sm:text-base font-body transition-all pointer-events-none
      peer-focus:-top-4 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-redOrange peer-valid:-top-4 peer-valid:text-xs sm:peer-valid:text-sm'>
								Message
							</label>
						</div>

						<motion.button
							ref={btnRef}
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
							onClick={handleSubmit}
							whileTap={{scale: 0.95}}
							className={`relative w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-heading tracking-wide text-lg sm:text-xl transition-all
        shadow-[0_8px_30px_rgba(255,59,48,0.3)]
        ${
					status === 'success'
						? 'bg-supernova text-mineShaft'
						: 'bg-redOrange text-white hover:bg-redOrange/90'
				}
      `}>
							{status === 'loading' && (
								<motion.div
									className='w-6 h-6 border-4 border-white border-t-transparent rounded-full mx-auto'
									animate={{rotate: 360}}
									transition={{repeat: Infinity, duration: 0.7, ease: 'linear'}}
								/>
							)}

							{status === 'success' && (
								<motion.span
									initial={{scale: 0.6, opacity: 0}}
									animate={{scale: 1, opacity: 1}}>
									SENT! 🎉
								</motion.span>
							)}

							{status === 'idle' && 'SEND MESSAGE'}
						</motion.button>
					</motion.form>
				</div>

				{/* <div className='absolute bottom-0 left-0 w-full bg-gradient-to-r from-redOrange to-supernova text-white font-heading text-lg py-3 overflow-hidden z-20'>
					<motion.div
						animate={{x: ['0%', '-100%']}}
						transition={{duration: 15, repeat: Infinity, ease: 'linear'}}
						className='whitespace-nowrap flex gap-8'>
						<span>🚀 FAST RESPONSE GUARANTEED</span>
						<span>🔥 REAL PEOPLE, REAL SUPPORT</span>
						<span>⚡ POWERING SNACKERS LIKE YOU</span>
						<span>🚀 FAST RESPONSE GUARANTEED</span>
						<span>🔥 REAL PEOPLE, REAL SUPPORT</span>
						<span>⚡ POWERING SNACKERS LIKE YOU</span>
					</motion.div>
				</div> */}
			</section>
			<Footer />
		</>
	)
}
