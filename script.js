document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll("[data-reveal]");
const root = document.documentElement;
let scrollFrame = null;

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

const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

if ("IntersectionObserver" in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => {
                    const isActive = link.getAttribute("href") === `#${entry.target.id}`;
                    link.classList.toggle("is-active", isActive);
                });
            });
        },
        {
            rootMargin: "-35% 0px -50% 0px",
            threshold: 0,
        }
    );

    sections.forEach((section) => navObserver.observe(section));
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
