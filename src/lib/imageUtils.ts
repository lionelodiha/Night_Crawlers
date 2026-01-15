const IMAGE_EXTENSIONS = /\.(png|jpe?g|webp|gif|svg)$/i;

export const isLikelyImageUrl = (url: string) => {
  const trimmed = url.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('data:image/')) return true;
  if (trimmed.startsWith('blob:')) return true;
  const clean = trimmed.split('?')[0];
  return IMAGE_EXTENSIONS.test(clean);
};

const extractMetaImage = (html: string) => {
  const ogMatch = html.match(/property=["']og:image(:url)?["']\s+content=["']([^"']+)["']/i);
  if (ogMatch?.[2]) return ogMatch[2];
  const twitterMatch = html.match(/name=["']twitter:image["']\s+content=["']([^"']+)["']/i);
  if (twitterMatch?.[1]) return twitterMatch[1];
  return null;
};

const normalizeMetaUrl = (sourceUrl: string, metaUrl: string) => {
  if (metaUrl.startsWith('//')) {
    return `https:${metaUrl}`;
  }
  if (metaUrl.startsWith('/')) {
    try {
      return new URL(metaUrl, sourceUrl).toString();
    } catch {
      return metaUrl;
    }
  }
  return metaUrl;
};

const resolveViaProxy = async (sourceUrl: string) => {
  const target = sourceUrl.replace(/^https?:\/\//i, '');
  const response = await fetch(`https://r.jina.ai/http://${target}`);
  if (!response.ok) return null;
  const text = await response.text();
  const metaImage = extractMetaImage(text);
  if (!metaImage) return null;
  return normalizeMetaUrl(sourceUrl, metaImage);
};

export const resolveImageUrl = async (url: string) => {
  const trimmed = url.trim();
  if (!trimmed) return '';
  if (isLikelyImageUrl(trimmed)) return trimmed;
  try {
    const resolved = await resolveViaProxy(trimmed);
    if (resolved && isLikelyImageUrl(resolved)) {
      return resolved;
    }
  } catch {
    return '';
  }
  return '';
};
