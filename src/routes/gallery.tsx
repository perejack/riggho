import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid3X3, Maximize2, ZoomIn } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

// Import all gallery images
const galleryImages = [
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.02.jpeg", title: "RhingGo Showroom", category: "Showroom" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.02 (1).jpeg", title: "Electric Tuktuk", category: "Vehicles" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.02 (2).jpeg", title: "Battery Swap Station", category: "Infrastructure" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.02 (3).jpeg", title: "Customer Test Drive", category: "Experience" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.02 (4).jpeg", title: "Fleet Delivery", category: "Fleet" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.02 (5).jpeg", title: "Charging Setup", category: "Infrastructure" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.02 (6).jpeg", title: "Team at Work", category: "Team" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.02 (7).jpeg", title: "Service Center", category: "Service" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.03.jpeg", title: "Road Test", category: "Experience" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.03 (1).jpeg", title: "Customer Handover", category: "Experience" },
  { src: "/src/assets/galleryimages/WhatsApp Image 2026-04-29 at 17.46.03 (2).jpeg", title: "Solar Charging", category: "Infrastructure" },
];

const categories = ["All", "Vehicles", "Infrastructure", "Experience", "Team", "Service", "Fleet", "Showroom"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    const actualIndex = galleryImages.indexOf(filteredImages[index]);
    setSelectedImage(actualIndex);
  };

  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  }, [selectedImage]);

  const goToNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  }, [selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, goToPrevious, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background via-surface to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel icon="📸" text="Visual Journey" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="text-electric">Gallery</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mb-8 text-lg">
              Experience the RhingGo revolution through our lens. From our showroom floors to the streets of Kenya, 
              see how we&apos;re transforming mobility one electric vehicle at a time.
            </p>
          </AnimatedSection>

          {/* Stats Bar */}
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { value: "11+", label: "Photos" },
                { value: "3", label: "Locations" },
                { value: "100+", label: "Happy Customers" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-surface border border-border/50 rounded-2xl p-6 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-electric">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-electric text-electric-foreground shadow-lg shadow-electric/25"
                      : "bg-surface border border-border/50 text-foreground hover:border-electric/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Masonry Gallery Grid */}
          <motion.div 
            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl bg-surface">
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="inline-block px-2 py-1 bg-electric/20 rounded-full text-xs text-electric mb-2">
                            {image.category}
                          </span>
                          <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                        </motion.div>
                      </div>
                      
                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                        >
                          <ZoomIn className="text-white" size={20} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <Grid3X3 className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No images in this category yet.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={closeLightbox}
            >
              <X className="text-white" size={24} />
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="text-white" size={24} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="text-white" size={24} />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
              >
                <span className="inline-block px-3 py-1 bg-electric/20 rounded-full text-sm text-electric mb-2">
                  {galleryImages[selectedImage].category}
                </span>
                <h3 className="text-white text-xl font-semibold">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </motion.div>
            </motion.div>

            {/* Thumbnail Strip */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 py-2 bg-black/50 backdrop-blur-sm rounded-2xl"
            >
              {galleryImages.map((img, idx) => (
                <motion.button
                  key={img.src}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(idx);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === selectedImage 
                      ? "border-electric ring-2 ring-electric/50" 
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to See More?
            </h2>
            <p className="text-muted-foreground mb-8">
              Visit our showroom for a hands-on experience with our electric vehicles.
            </p>
            <motion.a
              href="/locations"
              className="inline-flex items-center gap-2 gradient-electric text-electric-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Maximize2 size={20} />
              Visit Our Locations
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
