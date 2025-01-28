import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { BecomeSeller } from "./components/BecomeSeller";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div class="min-h-screen flex flex-col">
      Staging
      <Header />
      <main class="flex-grow">
        <Hero />
        <Features />
        <BecomeSeller />
      </main>
      <Footer />
    </div>
  );
}

export default App;
