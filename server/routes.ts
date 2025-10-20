import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/geo", (req: Request, res) => {
    const country = req.headers["x-vercel-ip-country"] as string || 
                   req.headers["cf-ipcountry"] as string || 
                   "US";
    
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

    res.json({
      country,
      region
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
