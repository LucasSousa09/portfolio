import { Header } from "./components/Header";

import { HireMe } from "./pages/HireMe";
import { MyWorks } from './pages/MyWorks'
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";

export function App() {


  return (
    <div className="sm:mt-[88px] md:mt-[92px] sm:h-[calc(100vh-88px)] md:h-[calc(100vh-92px)] overflow-y-scroll scroll-smooth">
      <Header />
      <Home />
      <AboutMe />
      <MyWorks />
      <HireMe />
    </div>
  )
}