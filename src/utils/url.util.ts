
/**
 * pick
 * @param url
 * @param query
 * @returns
 */
export function getQueryParams<
  R extends Record<string, string | number | Array<string | number>>,
>(url: string = '', query?: string): R | undefined {
  if (!url?.length || url.indexOf('?') < 0) return;
  const queryStr = url.slice(url.indexOf('?') + 1);
  const arr = queryStr.split('&');
  const queryParams: { [k: string]: any } = {};
  arr.forEach((item) => {
    const [name, value] = item.split('=');
    if (typeof name === 'string' && value !== undefined) {
      if (queryParams[name] !== undefined) {
        if (Array.isArray(queryParams[name])) {
          queryParams[name].push(value);
        } else {
          queryParams[name] = [queryParams[name], value];
        }
      }
    }
  });

  if (!Object.keys(queryParams).length) return;
  return query?.length ? (queryParams[query] as R) : (queryParams as R);
}
