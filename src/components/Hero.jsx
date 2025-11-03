import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onShopMen, onShopWomen }) {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-neutral-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for readability (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(98,0,234,0.25),rgba(0,0,0,0))]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 flex flex-col items-center text-center">
        <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-fuchsia-300/80 mb-4">Future Edition</p>
        <h1 className="font-semibold text-white text-4xl sm:text-6xl lg:text-7xl leading-tight">
          Elevate Your Run<br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400">Neo Athletic</span> Apparel
        </h1>
        <p className="mt-5 max-w-2xl text-white/70">
          Cyber-crafted performance wear engineered with responsive mesh, liquid thermals, and zero-gravity comfort.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onShopMen}
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white text-neutral-900 font-medium hover:bg-fuchsia-200 transition-colors"
          >
            Shop Men <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={onShopWomen}
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-medium hover:from-fuchsia-400 hover:to-cyan-300 transition-colors"
          >
            Shop Women <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
