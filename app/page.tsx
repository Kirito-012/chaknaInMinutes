import Navbar from '../app/components/Navbar'
import Hero from '@/app/components/Hero'
import Marquee from './components/Marquee'
import WhyChooseUs from './components/WhyChooseUs'
import ProductShowcase from './components/ProductShowcase'
import CategoriesShowcase from './components/CategoriesShowcase'
import Footer from './components/Footer'
import SnackLabSection from './components/SnackSection'
import HealthySection from './components/HealthySection'

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				{/* <Marquee /> */}
				<ProductShowcase />
				<HealthySection />
				<CategoriesShowcase />
				<SnackLabSection />
				<WhyChooseUs />
			</main>
			<Footer />
		</>
	)
}
