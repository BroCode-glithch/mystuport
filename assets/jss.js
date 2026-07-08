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

        title: "ClassAttend Attendance Portal",

        image: "./assets/img/classattend-portal.png",

        description: "Remote Attendance Made Simple. ClassAttend is a web application that allows students to mark their attendance remotely using a unique code provided by their lecturers, HOCs, or school administrators. This system streamlines the attendance process, making it more efficient and convenient for both students and faculty.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TypeScript",
            "Supabase",
            "Resend"
        ],

        demo: "https://classtend.vercel.app/",

        github: "https://github.com/BroCode-glithch/classattend"
    },

    {
        id: 2,

        title: "DailyDew CBT",

        image: "./assets/img/dailydew.png",

        description: "An online CBT platform for schools.",

        technologies: [
            "Laravel",
            "PHP",
            "MySQL"
        ],

        demo: "https://cbt.dailydewtech.com.ng/",

        github: "https://github.com/yourusername/dailydew"
    },

    {
        id: 3,
        title: "MamuzWorld Consult",

        image: "./assets/img/mamuzworldconsult.png",

        description: "MamuzWorld Consult is a leading branding, printing, and custom merchandise company based in Otta, Ogun State, Nigeria. We combine creative expertise with cutting-edge technology to deliver premium branded products for businesses, events, and individuals.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TypeScript",
            "Supabase",
            "Resend"
        ],

        demo: "https://mamuzworldconsult.vercel.app/",
        github: "https://github.com/yourusername/mamuzworldconsult"

    },

    {
        id: 4,

        title: "Toluwalase Interior Decoration",

        image: "./assets/img/toluwalaseintdecor.png",

        description: "Toluwalase Interior Decoration is a leading interior decoration company based in Yaba and Ikorodu, Lagos State, Nigeria. We specialize in transforming spaces into beautiful and functional environments that reflect our clients' unique tastes and lifestyles. Transforming Nigerian homes into luxury spaces with premium curtains, wallpapers, blinds and bespoke interior décor since 2012.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],

        demo: "https://toluwalaseinteriordecor.vercel.app/",

        github: "https://github.com/yourusername/toluwalaseintdecor",
    }

];
const projectGrid = document.querySelector(".project-grid");

if (projectGrid) {
    
    let html = "";

    projects.forEach(project => {

        html += `
            <article class="project-card">

                <img src="${project.image}" alt="${project.title}">

                <div class="project-content">

                    <h3>${project.title}</h3>

                    <p>${project.description}</p>

                    <div class="project-tech">
                        ${project.technologies
                            .map(tech => `<span class="tech-tag">${tech}</span>`)
                            .join("")}
                    </div>

                    <div class="project-buttons">

                        <a href="${project.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>

                        <a href="${project.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
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