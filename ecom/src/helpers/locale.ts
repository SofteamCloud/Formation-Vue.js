export default function getPathLang(path: string) {
  let locale = 'fr';
  const pathSegment = path.split('/')
  const localePath = (pathSegment.length > 1) ? pathSegment[1] : ''
  if (localePath === 'en') {
    locale = localePath
  }

  return locale;
}