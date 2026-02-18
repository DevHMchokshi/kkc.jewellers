/* ========================================
   KKC JEWELLERS — JavaScript
   Legacy of Purity Since 1912
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const handleScroll = () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active section highlighting
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ===== MOBILE MENU =====
    const navToggle = document.getElementById('nav-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('open');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinksContainer.classList.remove('open');
        });
    });

    // ===== SCROLL REVEAL ANIMATION =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animation
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    // Add stagger delays to grouped elements
    const addStaggerDelay = (selector, baseDelay = 100) => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.dataset.delay = i * baseDelay;
        });
    };

    addStaggerDelay('.trust-card', 120);
    addStaggerDelay('.collection-card', 100);
    addStaggerDelay('.craft-step', 150);
    addStaggerDelay('.timeline-item', 200);
    addStaggerDelay('.testimonial-card', 150);

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== HERO FLOATING PARTICLES =====
    const particlesContainer = document.getElementById('hero-particles');

    const createParticle = () => {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const duration = Math.random() * 8 + 6;
        const delay = Math.random() * 5;

        Object.assign(particle.style, {
            position: 'absolute',
            width: size + 'px',
            height: size + 'px',
            borderRadius: '50%',
            background: `rgba(212, 175, 55, ${Math.random() * 0.3 + 0.1})`,
            left: x + '%',
            bottom: '-10px',
            animation: `floatUp ${duration}s ${delay}s linear infinite`,
            pointerEvents: 'none'
        });

        particlesContainer.appendChild(particle);
    };

    // Create particles
    for (let i = 0; i < 25; i++) {
        createParticle();
    }

    // Add float animation style
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes floatUp {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 40 + 10}px); opacity: 0; }
        }
    `;
    document.head.appendChild(particleStyle);

    // ===== SMOOTH SCROLL FOR NAV LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== TESTIMONIAL DOTS =====
    const dotsContainer = document.getElementById('test-dots');
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `test-dot${index === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => {
            document.querySelectorAll('.test-dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
        dotsContainer.appendChild(dot);
    });

    // Testimonial navigation (basic for stacked mobile view)
    const prevBtn = document.getElementById('test-prev');
    const nextBtn = document.getElementById('test-next');
    let currentTestimonial = 0;

    const updateDots = () => {
        document.querySelectorAll('.test-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentTestimonial);
        });
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateDots();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateDots();
        });
    }

    // ===== COUNTER ANIMATION FOR GOLD RATES =====
    const animateValue = (element, start, end, duration, prefix = '', suffix = '') => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = prefix + value.toLocaleString('en-IN') + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Animate rate cards when visible
    const rateCards = document.querySelectorAll('.rate-card');
    const rateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const valueEl = entry.target.querySelector('.rate-value');
                if (valueEl && !valueEl.dataset.animated) {
                    valueEl.dataset.animated = 'true';
                    // Simple pulse animation on the card
                    entry.target.style.transition = 'transform 0.6s ease, box-shadow 0.6s ease';
                    entry.target.style.transform = 'translateY(-4px)';
                    entry.target.style.boxShadow = '0 12px 40px rgba(196, 154, 60, 0.15)';
                    setTimeout(() => {
                        entry.target.style.transform = '';
                        entry.target.style.boxShadow = '';
                    }, 600);
                }
                rateObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    rateCards.forEach(card => rateObserver.observe(card));

    // ===== COLLECTION CARD HOVER EFFECTS =====
    document.querySelectorAll('.collection-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.querySelector('.collection-image').style.backgroundSize = '110%';
        });
        card.addEventListener('mouseleave', function () {
            this.querySelector('.collection-image').style.backgroundSize = '100%';
        });
    });

    // ===== PRELOADER FADE (optional elegant touch) =====
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

    // Fallback if load doesn't fire quickly
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 500);

    // ===== YEAR IN FOOTER =====
    const yearEl = document.querySelector('.footer-bottom p');
    if (yearEl) {
        const currentYear = new Date().getFullYear();
        yearEl.innerHTML = yearEl.innerHTML.replace('2026', currentYear);
    }

    console.log('%c✨ KKC Jewellers — Legacy of Purity Since 1912', 
        'color: #C49A3C; font-size: 16px; font-weight: bold; font-family: serif;');
});
