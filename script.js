const navLinks = document.querySelectorAll(".navbar a");
const content = document.getElementById("dynamic-content");

const sections = {
  about: `
    <h1>About Me</h1>
    <p>I'm a Creative Director and UI/UX Designer from Sydney, Australia.</p>
    <p>I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
  `,
  resume: `
    <h1>Resume</h1>
    <p>Here is my professional experience and education background.</p>
    <ul>
      <li>2020–2023: Frontend Developer at XYZ Company</li>
      <li>2018–2020: UI/UX Designer at ABC Studio</li>
    </ul>
  `,
  portfolio: `
    <h1>Portfolio</h1>
    <p>Some of my latest projects:</p>
    <div class="cards">
      <div class="card"><h3>Project A</h3><p>Web Design project for startup.</p></div>
      <div class="card"><h3>Project B</h3><p>E-commerce platform development.</p></div>
      <div class="card"><h3>Project C</h3><p>Personal portfolio website.</p></div>
    </div>
  `,
  blog: `
    <h1>Blog</h1>
    <p>Sharing my thoughts and tutorials about web development.</p>
    <ul>
      <li>📌 How to Build a Portfolio Website</li>
      <li>📌 Top 10 UI/UX Trends in 2025</li>
      <li>📌 Why Dark Mode is Here to Stay</li>
    </ul>
  `,
  contact: `
    <h1>Contact</h1>
    <p>Feel free to get in touch with me:</p>
    <p>📧 richard@example.com</p>
    <p>📞 +1 (321) 252-2796</p>
    <p>📍 Sydney, Australia</p>
  `,
};

// event listener
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // aktifkan link yg diklik
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // ambil section
    const section = link.dataset.section;

    // animasi fade out → ganti konten → fade in
    content.classList.add("hide");
    setTimeout(() => {
      content.innerHTML = sections[section];
      content.classList.remove("hide");
    }, 300);
  });
});
