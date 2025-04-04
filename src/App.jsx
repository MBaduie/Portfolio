//componentes
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Technology from "./components/Technology";

const App = () => {
  return (
    <div className="text-neutral-300 overflow-hidden  selection:bg-slate-100 selection:text-indigo-400 antialiased  min-h-screen">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] "></div>
      </div>

      <div className="container mx-auto">
        <Nav />
        <Hero />
        <Technology />
        <About />
        <Experience />
      </div>
    </div>
  );
};

export default App;
