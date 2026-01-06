export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[60vh] w-full overflow-hidden bg-white">
      <video
        src="/Hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
    </section>
  );
}
