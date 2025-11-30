'use client'
import Image from 'next/image'

export default function Marquee() {
	return (
		<div className='w-full overflow-hidden bg-white py-4 border-y border-black/10 relative'>
			<div className='animate-marquee flex items-center gap-10 whitespace-nowrap'>
				<span className='text-redOrange font-heading text-3xl flex items-center gap-4'>
					🔥 SUPER CRUNCHY
				</span>
				<span className='text-redOrange font-heading text-3xl flex items-center gap-4'>
					⚡ DELIVERED IN MINUTES
				</span>
				<span className='text-redOrange font-heading text-3xl flex items-center gap-4'>
					🍟 REAL FLAVOR
				</span>

				<Image
					src='/snack1.png'
					alt='snack1'
					width={70}
					height={70}
					className='rounded-xl shadow-md'
				/>
				<Image
					src='/snack2.png'
					alt='snack2'
					width={70}
					height={70}
					className='rounded-xl shadow-md'
				/>
				<Image
					src='/snack3.png'
					alt='snack3'
					width={70}
					height={70}
					className='rounded-xl shadow-md'
				/>

				<span className='text-redOrange font-heading text-3xl flex items-center gap-4'>
					🧨 EXTRA SPICY
				</span>
				<span className='text-redOrange font-heading text-3xl flex items-center gap-4'>
					🌶 DROOL GUARANTEED
				</span>
			</div>
		</div>
	)
}
