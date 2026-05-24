// ============================================
// DATA — Local data acting as API source
// ============================================

// Projects data
export const projects = [
  {
    id: 1,
    thumb: "./images/shopcart.png",
    projectTitle: "ShopCart",
    projectDesc:
      "Mini ecommerce app built with vanilla JavaScript. Features product listing, search, filtering, sorting and cart functionality.",
    techUsed: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aniruddha-jadhav-15/mini-ecommerce-app",
    live: "https://shopcart-store.netlify.app/",
  },
  {
    id: 2,
    thumb: "./images/githubfinder.png",
    projectTitle: "Github Finder",
    projectDesc:
      "GitHub user search app built with vanilla JavaScript. Fetches live data from GitHub API, displays user profile, repos, followers and following with error handling.",
    techUsed: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aniruddha-jadhav-15/github-user-finder",
    live: "https://github-user-finder-aniruddha.netlify.app/",
  },
  {
    id: 3,
    thumb: "./images/weatherapp.png",
    projectTitle: "Weather App",
    projectDesc:
      "Real-time weather app using OpenWeather API. Demonstrates API integration, dynamic data fetching and interactive frontend functionality.",
    techUsed: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/aniruddha-jadhav-15/frontend-mini-projects/tree/main/project-10-Weather-App",
    live: "https://aniruddha-jadhav-15.github.io/frontend-mini-projects/project-10-Weather-App/",
  },
  {
    id: 4,
    thumb: "./images/dashbord.png",
    projectTitle: "Product Search & Filter Dashboard",
    projectDesc:
      "Product dashboard built with vanilla JavaScript. Features real-time debounced search, category filtering, price sorting, loading states and error handling with retry.",
    techUsed: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aniruddha-jadhav-15/search-filter-dashboard",
    live: "https://product-filter-dashboard-app.netlify.app/",
  },
];

// Skills data
export const skills = [
  { id: 1, category: "Core", items: ["HTML5", "CSS3", "JavaScript"] },
  { id: 2, category: "Frontend", items: ["React", "Tailwind", "ES6+"] },
  { id: 3, category: "Tools", items: ["Git", "GitHub", "Netlify", "Vercel"] },
  { id: 4, category: "Concepts", items: ["REST API", "Responsive", "DOM"] },
];
