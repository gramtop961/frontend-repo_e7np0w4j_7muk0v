import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const links = [
  { label: 'Home', target: 'home' },
  { label: 'Men', target: 'men' },
  { label: 'Women', target: 'women' },
  { label: 'Collections', target: 'collections' },
  { label: 'About', target: 'about' },
];

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <header className={classNames(
      'fixed top-0 left-0 right-0 z-50 transition-all',
      scrolled ? 'backdrop-blur-xl bg-neutral-900/70 border-b border-white/10' : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30" />
          <span className="font-semibold tracking-tight text-white text-lg">NIK3 FUTURE</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            aria-label="Cart"
            className="relative inline-flex items-center justify-center rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ShoppingBag className="h-5 w-5 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] leading-none px-1.5 py-0.5 rounded-full bg-fuchsia-500 text-white font-semibold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-neutral-900/80 backdrop-blur-xl border-t border-white/10">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className="w-full text-left py-2 text-white/90"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
