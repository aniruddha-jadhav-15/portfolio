import { projects } from "./data.js";

// Grid container
const projectsGrid = document.querySelector(".projects__grid");
if (!projectsGrid) console.error("Projects grid not found");

// Create single project card
function createCard(thumb, title, desc, tech, live, github) {
  // Card wrapper
  const card = document.createElement("div");
  card.classList.add("card");

  // Thumbnail
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("project__thumb");
  const image = document.createElement("img");
  image.src = thumb;
  image.alt = title;
  thumbnail.append(image);

  // Title
  const titleEl = document.createElement("h3");
  titleEl.classList.add("project__title");
  titleEl.textContent = title;

  // Description
  const descEl = document.createElement("p");
  descEl.classList.add("project__desc");
  descEl.textContent = desc;

  // Tags
  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("project__tags");
  tech.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;
    tagsContainer.append(tagEl);
  });

  // Links
  const linksContainer = document.createElement("div");
  linksContainer.classList.add("project__links");
  const liveLink = document.createElement("a");
  liveLink.textContent = "Live";
  liveLink.href = live;
  liveLink.target = "_blank";
  liveLink.classList.add("live");
  const githubLink = document.createElement("a");
  githubLink.textContent = "Github";
  githubLink.href = github;
  githubLink.target = "_blank";
  githubLink.classList.add("github");
  linksContainer.append(liveLink, githubLink);

  // Assemble card
  card.append(thumbnail, titleEl, descEl, tagsContainer, linksContainer);
  return card;
}

// Render all project cards
const projectCards = projects.map((p) =>
  createCard(
    p.thumb,
    p.projectTitle,
    p.projectDesc,
    p.techUsed,
    p.live,
    p.github,
  ),
);
projectsGrid.append(...projectCards);
