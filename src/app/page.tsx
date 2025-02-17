import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-lexend-deca">
      <main className="flex flex-col row-start-2 items-center w-full">
        <Hero />
      </main>
      {/* Optional: Keep a modified footer if desired */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-[#808080]">
        <a 
          href="/services" 
          className="hover:underline hover:text-[#0074bc] transition-colors"
        >
          Our Services
        </a>
        <a 
          href="/pricing" 
          className="hover:underline hover:text-[#39b54a] transition-colors"
        >
          Pricing
        </a>
        <a 
          href="/contact" 
          className="hover:underline hover:text-[#ef5ba1] transition-colors"
        >
          Contact Us
        </a>
      </footer>
    </div>
  );
}
