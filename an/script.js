document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Intersection Observer for Scroll Reveals ---
    const observerOptions = { threshold: 0.15, rootMargin: "0px" };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Special handle for drawing SVG line
                if (entry.target.classList.contains('step-node')) {
                    document.querySelector('.drawing-line').classList.add('drawn');
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-reveal, .fade-up, .fade-in-side, .final-quote, .mandala-container');
    animatedElements.forEach(el => observer.observe(el));


    // --- 2. Mandala Interaction ---
    const mandalaData = {
        'hieu': { t: 'Hiếu', d: 'Kính trọng cội nguồn, biết ơn người đi trước.' },
        'dao': { t: 'Đạo', d: 'Con đường chính trực, không lay chuyển.' },
        'duc': { t: 'Đức', d: 'Phẩm hạnh ngời sáng từ tâm hồn.' },
        'phuc': { t: 'Phúc', d: 'Niềm an vui nảy nở từ thiện nghiệp.' },
        'tai': { t: 'Tài', d: 'Sự giàu có của trí tuệ và lòng trắc ẩn.' },
        'core': { t: 'Tâm An', d: 'Gốc rễ của mọi sự an lành.' }
    };

    const satellites = document.querySelectorAll('.satellite-orb');
    const mTitle = document.getElementById('m-title');
    const mText = document.getElementById('m-text');

    satellites.forEach(sat => {
        sat.addEventListener('mouseenter', () => {
            const key = sat.getAttribute('data-id');
            const data = mandalaData[key];
            if (data) {
                mTitle.textContent = data.t;
                mText.textContent = data.d;
                mTitle.classList.add('fade-reveal', 'visible'); // Retrigger anim? Simplified for now
            }
        });

        sat.addEventListener('mouseleave', () => {
            // Optional: Return to core? Let's keep last selection or return after delay.
            setTimeout(() => {
                mTitle.textContent = mandalaData['core'].t;
                mText.textContent = mandalaData['core'].d;
            }, 2000);
        });
    });


    // --- 3. Atmospheric Canvas Background ---
    const canvas = document.getElementById('atmosphere-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.size = Math.random() * 2 + 0.5;
            this.alpha = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(226, 232, 240, ${this.alpha})`; // #e2e8f0
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const count = width > 768 ? 100 : 50; // Less on mobile
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

});
