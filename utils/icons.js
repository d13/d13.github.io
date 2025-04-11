export function getFaviconConfig(isProd = false) {
  if (isProd) {
    return {
      sizes: [32, 180, 192, 512],
    };
  }
  return {
    sizes: [32],
  };
}

export function getFaviconIcons(isManifest = false) {
  const faviconConfig = getFaviconConfig((process.env.NODE_ENV ?? 'development') === 'production');

  const icons = [];
  for (const size of faviconConfig.sizes) {
    const isApple = size === 180;
    if (isApple && isManifest) {
      continue;
    }

    icons.push({
      size: size,
      src: `${isManifest ? '/img/favicon/' : ''}favicon-${size}.png`,
      sizes: `${size}x${size}`,
      type: 'image/png',
      format: 'png',
      rel: isApple ? 'apple-touch-icon' : 'icon',
    });
  }

  return icons;
}
