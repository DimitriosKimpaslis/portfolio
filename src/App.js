import IntroContainer from "./components/IntroContainer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="bg-blue-600 flex justify-center py-4">
      <div className="bg-white p-4 w-[90%] rounded-3xl px-60">
        <Navigation />
        <IntroContainer />
        <Projects />
      </div>
    </div>
  );
}

export default App;
