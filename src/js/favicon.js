const icons = {
  "dark": "assets/favicon_16x16-DARK.png",
  "light": "assets/favicon_16x16-LIGHT.png"
}

const query = window.matchMedia("(prefers-color-scheme: dark)")

function updateFavicon(query) {
  const favicon = document.querySelector('link[rel="icon"]')
  if (query.matches) {
    favicon.setAttribute("href", icons.dark)
  } else {
    favicon.setAttribute("href", icons.light)
  }
}

if (window.matchMedia) {
  query.addEventListener("change", () => {updateFavicon(query)})
  updateFavicon(query)
}