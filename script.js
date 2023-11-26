
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Project 1', description: 'Description of Project 1' },
        { name: 'Project 2', description: 'Description of Project 2' },
        // Add more projects as needed
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectDiv);
    });

    // Optional: Add event listeners for project interaction (e.g., modals, tooltips)
});

// Responsive menu for smaller screens
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('active');
});
