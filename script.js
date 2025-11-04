// script.js - Funcionalidades globales del proyecto
document.addEventListener('DOMContentLoaded', function() {
    // Navegación activa
    highlightActiveNav();
    
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
    
    // Console log de bienvenida
    console.log(`
    🚀 Proyecto Colaborativo Simulado
    👋 ¡Hola! Este proyecto simula un entorno de trabajo en equipo
    📁 Ramas creadas: feature/login, feature/profile, feature/main-page
    💡 Desarrollado por: Angie Gabriela Hernandez Martinez
    🎯 Curso: SGS - Sistemas de Gestión
    `);
});
