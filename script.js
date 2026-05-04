// 1. ทำให้ Cursor ขยับตามเมาส์แบบนุ่มๆ
const cursor = document.querySelector('.cursor-dot');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
    });
});

// 2. Animation ตัวอักษรตอนโหลดหน้าเว็บ
gsap.from(".split-text", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "expo.out"
});
