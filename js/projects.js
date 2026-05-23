import { projects } from "./data.js";

const projectsGrid = document.querySelector(".projects__grid");
if (!projectsGrid) {
  console.error("Projects grid not found");
}

function createCard(thumb, title, desc, tech, live, github) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("card");

  const thumbnailContainer = document.createElement("div");
  thumbnailContainer.classList.add("project__thumb");

  const projectImage = document.createElement("img");
  projectImage.src = thumb;
  thumbnailContainer.append(projectImage);

  let titleElement = document.createElement("h3");
  titleElement.classList.add("project__title");
  titleElement.textContent = title;

  let descriptionElement = document.createElement("p");
  descriptionElement.classList.add("project__desc");
  descriptionElement.textContent = desc;

  let linksContainer = document.createElement("div");
  linksContainer.classList.add("project__links");

  let liveAnchor = document.createElement("a");
  liveAnchor.textContent = "Live";
  liveAnchor.href = live;

  let githubAnchor = document.createElement("a");
  githubAnchor.textContent = "Github";
  githubAnchor.href = github;

  linksContainer.append(liveAnchor, githubAnchor);

  let tagsContainer = document.createElement("div");
  tagsContainer.classList.add("project__tags");

  tech.forEach((tag) => {
    let tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.textContent = tag;
    tagsContainer.append(tagElement);
  });

  projectCard.append(
    projectImage,
    titleElement,
    descriptionElement,
    tagsContainer,
    linksContainer,
  );

  return projectCard;
}

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
