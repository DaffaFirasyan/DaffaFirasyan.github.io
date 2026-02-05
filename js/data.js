// Portfolio Data
const portfolioData = {
  // Personal Info
  personal: {
    name: "Daffa Firasyan",
    title: "Full Stack Web Developer",
    email: "daffa@example.com",
    phone: "+62 812 3456 7890",
    location: "Indonesia",
    bio: "Passionate full stack developer dengan pengalaman dalam membangun aplikasi web modern...",
    cvLink: "assets/cv.pdf",
  },

  // Social Media
  social: {
    github: "https://github.com/DaffaFirasyan",
    linkedin: "https://linkedin.com/in/daffafirasyan",
    instagram: "https://instagram.com/daffafirasyan",
  },

  // Experience
  experience: [
    {
      position: "Full Stack Developer",
      company: "PT. Technology Indonesia",
      duration: "Jan 2024 - Present",
      description:
        "Mengembangkan dan maintain aplikasi web menggunakan React, Node.js, dan MongoDB. Bertanggung jawab dalam implementasi fitur baru dan optimasi performa aplikasi.",
    },
    {
      position: "Frontend Developer Intern",
      company: "Startup Digital Solutions",
      duration: "Jun 2023 - Dec 2023",
      description:
        "Mengembangkan user interface menggunakan HTML, CSS, JavaScript dan React. Berkolaborasi dengan tim backend untuk integrasi API.",
    },
    {
      position: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Jan 2022 - May 2023",
      description:
        "Mengerjakan berbagai project web development untuk klien lokal dan internasional. Membuat landing page, company profile, dan e-commerce.",
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full stack e-commerce dengan payment gateway, admin dashboard, dan fitur lengkap untuk toko online modern.",
      image: "assets/images/projects/ecommerce.jpg",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID",
      githubLink: "https://github.com/DaffaFirasyan/ecommerce",
      liveDemo: "",
    },
    {
      id: 2,
      title: "Task Management System",
      description:
        "Aplikasi manajemen task dengan fitur real-time collaboration, notifications, dan analytics dashboard.",
      image: "assets/images/projects/task-manager.jpg",
      tech: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID",
      githubLink: "https://github.com/DaffaFirasyan/task-manager",
      liveDemo: "https://demo.example.com",
    },
    {
      id: 3,
      title: "Portfolio CMS",
      description:
        "Content Management System untuk portfolio dengan drag & drop builder dan template customization.",
      image: "assets/images/projects/portfolio-cms.jpg",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID",
      githubLink: "https://github.com/DaffaFirasyan/portfolio-cms",
      liveDemo: "",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Dashboard analytics untuk social media dengan data visualization dan automated reporting.",
      image: "assets/images/projects/dashboard.jpg",
      tech: ["React", "Python", "PostgreSQL", "Chart.js"],
      driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID",
      githubLink: "https://github.com/DaffaFirasyan/social-dashboard",
      liveDemo: "https://demo.example.com",
    },
  ],

  // Skills
  skills: {
    frontend: [
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "React", icon: "fab fa-react" },
      { name: "Vue.js", icon: "fab fa-vuejs" },
      { name: "Tailwind", icon: "fas fa-wind" },
    ],
    backend: [
      { name: "Node.js", icon: "fab fa-node" },
      { name: "PHP", icon: "fab fa-php" },
      { name: "Python", icon: "fab fa-python" },
      { name: "Laravel", icon: "fab fa-laravel" },
      { name: "Express", icon: "fas fa-server" },
    ],
    database: [
      { name: "MySQL", icon: "fas fa-database" },
      { name: "MongoDB", icon: "fas fa-leaf" },
      { name: "PostgreSQL", icon: "fas fa-database" },
    ],
    tools: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "VS Code", icon: "fas fa-code" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Postman", icon: "fas fa-network-wired" },
    ],
  },

  // Certifications
  certifications: [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Desember 2024",
      credentialId: "AWS-12345",
      link: "https://www.credly.com/badges/YOUR_BADGE_ID",
      image: "assets/images/certifications/aws.jpg",
      skills: ["AWS", "Cloud Architecture", "DevOps"],
    },
    {
      id: 2,
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      date: "November 2024",
      credentialId: "META-67890",
      link: "https://www.coursera.org/account/accomplishments/YOUR_ID",
      image: "assets/images/certifications/meta.jpg",
      skills: ["React", "JavaScript", "HTML/CSS"],
    },
    {
      id: 3,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "Oktober 2024",
      credentialId: "GCP-54321",
      link: "https://www.credential.net/YOUR_CREDENTIAL",
      image: "assets/images/certifications/gcp.jpg",
      skills: ["GCP", "Kubernetes", "Docker"],
    },
    {
      id: 4,
      title: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "September 2024",
      credentialId: "MONGO-98765",
      link: "https://university.mongodb.com/certification",
      image: "assets/images/certifications/mongodb.jpg",
      skills: ["MongoDB", "NoSQL", "Database Design"],
    },
    {
      id: 5,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "Agustus 2024",
      credentialId: "FCC-11223",
      link: "https://freecodecamp.org/certification/YOUR_USERNAME",
      image: "assets/images/certifications/freecodecamp.jpg",
      skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    },
    {
      id: 6,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "Juli 2024",
      credentialId: "DOCKER-44556",
      link: "https://credentials.docker.com/YOUR_ID",
      image: "assets/images/certifications/docker.jpg",
      skills: ["Docker", "Container", "Orchestration"],
    },
  ],

  // Education
  education: [
    {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Indonesia",
      year: "2020 - 2024",
      gpa: "3.75 / 4.00",
      description: "Focus pada Web Development dan Software Engineering",
    },
    {
      degree: "SMA IPA",
      institution: "SMA Negeri 1 Jakarta",
      year: "2017 - 2020",
      gpa: "",
      description: "Juara 1 Olimpiade Komputer Tingkat Provinsi",
    },
  ],
};
