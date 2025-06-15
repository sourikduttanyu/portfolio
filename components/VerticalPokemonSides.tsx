'use client';

import { useEffect, useRef } from 'react';

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

export default VerticalPokemonSides;
