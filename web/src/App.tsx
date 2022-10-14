import { Header } from "./components/Header";

import { AboutMe } from "./pages/AboutMe";
import { MyWorks } from './pages/MyWorks'
import { LandingPage } from "./pages/LandingPage";

export function App() {


  return (
    <div className="sm:mt-[88px] md:mt-[92px] sm:h-[calc(100vh-88px)] md:h-[calc(100vh-92px)] overflow-y-scroll scroll-smooth">
      <Header />
      <LandingPage />
      <AboutMe />
      <MyWorks />
    </div>
  )
}