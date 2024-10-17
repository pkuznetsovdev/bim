import type { LinkProps } from 'react-router-dom';

export function capitalize(str: string) {
  return (str && str[0].toUpperCase() + str.slice(1)) || '';
}

export function isExternalUrl(urlToCheck?: LinkProps['to']) {
  if (typeof urlToCheck !== 'string' || !urlToCheck.includes('http')) {
    return false;
  }

  const getDomain = (url: string) =>
    url.replace('http://', '').replace('https://', '').split('/')[0];

  return getDomain(window.location.href) !== getDomain(urlToCheck);
}
