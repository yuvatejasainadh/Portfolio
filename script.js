const projects = [
  { title: 'E-Commerce Website', desc: 'Developed a responsive e-commerce website using HTML and CSS, featuring product listings, user-friendly layout, and intuitive navigation for a seamless shopping experience.' },
  { title: 'ChatBot App', desc: 'Developed a chatbot application using Python, leveraging natural language processing to interact with users and respond intelligently to queries.' },
];

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Python', 'Git'];

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