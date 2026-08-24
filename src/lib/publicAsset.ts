export function publicAsset(path: string): string {
  return new URL(path.replace(/^\/+/, ''), document.baseURI).href;
}

export const appLogoUrl = publicAsset('logo.svg');
