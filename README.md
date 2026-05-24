# Aniruddha Jadhav - Frontend Developer Portfolio

A modern, responsive portfolio website showcasing frontend development skills and projects.

## 🌐 Live Demo

[Visit Portfolio](https://aniruddha-jadhav-portfolio.netlify.app/)

## 📋 Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Dynamic Project Cards** - Projects rendered dynamically with JavaScript
- **Smooth Navigation** - Smooth scrolling with active link highlighting
- **Contact Form** - Email integration with Formspree
- **Dark Theme** - Modern dark UI with professional design
- **Mobile Menu** - Hamburger menu for mobile navigation

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Icons:** Font Awesome 6.5.0
- **Fonts:** Google Fonts (Syne, Inter)
- **Form:** Formspree for email submissions
- **Deployment:** Netlify

## 📁 Project Structure

portfolio/
├── index.html
├── css/
│ └── style.css
├── js/
│ ├── app.js # Main orchestrator
│ ├── data.js # Projects and skills data
│ ├── projects.js # Project rendering logic
│ ├── skills.js # Skills rendering logic
│ ├── nav.js # Navigation functionality
│ └── form.js # Form validation
├── images/
│ ├── profile.jpg
│ └── resume.pdf
└── README.md

## 🚀 Getting Started

### Prerequisites

- Node.js (optional, for local development)
- Modern web browser

### Installation

1. Clone the repository:

```bash
git clone https://github.com/aniruddha-jadhav-15/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser or use a local server:

```bash
python -m http.server 8000
# or
npx http-server
```

3. Visit `http://localhost:8000`

## 📱 Sections

### Hero

- Profile introduction
- CTA buttons (View Projects, Download CV)
- Social media links

### Projects

- 4 featured projects with descriptions
- Technology tags
- Live demo and GitHub links
- View All on GitHub button

### Skills

- 4 skill categories
- Organized by Core, Frontend, Tools, Concepts

### Contact

- Email contact form
- Integrated with Formspree
- Form validation

### Footer

- Copyright information
- Social links

## 🎨 Design System

**Colors:**

- Primary Background: `#000000`
- Secondary Background: `#111111`
- Text Primary: `#ffffff`
- Text Secondary: `#b3b3b3`
- Accent: `#adabac93`

**Typography:**

- Headings: Syne (700, 800 weights)
- Body: Inter (400, 500 weights)

## ✨ Key Features Explained

### Responsive Navigation

- Desktop: Horizontal pill-shaped navbar
- Mobile: Slide-in sidebar menu with overlay
- Active link highlighting on scroll

### Dynamic Content Rendering

- Projects and skills rendered from `data.js`
- Reusable card components
- Easy to update data without touching HTML

### Form Validation

- Email format validation
- Required field checking
- Formspree integration for email delivery

### Smooth Interactions

- Hover effects on cards and buttons
- Smooth scroll behavior
- Transition animations

## 🔧 Customization

### Update Projects

Edit `js/data.js` and add your projects:

```javascript
export const projects = [
  {
    id: 1,
    thumb: "./images/project.png",
    projectTitle: "Project Name",
    projectDesc: "Description",
    techUsed: ["HTML", "CSS", "JS"],
    github: "github-link",
    live: "live-link",
  },
];
```

### Update Skills

Edit `js/data.js` and modify skills array:

```javascript
export const skills = [
  {
    id: 1,
    category: "Category Name",
    items: ["Skill1", "Skill2", "Skill3"],
  },
];
```

### Update Contact Form

In `index.html`, replace Formspree ID in form action attribute.

## 📊 Performance

- Lightweight vanilla JavaScript
- CSS Grid and Flexbox for efficient layouts
- Optimized images
- Smooth 60fps animations

## 📈 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👤 Author

**Aniruddha Jadhav**

- GitHub: [@aniruddha-jadhav-15](https://github.com/aniruddha-jadhav-15)
- LinkedIn: [aniruddhapj15](https://linkedin.com/in/aniruddhapj15/)
- Twitter: [@aniruddha_JS](https://twitter.com/aniruddha_JS)

## 🤝 Contributing

Feel free to fork this project and create pull requests for any improvements.

## 💬 Feedback

Have suggestions? Feel free to reach out through the contact form on the portfolio or create an issue on GitHub.

---

**Made with ❤️ by Aniruddha Jadhav**
