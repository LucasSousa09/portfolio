import { Header } from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { MyWorks } from './pages/MyWorks'

export function App() {


  return (
    <div className="relative sm:mt-[88px] md:mt-[92px] sm:h-[calc(100vh-88px)] md:h-[calc(100vh-92px)] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      <LandingPage />
      <MyWorks />
    </div>
  )
}