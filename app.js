(() => {
  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (html) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- static text ----------
  $$("[data-artist]").forEach((n) => (n.textContent = S.artist));
  $$("[data-tagline]").forEach((n) => (n.textContent = S.tagline));
  const names = (list) => list.map((n) => `<span class="cr-name">${esc(n)}</span>`).join('<span class="cr-amp">&amp;</span>');
  $$("[data-credits]").forEach((n) => {
    n.innerHTML = S.credits.map((c) => `<div class="cr-row"><span class="cr-role">${esc(c.role)}</span><span class="cr-names">${names(c.names)}</span></div>`).join("");
  });
  const filmCredit = S.credits.map((c) => `${esc(c.role)} ${c.names.map(esc).join(" &amp; ")}`).join(" · ");
  $$("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
  $(".bio").innerHTML = S.bio.map((p) => `<p>${esc(p)}</p>`).join("");

  // ---------- hero ----------
  const heroVid = $(".hero-bg");
  heroVid.poster = S.heroPoster;
  heroVid.src = S.heroLoop;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) heroVid.removeAttribute("autoplay");
  const actions = $(".hero-actions");
  S.films.forEach((f, i) => {
    const b = el("button", { class: `btn${i === 0 ? " primary" : ""}`, "data-play": f.id }, `<span class="tri"></span>${esc(f.title)}`);
    actions.append(b);
  });

  // ---------- films ----------
  const films = $("#films");
  S.films.forEach((f, i) => {
    const sec = el("article", { class: `film ${f.theme}`, id: f.id });
    sec.innerHTML = `
      <div class="film-grid">
        <div class="film-media reveal" data-play="${f.id}" role="button" tabindex="0" aria-label="Play ${esc(f.title)}">
          <img src="${f.poster}" alt="Still from ${esc(f.title)}" loading="lazy">
          <span class="play"></span>
          <span class="runtime">${esc(f.length)}</span>
        </div>
        <div class="film-copy reveal">
          <span class="num">Film ${String(i + 1).padStart(2, "0")} · ${esc(f.year)}</span>
          <h2>${esc(f.title)}</h2>
          <p class="logline">${esc(f.logline)}</p>
          ${f.lyric ? `<blockquote>“${esc(f.lyric)}”</blockquote>` : ""}
          <p class="film-credit">${filmCredit}</p>
          <div class="actions">
            <button class="btn primary" data-play="${f.id}"><span class="tri"></span>Watch the film</button>
          </div>
        </div>
      </div>
      <div class="film-strip reveal">
        ${f.stills.map((s) => `<img src="${s}" alt="" loading="lazy">`).join("")}
      </div>`;
    films.append(sec);
  });

  // ---------- shorts ----------
  const row = $(".shorts-row");
  S.shorts.forEach((s) => {
    const card = el("div", { class: `short ${s.vertical ? "tall" : "wide"} reveal`, "data-play": s.id, role: "button", tabindex: "0", "aria-label": `Play ${s.title} ${s.label}` });
    card.innerHTML = `
      <img src="${s.poster}" alt="" loading="lazy">
      <video muted loop playsinline preload="none" src="${s.src}"></video>
      <div class="cap"><strong>${esc(s.title)}</strong><span>${esc(s.label)}</span></div>`;
    const v = $("video", card);
    card.addEventListener("mouseenter", () => { card.classList.add("previewing"); v.play().catch(() => {}); });
    card.addEventListener("mouseleave", () => { card.classList.remove("previewing"); v.pause(); });
    row.append(card);
  });

  // ---------- theater ----------
  const all = [...S.films.map((f) => ({ ...f, meta: f.length, vertical: false })), ...S.shorts.map((s) => ({ ...s, meta: s.label }))];
  const dlg = $(".theater"), tv = $(".theater-video");
  function open(id, push = true) {
    const item = all.find((x) => x.id === id);
    if (!item) return;
    $(".theater-title").textContent = item.title;
    $(".theater-meta").textContent = item.meta;
    dlg.classList.toggle("is-vertical", !!item.vertical);
    tv.poster = item.poster;
    tv.src = item.src;
    if (!dlg.open) dlg.showModal();
    tv.play().catch(() => {});
    if (push) history.replaceState(null, "", `#watch/${id}`);
  }
  function close() {
    tv.pause();
    tv.removeAttribute("src");
    tv.load();
    if (dlg.open) dlg.close();
    if (location.hash.startsWith("#watch/")) history.replaceState(null, "", location.pathname);
  }
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-play]");
    if (t) open(t.dataset.play);
  });
  document.addEventListener("keydown", (e) => {
    const t = e.target.closest?.("[data-play][role=button]");
    if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(t.dataset.play); }
  });
  $(".theater-close").addEventListener("click", close);
  dlg.addEventListener("cancel", (e) => { e.preventDefault(); close(); });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) close(); });
  const fromHash = () => { const m = location.hash.match(/^#watch\/(.+)$/); if (m) open(m[1], false); };
  window.addEventListener("hashchange", fromHash);
  fromHash();

  // ---------- nav + reveal ----------
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("solid", scrollY > innerHeight * 0.6);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.15 });
  $$(".reveal").forEach((n) => io.observe(n));
})();
