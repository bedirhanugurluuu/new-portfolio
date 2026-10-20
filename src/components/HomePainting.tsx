import Image from "next/image";

export function HomePainting() {
  return (
    <aside className="home-visual" aria-hidden={false}>
      <div className="home-painting">
        <Image
          src="/brush-scene-7-day-portrait.svg"
          alt="Portrait painting of a city and countryside scene"
          fill
          priority
          sizes="(min-width: 1100px) minmax(380px, 1fr), 100vw"
          className="object-cover"
        />
      </div>
    </aside>
  );
}
