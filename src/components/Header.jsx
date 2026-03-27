// src/components/Header.jsx

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-neutral-950/90 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16 sm:h-18">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-400">
                            <img src="/logo.svg" alt="Logo Pempek & Kue" className="h-w-full" />
                        </div>
                        <div className="leading-none">
                            <span
                                className="block text-white font-bold tracking-tight text-base"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Kayana Cake and Cookies
                            </span>
                        </div>
                    </div>

                    {/* Nav links (desktop) */}
                    <nav className="hidden sm:flex items-center gap-8">
                        {[
                            { name: "Menu", href: "#catalog" },
                            { name: "Tentang Kami", href: "#tentang-kami" },
                            { name: "Pesan", href: "#catalog" },
                        ].map((item) => (
                            <a key={item.name} href={item.href} className="text-neutral-400 hover:text-white text-sm font-medium cursor-pointer transition-colors duration-200">
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Badge */}
                    <div className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-3 py-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
                        </span>
                        <span className="text-amber-400 text-[11px] font-bold tracking-wider uppercase">Buka</span>
                    </div>
                </div>
            </div>
        </header>
    );
}