// Fills the Learn page with greetings/phrases from the dictionary data.
(function () {
  const box = document.getElementById("starterPhrases");
  const data = window.dictionaryData || [];
  if (!box) return;
  data.slice(0, 9).forEach((w) => {
    const card = document.createElement("div");
    card.className = "card";
    const h = document.createElement("h3");
    h.textContent = w.itsekiri;
    const p = document.createElement("p");
    p.textContent = w.english;
    card.append(h, p);
    box.append(card);
  });
})();
