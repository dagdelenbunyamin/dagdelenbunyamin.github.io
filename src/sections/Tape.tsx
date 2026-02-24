'use client';

const words = [
  'PERFORMANT',
  'ZUGÄNGLICH',
  'SICHER',
  'INTERAKTIV',
  'SKALIERBAR',
  'BENUTZERFREUNDLICH',
  'RESPONSIV',
  'WARTBAR',
];

export const TapeSection = () => {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div className="relative overflow-hidden py-4 bg-gradient-to-r from-emerald-300 via-lime-300 to-yellow-300 -rotate-3 -mx-4 my-8">
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: 'tape-scroll 25s linear infinite',
          willChange: 'transform',
        }}
      >
        {repeated.map((word, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-3 text-black font-extrabold text-sm tracking-wider uppercase px-4"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <path d="M5 0L6.18 3.82 10 5 6.18 6.18 5 10 3.82 6.18 0 5 3.82 3.82 5 0z"/>
            </svg>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
