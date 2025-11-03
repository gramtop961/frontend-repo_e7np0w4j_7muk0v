import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer id="about" className="bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-white text-lg">NIK3 FUTURE</span>
          </div>
          <p className="text-white/60 max-w-sm">
            Performance apparel from the next century. Designed for kinetic living and engineered with planet-positive materials.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-white/90 font-semibold">Explore</h4>
          <div className="flex flex-col gap-1 text-white/70">
            <button onClick={() => scrollTo('men')} className="text-left hover:text-white">Men</button>
            <button onClick={() => scrollTo('women')} className="text-left hover:text-white">Women</button>
            <button onClick={() => scrollTo('collections')} className="text-left hover:text-white">Collections</button>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-white/90 font-semibold">Connect</h4>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Twitter className="h-5 w-5 text-white" />
            </a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Youtube className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-white/50 text-sm pb-10">© {new Date().getFullYear()} NIK3 FUTURE. All Rights Reserved.</div>
    </footer>
  );
}
