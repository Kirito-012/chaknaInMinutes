import Navbar from '../app/components/Navbar'
import Hero from '@/app/components/Hero'
import Marquee from './components/Marquee'
import WhyChooseUs from './components/WhyChooseUs'
import ProductShowcase from './components/ProductShowcase'
import HowItWorks from './components/HowItWorks'
import CategoriesShowcase from './components/CategoriesShowcase'
import Footer from './components/Footer'

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				{/* <Marquee /> */}
				<ProductShowcase />
				<HowItWorks />
				<CategoriesShowcase />
				<WhyChooseUs />
			</main>
			<Footer />
		</>
	)
}
