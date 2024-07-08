document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        'Java',
        'Spring Framework',
        'RESTful API Development',
        'Database Management',
        'Microservices',
        'Docker',
        'Kubernetes',
        'Version Control (Git)',
        'Agile Methodologies',
        'CI/CD Pipelines'
    ];

    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
});
