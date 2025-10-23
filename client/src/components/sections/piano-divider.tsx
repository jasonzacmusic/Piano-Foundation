export function PianoDivider() {
  return (
    <section className="w-full h-48 md:h-64 lg:h-80 overflow-hidden relative">
      <div 
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/piano-top-view.jpg)",
          filter: "sepia(0.3) brightness(0.7) contrast(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />
      </div>
    </section>
  );
}
