import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { useScrolledPast } from './hooks'
import { installAnchorTransitions } from './smoothScroll'
import { WorksIn } from './components/WorksIn'
import { HowItWorks } from './components/HowItWorks'
import { Trust } from './components/Trust'
import { Developers } from './components/Developers'
import { StoreOwners } from './components/StoreOwners'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => installAnchorTransitions(), [])
  const pinHeader = useScrolledPast(500)

  return (
    <main>
      <Header fixed visible={pinHeader} />
      <Hero />
      <WorksIn />
      <HowItWorks />
      <Trust />
      <Developers />
      <StoreOwners />
      <Footer />
    </main>
  )
}
