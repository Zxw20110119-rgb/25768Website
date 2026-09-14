/* Progressive enhancement: content, media links and navigation work without JS. */
(() => {
  "use strict";

  function initializeLightbox() {
    const dialog = document.querySelector("#lightbox");
    if (!dialog || typeof dialog.showModal !== "function") return;
    const image = document.querySelector("#lightbox-image");
    const caption = document.querySelector("#lightbox-caption");
    let opener = null;
    document.querySelectorAll("[data-lightbox]").forEach(link => {
      link.addEventListener("click", event => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        opener = link;
        image.src = link.href;
        image.alt = link.querySelector("img").alt;
        caption.textContent = image.alt;
        dialog.showModal();
        document.body.classList.add("has-lightbox");
      });
    });
    dialog.addEventListener("click", event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right ||
          event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("has-lightbox");
      image.removeAttribute("src");
      opener?.focus();
    });
  }

  function initializeGame() {
    const start = document.querySelector("#start-game");
    const stop = document.querySelector("#stop-game");
    const shell = document.querySelector("#game-shell");
    const placeholder = document.querySelector("#game-placeholder");
    const status = document.querySelector("#game-status");
    if (!start || !stop || !shell || !placeholder || !status) return;
    let frame = null;
    let loadTimeout = null;

    start.addEventListener("click", event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (frame) return;
      frame = document.createElement("iframe");
      frame.title = "Sunny Advice — GDevelop game";
      frame.allow = "autoplay; fullscreen; gamepad";
      frame.allowFullscreen = true;
      frame.src = start.href;
      frame.addEventListener("load", () => {
        clearTimeout(loadTimeout);
        status.textContent = "Game page opened. Click inside to play. Use Stop game to return to the portfolio.";
        frame?.focus({ preventScroll: true });
      }, { once: true });
      status.textContent = "Opening game…";
      placeholder.hidden = true;
      shell.classList.add("is-playing");
      stop.hidden = false;
      loadTimeout = setTimeout(() => {
        status.textContent = "Still loading? Try Open in new tab, or stop the game and try again.";
      }, 15000);
      shell.append(frame);
    });

    stop.addEventListener("click", () => {
      clearTimeout(loadTimeout);
      frame?.remove();
      frame = null;
      shell.classList.remove("is-playing");
      placeholder.hidden = false;
      stop.hidden = true;
      status.textContent = "Game stopped. Play game starts a new session.";
      start.focus({ preventScroll: true });
    });
  }

  initializeLightbox();
  initializeGame();
})();
