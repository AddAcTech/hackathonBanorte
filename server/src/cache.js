// cache.js
const cache = new Map();
const CACHE_EXPIRATION_TIME = 60000; // 1 minuto

function setCache(prompt, response) {
  cache.set(prompt, response);
  setTimeout(() => cache.delete(prompt), CACHE_EXPIRATION_TIME);
}

function getCache(prompt) {
  return cache.get(prompt);
}

function hasCache(prompt) {
  return cache.has(prompt);
}

function clearCache() {
  cache.clear();
}

function printCache() {
    console.log('Current Cache:');
    for (const [key, value] of cache.entries()) {
      console.log(`Prompt: ${key}, Response: ${value}`);
    }
  }

  function getAllCacheValues() {
    let allValues = '';
    for (const value of cache.values()) {
      allValues += value + ' ';
    }
    return allValues.trim();
  }

export { setCache, getCache, hasCache, clearCache, printCache, getAllCacheValues};