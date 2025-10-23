import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/geo", async (req: Request, res) => {
    try {
      // First check for country headers from CDN/hosting providers
      let country = req.headers["x-vercel-ip-country"] as string || 
                   req.headers["cf-ipcountry"] as string ||
                   req.headers["x-replit-user-ip-country"] as string;
      
      // If no header available, extract IP and use geolocation API
      if (!country) {
        // Extract real client IP from x-forwarded-for (first IP is the client)
        const forwardedFor = req.headers["x-forwarded-for"] as string;
        const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : req.ip;
        
        console.log(`[GEO] No country header, looking up IP: ${clientIp}`);
        
        // Use free ip-api.com service for geolocation (no key needed, 45 req/min limit)
        // Falls back to ipapi.co if first service fails
        try {
          const geoResponse = await fetch(`http://ip-api.com/json/${clientIp}?fields=status,countryCode`);
          const geoData = await geoResponse.json();
          
          if (geoData.status === 'success' && geoData.countryCode) {
            country = geoData.countryCode;
            console.log(`[GEO] IP lookup success: ${clientIp} -> ${country}`);
          } else {
            throw new Error('ip-api.com failed');
          }
        } catch (error) {
          console.log(`[GEO] ip-api.com failed, trying ipapi.co`);
          try {
            const backupResponse = await fetch(`https://ipapi.co/${clientIp}/country_code/`);
            country = (await backupResponse.text()).trim();
            console.log(`[GEO] ipapi.co success: ${clientIp} -> ${country}`);
          } catch (backupError) {
            console.error(`[GEO] Both geolocation services failed, defaulting to international`);
            country = "US"; // Default to international (US) instead of India
          }
        }
      }
      
      const domesticCountries = [
        "IN", // India
        "NP", // Nepal
        "LK", // Sri Lanka
        "BD", // Bangladesh
        "PK", // Pakistan
        "BT", // Bhutan
        "MV"  // Maldives
      ];

      const region = domesticCountries.includes(country.toUpperCase()) 
        ? "domestic" 
        : "international";

      console.log(`[GEO] Final result - Country: ${country}, Region: ${region}`);

      res.json({
        country,
        region
      });
    } catch (error) {
      console.error('[GEO] Error in geo endpoint:', error);
      // On error, default to international pricing
      res.json({
        country: "US",
        region: "international"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
