'use client';


import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import VerticalPokemonSides from '@/components/VerticalPokemonSides';

const Page = () => {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 py-10">
      <VerticalPokemonSides />
      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-400">Technologies</h2>
          <Technologies />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-400">Projects</h2>
          <Projects />
        </section>

      </div>
    </main>
  );
};

export default Page;


