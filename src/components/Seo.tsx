import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function Seo({
  title,
  description,
  canonicalUrl,
  ogImage = "https://cricanalyst.io/og-image.jpg",
  ogType = "website",
  noindex = false,
  structuredData,
}: SeoProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper function to update or create meta tag
    const setMetaTag = (attr: "name" | "property", key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // 3. Open Graph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "CricAnalyst");

    // 4. Twitter Card
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    // 6. Structured Data (JSON-LD)
    const scriptId = "dynamic-seo-jsonld";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = scriptId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalUrl, ogImage, ogType, noindex, structuredData]);

  return null;
}
