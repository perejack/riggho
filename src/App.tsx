import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/routes/index";
import ProductsPage from "@/routes/products";
import AboutPage from "@/routes/about";
import ContactPage from "@/routes/contact";
import FinancingPage from "@/routes/financing";
import LocationsPage from "@/routes/locations";
import GalleryPage from "@/routes/gallery";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
