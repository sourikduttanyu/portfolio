'use client';

import { useEffect, useRef } from 'react';

const page = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <VerticalPokemonSides />
      <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Sourik Dutta</h1>
          <p className="text-lg text-gray-300">Software Engineer & M.S. Computer Science student at NYU</p>
        </section>

        {/* Currently Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-400">Currently</h2>
          <p>
            🎓 Pursuing Master’s in Computer Science at <strong>New York University</strong> (2024–2026) with coursework in
            <em> Cloud Computing, Big Data, Distributed Systems, and Machine Learning</em>.
          </p>
        </section>

        {/* Experience Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-400">Previous Roles</h2>
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-bold">Cloud Engineer I @ Insight</h3>
              <p className="text-sm text-gray-400">Jan 2022 – Nov 2023</p>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Developed AI solutions with Azure services including Custom Vision & Power Virtual Agents.</li>
                <li>Built Python-based middleware and .NET-based auth systems for healthcare systems.</li>
                <li>Integrated MediatR to refactor security and RBAC logic.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Full Stack Intern @ Ernst & Young</h3>
              <p className="text-sm text-gray-400">May – Jul 2021</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Web Dev Intern @ Ernst & Young</h3>
              <p className="text-sm text-gray-400">Dec 2020 – Feb 2021</p>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-400">Technologies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Programming Languages</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['C#', 'Python', 'HTML/CSS', 'TypeScript', 'C/C++'].map((tech, i) => (
                  <span key={i} className="bg-white/10 border border-white/10 text-white px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Frameworks</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Django', 'ASP.NET', 'React.js'].map((tech, i) => (
                  <span key={i} className="bg-white/10 border border-white/10 text-white px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Docker', 'Kubernetes', 'Git', 'AWS', 'Microsoft Azure'].map((tech, i) => (
                  <span key={i} className="bg-white/10 border border-white/10 text-white px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Apache Kafka', 'PySpark', 'Grafana', 'Jira', 'Metabase'].map((tech, i) => (
                  <span key={i} className="bg-white/10 border border-white/10 text-white px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-400">Projects</h2>
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-xl font-bold">FeastFleet</h3>
              <p className="text-sm text-gray-300">
                A serverless food delivery system built on AWS using Lambda, DynamoDB, and API Gateway for real-time order tracking.
              </p>
              <p className="text-xs text-blue-300 mt-1">
                <a href="https://github.com/sourikduttanyu/FeastFleet" target="_blank" rel="noreferrer">View on GitHub</a>
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-xl font-bold">NYU Enrolls</h3>
              <p className="text-sm text-gray-300">
                Redesigning NYU’s enrollment system with smart recommendations and smoother UX, backed by React, Flask, and MongoDB.
              </p>
              <p className="text-xs text-blue-300 mt-1">
                <a href="https://github.com/sourikduttanyu/NYU-Enrolls" target="_blank" rel="noreferrer">View on GitHub</a>
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-xl font-bold">RouteSavvy</h3>
              <p className="text-sm text-gray-300">
                Optimizing NYC subway routes using Kafka, PySpark, and real-time GTFS feeds. Visualized with Metabase.
              </p>
              <p className="text-xs text-blue-300 mt-1">
                <a href="https://github.com/sourikduttanyu/RouteSavvy" target="_blank" rel="noreferrer">View on GitHub</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;

const VerticalPokemonSides = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const spriteSize = 48;
    const spacing = 80;
    const countPerSide = 5;
    const speeds = Array.from({ length: countPerSide * 2 }, () => 0.5 + Math.random() * 1.5);

    const spriteUrls = [
      'https://img.pokemondb.net/sprites/ruby-sapphire/normal/mudkip.png',
      'https://img.pokemondb.net/sprites/black-white/normal/rayquaza.png',
      'https://img.pokemondb.net/sprites/diamond-pearl/normal/haunter.png',
      'https://img.pokemondb.net/sprites/black-white/normal/arceus-normal.png',
      'https://img.pokemondb.net/sprites/black-white/normal/absol.png',
    ];

    const sprites = Array.from({ length: countPerSide * 2 }, (_, i) => {
      const isLeft = i < countPerSide;
      const offsetIndex = isLeft ? i : i - countPerSide;
      const img = new Image();
      img.src = spriteUrls[i % spriteUrls.length];
      return {
        x: isLeft ? 32 + offsetIndex * spacing : width - 64 - offsetIndex * spacing,
        y: Math.random() * height,
        speed: speeds[i],
        direction: i % 2 === 0 ? 1 : -1,
        img,
      };
    });

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      sprites.forEach((sprite) => {
        sprite.y += sprite.speed * sprite.direction;
        if (sprite.y > height) sprite.y = -spriteSize;
        if (sprite.y < -spriteSize) sprite.y = height;
        const aspectRatio = sprite.img.width / sprite.img.height || 1;
        const drawWidth = spriteSize;
        const drawHeight = spriteSize / aspectRatio;
        ctx.drawImage(sprite.img, sprite.x, sprite.y, drawWidth, drawHeight);
      });
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} />;
};
