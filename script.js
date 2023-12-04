var CINOSdescription = 'This project is being built for a manager at a hotel, \
it utilizes a web application integrated with a database to create an automated solution. \
This will replace the current paper based system that the hotel is using. It will also \
include an NFC card reader to further simplify the process for multilingual employees.';

document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'CINOS', description: CINOSdescription, image: 'images/team.jpg' },
        { name: 'Project 2', description: 'Description of Project 2' },
        // Add more projects as needed
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><img height="504" width="378" src="${project.image}"></img>`;
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
