import qs from 'qs';

/**
 *
 * @param {string} url
 * @returns number
 */
export const searchPageFromQuery = (url) => {
  try {
    if (url) {
      const urlObj = new URL(url);
      const searchParams = qs.parse(urlObj.search, { ignoreQueryPrefix: true });
      return +searchParams.page ?? null;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
