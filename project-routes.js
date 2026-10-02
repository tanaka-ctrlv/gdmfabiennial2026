/* Shared by the page generator and the exhibition's browser navigation. */
(function (root) {
  function slugForArtist(artist) {
    return artist.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function projectIndex(entries, pathname, basePath = "/") {
    if (!pathname.startsWith(basePath)) return -1;
    const slug = pathname.slice(basePath.length).replace(/\/index\.html$/, "").replace(/\/$/, "");
    return entries.findIndex(entry => slugForArtist(entry.artist) === slug);
  }
  const api = { slugForArtist, projectIndex };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.ProjectRoutes = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
