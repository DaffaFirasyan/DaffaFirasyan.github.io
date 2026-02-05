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
        cvLink: "assets/cv.pdf"
    },

    // Social Media
    social: {
        github: "https://github.com/DaffaFirasyan",
        linkedin: "https://linkedin.com/in/daffafirasyan",
        instagram: "https://instagram.com/daffafirasyan"
    },

    // Experience
    experience: [
        {
            position: "Full Stack Developer",
            company: "PT. Technology Indonesia",
            duration: "Jan 2024 - Present",
            description: "Mengembangkan dan maintain aplikasi web menggunakan React, Node.js, dan MongoDB. Bertanggung jawab dalam implementasi fitur baru dan optimasi performa aplikasi."
        },
        {
            position: "Frontend Developer Intern",
            company: "Startup Digital Solutions",
            duration: "Jun 2023 - Dec 2023",
            description: "Mengembangkan user interface menggunakan HTML, CSS, JavaScript dan React. Berkolaborasi dengan tim backend untuk integrasi API."
        },
        {
            position: "Freelance Web Developer",
            company: "Self-Employed",
            duration: "Jan 2022 - May 2023",
            description: "Mengerjakan berbagai project web development untuk klien lokal dan internasional. Membuat landing page, company profile, dan e-commerce."
        }
    ],

    // Projects
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full stack e-commerce dengan payment gateway, admin dashboard, dan fitur lengkap untuk toko online modern.",
            image: "assets/images/projects/ecommerce.jpg",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID",
            githubLink: "https://github.com/DaffaFirasyan/ecommerce",
            liveDemo: ""
        },
        {
            id: 2,
            title: "Task Management System",
            description: "Aplikasi manajemen task dengan fitur real-time collaboration, notifications, dan analytics dashboard.",
            image: "assets/images/projects/task-manager.jpg",
            tech: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
            driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID",
            githubLink: "https://github.com/DaffaFirasyan/task-manager",
            liveDemo: "https://demo.example.com"
        },
        {
            id: 3,
            title: "Portfolio CMS",
            description: "Content Management System untuk portfolio dengan drag & drop builder dan template customization.",
            image: "assets/images/projects/portfolio-cms.jpg",
            tech: ["HTML", "CSS", "JavaScript", "PHP"],
            driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID",
            githubLink: "https://github.com/DaffaFirasyan/portfolio-cms",
            liveDemo: ""
        },
        {
            id: 4,
            title: "Social Media Dashboard",
            description: "Dashboard analytics untuk social media dengan data visualization dan automated reporting.",
            image: "assets/images/projects/dashboard.jpg",
            tech: ["React", "Python", "PostgreSQL", "Chart.js"],
            driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID",
            githubLink: "https://github.com/DaffaFirasyan/social-dashboard",
            liveDemo: "https://demo.example.com"
        }
    ],

    // Skills
    skills: {
        frontend: [
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "React", icon: "fab fa-react" },
            { name: "Vue.js", icon: "fab fa-vuejs" },
            { name: "Tailwind", icon: "fas fa-wind" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node" },
            { name: "PHP", icon: "fab fa-php" },
            { name: "Python", icon: "fab fa-python" },
            { name: "Laravel", icon: "fab fa-laravel" },
            { name: "Express", icon: "fas fa-server" }
        ],
        database: [
            { name: "MySQL", icon: "fas fa-database" },
            { name: "MongoDB", icon: "fas fa-leaf" },
            { name: "PostgreSQL", icon: "fas fa-database" }
        ],
        tools: [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "GitHub", icon: "fab fa-github" },
            { name: "VS Code", icon: "fas fa-code" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Postman", icon: "fas fa-network-wired" }
        ]
    },

    // Education
    education: [
        {
            degree: "S1 Teknik Informatika",
            institution: "Universitas Indonesia",
            year: "2020 - 2024",
            gpa: "3.75 / 4.00",
            description: "Focus pada Web Development dan Software Engineering"
        },
        {
            degree: "SMA IPA",
            institution: "SMA Negeri 1 Jakarta",
            year: "2017 - 2020",
            gpa: "",
            description: "Juara 1 Olimpiade Komputer Tingkat Provinsi"
        }
    ]
};