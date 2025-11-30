import Navbar from '../app/components/Navbar'
import Hero from '@/app/components/Hero'
import Marquee from './components/Marquee'
import WhyChooseUs from './components/WhyChooseUs'
import ProductShowcase from './components/ProductShowcase'

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				{/* <Marquee /> */}
				<ProductShowcase />
				<WhyChooseUs />
			</main>
		</>
	)
}
