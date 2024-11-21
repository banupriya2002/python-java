const modulesData = {
    "Java": ["Introduction", "Object-Oriented Programming", "Collections", "Concurrency", "Exception Handling", "Streams", "Lambda Expressions", "JDBC", "Spring Framework", "Hibernate"],
    "Spring": ["Spring Core", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Spring REST", "Spring Cloud", "Spring Batch", "Spring Integration", "Testing with Spring"],
    "Frontend (HTML/CSS/JavaScript)": ["HTML Basics", "CSS Styling", "Responsive Design", "JavaScript Basics", "DOM Manipulation", "ES6+ Features", "Asynchronous JavaScript", "Fetch API", "Forms and Validation", "Frontend Frameworks (Angular/React)"],
    "Angular": ["Introduction to Angular", "Components", "Directives", "Services", "Routing", "Forms", "Observables", "Angular CLI", "Testing Angular Apps", "Performance Optimization"],
    "Databases (SQL/MySQL/PostgreSQL)": ["Relational Databases", "SQL Basics", "Joins", "Indexes", "Normalization", "Stored Procedures", "Transactions", "Database Design", "Query Optimization", "Database Security"],
    "REST API": ["Introduction to REST", "Building RESTful Services with Spring Boot", "CRUD Operations", "JWT Authentication", "Error Handling", "Versioning", "API Documentation (Swagger)", "Testing REST APIs", "Best Practices", "Rate Limiting"],
    "Git": ["Git Basics", "Cloning Repositories", "Branches", "Merging", "Pull Requests", "Version Control Workflow", "GitHub Collaboration", "Stashing", "Rebase", "Git Hooks"],
    "DevOps & Deployment": ["Version Control with Git", "CI/CD with Jenkins", "Containerization with Docker", "Cloud Deployment with AWS", "Performance Monitoring", "Server Configuration", "Logging and Debugging", "Database Deployment", "Automated Testing", "DevOps Best Practices"],
    "Microservices": ["Microservices Architecture", "Spring Cloud", "REST APIs", "Service Discovery", "Load Balancing", "Circuit Breaker", "API Gateway", "Microservices Security", "Distributed Tracing", "Event-Driven Architecture"],
    "Testing": ["Unit Testing with JUnit", "Integration Testing", "Mocking with Mockito", "Spring Test Framework", "Test-Driven Development (TDD)", "Integration with CI Tools", "Test Automation", "Performance Testing", "Test Coverage", "Best Practices"]
  };
  
  const carousel = document.querySelector('.carousel');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const techName = document.getElementById('tech-name');
  const modulesList = document.getElementById('modules-list');
  const downloadNotes = document.getElementById('download-notes');
  
  // Open modal with technology-specific modules
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
        link.download = `${tech}_syllabus.txt`;
        link.click();
      };
    }
  });
  
  // Close modal when overlay is clicked
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





