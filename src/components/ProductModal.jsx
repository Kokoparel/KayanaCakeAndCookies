// src/components/ProductModal.jsx
import { useEffect } from "react";

const WA_NUMBER = "62819687485";

function buildWaLink(product) {
    const msg = `Halo, saya tertarik pesan *${product.nama}* seharga *${product.harga}*. Apakah bisa dikirim ke alamat saya?`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function ProductModal({ product, onClose }) {
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    if (!product) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            style={{ animation: "fadeIn 0.2s ease-out" }}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/75 backdrop-blur-md"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div
                className="relative z-10 w-full sm:max-w-lg max-h-[92dvh] sm:max-h-[88vh] overflow-y-auto bg-neutral-900 border border-white/[0.08] rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col"
                style={{
                    animation: "slideUp 0.28s cubic-bezier(0.16,1,0.3,1)",
                    boxShadow: "0 -4px 80px -10px rgba(251,191,36,0.15), 0 25px 50px -12px rgba(0,0,0,0.8)",
                }}
                role="dialog"
                aria-modal="true"
                aria-label={product.nama}
            >
                {/* Drag handle (mobile) */}
                <div className="flex justify-center pt-3 pb-1 sm:hidden">
                    <div className="w-10 h-1 rounded-full bg-white/10" />
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-all duration-150"
                    aria-label="Tutup"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image */}
                <div className="relative w-full aspect-video sm:aspect-[4/3] bg-neutral-800 overflow-hidden flex-shrink-0 sm:rounded-t-2xl">
                    <img
                        src={product.gambarUrl}
                        alt={product.nama}
                        className="w-full h-full object-cover"
                    />
                    {/* Bottom gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-900 to-transparent" />
                    {/* Category badge on image */}
                    <span className="absolute bottom-4 left-5 text-[10px] font-bold tracking-[0.2em] uppercase text-amber-400 bg-neutral-950/80 backdrop-blur-sm border border-amber-400/20 px-3 py-1 rounded-full">
                        {product.kategori}
                    </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5 p-6">

                    {/* Name + ID */}
                    <div>
                        <p className="text-neutral-600 text-[11px] font-mono mb-1.5">{product.id}</p>
                        <h2
                            className="text-white font-bold leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem" }}
                        >
                            {product.nama}
                        </h2>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                        <span
                            className="text-amber-400 font-extrabold"
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem" }}
                        >
                            {product.harga}
                        </span>
                        <span className="text-neutral-600 text-sm">/paket</span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/[0.06]" />

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        {product.deskripsiLengkap}
                    </p>

                    {/* Info chips */}
                    <div className="flex flex-wrap gap-2">
                        {["Dikemas Vakum", "Bisa Dikirim", "Halal"].map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-white/[0.04] text-neutral-400 border border-white/[0.08] rounded-full px-3 py-1.5"
                            >
                                <svg className="w-3 h-3 text-amber-400/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* WhatsApp CTA */}
                    <a
                        href={buildWaLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 flex items-center justify-center gap-2.5 w-full py-4 rounded-full bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-neutral-950 font-bold text-[15px] tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                        style={{ boxShadow: "0 8px 24px -4px rgba(251,191,36,0.4)" }}
                    >
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.113 1.527 5.845L.057 23.286a.75.75 0 00.921.921l5.44-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.37l-.36-.214-3.724 1.006 1.007-3.724-.214-.36A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                        </svg>
                        Pesan via WhatsApp
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </div>
    );
}