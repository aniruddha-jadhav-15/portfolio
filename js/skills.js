import { skills } from "./data.js";

const skillsGrid = document.querySelector(".skills__grid");

if (!skillsGrid) {
  console.error("Skills grid not found");
}

function createCard(category, items) {
  const skillsCard = document.createElement("div");
  skillsCard.classList.add("skills_card");

  const skillsCategoryEl = document.createElement("h3");
  skillsCategoryEl.classList.add("skill__category");
  skillsCategoryEl.textContent = category;

  const skillsTagsContainer = document.createElement("div");
  skillsTagsContainer.classList.add("skill__tags");

  items.forEach((i) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("skill__tag");
    tagEl.textContent = i;
    skillsTagsContainer.append(tagEl);
  });

  skillsCard.append(skillsCategoryEl, skillsTagsContainer);
  return skillsCard;
}

const skillsCards = skills.map((card) => {
  return createCard(card.category, card.items);
});

skillsGrid.append(...skillsCards);
