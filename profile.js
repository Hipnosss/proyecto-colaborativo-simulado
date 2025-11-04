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
        skills: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "Responsive Design", "Bootstrap"],
        goals: [
            "Convertirme en desarrolladora Full Stack",
            "Dominar Git y trabajo colaborativo", 
            "Contribuir a proyectos open source",
            "Especializarme en desarrollo web moderno",
            "Participar en hackathons y proyectos reales"
        ]
    };

    // Actualizar la interfaz con los datos
    updateProfile(userData);
    
    // Añadir efectos interactivos
    addInteractiveEffects();
    
    function updateProfile(data) {
        // Actualizar información básica
        document.querySelector('.profile-name').textContent = data.name;
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
        
        // Actualizar objetivos
        const goalsList = document.querySelector('.profile-section:last-child ul');
        goalsList.innerHTML = '';
        data.goals.forEach(goal => {
            const li = document.createElement('li');
            li.textContent = goal;
            goalsList.appendChild(li);
        });
    }
    
    function addInteractiveEffects() {
        // Efecto de contador para stats (simulado)
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 30);
        });
        
        // Tooltip para habilidades
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0 6px 12px rgba(102, 126, 234, 0.4)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 8px rgba(102, 126, 234, 0.3)';
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
            animation: slideIn 0.5s ease;
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
            welcomeMsg.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => {
                welcomeMsg.remove();
            }, 500);
        }, 4000);
    }
    
    // Añadir estilos para animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});