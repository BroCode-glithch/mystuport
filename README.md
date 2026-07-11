# My Student Portfolio

A fully responsive, multi-page academic portfolio and student management website built with **HTML**, **CSS**, and **JavaScript**. Designed as a personal platform for a university student to showcase their profile, skills, academic achievements, projects, and manage academic activities.

> **Course:** COS 106 — Introduction to Web Technologies  
> **Institution:** MIVA Open University  
> **Student:** Emmanuel Ariyo Ogunfunwa  
> **Programme:** B.Sc. Software Engineering (January 2026 Cohort)

---

## Live Demo

🔗 **[View Live Site](https://mystuport.vercel.app)**

---

## Features

### General
- Clean, modern, and professional UI design
- Fully responsive across all devices (mobile, tablet, desktop)
- Smooth scroll-triggered animations on every section
- Sticky navigation bar with hamburger menu on mobile
- Consistent colour scheme and typography across all pages
- External CSS stylesheet and modular JavaScript

### Homepage
- Student name, photograph, and welcome message
- Animated hero section with call-to-action buttons
- About Me preview section
- Technical skills grid with hover effects
- Featured projects showcase
- Academic journey overview with achievement cards
- Call-to-action section and full footer

### About Me Page
- Personal story and biography section
- Educational timeline (Primary → Secondary → University)
- Teaching and mentorship experience
- Career aspirations and goals
- Technical skills categorized by type (Languages, Frameworks, Databases, Tools)
- Hobbies and interests grid
- Certifications and professional development

### Projects Page
- Portfolio of 4 projects with images, descriptions, and tech stacks
- Project status badges (Completed, In Development)
- Live demo and GitHub repository links
- Development process workflow (Planning → Design → Development → Deployment)
- Technology stack display with floating animation

### Academic Planner Page
- Current academic status dashboard (CGPA, level, session, courses)
- Semester course cards loaded dynamically via JavaScript
- Semester summary statistics
- Interactive academic calendar with colour-coded event dots
- Upcoming academic activities list
- **Interactive Task Planner** (add, complete, delete tasks with localStorage persistence)
- Academic progress tracker with animated progress bars
- Academic and career goals

### Contact Page
- Contact form powered by Formspree (AJAX submission, no page reload)
- Inline form validation and success/error messages
- Contact information cards (email, location, availability)
- Social media links

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero, skills, projects preview, and academic overview |
| About | `about.html` | Full biography, education, experience, skills, hobbies, and certifications |
| Projects | `projects.html` | Project portfolio with detailed cards and development process |
| Academic Planner | `acad_planner.html` | Dashboard, courses, calendar, task planner, progress, and goals |
| Contact | `contact.html` | Contact form, info cards, and social links |

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Structure** | HTML5 (semantic elements) |
| **Styling** | CSS3 (Flexbox, CSS Grid, CSS Variables, Media Queries) |
| **Interactivity** | Vanilla JavaScript (ES6+, Intersection Observer API, localStorage) |
| **Fonts** | Google Fonts (Inter, Poppins) |
| **Icons** | Font Awesome 6.7.2 |
| **Form Handling** | Formspree (AJAX via `@formspree/ajax`) |
| **Version Control** | Git & GitHub |
| **Hosting** | Vercel |

---

## Project Structure

```
mystuport/
├── index.html              # Homepage
├── about.html              # About Me page
├── projects.html           # Projects portfolio page
├── acad_planner.html       # Academic Planner page
├── contact.html            # Contact Me page
├── assets/
│   ├── styles.css          # External CSS stylesheet (all styles)
│   ├── jss.js              # JavaScript (all interactivity)
│   └── img/
│       ├── profile.webp            # Student profile photograph
│       ├── classattend-portal.png  # ClassAttend project screenshot
│       ├── dailydew.png            # DailyDew CBT project screenshot
│       ├── mamuzworldconsult.png   # MamuzWorld project screenshot
│       └── toluwalaseintdecor.png  # Toluwalase Interior project screenshot
└── README.md               # Project documentation
```

---

## Key JavaScript Features

### Interactive Task Planner
- **Add tasks** with a title and priority level (Low, Medium, High)
- **Mark tasks as completed** by clicking the checkbox (with visual strikethrough)
- **Delete tasks** permanently with the trash button
- **Filter tasks** by All, Pending, or Completed
- **Live statistics** showing total, pending, and completed counts
- **localStorage persistence** — tasks survive page refreshes and browser restarts
- **XSS protection** — user input is escaped before rendering

### Academic Calendar
- Monthly calendar with navigation (previous/next month)
- Colour-coded event dots for assignments, quizzes, projects, and examinations
- Today's date highlighted automatically
- Calendar legend for event types

### Scroll Animations
- Intersection Observer-based scroll reveal system
- Multiple animation types: `fade-up`, `fade-left`, `fade-right`, `zoom-in`, `fade-in`
- Staggered animation delays for grid children
- Respects `prefers-reduced-motion` for accessibility

### Dynamic Content
- Projects loaded from JavaScript array
- Certificates loaded dynamically
- Course cards generated from data
- Upcoming activities rendered dynamically
- Progress bars animate on scroll into view

### Formspree Integration
- AJAX form submission (no page reload)
- Success and error message display
- Field-level validation feedback
- Submit button disabled during submission

---

## CSS Architecture

- **CSS Variables** for consistent theming (`--primary`, `--secondary`, `--dark`, `--gray`, etc.)
- **External stylesheet** (`styles.css`) imported by all pages
- **Flexbox and CSS Grid** for all layouts
- **Responsive design** with media queries at `900px`, `768px`, and `500px` breakpoints
- **Hover transitions** on cards, buttons, and interactive elements
- **Scroll animations** via CSS transitions triggered by JavaScript

---

## Responsive Design

| Breakpoint | Target | Adjustments |
|------------|--------|-------------|
| `> 900px` | Desktop | Full multi-column layouts, 4-column footer |
| `≤ 900px` | Tablet | Footer collapses to 2 columns |
| `≤ 768px` | Small tablet | Single-column layouts, hamburger menu, stacked grids |
| `≤ 500px` | Mobile | Tighter spacing, smaller fonts, full-width buttons |

All 5 pages are fully responsive and tested across screen sizes.

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or package managers required

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/BroCode-glithch/mystuport.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd mystuport
   ```

3. **Open `index.html` in your browser**
   ```bash
   # On Windows
   start index.html

   # On macOS
   open index.html

   # On Linux
   xdg-open index.html
   ```

No server is required — the site runs entirely as static HTML files.

---

## How to Use the Academic Planner

1. Navigate to the **Academic Planner** page from the navigation menu
2. Scroll to the **My Academic Tasks** section
3. Type a task in the input field and select a priority level
4. Click **Add Task** (or press Enter) to add it to your list
5. Click the **circle checkbox** on any task to mark it as completed
6. Click the **trash icon** to delete a task
7. Use the **filter buttons** (All / Pending / Completed) to view specific tasks
8. Your tasks are saved automatically — they remain after you close the browser

---

## Contact Form

The contact form uses **Formspree** for email delivery:

1. Fill in your name, email, subject, and message
2. Click **Send Message**
3. The form submits via AJAX — no page reload
4. A success or error message appears below the form header

> **Note:** Replace the Formspree endpoint in `contact.html` with your own Formspree form ID to receive submissions.

---

## Author

**Emmanuel Ariyo Ogunfunwa**

- 🎓 Software Engineering Student, MIVA Open University (Jan 2026 Cohort)
- 💻 Founder, DailyDew Tech Innovations
- 📧 Email: [e.ogunfunwa1129@miva.edu.ng](mailto:e.ogunfunwa1129@miva.edu.ng)
- 🐙 GitHub: [BroCode-glithch](https://github.com/BroCode-glithch)
- 🌐 Website: [dailydewtech.com.ng](https://dailydewtech.com.ng)

---

## Academic Context

This project was developed as the **Practical Term Project** for:

> **COS 106 — Introduction to Web Technologies**  
> MIVA Open University  
> 20 Marks

### Requirements Demonstrated

| Requirement | Status |
|-------------|--------|
| Semantic HTML elements |  `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| Forms |  Contact form with validation |
| Tables |  Academic details grid |
| Images |  Profile photo, project screenshots |
| Hyperlinks |  Navigation, social links, project links |
| Lists |  Navigation, footer, skill tags |
| Multimedia |  Font Awesome icons, Google Fonts |
| External CSS stylesheet |  `assets/styles.css` |
| Responsive design |  Mobile-first with 3 breakpoints |
| Flexbox and CSS Grid |  Used throughout all layouts |
| Navigation styling |  Sticky navbar with mobile hamburger |
| Animations or transitions |  Scroll animations, hover effects, progress bars |
| Consistent colour scheme |  CSS custom properties |
| Mobile-friendly interface |  Tested across all screen sizes |
| Event handling |  Click, submit, scroll events |
| DOM manipulation |  Dynamic content rendering |
| Form validation |  HTML5 + Formspree validation |
| Dynamic content updates |  Projects, courses, certificates, calendar |
| Arrays and functions |  Data arrays, render functions, observers |
| Interactive task management |  Add, complete, delete, filter, persist |

---

## License

This project is for academic purposes. All rights reserved.

---

*Built with passion for technology and continuous learning.*
