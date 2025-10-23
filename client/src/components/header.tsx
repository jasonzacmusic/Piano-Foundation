import { Button } from "@/components/ui/button";
import { Phone, Instagram, Youtube, Download } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src="/images/nsm-logo-main.png"
              alt="Nathaniel School of Music"
              className="h-12 md:h-14"
            />
            <Button
              size="sm"
              variant="outline"
              className="gap-2 text-xs md:text-sm border-primary/30 hover:bg-primary/10 hover:border-primary"
              onClick={() => window.open('/Piano-Foundation-Course-Brochure.pdf', '_blank')}
              data-testid="button-download-brochure"
            >
              <Download className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Brochure</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              size="icon"
              variant="outline"
              className="w-12 h-12 md:w-14 md:h-14 border-primary/30 hover:bg-primary/10 hover:border-primary"
              onClick={() => window.open('https://wa.me/917760456847', '_blank')}
              data-testid="button-whatsapp-header"
            >
              <SiWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </Button>
            
            <Button
              size="icon"
              variant="outline"
              className="w-12 h-12 md:w-14 md:h-14 border-primary/30 hover:bg-primary/10 hover:border-primary"
              onClick={() => window.location.href = 'tel:+917760456847'}
              data-testid="button-phone-header"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="w-12 h-12 md:w-14 md:h-14 border-primary/30 hover:bg-primary/10 hover:border-primary"
              onClick={() => window.open('https://instagram.com/jasonzac', '_blank')}
              data-testid="button-instagram-header"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="w-12 h-12 md:w-14 md:h-14 border-primary/30 hover:bg-primary/10 hover:border-primary"
              onClick={() => window.open('https://youtube.com/jasonzac', '_blank')}
              data-testid="button-youtube-header"
            >
              <Youtube className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
