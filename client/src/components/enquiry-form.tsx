import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    customCode: "",
    whatsapp: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCustomCode, setShowCustomCode] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Construct WhatsApp message
    const actualCountryCode = formData.countryCode === "custom" ? formData.customCode : formData.countryCode;
    const message = `Hi! I'd like to enquire about the Piano Foundation Course.%0A%0AName: ${formData.name}%0AWhatsApp: ${actualCountryCode} ${formData.whatsapp}%0AEmail: ${formData.email}`;
    const whatsappUrl = `https://wa.me/917760456847?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Request Sent!",
      description: "We'll get back to you shortly via WhatsApp.",
    });

    setFormData({ name: "", countryCode: "+91", customCode: "", whatsapp: "", email: "" });
    setShowCustomCode(false);
    setIsSubmitting(false);
  };

  return (
    <Card className="p-6 md:p-8 border-2 border-primary/30 bg-card/50">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold">
            Get a Callback
          </h3>
          <p className="text-muted-foreground">
            We'll reach out to answer your questions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              data-testid="input-enquiry-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp / Mobile</Label>
            <div className="flex gap-2">
              {!showCustomCode ? (
                <Select
                  value={formData.countryCode}
                  onValueChange={(value) => {
                    if (value === "custom") {
                      setShowCustomCode(true);
                      setFormData({ ...formData, countryCode: value });
                    } else {
                      setFormData({ ...formData, countryCode: value });
                    }
                  }}
                >
                  <SelectTrigger className="w-[130px]" data-testid="select-country-code">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">🇮🇳 +91</SelectItem>
                    <SelectItem value="+1">🇺🇸 +1</SelectItem>
                    <SelectItem value="+44">🇬🇧 +44</SelectItem>
                    <SelectItem value="+971">🇦🇪 +971</SelectItem>
                    <SelectItem value="+65">🇸🇬 +65</SelectItem>
                    <SelectItem value="+61">🇦🇺 +61</SelectItem>
                    <SelectItem value="+60">🇲🇾 +60</SelectItem>
                    <SelectItem value="+86">🇨🇳 +86</SelectItem>
                    <SelectItem value="+49">🇩🇪 +49</SelectItem>
                    <SelectItem value="+33">🇫🇷 +33</SelectItem>
                    <SelectItem value="+39">🇮🇹 +39</SelectItem>
                    <SelectItem value="+81">🇯🇵 +81</SelectItem>
                    <SelectItem value="+82">🇰🇷 +82</SelectItem>
                    <SelectItem value="+34">🇪🇸 +34</SelectItem>
                    <SelectItem value="+52">🇲🇽 +52</SelectItem>
                    <SelectItem value="custom">🌍 Other</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="+XXX"
                    value={formData.customCode}
                    onChange={(e) => setFormData({ ...formData, customCode: e.target.value })}
                    required
                    className="w-[80px]"
                    data-testid="input-custom-country-code"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setShowCustomCode(false);
                      setFormData({ ...formData, countryCode: "+91", customCode: "" });
                    }}
                    className="text-xs"
                    data-testid="button-reset-country-code"
                  >
                    Reset
                  </Button>
                </div>
              )}
              <Input
                id="whatsapp"
                type="tel"
                placeholder="XXXXX XXXXX"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="flex-1"
                data-testid="input-enquiry-whatsapp"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              data-testid="input-enquiry-email"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            data-testid="button-submit-enquiry"
          >
            {isSubmitting ? "Sending..." : "Request Callback"}
          </Button>
        </form>
      </div>
    </Card>
  );
}
