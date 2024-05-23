import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Proyectos } from "./components/Proyectos";

function App() {
  return (
    <div className="bg-primary dark:bg-slate-200 font-[Poppins]">
      <Header />
      <main>
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
