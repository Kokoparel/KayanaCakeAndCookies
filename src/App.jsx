// src/App.jsx
import { useState } from "react";
import products from "./data/products.json";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";

const CATEGORIES = ["Semua", ...Array.from(new Set(products.map((p) => p.kategori)))];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.kategori === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* Google Fonts */}
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap');
                body { font-family: 'Inter', sans-serif; }
            `}</style>

      <Header />

      {/* ── Hero ─────────────────────────────────────── */}
      <section id="tentang-kami" className="relative overflow-hidden min-h-[72vh] flex items-center">

        {/* BG radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(251,191,36,0.10) 0%, transparent 70%)",
            filter: "blur(10px)",
          }} />
        </div>

        {/* Oversized watermark text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-white/[0.025] font-black uppercase tracking-tighter whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(80px, 18vw, 220px)" }}
          >
            KAYANA
          </span>
        </div>

        {/* Hero content */}
        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-[11px] font-bold tracking-[0.3em] uppercase">
                Cita Rasa Asli Palembang
              </span>
            </div>

            <h1
              className="text-white font-black leading-[0.9] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Kayana<br />
              <span className="text-amber-400">Cake &amp;</span><br />
              Cookies
            </h1>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg mb-10">
              Langsung dari dapur kami. Bahan pilihan ikan tenggiri asli, resep turun-temurun, dikirim ke seluruh Indonesia.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                style={{ boxShadow: "0 8px 24px -4px rgba(251,191,36,0.4)" }}
              >
                Lihat Menu
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <span className="text-neutral-500 text-sm font-medium">
                🏆 sejak 2024
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/[0.06]">
              {[
                { num: "2+", label: "Tahun Pengalaman" },
                { num: "100+", label: "Pelanggan Puas" },
                { num: "100%", label: "Bahan Segar" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p
                    className="text-amber-400 font-black leading-none mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem" }}
                  >
                    {num}
                  </p>
                  <p className="text-neutral-600 text-xs tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalog ──────────────────────────────────── */}
      <section id="catalog" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <p className="text-amber-400 text-[11px] font-bold tracking-[0.25em] uppercase mb-2">— Katalog Produk</p>
            <h2
              className="text-white font-bold"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem" }}
            >
              Menu Kami
            </h2>
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "px-4 py-2 rounded-full text-xs font-bold border tracking-wider uppercase transition-all duration-200",
                  activeCategory === cat
                    ? "bg-amber-400 border-amber-400 text-neutral-950 shadow-lg shadow-amber-400/20"
                    : "bg-transparent border-white/10 text-neutral-500 hover:border-amber-400/40 hover:text-amber-400",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
            <span className="text-neutral-700 text-xs ml-1">{filtered.length} produk</span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-28 text-neutral-700">
            <p className="text-5xl mb-4">🍽️</p>
            <p className="text-lg font-semibold">Tidak ada produk di kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── Footer ───────────────────────────────────── */}
      <footer className="border-t border-white/[0.05] mt-8 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo Kayana" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-neutral-600 text-xs">Kayana Cake and Cookies · Sejak 2024</span>
          </div>
          <p className="text-neutral-700 text-xs text-center sm:text-right">
            © {new Date().getFullYear()} Kayana Cake and Cookies. Harga belum termasuk ongkir.
          </p>
        </div>
      </footer>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}