export function PianoDivider() {
  return (
    <section className="w-full h-48 md:h-64 lg:h-80 overflow-hidden">
      <div 
        className="w-full h-full bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url(/images/vintage-piano.jpg)",
        }}
      />
    </section>
  );
}
