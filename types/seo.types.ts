export interface SeoData {
  slug?: string;
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  keywords?: string[];
  canonicalUrl?: string;
}
