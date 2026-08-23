document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll("[data-reveal]");
const root = document.documentElement;
const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
let scrollFrame = null;

function wrapAnimatedWords(element, wordClass) {
    const text = element.textContent.replace(/\s+/g, " ").trim();

    element.setAttribute("aria-label", text);
    element.textContent = "";

    text.split(" ").forEach((word, index) => {
        if (index > 0) {
            element.append(" ");
        }

        const span = document.createElement("span");
        span.className = wordClass;
        span.textContent = word;
        span.setAttribute("aria-hidden", "true");
        span.style.setProperty("--word-index", index);
        element.append(span);
    });

    element.classList.add("animated-text-ready");
}

function initializeAnimatedText() {
    const floatText = document.querySelectorAll("[data-scroll-float]");
    const revealText = document.querySelectorAll("[data-word-reveal]");
    const animatedText = [];

    floatText.forEach((element) => {
        wrapAnimatedWords(element, "float-word");
        animatedText.push(element);
    });

    revealText.forEach((element) => {
        wrapAnimatedWords(element, "reveal-word");
        animatedText.push(element);
    });

    if (motionReduced || !("IntersectionObserver" in window)) {
        animatedText.forEach((element) => element.classList.add("is-text-visible"));
        return;
    }

    const textObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-text-visible");
                    textObserver.unobserve(entry.target);
                }
            });
        },
        {
            rootMargin: "0px 0px -8% 0px",
            threshold: 0.12,
        }
    );

    animatedText.forEach((element) => textObserver.observe(element));
}

function initializeTiltCards() {
    if (motionReduced || !precisePointer) {
        return;
    }

    document.querySelectorAll("[data-tilt]").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            card.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
            card.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
        });

        card.addEventListener("pointerleave", () => {
            card.style.setProperty("--tilt-x", "0deg");
            card.style.setProperty("--tilt-y", "0deg");
        });
    });
}

function initializeActivePanelGlow() {
    const panels = [...document.querySelectorAll(".story-panel")];

    if (!("IntersectionObserver" in window) || panels.length === 0) {
        panels[0]?.classList.add("is-scene-active");
        return;
    }

    const panelVisibility = new Map(panels.map((panel) => [panel, 0]));
    const activePanelObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                panelVisibility.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
            });

            let activePanel = null;
            let highestVisibility = 0;

            panelVisibility.forEach((visibility, panel) => {
                if (visibility > highestVisibility) {
                    highestVisibility = visibility;
                    activePanel = panel;
                }
            });

            panels.forEach((panel) => {
                panel.classList.toggle("is-scene-active", panel === activePanel);
            });
        },
        {
            rootMargin: "-18% 0px -28% 0px",
            threshold: [0, 0.08, 0.2, 0.4, 0.6],
        }
    );

    panels.forEach((panel) => activePanelObserver.observe(panel));
}

function updateScrollProgress() {
    const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

    root.style.setProperty("--scroll-progress", progress.toFixed(4));
    root.dataset.scrollProgress = progress.toFixed(3);
    scrollFrame = null;
}

function requestScrollProgressUpdate() {
    if (scrollFrame === null) {
        scrollFrame = window.requestAnimationFrame(updateScrollProgress);
    }
}

window.addEventListener("scroll", requestScrollProgressUpdate, { passive: true });
window.addEventListener("resize", requestScrollProgressUpdate);
updateScrollProgress();
initializeAnimatedText();
initializeTiltCards();
initializeActivePanelGlow();

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            rootMargin: "0px 0px -2% 0px",
            threshold: 0.05,
        }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll(".growth-video video").forEach((video) => {
    const panel = video.closest(".growth-video");

    video.addEventListener("play", () => {
        panel.classList.add("is-playing");
    });

    video.addEventListener("pause", () => {
        panel.classList.remove("is-playing");
    });

    video.addEventListener("ended", () => {
        panel.classList.remove("is-playing");
    });
});

window.setTimeout(() => {
    if (document.documentElement.dataset.threeReady !== "true") {
        document.body.classList.add("is-webgl-unavailable");
    }
}, 5000);
