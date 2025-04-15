const cache = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getCachedData = (key) => {
  const cachedItem = cache[key];
  if (cachedItem && Date.now() - cachedItem.timestamp < CACHE_DURATION) {
    return cachedItem.data;
  }
  return null;
};

export const setCachedData = (key, data) => {
  cache[key] = {
    data,
    timestamp: Date.now()
  };
};