export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img
              src="/images/nsm-logo-main.png"
              alt="Nathaniel School of Music"
              className="h-12 md:h-14"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
