// profile.js - Funcionalidades interactivas para el perfil
document.addEventListener('DOMContentLoaded', function() {
    // Simular carga de datos del usuario
    const userData = {
        name: "Angie Gabriela Hernandez Martinez",
        title: "Estudiante de Sistemas - Curso SGS",
        location: "Bogotá, Colombia",
        course: "Sistemas de Gestión (SGS)",
        status: "En progreso",
        specialty: "Desarrollo de Software",
        skills: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "Responsive Design"],
        goals: [
            "Convertirme en desarrolladora Full Stack",
            "Dominar Git y trabajo colaborativo", 
            "Contribuir a proyectos open source",
            "Especializarme en desarrollo web moderno"
        ]
    };

    // Actualizar la interfaz con los datos
    updateProfile(userData);
    
    // Añadir efectos interactivos
    addInteractiveEffects();
    
    function updateProfile(data) {
        // Actualizar información básica
        document.querySelector('.profile-info h1').textContent = data.name;
        document.querySelector('.profile-title').textContent = data.title;
        
        // Actualizar habilidades
        const skillsContainer = document.querySelector('.skills-container');
        skillsContainer.innerHTML = '';
        data.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
    }
    
    function addInteractiveEffects() {
        // Tooltip para habilidades
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Mensaje de bienvenida
        setTimeout(() => {
            showWelcomeMessage();
        }, 1000);
    }
    
    function showWelcomeMessage() {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1000;
        `;
        
        welcomeMsg.innerHTML = `
            <strong>¡Bienvenida!</strong>
            <div style="font-size: 0.9rem; margin-top: 0.5rem;">
                Perfil cargado exitosamente
            </div>
        `;
        
        document.body.appendChild(welcomeMsg);
        
        // Auto-remover después de 4 segundos
        setTimeout(() => {
            welcomeMsg.remove();
        }, 4000);
    }
});
