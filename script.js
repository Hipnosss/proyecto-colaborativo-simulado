// script.js - Funcionalidades globales del proyecto
document.addEventListener('DOMContentLoaded', function() {
    // Navegación activa
    highlightActiveNav();
    
    // Animaciones de scroll
    initScrollAnimations();
    
    // Efectos interactivos
    initInteractiveEffects();
    
    function highlightActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observar feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }
    
    function initInteractiveEffects() {
        // Efecto de particles en el hero
        createParticles();
        
        // Contador de features
        animateCounters();
    }
    
    function createParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                animation: float 6s infinite ease-in-out;
                animation-delay: ${Math.random() * 6}s;
            `;
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            hero.appendChild(particle);
        }
        
        // Añadir estilos de animación
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
                25% { transform: translate(20px, -20px) rotate(90deg); opacity: 0.8; }
                50% { transform: translate(0, -40px) rotate(180deg); opacity: 0.5; }
                75% { transform: translate(-20px, -20px) rotate(270deg); opacity: 0.8; }
            }
        `;
        document.head.appendChild(style);
    }
    
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 60;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 30);
        });
    }
    
    // Console log de bienvenida
    console.log(`
    🚀 Proyecto Colaborativo Simulado
    👋 ¡Hola! Este proyecto simula un entorno de trabajo en equipo
    📁 Ramas creadas: feature/login, feature/profile, feature/main-page
    💡 Desarrollado por: Angie Gabriela Hernandez Martinez
    🎯 Curso: SGS - Sistemas de Gestión
    `);
});