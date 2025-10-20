import { Mail, Phone, MapPin, Youtube, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEnrollmentClick, trackWhatsAppClick, trackEmailClick } from "@/lib/analytics";

interface FooterData {
  logo: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
  };
  links: {
    youtube: string;
    instagram: string;
    whatsapp: string;
    email: string;
    enrolForm: string;
  };
  locations: string[];
}

interface FooterProps {
  data: FooterData;
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <img
                src={data.logo}
                alt="Nathaniel School of Music"
                className="h-12 md:h-16 mb-4"
              />
              <h3 className="font-serif text-xl font-semibold mb-2">
                {data.tagline}
              </h3>
              <p className="text-muted-foreground">
                {data.description}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(data.links.youtube, '_blank')}
                data-testid="button-youtube-footer"
              >
                <Youtube className="w-4 h-4 mr-2" />
                YouTube
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(data.links.instagram, '_blank')}
                data-testid="button-instagram-footer"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  trackWhatsAppClick();
                  window.open(data.links.whatsapp, '_blank');
                }}
                data-testid="button-whatsapp-footer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  trackEnrollmentClick('footer_cta');
                  window.open(data.links.enrolForm, '_blank');
                }}
                data-testid="button-enrol-footer"
              >
                Enrol Now
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <div className="space-y-4">
              <a
                href={data.links.email}
                onClick={trackEmailClick}
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email-footer"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{data.contact.email}</span>
              </a>

              <a
                href={`tel:${data.contact.phone}`}
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-phone-footer"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{data.contact.phone}</span>
              </a>

              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  {data.locations.map((location, index) => (
                    <p key={index}>{location}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nathaniel School of Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
