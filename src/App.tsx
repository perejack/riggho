import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/routes/index";
import ProductsPage from "@/routes/products";
import AboutPage from "@/routes/about";
import ContactPage from "@/routes/contact";
import FinancingPage from "@/routes/financing";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/financing" element={<FinancingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
