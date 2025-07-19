const projects = [
  { title: 'TechFest Event Website', desc: 'Built a fully responsive, multi-section website using HTML, CSS, and JavaScript.Integrated Google Apps Script for backend form submission.Features include countdown timer, registration form, gallery, schedule, and more.' },
  { title: 'Portfolio Website', desc: 'Developed a chatbot application using Python, leveraging natural language processing to interact with users and respond intelligently to queries.' },
];

const skills = ['C','C++','HTML', 'CSS', 'Java', 'JavaScript', 'Python'];

const projectContainer = document.getElementById('projects');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><a href="#" class="btn">View Project</a>`;
  projectContainer.appendChild(card);
});

const skillContainer = document.getElementById('skills');
skills.forEach(skill => {
  const tag = document.createElement('span');
  tag.textContent = skill;
  skillContainer.appendChild(tag);
});

lucide.createIcons();
