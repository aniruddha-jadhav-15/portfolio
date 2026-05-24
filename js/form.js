const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  if (nameInput.value.trim() === "") {
    e.preventDefault();
    alert("Name required!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    e.preventDefault();
    alert("Valid email required!");
    return;
  }

  if (subjectInput.value.trim() === "") {
    e.preventDefault();
    alert("Subject required!");
    return;
  }

  if (messageInput.value.trim() === "") {
    e.preventDefault();
    alert("Message required!");
    return;
  }

  alert("Message sent successfully!");
});
