'use client';

import { useEffect, useRef } from 'react';

const spriteList = [
  {
    name: 'Mudkip',
    url: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/mudkip.png',
  },
  {
    name: 'Rayquaza',
    url: 'https://img.pokemondb.net/sprites/black-white/normal/rayquaza.png',
  },
  {
    name: 'Haunter',
    url: 'https://img.pokemondb.net/sprites/diamond-pearl/normal/haunter.png',
  },
  {
    name: 'Arceus',
    url: 'https://img.pokemondb.net/sprites/black-white/normal/arceus-normal.png',
  },
  {
    name: 'Absol',
    url: 'https://img.pokemondb.net/sprites/black-white/normal/absol.png',
  },
];

const PokemonBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const cellSize = 64; // bigger size
    const gridWidth = Math.floor(width / cellSize);
    const gridHeight = Math.floor(height / cellSize);
    const directions = ['up', 'down', 'left', 'right'] as const;
    type Direction = typeof directions[number];

    type Cell = { x: number; y: number };
    type Pokemon = {
      body: Cell[];
      direction: Direction;
      img: HTMLImageElement;
      directionChangeCounter: number;
      nextTurnFrame: number;
    };

    const turnLeft = (dir: Direction): Direction => {
  const map: Record<Direction, Direction> = {
    up: 'left',
    left: 'down',
    down: 'right',
    right: 'up',
  };
  return map[dir];
};
    const turnRight = (dir: Direction): Direction => {
  const map: Record<Direction, Direction> = {
    up: 'right',
    right: 'down',
    down: 'left',
    left: 'up',
  };
  return map[dir];
};

    const loadImage = (url: string): Promise<HTMLImageElement> =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
      });

    const loadAllImages = async (): Promise<Pokemon[]> => {
      const loaded = await Promise.all(
        spriteList.map((sprite, index) =>
          loadImage(sprite.url).then((img) => ({
            body: [
              {
                x: Math.floor(Math.random() * gridWidth),
                y: Math.floor(Math.random() * gridHeight),
              },
            ],
            direction: directions[index % directions.length],
            img,
            directionChangeCounter: 0,
            nextTurnFrame: 180 + Math.floor(Math.random() * 60),
          }))
        )
      );
      return loaded;
    };

    loadAllImages().then((pokemons) => {
      const update = () => {
        pokemons.forEach((poke) => {
          poke.directionChangeCounter++;
          if (poke.directionChangeCounter >= poke.nextTurnFrame) {
            const rand = Math.random();
            if (rand < 0.33) poke.direction = turnLeft(poke.direction);
            else if (rand < 0.66) poke.direction = turnRight(poke.direction);
            poke.directionChangeCounter = 0;
            poke.nextTurnFrame = 180 + Math.floor(Math.random() * 60);
          }

          const head = { ...poke.body[0] };
          switch (poke.direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
          }

          head.x = (head.x + gridWidth) % gridWidth;
          head.y = (head.y + gridHeight) % gridHeight;
          poke.body.unshift(head);
          if (poke.body.length > 10) poke.body.pop(); // less trails
        });
      };

      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        pokemons.forEach((poke) => {
          for (let i = 0; i < poke.body.length; i++) {
            const { x, y } = poke.body[i];
            ctx.globalAlpha = 1 - i * 0.1; // smoother fade
            ctx.drawImage(poke.img, x * cellSize, y * cellSize, cellSize, cellSize);
          }
        });
        ctx.globalAlpha = 1;
      };

      let frame = 0;
      const loop = () => {
        if (frame % 5 === 0) { // slower
          update();
          draw();
        }
        frame++;
        requestAnimationFrame(loop);
      };

      loop();
    });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default PokemonBackground;
