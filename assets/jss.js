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


const courses = [

    {
        code: "GST 122",
        title: "Communication in English Language II",
        unit: "2 Units",
        icon: "fa-solid fa-language"
    },

    {
        code: "MTH 102",
        title: "Elementary Mathematics (Calculus) II",
        unit: "2 Units",
        icon: "fa-solid fa-square-root-variable"
    },

    {
        code: "PHY 102",
        title: "General Physics II",
        unit: "2 Units",
        icon: "fa-solid fa-atom"
    },

    {
        code: "PHY 108",
        title: "General Physics Practical II",
        unit: "1 Unit",
        icon: "fa-solid fa-flask"
    },

    {
        code: "COS 102",
        title: "Introduction to Problem-Solving",
        unit: "3 Units",
        icon: "fa-solid fa-lightbulb"
    },

    {
        code: "MIVA-CSC 106",
        title: "Introduction to Web Technologies",
        unit: "3 Units",
        icon: "fa-solid fa-code"
    },

    {
        code: "GST 112",
        title: "Nigerian Peoples and Culture",
        unit: "2 Units",
        icon: "fa-solid fa-earth-africa"
    },

    {
        code: "MIVA-COS 111",
        title: "Technical Certification in Computing I",
        unit: "1 Unit",
        icon: "fa-solid fa-laptop-code"
    }

];

const courseGrid = document.querySelector(".course-grid");

if(courseGrid){

    let html = "";

    courses.forEach(course=>{

        html += `

        <article class="course-card">

        <div class="course-header">

            <i class="${course.icon}"></i>

            <span class="course-code">
                ${course.code}
            </span>

        </div>

        <h3>${course.title}</h3>

        <p>${course.unit}</p>

        </article>

        `;

    });

    courseGrid.innerHTML = html;

}


/*===================================
ACADEMIC CALENDAR
===================================*/

const calendar = document.getElementById("calendar");

