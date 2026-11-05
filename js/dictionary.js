// Dictionary search. Data comes from dictionary-data.js (window.dictionaryData).
(function () {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("dictionaryResults");
  if (!input || !results) return;

  const data = window.dictionaryData || [];
  const norm = (s) =>
    s.normalize("NFD").replace(/[̀-̣ͯ]/g, "").toLowerCase().replace(/\s+/g, "");

  const intro = () => {
    results.replaceChildren();
    const p = document.createElement("p");
    p.className = "dict-empty";
    p.innerHTML =
      "Start typing to search the dictionary.<br /><em>Itsekiri ↔ English • Growing collection</em>";
    results.append(p);
  };

  function render(query) {
    results.replaceChildren();
    const q = norm(query);
    if (!q) return intro();

    const matches = data.filter(
      (w) => norm(w.itsekiri).includes(q) || norm(w.english).includes(q)
    );

    if (!matches.length) {
      const p = document.createElement("p");
      p.className = "dict-empty dict-none";
      p.append('No results found for "');
      const b = document.createElement("strong");
      b.textContent = query; // textContent: user input is never parsed as HTML
      p.append(b, '".');
      p.append(document.createElement("br"), "More words coming soon!");
      results.append(p);
      return;
    }

    const list = document.createElement("div");
    list.className = "dict-list";
    matches.forEach((w) => {
      const card = document.createElement("div");
      card.className = "dict-card";
      const h = document.createElement("h3");
      h.textContent = w.itsekiri;
      const p = document.createElement("p");
      p.textContent = w.english;
      card.append(h, p);
      list.append(card);
    });
    results.append(list);
  }

  input.addEventListener("input", () => render(input.value.trim()));
  intro();
})();
