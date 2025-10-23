import { Button } from "@/components/ui/button";
import { Phone, Instagram, Youtube } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center gap-3">
            <img
              src="/images/nsm-logo-main.png"
              alt="Nathaniel School of Music"
              className="h-12 md:h-14"
            />
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            <button
              className="flex flex-col items-center gap-1 hover-elevate active-elevate-2 rounded-lg p-2 transition-all"
              onClick={() => window.open('https://wa.me/917760456847', '_blank')}
              data-testid="button-whatsapp-header"
            >
              <SiWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              <span className="text-xs text-muted-foreground">WhatsApp</span>
            </button>
            
            <button
              className="flex flex-col items-center gap-1 hover-elevate active-elevate-2 rounded-lg p-2 transition-all"
              onClick={() => window.location.href = 'tel:+917760456847'}
              data-testid="button-phone-header"
            >
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              <span className="text-xs text-muted-foreground">Call Us</span>
            </button>

            <button
              className="flex flex-col items-center gap-1 hover-elevate active-elevate-2 rounded-lg p-2 transition-all"
              onClick={() => window.open('https://instagram.com/jasonzac', '_blank')}
              data-testid="button-instagram-header"
            >
              <Instagram className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              <span className="text-xs text-muted-foreground">Music Tips</span>
            </button>

            <button
              className="flex flex-col items-center gap-1 hover-elevate active-elevate-2 rounded-lg p-2 transition-all"
              onClick={() => window.open('https://www.youtube.com/channel/UCCI37YB3l21oq_sLoc92YfA?sub_confirmation=1', '_blank')}
              data-testid="button-youtube-header"
            >
              <Youtube className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              <span className="text-xs text-muted-foreground hidden sm:block">Free Tutorials</span>
              <span className="text-xs text-muted-foreground sm:hidden">Tutorials</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
