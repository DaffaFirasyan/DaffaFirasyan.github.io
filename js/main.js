// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
  }
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Populate Experience
function renderExperience() {
  const container = document.getElementById("experience-container");
  container.innerHTML = portfolioData.experience
    .map(
      (exp) => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>${exp.position}</h3>
                <div class="company">${exp.company}</div>
                <div class="duration">${exp.duration}</div>
                <p>${exp.description}</p>
            </div>
        </div>
    `,
    )
    .join("");
}

// Populate Projects
function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = portfolioData.projects
    .map(
      (project) => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://via.placeholder.com/400x200?text=${project.title}'">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
                </div>
                <div class="project-links">
                    <a href="${project.driveLink}" target="_blank">
                        <i class="fas fa-folder"></i> Drive
                    </a>
                    <a href="${project.githubLink}" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${
                      project.liveDemo
                        ? `
                        <a href="${project.liveDemo}" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                    `
                        : ""
                    }
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Populate Skills
function renderSkills() {
  const container = document.getElementById("skills-container");
  const categories = Object.keys(portfolioData.skills);

  container.innerHTML = categories
    .map(
      (category) => `
        <div class="skill-category">
            <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div class="skills-grid">
                ${portfolioData.skills[category]
                  .map(
                    (skill) => `
                    <div class="skill-item">
                        <i class="${skill.icon}"></i>
                        <p>${skill.name}</p>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("");
}

// Populate Certifications
function renderCertifications() {
  const container = document.getElementById("certifications-container");
  container.innerHTML = portfolioData.certifications
    .map(
      (cert) => `
        <div class="certification-card">
            <div class="cert-image">
                <img src="${cert.image}" alt="${cert.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Certificate'">
            </div>
            <div class="cert-content">
                <h3>${cert.title}</h3>
                <div class="cert-issuer">
                    <i class="fas fa-award"></i> ${cert.issuer}
                </div>
                <div class="cert-date">
                    <i class="fas fa-calendar"></i> ${cert.date}
                </div>
                <div class="cert-skills">
                    ${cert.skills.map((skill) => `<span class="cert-skill-tag">${skill}</span>`).join("")}
                </div>
                <div class="cert-actions">
                    <a href="${cert.link}" target="_blank" class="cert-link">
                        <i class="fas fa-external-link-alt"></i> Lihat Sertifikat
                    </a>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Populate Education
function renderEducation() {
  const container = document.getElementById("education-container");
  container.innerHTML = portfolioData.education
    .map(
      (edu) => `
        <div class="education-card">
            <h3>${edu.degree}</h3>
            <div class="institution">${edu.institution}</div>
            <div class="year">${edu.year}</div>
            ${edu.gpa ? `<p><strong>GPA:</strong> ${edu.gpa}</p>` : ""}
            <p>${edu.description}</p>
        </div>
    `,
    )
    .join("");
}

// Contact Form
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // You can integrate with EmailJS, Formspree, or mailto
  // For now, we'll use mailto
  const mailtoLink = `mailto:${portfolioData.personal.email}?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
  window.location.href = mailtoLink;

  // Or show success message
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// Back to Top Button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderExperience();
  renderProjects();
  renderSkills();
  renderCertifications();
  renderEducation();
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards";
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
