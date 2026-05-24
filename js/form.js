// Form elements
const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

// Toaster elements
const toasterContainer = document.querySelector("#toaster");
const toasterMsg = document.querySelector(".toaster__msg");

// Form validation
form.addEventListener("submit", (e) => {
  if (nameInput.value.trim() === "") {
    e.preventDefault();
    showToaster("Name required!", "error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    e.preventDefault();
    showToaster("Valid email required!", "error");
    return;
  }

  if (subjectInput.value.trim() === "") {
    e.preventDefault();
    showToaster("Subject required!", "error");
    return;
  }

  if (messageInput.value.trim() === "") {
    e.preventDefault();
    showToaster("Message required!", "error");
    return;
  }

  showToaster("Message sent successfully!", "success");
});

// Show toaster notification
function showToaster(message, type) {
  toasterContainer.style.right = "0px";
  toasterMsg.textContent = message;
  toasterMsg.classList.add(`toaster--${type}`);

  setTimeout(() => {
    toasterContainer.style.right = "-300px";
    toasterMsg.classList.remove("toaster--success", "toaster--error");
  }, 3000);
}
