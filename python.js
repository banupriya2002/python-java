const modulesData = {
  "HTML": ["Introduction", "Tags", "Forms", "Media", "Tables", "Semantic HTML", "Canvas", "SVG", "Web Storage", "Best Practices"],
  "CSS": ["Selectors", "Box Model", "Flexbox", "Grid", "Animations", "Media Queries", "Transitions", "Positioning", "Variables", "Best Practices"],
  "JavaScript": ["Variables", "Functions", "DOM", "Events", "ES6+", "Promises", "Fetch API", "Async/Await", "Classes", "Modules"],
  "Python": ["Syntax", "Data Types", "Functions", "OOP", "Modules", "File Handling", "Exceptions", "Libraries", "Web Frameworks", "Testing"],
  "NodeJS": ["Setup", "Modules", "File System", "HTTP", "Middleware", "Express", "APIs", "Authentication", "Database", "Testing"],
  "React": ["JSX", "Components", "Props", "State", "Hooks", "Context API", "Routing", "Redux", "Testing", "Performance"],
  "Git": ["Setup", "Commands", "Branches", "Merging", "Rebasing", "Stashing", "Tags", "Logs", "Hooks", "Collaboration"],
  "MySQL": ["Setup", "Tables", "Queries", "Joins", "Indexes", "Functions", "Triggers", "Views", "Transactions", "Best Practices"],
  "MongoDB": ["Setup", "Documents", "CRUD", "Aggregation", "Indexes", "Relationships", "Transactions", "Replication", "Sharding", "Security"]
};

const carousel = document.querySelector('.carousel');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const techName = document.getElementById('tech-name');
const modulesList = document.getElementById('modules-list');
const downloadNotes = document.getElementById('download-notes');

carousel.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const tech = e.target.dataset.tech;
    techName.textContent = tech;
    modulesList.innerHTML = modulesData[tech]
      .map(module => `<li>${module}</li>`)
      .join('');
    modal.style.display = 'block';
    overlay.style.display = 'block';

    downloadNotes.onclick = () => {
      const notes = modulesData[tech].join('\n');
      const blob = new Blob([notes], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${tech}_notes.txt`;
      link.click();
    };
  }
});

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});




function toggleAnswer(arrowElement) {
  const faqAnswer = arrowElement.parentElement.querySelector('.faq-answer');
  if (faqAnswer.style.display === 'block') {
    faqAnswer.style.display = 'none';
    arrowElement.classList.remove('arrow-up');
    arrowElement.classList.add('arrow-down');
  } else {
    faqAnswer.style.display = 'block';
    arrowElement.classList.remove('arrow-down');
    arrowElement.classList.add('arrow-up');
  }
}