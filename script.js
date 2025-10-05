document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const content = document.getElementById("dynamic-content");

  // Ambil semua section tersembunyi
  const sections = document.querySelectorAll("main > section.hidden");

  // Fungsi untuk menampilkan konten berdasarkan id
  function loadSection(sectionId) {
    const target = document.querySelector(`#${sectionId}`);
    if (!target) return;

    // Animasi fade
    content.classList.add("hide");
    setTimeout(() => {
      content.innerHTML = target.innerHTML;
      content.classList.remove("hide");
      // aktifkan popup kalau section certificate
      if (sectionId === "certificate") {
        initImagePopup();
      }
    }, 300);
  }

  // Klik navigasi
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      const sectionId = link.getAttribute("data-section");
      loadSection(sectionId);
    });
  });

  // Default tampilkan about
  loadSection("about");

  // Fungsi popup gambar sertifikat
  function initImagePopup() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("popupImage");
    const closeBtn = document.querySelector(".close");
    const certImages = content.querySelectorAll(".certificate-img");

    certImages.forEach((img) => {
      img.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });

    closeBtn.addEventListener("click", () => (modal.style.display = "none"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto", // Mengatur jumlah slide yang terlihat secara otomatis
    spaceBetween: 5, // Jarak antar gambar
    loop: true, // Membuat pergerakan berulang
    freeMode: true, // Mengaktifkan mode pergeseran bebas
    autoplay: {
      delay: 1, // Geser setiap 1 milidetik (untuk efek super cepat)
      disableOnInteraction: false, // Lanjutkan autoplay setelah interaksi manual
    },
    speed: 5000, // Mengatur kecepatan transisi pergeseran
  });


  // popup logic
  function initImagePopup() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("popupImage");
    const closeBtn = document.querySelector(".close");

    const certImages = document.querySelectorAll(".certificate-img");

    certImages.forEach((img) => {
      img.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
        modalImg.src = this.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  
});
