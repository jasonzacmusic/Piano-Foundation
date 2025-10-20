export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img
              src="/images/nsm-logo-white.png"
              alt="Nathaniel School of Music"
              className="h-10 md:h-12"
            />
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg md:text-xl font-bold">
                Nathaniel School of Music
              </h1>
              <p className="text-xs text-muted-foreground">
                Foundation Piano Course
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
