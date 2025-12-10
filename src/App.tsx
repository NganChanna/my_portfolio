import { Navbar, Footer, ThemeProvider } from "./components";
import { Routes, Route } from "react-router-dom";
import { HomePage, About, Projects, Contact } from "./pages";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
