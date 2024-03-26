import Contact from "./components/Contact";
import IntroContainer from "./components/IntroContainer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="bg-blue-600 flex justify-center py-4 relative">
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
