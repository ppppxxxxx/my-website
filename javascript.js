const core = document.getElementById('core');
const fragments = document.querySelectorAll('.fragment');
let scattered = false;

core.addEventListener('click', () => {
    if (scattered) {
        // 聚拢
        fragments.forEach((fragment, index) => {
            fragment.style.transform = `translate3d(${100 * Math.cos(index * 1.25)}px, ${100 * Math.sin(index * 1.25)}px, 0px)`;
        });
    } else {
        // 分散
        fragments.forEach((fragment) => {
            const x = (Math.random() - 0.5) * 600;
            const y = (Math.random() - 0.5) * 600;
            const z = (Math.random() - 0.5) * 600;
            fragment.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        });
    }
    scattered = !scattered;
});