import { skills } from "./data.js";

// Grid container
const skillsGrid = document.querySelector(".skills__grid");
if (!skillsGrid) console.error("Skills grid not found");

// Create single skill card
function createSkillCard(category, items) {
  // Card wrapper
  const card = document.createElement("div");
  card.classList.add("skills_card");

  // Category title
  const categoryEl = document.createElement("h3");
  categoryEl.classList.add("skill__category");
  categoryEl.textContent = category;

  // Tags container
  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("skill__tags");

  // Create tag for each skill
  items.forEach((item) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("skill__tag");
    tagEl.textContent = item;
    tagsContainer.append(tagEl);
  });

  // Assemble card
  card.append(categoryEl, tagsContainer);
  return card;
}

// Render all skill cards
const skillCards = skills.map((skill) =>
  createSkillCard(skill.category, skill.items),
);
skillsGrid.append(...skillCards);
