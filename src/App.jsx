import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function Collections({ onAddToCart }) {
  const items = useMemo(
    () => [
      {
        id: 'c1',
        title: 'IRIS // Chromatic Pack',
        desc: 'Iridescent finishes, reflective seams, midnight gradients.',
        image:
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
        price: 160,
      },
      {
        id: 'c2',
        title: 'NEBULA // Vapor Series',
        desc: 'Featherweight shells with liquid thermal lining.',
        image:
          'https://images.unsplash.com/photo-1520975922436-2535a05c573d?q=80&w=1600&auto=format&fit=crop',
        price: 180,
      },
      {
        id: 'c3',
        title: 'AURORA // Night Ops',
        desc: 'Stealth silhouettes and cyberpunk piping.',
        image:
          'https://images.unsplash.com/photo-1520975867597-0b3462d16954?q=80&w=1600&auto=format&fit=crop',
        price: 150,
      },
    ],
    []
  );

  return (
    <section id="collections" className="relative bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Collections</h2>
            <p className="text-white/60">Limited drops inspired by deep space aesthetics.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{c.title}</h3>
                <p className="text-white/60 text-sm">{c.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white font-semibold">${c.price}</span>
                  <button onClick={() => onAddToCart(c)} className="rounded-full px-3 py-1.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-medium hover:from-fuchsia-400 hover:to-cyan-300 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CartDrawer({ open, onClose, items }) {
  const total = items.reduce((sum, i) => sum + (i.price || 0), 0);
  return (
    <div
      className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-neutral-950 border-l border-white/10 transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-white/10">
          <h3 className="text-white text-xl font-semibold">Your Cart</h3>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
          {items.length === 0 ? (
            <p className="text-white/60">Your cart is empty. Discover something you love.</p>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3 border border-white/10 rounded-xl p-3">
                <div className="h-16 w-16 rounded-lg bg-neutral-800 overflow-hidden">
                  {it.image ? (
                    <img src={it.image} alt={it.name || it.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{it.name || it.title}</p>
                  <p className="text-white/60 text-sm">${it.price?.toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center justify-between text-white mb-4">
            <span className="text-white/70">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onClose}
            className="w-full rounded-full px-5 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-semibold hover:from-fuchsia-400 hover:to-cyan-300 transition-colors"
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAdd = (item) => {
    setCart((c) => [...c, item]);
    setCartOpen(true);
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 font-[\"Manrope\",\"Inter\",system-ui,sans-serif]">
      <Navbar cartCount={cart.length} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero onShopMen={() => scrollToId('men')} onShopWomen={() => scrollToId('women')} />
        <ProductSection type="men" onAddToCart={handleAdd} />
        <ProductSection type="women" onAddToCart={handleAdd} />
        <Collections onAddToCart={handleAdd} />
        <Footer />
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} />
    </div>
  );
}
