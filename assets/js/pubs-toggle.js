document.addEventListener("DOMContentLoaded", function () {
  const btnSel = document.getElementById("btn-selected");
  const btnFull = document.getElementById("btn-full");
  const sel = document.getElementById("selected-pubs");
  const full = document.getElementById("full-pubs");

  function showSelected() {
    sel.style.display = "";
    full.style.display = "none";
    btnSel.classList.add("active"); btnSel.setAttribute("aria-pressed", "true");
    btnFull.classList.remove("active"); btnFull.setAttribute("aria-pressed", "false");
    if (history.replaceState) history.replaceState(null, "", "#selected");
  }
  function showFull() {
    sel.style.display = "none";
    full.style.display = "";
    btnFull.classList.add("active"); btnFull.setAttribute("aria-pressed", "true");
    btnSel.classList.remove("active"); btnSel.setAttribute("aria-pressed", "false");
    if (history.replaceState) history.replaceState(null, "", "#full");
  }

  if (location.hash === "#full") { showFull(); } else { showSelected(); }
  btnSel?.addEventListener("click", showSelected);
  btnFull?.addEventListener("click", showFull);
});