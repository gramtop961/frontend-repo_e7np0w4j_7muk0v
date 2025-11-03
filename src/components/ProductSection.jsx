import { useMemo } from 'react';
import { ShoppingBag } from 'lucide-react';

const sampleProducts = {
  men: [
    {
      id: 'm1',
      name: 'AeroPulse Runner Tee',
      price: 58,
      color: 'Carbon Black',
      image: 'https://images.unsplash.com/photo-1743812695052-6648d7c3f294?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvUHVsc2UlMjBSdW5uZXIlMjBUZWV8ZW58MHwwfHx8MTc2MjEzMjk3M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 'm2',
      name: 'IonFlex Track Pants',
      price: 92,
      color: 'Graphite Gray',
      image: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'm3',
      name: 'Quantum Windbreaker',
      price: 140,
      color: 'Night Violet',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
    },
  ],
  women: [
    {
      id: 'w1',
      name: 'LumaFlow Sports Bra',
      price: 65,
      color: 'Prism White',
      image: 'https://images.unsplash.com/photo-1715528233519-2d795c06e119?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdW1hRmxvdyUyMFNwb3J0cyUyMEJyYXxlbnwwfDB8fHwxNzYyMTMyOTczfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 'w2',
      name: 'Nebula Leggings',
      price: 88,
      color: 'Iris Purple',
      image: 'https://images.unsplash.com/photo-1618393366766-849376aecc7c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWJ1bGElMjBMZWdnaW5nc3xlbnwwfDB8fHwxNzYyMTMyOTc0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 'w3',
      name: 'Halo Windbreaker',
      price: 135,
      color: 'Aurora Teal',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    },
  ],
};

export default function ProductSection({ type = 'men', onAddToCart }) {
  const items = useMemo(() => sampleProducts[type] || [], [type]);

  return (
    <section id={type} className="relative bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              {type === 'men' ? 'Men' : 'Women'} Performance
            </h2>
            <p className="text-white/60">Engineered fabrics and cyber-sleek silhouettes.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-fuchsia-400/40 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{p.name}</h3>
                <p className="text-sm text-white/60">{p.color}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white font-semibold">${p.price}</span>
                  <button
                    onClick={() => onAddToCart(p)}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white text-neutral-900 font-medium hover:bg-fuchsia-200 transition-colors"
                  >
                    <ShoppingBag className="h-4 w-4" /> Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
