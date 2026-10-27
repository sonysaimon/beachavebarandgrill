/* Beach Ave Bar & Grill — page behaviour */

/* --- Tonight's sunset at English Bay (49.2775, -123.1390) ---
   Classic sunrise/sunset formula (US Naval Observatory method).
   No network calls; shown in Vancouver time. */
function sunsetTonight() {
  const lat = 49.2775, lon = -123.139, zenith = 90.833;
  const rad = Math.PI / 180, deg = 180 / Math.PI;
  // Today's date in Vancouver, not UTC — after ~5pm Pacific, UTC is already tomorrow
  const [y, mo, d] = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Vancouver" })
    .format(new Date()).split("-").map(Number);
  const N = Math.floor((Date.UTC(y, mo - 1, d) - Date.UTC(y, 0, 0)) / 86400000);
  const lngHour = lon / 15;
  const t = N + ((18 - lngHour) / 24);
  const M = (0.9856 * t) - 3.289;
  let L = M + (1.916 * Math.sin(M * rad)) + (0.020 * Math.sin(2 * M * rad)) + 282.634;
  L = ((L % 360) + 360) % 360;
  let RA = deg * Math.atan(0.91764 * Math.tan(L * rad));
  RA = ((RA % 360) + 360) % 360;
  RA += (Math.floor(L / 90) * 90) - (Math.floor(RA / 90) * 90);
  RA /= 15;
  const sinDec = 0.39782 * Math.sin(L * rad);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH = (Math.cos(zenith * rad) - (sinDec * Math.sin(lat * rad))) / (cosDec * Math.cos(lat * rad));
  if (cosH < -1 || cosH > 1) return null;
  const H = (deg * Math.acos(cosH)) / 15;
  const T = H + RA - (0.06571 * t) - 6.622;
  const UT = (((T - lngHour) % 24) + 24) % 24;
  const sunset = new Date(Date.UTC(y, mo - 1, d, 0, 0, Math.round(UT * 3600)));
  return sunset;
}

(function initSunsetCard() {
  const timeEl = document.getElementById("sunset-time");
  if (!timeEl) return;
  const s = sunsetTonight();
  if (!s) { timeEl.textContent = "—"; return; }
  timeEl.textContent = new Intl.DateTimeFormat("en-CA", {
    hour: "numeric", minute: "2-digit", timeZone: "America/Vancouver"
  }).format(s).replace(/\./g, "").toLowerCase();
})();

/* --- Render helpers --- */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const money = (p) => /^[\d.]+$/.test(p) ? "$" + p : p;

/* --- Home: happy hour board --- */
(function initHHBoard() {
  const board = document.getElementById("hh-board");
  if (!board || typeof MENUS === "undefined") return;
  MENUS.happyhour.categories.forEach((cat) => {
    const col = el("div", "hh-col");
    col.appendChild(el("h3", null, esc(cat.name)));
    cat.items.forEach((it) => {
      const row = el("div", "hh-item");
      row.appendChild(el("span", "nm", esc(it.name) + (it.desc ? '<span class="ds">' + esc(it.desc) + "</span>" : "")));
      row.appendChild(el("span", "pr", money(it.price)));
      col.appendChild(row);
    });
    board.appendChild(col);
  });
})();

/* --- Menu page: tabs + full menu render --- */
(function initMenuPage() {
  const app = document.getElementById("menu-app");
  if (!app || typeof MENUS === "undefined") return;
  const tabsWrap = document.getElementById("menu-tabbar");
  const keys = Object.keys(MENUS);

  function render(key) {
    const menu = MENUS[key];
    app.innerHTML = "";
    if (menu.note) app.appendChild(el("p", "menu-note", esc(menu.note)));
    menu.categories.forEach((cat) => {
      const sec = el("div", "menu-cat");
      sec.appendChild(el("h2", null, esc(cat.name)));
      if (cat.note) sec.appendChild(el("p", "cat-note", esc(cat.note)));
      const grid = el("div", "menu-items");
      cat.items.forEach((it) => {
        const item = el("div", "menu-item");
        item.appendChild(el("h3", null, esc(it.name)));
        item.appendChild(el("span", "price", money(it.price)));
        if (it.desc) item.appendChild(el("p", null, esc(it.desc)));
        grid.appendChild(item);
      });
      sec.appendChild(grid);
      app.appendChild(sec);
    });
    tabsWrap.querySelectorAll(".menu-tab").forEach((b) => {
      const on = b.dataset.key === key;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (history.replaceState) history.replaceState(null, "", "#" + key);
    document.title = MENUS[key].label + " Menu — Beach Ave Bar & Grill";
  }

  keys.forEach((key) => {
    const b = el("button", "menu-tab", esc(MENUS[key].label));
    b.type = "button";
    b.dataset.key = key;
    b.setAttribute("role", "tab");
    b.addEventListener("click", () => render(key));
    tabsWrap.appendChild(b);
  });

  const initial = location.hash.replace("#", "");
  render(keys.includes(initial) ? initial : "food");
})();

/* --- Reveal on scroll --- */
(function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
})();
