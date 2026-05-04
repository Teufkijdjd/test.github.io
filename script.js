// ตัวอย่างง่ายๆ: การทำให้ข้อความค่อยๆ ปรากฏขึ้นเมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.reveal-text');
    
    texts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 300 * index);
    });
});
