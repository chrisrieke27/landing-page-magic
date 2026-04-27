export const CUSTOM_CHAPTERS_KEY = "hq:customChapters";

export type CustomChapter = {
  slug: string;
  name: string;
  shortName: string;
  /** Google Drive image URL (or any image URL) for the chapter logo */
  logoUrl: string;
  /** Legacy field — older entries used a base64 data URL */
  logoDataUrl?: string;
  founded?: string;
  brandingUrl?: string;
};

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * Convert a Google Drive share link into a direct-image URL that <img> can render.
 * Accepts:
 *   https://drive.google.com/file/d/{id}/view?usp=...
 *   https://drive.google.com/open?id={id}
 *   https://drive.google.com/uc?id={id}
 * Falls back to the original string for non-Drive URLs / data URLs.
 */
export const normalizeDriveImageUrl = (url: string): string => {
  if (!url) return url;
  const trimmed = url.trim();
  if (trimmed.startsWith("data:") || !trimmed.includes("drive.google.com")) {
    return trimmed;
  }
  const fileMatch = trimmed.match(/\/file\/d\/([^/]+)/);
  if (fileMatch) return `https://drive.google.com/uc?export=view&id=${fileMatch[1]}`;
  const openMatch = trimmed.match(/[?&]id=([^&]+)/);
  if (openMatch) return `https://drive.google.com/uc?export=view&id=${openMatch[1]}`;
  return trimmed;
};

export const getChapterLogoUrl = (c: CustomChapter): string =>
  normalizeDriveImageUrl(c.logoUrl || c.logoDataUrl || "");

export const loadCustomChapters = (): CustomChapter[] => {
  try {
    const raw = localStorage.getItem(CUSTOM_CHAPTERS_KEY);
    return raw ? (JSON.parse(raw) as CustomChapter[]) : [];
  } catch {
    return [];
  }
};

export const saveCustomChapters = (list: CustomChapter[]) => {
  try {
    localStorage.setItem(CUSTOM_CHAPTERS_KEY, JSON.stringify(list));
    // Notify other components in the same tab (storage event only fires cross-tab)
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("custom-chapters-updated"));
    }
  } catch {
    /* ignore */
  }
};
