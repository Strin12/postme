self.addEventListener("install", (event) => {
  console.info("[SW] install...");
});
self.addEventListener("activate", async (event) => {
  console.info("[SW] Activate...");
});
self.addEventListener("fetch", (event) => {
  console.info("[SW] Fetch...");
});
