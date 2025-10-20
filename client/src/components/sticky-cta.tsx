import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface StickyCTAProps {
  enrollLink: string;
}

export function StickyCTA({ enrollLink }: StickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-4 shadow-lg">
      <Button
        size="lg"
        className="w-full text-base py-6 min-h-14"
        onClick={() => window.open(enrollLink, '_blank')}
        data-testid="button-sticky-enrol"
      >
        <FileText className="w-5 h-5 mr-2" />
        Enrol Now
      </Button>
    </div>
  );
}
