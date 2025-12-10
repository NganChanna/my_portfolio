import { Navbar, Footer } from "./components";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </main>
      <Footer />
    </>
  );
}

export default App;
