import gsap from "gsap";


document.getElementById("share-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenuOpen();
});

document.getElementById("share-btn2")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenuOpen();
});

const menu = document.getElementById("share-menu");
document.getElementById("share-menu")?.addEventListener("click", e => e.stopPropagation())
function toggleMenuOpen() {
    if (!menu) return;
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";

        gsap.fromTo(
            menu,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    } else {
        gsap.to(menu, {
            opacity: 0,
            y: 25,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                menu.style.display = "none";
            },
        });
    }
}

window.addEventListener("click", () => {
    if (menu?.style.display === "none" || menu?.style.display === "") return;
    toggleMenuOpen();
});