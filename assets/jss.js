const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



// PROJECTS

const projects = [

    {
        id: 1,

        featured: true,

        title: "ClassAttend Attendance Portal",

        category: "Academic Project",

        status: "Completed",

        year: "2025",

        image: "./assets/img/classattend-portal.png",

        description: "Remote Attendance Made Simple. ClassAttend is a web application that allows students to mark their attendance remotely using a unique code provided by lecturers, HODs, or school administrators. It simplifies attendance management for institutions while providing a seamless experience for students.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TypeScript",
            "Supabase",
            "Resend"
        ],

        role: "Frontend & Full Stack Developer",

        client: "Personal Project",

        duration: "2 Months",

        demo: "https://classtend.vercel.app/",

        github: "https://github.com/BroCode-glithch/classattend"

    },

    {
        id: 2,

        featured: true,

        title: "DailyDew CBT",

        category: "Educational Platform",

        status: "In Development",

        year: "2026",

        image: "./assets/img/dailydew.png",

        description: "DailyDew CBT is a computer-based testing platform designed for schools and training institutions. It enables administrators to create examinations, manage candidates, monitor performance, and generate detailed results through a modern web interface.",

        technologies: [
            "Laravel",
            "PHP",
            "MySQL"
        ],

        role: "Backend & Full Stack Developer",

        client: "DailyDew Tech Innovations",

        duration: "Ongoing",

        demo: "https://cbt.dailydewtech.com.ng/",

        github: "https://github.com/yourusername/dailydew"

    },

    {
        id: 3,

        featured: true,

        title: "MamuzWorld Consult",

        category: "Business Website",

        status: "Completed",

        year: "2025",

        image: "./assets/img/mamuzworldconsult.png",

        description: "A modern corporate website developed for MamuzWorld Consult, showcasing branding, printing, promotional merchandise, and business services. The website emphasizes professionalism, trust, and an engaging customer experience.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],

        role: "Frontend Developer",

        client: "MamuzWorld Consult",

        duration: "3 Weeks",

        demo: "https://mamuzworldconsult.vercel.app/",

        github: "https://github.com/yourusername/mamuzworldconsult"

    },

    {
        id: 4,

        featured: true,

        title: "Toluwalase Interior Decoration",

        category: "Client Website",

        status: "Completed",

        year: "2025",

        image: "./assets/img/toluwalaseintdecor.png",

        description: "A responsive business website showcasing luxury curtains, wallpapers, blinds, and bespoke interior décor services. The platform strengthens the company's online presence while making it easy for customers to explore products and request quotations.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        role: "Frontend Developer",

        client: "Toluwalase Interior Decoration",

        duration: "2 Weeks",

        demo: "https://toluwalaseinteriordecor.vercel.app/",

        github: "https://github.com/yourusername/toluwalaseintdecor"

    }

];

const projectGrid = document.querySelector(".project-grid");

if (projectGrid) {

    let html = "";

    projects.forEach(project => {

        html += `
        
        <article class="project-card">

            <img
                src="${project.image}"
                alt="${project.title}"
            >

            <div class="project-content">

                <div class="project-header">

                    <h3>${project.title}</h3>

                    <span class="project-status ${project.status.toLowerCase().replace(/\s+/g,"-")}">
                        ${project.status}
                    </span>

                </div>

                <div class="project-meta">

                    <span>
                        <i class="fa-solid fa-folder-open"></i>
                        ${project.category}
                    </span>

                    <span>
                        <i class="fa-regular fa-calendar"></i>
                        ${project.year}
                    </span>

                </div>

                <p>
                    ${project.description}
                </p>

                <div class="project-tech">

                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join("")}

                </div>

                <div class="project-info">

                    <span>
                        <i class="fa-solid fa-user"></i>
                        ${project.client}
                    </span>

                    <span>
                        <i class="fa-solid fa-laptop-code"></i>
                        ${project.role}
                    </span>

                    <span>
                        <i class="fa-regular fa-clock"></i>
                        ${project.duration}
                    </span>

                </div>

                <div class="project-buttons">

                    <a
                        href="${project.demo}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary">

                        Live Demo

                    </a>

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-secondary">

                        GitHub

                    </a>

                </div>

            </div>

        </article>

        `;

    });

    projectGrid.innerHTML = html;

}
// CERTIFICATES

const certificates = [

    {

        id: 1,

        title: "Responsive Web Design",

        // image: `https://image.thum.io/get/width/1200/${certificate.certificate}`,
        
        issuer: "freeCodeCamp",

        issued: "October 31, 2024",

        description: "Successfully completed the Responsive Web Design Certification, demonstrating proficiency in semantic HTML, modern CSS, Flexbox, CSS Grid, accessibility, and responsive web development.",

        technologies: [
            "HTML5",
            "CSS3",
            "Flexbox",
            "CSS Grid",
            "Accessibility"
        ],

        certificate:
            "https://www.freecodecamp.org/certification/cestbrocode/responsive-web-design"

    },

    {

        id: 2,

        title: "JavaScript Algorithms & Data Structures",

        // image: `https://image.thum.io/get/width/1200/${certificate.certificate}`,
        
        issuer: "freeCodeCamp",

        issued: "January 9, 2025",

        description: "Earned certification demonstrating proficiency in JavaScript programming, algorithms, data structures, debugging, and problem solving.",

        technologies: [
            "JavaScript",
            "Algorithms",
            "Data Structures",
            "ES6"
        ],

        certificate:
            "https://www.freecodecamp.org/certification/cestbrocode/javascript-algorithms-and-data-structures-v8"

    }

];

const certificateGrid = document.querySelector(".certificate-grid");

if (certificateGrid) {

    let html = "";

    certificates.forEach(certificate => {

        html += `

        <article class="certificate-card">

            <img
                src="https://image.thum.io/get/width/1200/${certificate.certificate}"
                alt="${certificate.title}"
            >

            <div class="certificate-content">

                <h3>${certificate.title}</h3>

                <small>
                    ${certificate.issuer} • ${certificate.issued}
                </small>

                <p>
                    ${certificate.description}
                </p>

                <div class="certificate-tags">

                    ${certificate.technologies.map(skill => `
                        <span>${skill}</span>
                    `).join("")}

                </div>

                <a
                    href="${certificate.certificate}"
                    target="_blank"
                    class="btn btn-primary">

                    View Certificate

                </a>

            </div>

        </article>

        `;

    });

    certificateGrid.innerHTML = html;

}