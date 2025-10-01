const form = document.querySelector("#contact form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });
  
  if (response.ok) {
    status.innerHTML = "✅ Thank you! Your message has been sent.";
    status.classList.remove("error");
    status.classList.add("success");
  } else {
    status.innerHTML = "❌ Oops! There was a problem sending your message.";
    status.classList.remove("success");
    status.classList.add("error");
  }
}); // ✅ ini yang kurang

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100; // seberapa cepat muncul

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);