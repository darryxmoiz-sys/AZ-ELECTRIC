import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = "https://www.azelectrical.co.uk";
  return [
    { url: b,                                   lastModified: new Date(), changeFrequency: "weekly",  priority: 1    },
    { url: `${b}/services`,                     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9  },
    { url: `${b}/about`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8  },
    { url: `${b}/gallery`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7  },
    { url: `${b}/contact`,                      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8  },
    { url: `${b}/emergency`,                    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.95 },
    { url: `${b}/garden-outdoor-electrical`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ];
}
