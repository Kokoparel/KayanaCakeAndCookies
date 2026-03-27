// src/components/ProductCard.jsx

export default function ProductCard({ product, onClick }) {
    const isSoldOut = product.status === "sold out";

    return (
        <div
            onClick={isSoldOut ? undefined : () => onClick(product)}
            className={[
                "group relative flex flex-col rounded-2xl overflow-hidden",
                "bg-neutral-900 border border-white/[0.06]",
                "transition-all duration-400 ease-out",
                isSoldOut
                    ? "opacity-40 cursor-not-allowed"
                    : "cursor-pointer hover:border-amber-400/30 hover:-translate-y-1.5",
            ].join(" ")}
            style={{
                boxShadow: isSoldOut
                    ? "none"
                    : "0 0 0 0 rgba(251,191,36,0)",
                transition: "all 0.35s ease-out",
            }}
            onMouseEnter={(e) => {
                if (!isSoldOut) e.currentTarget.style.boxShadow = "0 8px 40px -8px rgba(251,191,36,0.25), 0 0 0 1px rgba(251,191,36,0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden bg-neutral-800">
                <img
                    src={product.gambarUrl}
                    alt={product.nama}
                    className={[
                        "w-full h-full object-cover transition-transform duration-700 ease-out",
                        !isSoldOut && "group-hover:scale-110",
                    ].join(" ")}
                    loading="lazy"
                />

                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                {/* Category label */}
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.15em] uppercase text-amber-400 bg-neutral-950/70 backdrop-blur-sm border border-amber-400/20 px-2.5 py-1 rounded-full">
                    {product.kategori}
                </span>

                {/* Sold Out */}
                {isSoldOut && (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/80 backdrop-blur-[1px]">
                        <span
                            className="rotate-[-12deg] px-5 py-2.5 border border-white/20 text-white/60 text-xs font-bold tracking-[0.25em] uppercase rounded"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Habis Terjual
                        </span>
                    </div>
                )}
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 gap-2">
                <h3
                    className="text-white font-bold leading-snug line-clamp-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}
                >
                    {product.nama}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2 flex-1">
                    {product.deskripsiSingkat}
                </p>

                <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/[0.06]">
                    <span className="text-amber-400 font-extrabold tracking-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}>
                        {product.harga}
                    </span>
                    {!isSoldOut && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-neutral-600 group-hover:text-amber-400 transition-colors duration-300 tracking-wide uppercase">
                            Detail
                            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}