if(calendar){

    const monthYear = document.getElementById("monthYear");

    const prevBtn = document.getElementById("prevMonth");

    const nextBtn = document.getElementById("nextMonth");

    let currentDate = new Date();

    const events = {

        "2026-07-08":"assignment",

        "2026-07-11":"quiz",

        "2026-07-16":"project",

        "2026-07-19":"exam",

        "2026-07-24":"assignment"

    };

    function renderCalendar(){

        calendar.innerHTML="";

        const year=currentDate.getFullYear();

        const month=currentDate.getMonth();

        monthYear.textContent=currentDate.toLocaleDateString("en-US",{

            month:"long",

            year:"numeric"

        });

        const weekdays=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

        weekdays.forEach(day=>{

            calendar.innerHTML+=`<div class="day-name">${day}</div>`;

        });

        const firstDay=new Date(year,month,1);

        const lastDay=new Date(year,month+1,0);

        let startDay=firstDay.getDay();

        startDay=(startDay===0)?6:startDay-1;

        for(let i=0;i<startDay;i++){

            calendar.innerHTML+=`<div class="day empty"></div>`;

        }

        for(let d=1;d<=lastDay.getDate();d++){

            const dateKey=`${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;

            let extra="";

            let today="";

            const now=new Date();

            if(

                d===now.getDate() &&

                month===now.getMonth() &&

                year===now.getFullYear()

            ){

                today="today";

            }

            if(events[dateKey]){

                extra=`<span class="event-dot ${events[dateKey]}-dot"></span>`;

            }

            calendar.innerHTML+=`

            <div class="day ${today}">

                ${d}

                ${extra}

            </div>

            `;

        }

    }

    prevBtn.addEventListener("click",()=>{

        currentDate.setMonth(currentDate.getMonth()-1);

        renderCalendar();

    });

    nextBtn.addEventListener("click",()=>{

        currentDate.setMonth(currentDate.getMonth()+1);

        renderCalendar();

    });

    renderCalendar();

}

/*===================================
UPCOMING ACTIVITIES
===================================*/

const activities = [

    {

        title:"COS102 Assignment",

        description:"Introduction to Problem-Solving Assignment 2",

        date:"18 July 2026",

        type:"Assignment",

        icon:"fa-solid fa-book-open",

        color:"assignment-bg"

    },

    {

        title:"PHY102 Quiz",

        description:"General Physics II Continuous Assessment",

        date:"21 July 2026",

        type:"Quiz",

        icon:"fa-solid fa-pen",

        color:"quiz-bg"

    },

    {

        title:"CSC106 Portfolio Project",

        description:"Portfolio Website Submission",

        date:"25 July 2026",

        type:"Project",

        icon:"fa-solid fa-code",

        color:"project-bg"

    },

    {

        title:"GST122 Examination",

        description:"Communication in English II Final Exam",

        date:"2 August 2026",

        type:"Examination",

        icon:"fa-solid fa-graduation-cap",

        color:"exam-bg"

    }

];

const activitiesList=document.querySelector(".activities-list");

if(activitiesList){

    let html="";

    activities.forEach(activity=>{

        html+=`

        <article class="activity-card">

            <div class="activity-info">

                <h3>${activity.title}</h3>

                <p>${activity.description}</p>

                <span class="activity-date">

                    ${activity.date}

                </span>

            </div>

            <div class="activity-type ${activity.color}">

                <i class="${activity.icon}"></i>

            </div>

        </article>

        `;

    });

    activitiesList.innerHTML=html;

}

const progressBars = document.querySelectorAll(".progress-fill");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bar = entry.target;

            const target = Number(bar.dataset.width);

            const percent = bar
                .closest(".progress-item")
                .querySelector(".progress-percent");

            // Animate bar
            bar.style.width = target + "%";

            // Animate number
            let count = 0;

            const counter = setInterval(()=>{

                if(count >= target){

                    clearInterval(counter);

                }else{

                    count++;

                    percent.textContent = count + "%";

                }

            },20);

            observer.unobserve(bar);

        }

    });

},{
    threshold:0.4
});

progressBars.forEach(bar=>{

    observer.observe(bar);

});


/*===================================
INTERACTIVE TASK PLANNER
==================================*/

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskPriority = document.getElementById("task-priority");
const taskList = document.getElementById("task-list");
const taskEmpty = document.getElementById("task-empty");
const totalCount = document.getElementById("total-count");
const pendingCount = document.getElementById("pending-count");
const completedCount = document.getElementById("completed-count");
const taskFilters = document.querySelectorAll(".task-filter");

let tasks = JSON.parse(localStorage.getItem("academicTasks")) || [];
let currentFilter = "all";

if (taskForm) {

    // Add Task
    taskForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const text = taskInput.value.trim();

        if (!text) return;

        const task = {

            id: Date.now(),

            text: text,

            priority: taskPriority.value,

            completed: false,

            date: new Date().toLocaleDateString("en-US", {

                day: "numeric",

                month: "short",

                year: "numeric"

            })

        };

        tasks.unshift(task);

        saveTasks();

        renderTasks();

        taskInput.value = "";

        taskInput.focus();

    });

    // Filter Buttons
    taskFilters.forEach(btn => {

        btn.addEventListener("click", () => {

            taskFilters.forEach(b => b.classList.remove("active"));

            btn.classList.add("active");

            currentFilter = btn.dataset.filter;

            renderTasks();

        });

    });

    // Task List Delegation (complete & delete)
    taskList.addEventListener("click", (e) => {

        const item = e.target.closest(".task-item");

        if (!item) return;

        const id = Number(item.dataset.id);

        // Complete Toggle
        if (e.target.closest(".task-checkbox")) {

            tasks = tasks.map(t =>

                t.id === id ? { ...t, completed: !t.completed } : t

            );

            saveTasks();

            renderTasks();

        }

        // Delete
        if (e.target.closest(".task-delete")) {

            tasks = tasks.filter(t => t.id !== id);

            saveTasks();

            renderTasks();

        }

    });

}

function saveTasks() {

    localStorage.setItem("academicTasks", JSON.stringify(tasks));

}

function renderTasks() {

    if (!taskList) return;

    let filtered = tasks;

    if (currentFilter === "pending") {

        filtered = tasks.filter(t => !t.completed);

    } else if (currentFilter === "completed") {

        filtered = tasks.filter(t => t.completed);

    }

    // Update stats
    const total = tasks.length;

    const completed = tasks.filter(t => t.completed).length;

    const pending = total - completed;

    if (totalCount) totalCount.textContent = total;

    if (pendingCount) pendingCount.textContent = pending;

    if (completedCount) completedCount.textContent = completed;

    // Render
    if (filtered.length === 0) {

        taskList.innerHTML = "";

        taskEmpty.classList.add("show");

        return;

    }

    taskEmpty.classList.remove("show");

    let html = "";

    filtered.forEach(task => {

        const completedClass = task.completed ? "completed" : "";

        const checkedIcon = task.completed

            ? '<i class="fa-solid fa-check"></i>'

            : '<i class="fa-solid fa-check"></i>';

        html += `

            <li class="task-item priority-${task.priority} ${completedClass}" data-id="${task.id}">

                <div class="task-checkbox">
                    ${checkedIcon}
                </div>

                <span class="task-text">${escapeHTML(task.text)}</span>

                <span class="task-priority-badge ${task.priority}">${task.priority}</span>

                <span class="task-date">${task.date}</span>

                <button class="task-delete" title="Delete task">
                    <i class="fa-solid fa-trash-can"></i>
                </button>

            </li>

        `;

    });

    taskList.innerHTML = html;

}

function escapeHTML(str) {

    const div = document.createElement("div");

    div.textContent = str;

    return div.innerHTML;

}

// Initial render
renderTasks();


/*===================================
SCROLL ANIMATIONS
==================================*/

const animatedElements = document.querySelectorAll("[data-animation]");

if (animatedElements.length > 0) {

    const scrollObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                scrollObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15,

        rootMargin: "0px 0px -50px 0px"

    });

    animatedElements.forEach(el => {

        scrollObserver.observe(el);

    });

}