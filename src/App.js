import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import IntroContainer from "./components/IntroContainer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Loading from "./components/Loading";


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const removeLoader = () => {
      console.log('loaded')
      setLoading(false)
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1000)
    }
    window.addEventListener('load', removeLoader)
    return () => window.removeEventListener('load', removeLoader)
  }
    , [])
  
  useEffect(() => {
    console.log(loading)
  }
    , [loading])
  
  return (
    <div className="bg-blue-600 flex justify-center py-4 relative">
      <Loading loading={loading}/>
      <div className="bg-white p-4 lg:w-[90%] w-[98%] rounded-3xl lg:px-16 xl:px-32 2xl:px-60">
        <Navigation />
        <IntroContainer />
        <Projects />
        <Contact />
        <div className="h-20 bg-white"></div>
      </div>
    </div>
  );
}

export default App;
