import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/geo", (req: Request, res) => {
    // Check multiple possible headers for country code
    const country = req.headers["x-vercel-ip-country"] as string || 
                   req.headers["cf-ipcountry"] as string ||
                   req.headers["x-replit-user-ip-country"] as string ||
                   req.headers["x-forwarded-for-country"] as string ||
                   // Default to India for development/Replit since most users are from India
                   "IN";
    
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

    console.log(`[GEO] Country: ${country}, Region: ${region}, Headers:`, {
      'x-vercel-ip-country': req.headers["x-vercel-ip-country"],
      'cf-ipcountry': req.headers["cf-ipcountry"],
      'x-replit-user-ip-country': req.headers["x-replit-user-ip-country"],
      'x-forwarded-for': req.headers["x-forwarded-for"],
    });

    res.json({
      country,
      region
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
